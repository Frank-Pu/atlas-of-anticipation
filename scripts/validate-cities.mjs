#!/usr/bin/env node
// Validate cities.js — runs in CI on every PR that touches city data.
//
// Checks:
//   1. cities.js loads & defines a non-empty window.CITIES array
//   2. every id is unique, lowercase, alphanumeric (no spaces, no hyphens)
//   3. required string fields are present and non-empty
//   4. lat/lon are numbers within valid ranges
//   5. palette has the 6 expected hex keys
//   6. fonts has the 3 expected keys
//   7. each of novels / music / film / history has ≥ 1 item with title+note (or year+event for history)
//   8. coordinates aren't duplicated (catches copy-paste errors)
//   9. cities-i18n.js loads and only references known city ids
//
// Exits non-zero with a tidy report on failure.

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ——— helpers ————————————————————————————————————————————————————
const errors = [];
const warnings = [];

function err(msg)  { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

function loadGlobalScript(path, globals = {}) {
  const code = readFileSync(resolve(ROOT, path), 'utf8');
  const ctx = vm.createContext({ window: globals, console });
  // Make `window.X = …` also reach the context root
  ctx.window = new Proxy(globals, {
    set(target, key, value) {
      target[key] = value;
      ctx[key] = value;
      return true;
    },
    get(target, key) { return target[key]; }
  });
  vm.runInContext(code, ctx, { filename: path });
  return ctx.window;
}

// ——— load cities.js —————————————————————————————————————————————
let win;
try {
  win = loadGlobalScript('cities.js');
} catch (e) {
  console.error('❌ cities.js failed to parse:\n' + e.message);
  process.exit(1);
}

if (!Array.isArray(win.CITIES) || win.CITIES.length === 0) {
  console.error('❌ cities.js did not define a non-empty window.CITIES array.');
  process.exit(1);
}

console.log(`Loaded ${win.CITIES.length} cities.\n`);

// ——— validate each city ————————————————————————————————————————
const REQUIRED_STRINGS  = ['id', 'name', 'nameLocal', 'country', 'countryLocal', 'tagline'];
const REQUIRED_PALETTE  = ['bg', 'paper', 'ink', 'accent', 'muted', 'rule'];
const REQUIRED_FONTS    = ['display', 'body', 'caption'];
const REQUIRED_ARRAYS   = ['novels', 'music', 'film', 'history'];

const idSeen = new Map();
const coordSeen = new Map();

const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const ID  = /^[a-z][a-z0-9]*$/;

for (const [i, c] of win.CITIES.entries()) {
  const tag = `cities[${i}] (${c?.id ?? '?'})`;

  if (!c || typeof c !== 'object') { err(`${tag}: not an object`); continue; }

  for (const k of REQUIRED_STRINGS) {
    if (typeof c[k] !== 'string' || !c[k].trim()) err(`${tag}: missing/empty string field "${k}"`);
  }

  if (typeof c.id === 'string') {
    if (!ID.test(c.id)) err(`${tag}: id "${c.id}" must be lowercase alphanumeric, starting with a letter (no spaces, hyphens, or underscores).`);
    if (idSeen.has(c.id)) err(`${tag}: id "${c.id}" already used by cities[${idSeen.get(c.id)}]`);
    else idSeen.set(c.id, i);
  }

  if (typeof c.lat !== 'number' || !isFinite(c.lat) || c.lat < -90 || c.lat > 90)
    err(`${tag}: lat must be a number in [-90, 90] (got ${JSON.stringify(c.lat)})`);
  if (typeof c.lon !== 'number' || !isFinite(c.lon) || c.lon < -180 || c.lon > 180)
    err(`${tag}: lon must be a number in [-180, 180] (got ${JSON.stringify(c.lon)})`);

  if (typeof c.lat === 'number' && typeof c.lon === 'number') {
    const key = `${c.lat.toFixed(3)},${c.lon.toFixed(3)}`;
    if (coordSeen.has(key)) warn(`${tag}: coordinates ${key} duplicate ${coordSeen.get(key)} (copy-paste check)`);
    else coordSeen.set(key, c.id);
  }

  if (typeof c.tagline === 'string') {
    const wc = c.tagline.trim().split(/\s+/).length;
    if (wc > 25) warn(`${tag}: tagline is ${wc} words — aim for ~7–12 (see CONTRIBUTING.md).`);
  }

  if (!c.palette || typeof c.palette !== 'object') err(`${tag}: missing palette object`);
  else {
    for (const k of REQUIRED_PALETTE) {
      if (typeof c.palette[k] !== 'string') err(`${tag}: palette.${k} missing or not a string`);
      else if (!HEX.test(c.palette[k])) err(`${tag}: palette.${k} "${c.palette[k]}" is not a valid hex color`);
    }
  }

  if (!c.fonts || typeof c.fonts !== 'object') err(`${tag}: missing fonts object`);
  else {
    for (const k of REQUIRED_FONTS) {
      if (typeof c.fonts[k] !== 'string' || !c.fonts[k].trim())
        err(`${tag}: fonts.${k} missing or empty`);
    }
  }

  for (const arrKey of REQUIRED_ARRAYS) {
    const arr = c[arrKey];
    if (!Array.isArray(arr) || arr.length === 0) {
      err(`${tag}: "${arrKey}" must be a non-empty array`);
      continue;
    }
    arr.forEach((item, j) => {
      if (!item || typeof item !== 'object') {
        err(`${tag}.${arrKey}[${j}]: not an object`); return;
      }
      if (arrKey === 'history') {
        if (typeof item.year !== 'string' && typeof item.year !== 'number')
          err(`${tag}.${arrKey}[${j}]: missing "year"`);
        if (typeof item.event !== 'string' || !item.event.trim())
          err(`${tag}.${arrKey}[${j}]: missing/empty "event"`);
      } else {
        if (typeof item.title !== 'string' || !item.title.trim())
          err(`${tag}.${arrKey}[${j}]: missing/empty "title"`);
        if (typeof item.note !== 'string' || !item.note.trim())
          err(`${tag}.${arrKey}[${j}]: missing/empty "note"`);
      }
    });
  }
}

// ——— validate cities-i18n.js refers only to known cities ————————
try {
  const i18nWin = loadGlobalScript('cities-i18n.js');
  if (i18nWin.CITIES_I18N && typeof i18nWin.CITIES_I18N === 'object') {
    const known = new Set(win.CITIES.map(c => c.id));
    for (const key of Object.keys(i18nWin.CITIES_I18N)) {
      if (!known.has(key)) warn(`cities-i18n.js: translation block for "${key}" but no city with that id`);
    }
  }
} catch (e) {
  warn(`cities-i18n.js failed to load (${e.message}) — translations not validated.`);
}

// ——— report —————————————————————————————————————————————————————
if (warnings.length) {
  console.log(`⚠️  ${warnings.length} warning${warnings.length === 1 ? '' : 's'}:`);
  for (const w of warnings) console.log('   • ' + w);
  console.log();
}

if (errors.length) {
  console.log(`❌ ${errors.length} error${errors.length === 1 ? '' : 's'}:`);
  for (const e of errors) console.log('   • ' + e);
  console.log('\nSee CONTRIBUTING.md for the expected data shape.');
  process.exit(1);
}

console.log(`✅ All ${win.CITIES.length} cities valid.`);
