# Contributing to Atlas of Anticipation

Welcome — and thank you for wanting to add a city, a film, a piece of music, or a fix.

This atlas grows by accretion, one careful entry at a time. **Quality > quantity.** Every line should feel like it was written by someone who actually knows the place. If you only have one good sentence, write only that one good sentence.

---

## Table of contents

- [Add a new city](#add-a-new-city)
- [Add an item to an existing city](#add-an-item-to-an-existing-city)
- [Translation contributions](#translation-contributions)
- [Style guide](#style-guide)
- [Pull request checklist](#pull-request-checklist)

---

## Add a new city

City data lives in [`cities.js`](cities.js) as a single `window.CITIES` array. Each entry is a JS object. Here's the **minimum viable city**:

```js
{
  id: 'lisbon',                      // unique slug, lowercase, no spaces
  name: 'Lisbon',                    // English/Latin display name
  nameLocal: 'Lisboa',               // Local-script name
  country: 'Portugal',
  countryLocal: 'Portugal',
  lat: 38.7223,
  lon: -9.1393,
  tagline: 'Seven hills and the slow ache of saudade.',
  palette: {
    bg:     '#efe9dc',
    paper:  '#f6f1e3',
    ink:    '#1d1a14',
    accent: '#d6661c',  // azulejo terracotta
    muted:  '#6a5e4a',
    rule:   '#d6c9ad'
  },
  fonts: {
    display: "'Lora', serif",
    body:    "'Lora', serif",
    caption: "'Work Sans', sans-serif"
  },
  motif: 'azulejo',                  // optional — free-text label
  novels: [
    { title: 'The Book of Disquiet', author: 'Fernando Pessoa', year: '1982 (posth.)',
      note: 'Lisbon as a city of clerks, balconies, and the unrest of being.' }
  ],
  music: [
    { title: 'Coimbra', artist: 'Amália Rodrigues', year: '1947',
      note: 'The voice of Portuguese fado — longing made melody.' }
  ],
  film: [
    { title: 'In the White City', director: 'Alain Tanner', year: '1983',
      note: 'A sailor disembarks and never quite leaves; the Tagus in slow light.' }
  ],
  history: [
    { year: '1755', event: 'The Great Lisbon Earthquake — re-plans the city and shakes the Enlightenment.' },
    { year: '1974', event: 'Carnation Revolution — soldiers carry flowers, dictatorship ends bloodlessly.' }
  ]
}
```

### Required fields

| Field | Type | Notes |
|---|---|---|
| `id` | string | unique slug; lowercase; no spaces (use `mexicocity`, not `mexico-city`) |
| `name` | string | display name in Latin script |
| `nameLocal` | string | name in the city's primary local script (can be same as `name`) |
| `country` | string | English country name |
| `countryLocal` | string | local-language country name |
| `lat`, `lon` | number | decimal degrees; lat in [-90, 90], lon in [-180, 180] |
| `tagline` | string | one evocative line — see [Style guide](#style-guide) |
| `palette` | object | 6 hex colors, see existing cities for the feel |
| `fonts` | object | `display` / `body` / `caption` — use Google Fonts already loaded in `index.html`, or add a new one |
| `novels`, `music`, `film`, `history` | arrays | at least **2 items each** for a new city |

### Optional but encouraged

- `motif` — a short label naming a visual pattern from the place (`seigaiha`, `fleur`, `arabesque`, `azulejo`, …). Used as a hint for future design work.
- Additional categories: `food`, `poetry`, `architecture` — add them and we'll roll out tab support in the panel.

### Adding fonts

If your city needs a script we don't already load (e.g. Hebrew, Thai), add the family to the `<link>` in `index.html` head. Keep total fonts under ~10 families to stay light.

---

## Add an item to an existing city

Just append to the relevant array. For example, to add a film to Kyoto:

```js
film: [
  // ... existing items
  { title: 'Spirited Away', director: 'Hayao Miyazaki', year: '2001',
    note: 'The bathhouse is everywhere a Japanese onsen has ever been.' }
]
```

Each item must have `title` and `note`. `author`/`director`/`artist` and `year` are encouraged.

---

## Translation contributions

Per-city localized strings live in [`cities-i18n.js`](cities-i18n.js). UI strings live in [`i18n.js`](i18n.js). Both follow the same shape:

```js
window.CITIES_I18N = {
  lisbon: {
    'zh-Hans': {
      tagline: '七座山丘与挥之不去的 saudade。',
      novels: [
        { note: '里斯本——抄写员、阳台与"存在本身"的不安。' }
      ]
      // ... only override the fields you translate; others fall back to English
    }
  }
};
```

You don't need to translate every field. **Partial translations are welcome** — the renderer falls back to the English field if a translation is missing.

For 繁體 (Traditional Chinese), if you don't want to translate by hand, the `ST_MAP` table in `cities-i18n.js` does a Simplified→Traditional pass automatically. You can just provide `zh-Hans` and let 繁體 derive.

---

## Style guide

### Tone

This is **not Wikipedia and not a travel blog**. Aim for:

- **Specific over generic.** "The Tagus in slow light" beats "the beautiful river."
- **One sentence is fine.** Don't pad.
- **Affection without sentimentality.** Show why this thing matters; don't tell the reader it does.
- **No marketing voice.** No "vibrant," "bustling," "must-see."
- **Avoid clichés** of the country (no "Land of the Rising Sun" for Japan).

### `tagline` — the single line under the city name

7–12 words. Should evoke the place's *feeling*, not its features. Compare:

| ❌ Don't | ✅ Do |
|---|---|
| "A famous city in Italy with great food." | "Seven hills of ochre and the ghost of empires." |
| "Tokyo is huge and modern." | "Neon over silence — a city that hums to itself." |

### `note` fields — the line under each book/film/song

One sentence. Tell the reader why *this* work belongs to *this* city.

| ❌ Don't | ✅ Do |
|---|---|
| "A famous novel." | "Written at the imperial court; often called the first novel." |
| "Great movie." | "Obsession and beauty, fictionalizing the 1950 arson of Kinkaku-ji." |

### `palette` — colors

Pick colors that **come from the place**, not generic web-safe values. Look at the city's traditional ceramics, textiles, light, food. A few examples already in the codebase:

- Kyoto vermilion (`#a32a1c`) — from Fushimi Inari's torii gates
- Marrakech terracotta — from the medina walls
- Havana cerulean — from peeling colonial paint
- Reykjavík slate — from basalt and storm clouds

### `history` — years

Pick **5 turning points max**, ideally fewer. Skip "founded in X" if it's just a date — every city was founded. Pick the events that *shaped what the city feels like today*.

---

## Pull request checklist

Before opening a PR:

- [ ] JS is valid — open `index.html` locally and confirm your city shows up and the panel renders
- [ ] No console errors
- [ ] `id` is unique and follows the naming convention (lowercase, no spaces)
- [ ] Lat/lon are correct — drop them into Google Maps and confirm
- [ ] No marketing voice; specific over generic
- [ ] If you added a new Google Font, you added it to `index.html` head
- [ ] You ran a spell-check on your `tagline` and `note` fields

### PR title format

```
Add city: Lisbon
Add film to Kyoto: Spirited Away
Fix typo in Paris tagline
zh-Hans translation: Marrakech
```

---

## Code of conduct

Be generous with feedback, especially to first-time contributors. If someone's prose isn't quite there yet, suggest a specific edit rather than rejecting it. The goal is more places, more voices — not gatekeeping.

If you spot content that romanticizes colonialism, flattens a culture into stereotype, or otherwise reads as condescending toward the place it's about — flag it. We'll fix it.

---

*Thank you for adding your corner of the world.*
