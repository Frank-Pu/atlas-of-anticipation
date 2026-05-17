// CityPanel.jsx — detail view with country-specific typography & palette
const { useState: useStateCP, useEffect: useEffectCP } = React;

// ——— Decorative motifs per country (subtle background patterns) ———————
function Motif({ kind, color }) {
  const common = { position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08 };
  if (kind === 'seigaiha') {
    // Japanese wave pattern
    return (
      <svg style={common} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="seigaiha" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 20 A 20 20 0 0 1 40 20" fill="none" stroke={color} strokeWidth="1"/>
            <path d="M-20 20 A 20 20 0 0 1 20 20" fill="none" stroke={color} strokeWidth="1"/>
            <path d="M20 20 A 20 20 0 0 1 60 20" fill="none" stroke={color} strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#seigaiha)"/>
      </svg>
    );
  }
  if (kind === 'fleur') {
    return (
      <svg style={common} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="fleur" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke={color} strokeWidth="0.6">
              <circle cx="30" cy="30" r="10"/>
              <circle cx="30" cy="30" r="20"/>
              <path d="M30 10 L30 50 M10 30 L50 30 M15 15 L45 45 M15 45 L45 15"/>
            </g>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#fleur)"/>
      </svg>
    );
  }
  if (kind === 'zellige') {
    return (
      <svg style={common} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="zellige" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <g fill="none" stroke={color} strokeWidth="0.7">
              <polygon points="20,2 38,20 20,38 2,20"/>
              <polygon points="20,8 32,20 20,32 8,20"/>
              <path d="M0 0 L40 40 M40 0 L0 40"/>
            </g>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#zellige)"/>
      </svg>
    );
  }
  if (kind === 'palm') {
    return (
      <svg style={common} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="palm" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <g fill="none" stroke={color} strokeWidth="0.6">
              <path d="M40 80 Q40 50 40 20"/>
              <path d="M40 30 Q20 20 15 5 M40 30 Q60 20 65 5 M40 40 Q15 35 5 25 M40 40 Q65 35 75 25 M40 50 Q20 50 10 45 M40 50 Q60 50 70 45"/>
            </g>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#palm)"/>
      </svg>
    );
  }
  if (kind === 'aurora') {
    return (
      <svg style={common} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="aurora" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <g fill="none" stroke={color} strokeWidth="0.6">
              <path d="M0 50 Q25 20 50 50 T100 50"/>
              <path d="M0 70 Q25 40 50 70 T100 70"/>
              <path d="M0 30 Q25 0 50 30 T100 30"/>
            </g>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#aurora)"/>
      </svg>
    );
  }
  if (kind === 'lotus') {
    return (
      <svg style={common} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="lotus" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke={color} strokeWidth="0.7">
              <ellipse cx="30" cy="30" rx="6" ry="18" transform="rotate(0 30 30)"/>
              <ellipse cx="30" cy="30" rx="6" ry="18" transform="rotate(45 30 30)"/>
              <ellipse cx="30" cy="30" rx="6" ry="18" transform="rotate(90 30 30)"/>
              <ellipse cx="30" cy="30" rx="6" ry="18" transform="rotate(135 30 30)"/>
              <circle cx="30" cy="30" r="3" fill={color} opacity="0.6"/>
            </g>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#lotus)"/>
      </svg>
    );
  }
  return null;
}

// ——— Tab content renderer ————————————————————————————————————————
function TabList({ items, kind, palette, fonts, tt }) {
  return (
    <div className="tab-list">
      {items.map((it, i) => (
        <article key={i} className="tab-item"
          style={{ borderColor: palette.rule }}>
          <div className="item-main">
            <h3 style={{ fontFamily: fonts.display, color: palette.ink }}>
              {it.title || it.event}
            </h3>
            {it.author && (
              <div className="item-meta" style={{ fontFamily: fonts.caption, color: palette.muted }}>
                <span style={{ color: palette.accent }}>{it.author}</span>
                {it.year && <span>  ·  {it.year}</span>}
              </div>
            )}
            {it.artist && (
              <div className="item-meta" style={{ fontFamily: fonts.caption, color: palette.muted }}>
                <span style={{ color: palette.accent }}>{it.artist}</span>
                {it.year && <span>  ·  {it.year}</span>}
              </div>
            )}
            {it.director && (
              <div className="item-meta" style={{ fontFamily: fonts.caption, color: palette.muted }}>
                <span style={{ color: palette.accent }}>{tt.metaDirector ? tt.metaDirector + ' ' : ''}{it.director}</span>
                {it.year && <span>  ·  {it.year}</span>}
              </div>
            )}
            {kind === 'history' && (
              <div className="item-meta" style={{ fontFamily: fonts.caption, color: palette.accent }}>
                {it.year}
              </div>
            )}
            {it.note && (
              <p style={{ fontFamily: fonts.body, color: palette.ink }}>{it.note}</p>
            )}
            {kind === 'history' && it.event && !it.title && (
              <p style={{ fontFamily: fonts.body, color: palette.ink }}>{it.event}</p>
            )}
          </div>
          <div className="item-num" style={{ fontFamily: fonts.caption, color: palette.rule }}>
            {String(i + 1).padStart(2, '0')}
          </div>
        </article>
      ))}
    </div>
  );
}

// ——— Main panel ————————————————————————————————————————————————
function CityPanel({ city, onClose, lang }) {
  const [tab, setTab] = useStateCP('novels');
  const [visible, setVisible] = useStateCP(false);

  useEffectCP(() => {
    if (city) {
      setTab('novels');
      const t = setTimeout(() => setVisible(true), 30);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [city?.id]);

  if (!city) return null;
  const p = city.palette;
  // In CJK modes, override body & caption fonts so prose renders cleanly.
  const bodyOverride = window.langBodyFont(lang);
  const captionOverride = window.langCaptionFont(lang);
  const f = {
    display: city.fonts.display,
    body: bodyOverride || city.fonts.body,
    caption: captionOverride || city.fonts.caption
  };
  const tt = (window.I18N_UI && window.I18N_UI[lang]) || window.I18N_UI.en;

  // Resolve translated fields for this city.
  const tagline = window.cityField(city, 'tagline', lang);
  const country = window.cityField(city, 'country', lang);
  const countryLocal = window.cityField(city, 'countryLocal', lang);
  const novels  = window.cityItems(city, 'novels',  lang);
  const music   = window.cityItems(city, 'music',   lang);
  const film    = window.cityItems(city, 'film',    lang);
  const history = window.cityItems(city, 'history', lang);

  const tabs = [
    { id: 'novels',  label: tt.tabs.novels,  glyph: '❦', data: novels },
    { id: 'music',   label: tt.tabs.music,   glyph: '♪', data: music },
    { id: 'film',    label: tt.tabs.film,    glyph: '◉', data: film },
    { id: 'history', label: tt.tabs.history, glyph: '§', data: history }
  ];

  const activeTab = tabs.find(t => t.id === tab);
  const latLabel = city.lat >= 0 ? tt.coordsN : tt.coordsS;
  const lonLabel = city.lon >= 0 ? tt.coordsE : tt.coordsW;
  const isCJK = lang === 'zh-Hans' || lang === 'zh-Hant';

  return (
    <aside className={'city-panel' + (visible ? ' is-visible' : '')}
      style={{
        background: p.paper,
        color: p.ink,
        '--accent': p.accent,
        '--muted': p.muted,
        '--rule': p.rule
      }}>

      <Motif kind={city.motif} color={p.accent} />

      <button className="panel-close" onClick={onClose} aria-label="close"
        style={{ color: p.ink, borderColor: p.rule, fontFamily: f.caption }}>
        ✕
      </button>

      <header className="panel-header">
        <div className="country-label" style={{ fontFamily: f.caption, color: p.muted }}>
          <span style={{ color: p.accent }}>◆</span>
          <span>{country}</span>
          <span className="country-local" style={{ fontFamily: f.body }}>{countryLocal}</span>
        </div>
        <h1 className="city-name" style={{ fontFamily: f.display, color: p.ink }}>
          {city.name}
        </h1>
        <div className="city-local" style={{ fontFamily: f.display, color: p.accent }}>
          {city.nameLocal}
        </div>
        <p className="city-tagline" style={{ fontFamily: f.body, color: p.muted, borderColor: p.rule }}>
          <em>{tagline}</em>
        </p>
        <div className="coords" style={{ fontFamily: f.caption, color: p.muted }}>
          {isCJK
            ? <>{latLabel} {Math.abs(city.lat).toFixed(2)}°    {lonLabel} {Math.abs(city.lon).toFixed(2)}°</>
            : <>{Math.abs(city.lat).toFixed(2)}°{latLabel}    {Math.abs(city.lon).toFixed(2)}°{lonLabel}</>}
        </div>
      </header>

      <nav className="panel-tabs" style={{ borderColor: p.rule }}>
        {tabs.map(t => (
          <button key={t.id}
            onClick={() => setTab(t.id)}
            className={'tab-btn' + (tab === t.id ? ' is-active' : '')}
            style={{
              fontFamily: f.caption,
              color: tab === t.id ? p.accent : p.muted,
              borderColor: tab === t.id ? p.accent : 'transparent'
            }}>
            <span className="tab-glyph">{t.glyph}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>

      <div className="panel-body" key={tab + ':' + lang}>
        <TabList items={activeTab.data} kind={activeTab.id} palette={p} fonts={f} tt={tt} />
      </div>

      <footer className="panel-footer" style={{ borderColor: p.rule, fontFamily: f.caption, color: p.muted }}>
        <span>{tt.panelFooterLeft}</span>
        <span style={{ letterSpacing: '0.3em' }}>· · ·</span>
        <span>{city.name}</span>
      </footer>
    </aside>
  );
}

window.CityPanel = CityPanel;
