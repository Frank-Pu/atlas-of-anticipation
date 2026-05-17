// Globe.jsx — d3-geo based orthographic globe with city markers
const { useState, useEffect, useRef, useMemo } = React;

// ——— Globe palettes ————————————————————————————————————————————
// Each palette defines ocean / land / accent colors plus shading hints.
// `landHi` is an optional secondary land tone used to suggest topography
// via a slightly offset, lighter copy of the land path.
const GLOBE_PALETTES = {
  topo: {
    label: 'Topographic',
    oceanFill:  '#bcd6e6',
    oceanRim:   '#7ea2b8',
    land:       '#b7c684',
    landHi:     '#d4dca1',   // highlands tint
    landStroke: '#637036',
    grat:       'rgba(40,60,40,0.10)',
    sphereEdge: 'rgba(40,55,70,0.50)',
    shineStart: 'rgba(255,255,255,0.45)',
    shineEnd:   'rgba(255,255,255,0)',
    shadowEnd:  'rgba(20,30,40,0.22)',
    markerRing: '#faf6ee',
    markerCore: '#faf6ee',
    texture:    true,
  },
  atlas: {
    label: 'Atlas Blue',
    oceanFill:  '#d4e3ee',
    oceanRim:   '#9bb4c6',
    land:       '#a9c19a',
    landHi:     null,
    landStroke: '#5b7250',
    grat:       'rgba(40,60,80,0.10)',
    sphereEdge: 'rgba(40,60,80,0.45)',
    shineStart: 'rgba(255,255,255,0.50)',
    shineEnd:   'rgba(255,255,255,0)',
    shadowEnd:  'rgba(20,40,60,0.20)',
    markerRing: '#faf6ee',
    markerCore: '#faf6ee',
    texture:    false,
  },
  verdant: {
    label: 'Verdant',
    oceanFill:  '#a6c8d0',
    oceanRim:   '#5c8893',
    land:       '#7fa86a',
    landHi:     '#a8c388',
    landStroke: '#3e5a32',
    grat:       'rgba(30,55,40,0.12)',
    sphereEdge: 'rgba(30,55,40,0.55)',
    shineStart: 'rgba(255,255,255,0.40)',
    shineEnd:   'rgba(255,255,255,0)',
    shadowEnd:  'rgba(15,30,20,0.25)',
    markerRing: '#fbfaf2',
    markerCore: '#fbfaf2',
    texture:    true,
  },
  mono: {
    label: 'Mono Ink',
    oceanFill:  '#efeadb',
    oceanRim:   '#b8b09c',
    land:       '#2c2820',
    landHi:     null,
    landStroke: '#1a1814',
    grat:       'rgba(40,30,20,0.10)',
    sphereEdge: 'rgba(30,25,18,0.55)',
    shineStart: 'rgba(255,255,255,0.30)',
    shineEnd:   'rgba(255,255,255,0)',
    shadowEnd:  'rgba(20,15,10,0.18)',
    markerRing: '#efeadb',
    markerCore: '#efeadb',
    texture:    false,
  },
  linen: {
    label: 'Linen',
    oceanFill:  '#f5ecd6',
    oceanRim:   '#c8b486',
    land:       '#a67a3e',
    landHi:     '#c89e62',
    landStroke: '#5a3f1c',
    grat:       'rgba(70,55,35,0.10)',
    sphereEdge: 'rgba(60,40,20,0.45)',
    shineStart: 'rgba(255,250,225,0.60)',
    shineEnd:   'rgba(255,250,225,0)',
    shadowEnd:  'rgba(40,30,15,0.22)',
    markerRing: '#faf6ee',
    markerCore: '#faf6ee',
    texture:    false,
  },
  dusk: {
    label: 'Dusk',
    oceanFill:  '#1a2230',
    oceanRim:   '#3a4658',
    land:       '#c89e62',
    landHi:     '#e0b87a',
    landStroke: '#6a4a28',
    grat:       'rgba(255,240,210,0.08)',
    sphereEdge: 'rgba(255,240,210,0.45)',
    shineStart: 'rgba(255,245,220,0.18)',
    shineEnd:   'rgba(255,245,220,0)',
    shadowEnd:  'rgba(0,0,0,0.40)',
    markerRing: '#1a2230',
    markerCore: '#f0ead8',
    texture:    false,
  },
};

function Globe({ cities, activeCity, onSelect, targetLon, targetLat, autoRotate, globeTheme }) {
  const SIZE = 720;
  const R = 285;
  const CX = SIZE / 2;
  const CY = SIZE / 2;

  // State
  const [yaw, setYaw] = useState(-10);
  const [pitch, setPitch] = useState(-18);
  const [hover, setHover] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [geoReady, setGeoReady] = useState(0);
  const [animKick, setAnimKick] = useState(0);

  // Refs
  const dragRef = useRef(null);
  const lastInteractRef = useRef(Date.now());
  const animRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const h = () => setGeoReady(n => n + 1);
    window.addEventListener('land-data-loaded', h);
    return () => window.removeEventListener('land-data-loaded', h);
  }, []);

  const projection = useMemo(() => {
    if (!window.d3) return null;
    return window.d3.geoOrthographic()
      .scale(R)
      .translate([CX, CY])
      .clipAngle(90)
      .rotate([yaw, pitch, 0]);
  }, [yaw, pitch]);

  const pathGen = useMemo(() => {
    if (!projection || !window.d3) return null;
    return window.d3.geoPath(projection);
  }, [projection]);

  const landPath = useMemo(() => {
    if (!pathGen || !window.LAND_GEOJSON) return '';
    return pathGen(window.LAND_GEOJSON) || '';
  }, [pathGen, geoReady]);

  const graticulePath = useMemo(() => {
    if (!pathGen || !window.d3) return '';
    const g = window.d3.geoGraticule().step([30, 30]);
    return pathGen(g()) || '';
  }, [pathGen]);

  // ——— Animation loop ————————————————————————————————————————
  useEffect(() => {
    let raf;
    const tick = () => {
      let needNext = false;
      if (animRef.current) {
        const a = animRef.current;
        const t = Math.min(1, (performance.now() - a.start) / a.duration);
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        setYaw(a.fromYaw + (a.toYaw - a.fromYaw) * e);
        setPitch(a.fromPitch + (a.toPitch - a.fromPitch) * e);
        if (t >= 1) animRef.current = null;
        else needNext = true;
      } else if (autoRotate && !dragging && Date.now() - lastInteractRef.current > 2500) {
        setYaw(y => y - 0.08);
        needNext = true;
      }
      if (needNext) raf = requestAnimationFrame(tick);
      else rafRef.current = null;
    };
    if (animRef.current || autoRotate) {
      raf = requestAnimationFrame(tick);
      rafRef.current = raf;
    }
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [dragging, autoRotate, animKick]);

  useEffect(() => {
    if (targetLon == null || targetLat == null) return;
    const toYaw = -targetLon;
    const curYaw = yaw;
    let delta = ((toYaw - curYaw + 540) % 360) - 180;
    const animYaw = curYaw + delta;
    const toPitch = Math.max(-60, Math.min(60, -targetLat));
    animRef.current = {
      fromYaw: curYaw,
      fromPitch: pitch,
      toYaw: animYaw,
      toPitch,
      start: performance.now(),
      duration: 1400
    };
    lastInteractRef.current = Date.now() + 5000;
    setAnimKick(k => k + 1);
  }, [targetLon, targetLat]);

  // ——— Drag handlers ————————————————————————————————————————————
  const onPointerDown = (e) => {
    setDragging(true);
    dragRef.current = { x: e.clientX, y: e.clientY, yaw, pitch };
    lastInteractRef.current = Date.now();
    animRef.current = null;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    setYaw(dragRef.current.yaw + dx * 0.35);
    setPitch(Math.max(-80, Math.min(80, dragRef.current.pitch - dy * 0.35)));
    lastInteractRef.current = Date.now();
  };
  const onPointerUp = () => {
    setDragging(false);
    dragRef.current = null;
    lastInteractRef.current = Date.now();
  };

  // ——— Project markers with explicit hemisphere visibility check ————————
  // d3.geoOrthographic.clipAngle(90) reliably clips path geometry, but raw
  // projection() calls can still return on-screen coordinates for back-of-globe
  // points. We compute the angular distance from each city to the view center
  // and only keep points strictly on the front hemisphere.
  const projectedCities = useMemo(() => {
    if (!projection || !window.d3) return cities.map(c => ({ ...c, _visible: false }));
    const toRad = Math.PI / 180;
    // d3 rotate=[yaw, pitch, 0] places geographic point (-yaw, -pitch) at the
    // visual center, so that's our view direction.
    const cLat = -pitch * toRad;
    const cLon = -yaw   * toRad;
    const sinC = Math.sin(cLat), cosC = Math.cos(cLat);
    return cities.map(c => {
      const lat = c.lat * toRad;
      const lon = c.lon * toRad;
      // cosine of angular distance via spherical law of cosines
      const cosD = sinC * Math.sin(lat) + cosC * Math.cos(lat) * Math.cos(lon - cLon);
      // 0.04 ≈ ~13° of edge buffer so points right on the limb don't flicker
      if (cosD <= 0.04) return { ...c, _visible: false };
      const pt = projection([c.lon, c.lat]);
      if (!pt) return { ...c, _visible: false };
      return { ...c, _x: pt[0], _y: pt[1], _visible: true, _depth: cosD };
    });
  }, [projection, cities, yaw, pitch]);

  // Palette resolution
  const palette = GLOBE_PALETTES[globeTheme] || GLOBE_PALETTES.topo;

  // Unique filter ID per theme so SVG filter cache stays clean
  const noiseId = `globe-noise-${globeTheme || 'topo'}`;

  return (
    <div className="globe-wrap" style={{ cursor: dragging ? 'grabbing' : 'grab' }}>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ width: '100%', height: '100%', userSelect: 'none', touchAction: 'none' }}
      >
        <defs>
          <radialGradient id="globe-shine" cx="32%" cy="28%" r="55%">
            <stop offset="0%"  stopColor={palette.shineStart} />
            <stop offset="100%" stopColor={palette.shineEnd} />
          </radialGradient>
          <radialGradient id="globe-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="65%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor={palette.shadowEnd} />
          </radialGradient>
          <filter id="globe-halo-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <clipPath id="globe-disc-clip">
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
          {/* Subtle fractal-noise texture overlay — only used by topographic themes */}
          <filter id={noiseId} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="2.6" numOctaves="2" seed="4" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          </filter>
        </defs>

        {/* Atmospheric halo */}
        <circle cx={CX} cy={CY} r={R + 24} fill={palette.sphereEdge} opacity="0.10" filter="url(#globe-halo-blur)" />

        {/* Ocean */}
        <circle cx={CX} cy={CY} r={R} fill={palette.oceanFill} />

        {/* Graticule */}
        <g clipPath="url(#globe-disc-clip)" stroke={palette.grat} strokeWidth="0.7" fill="none">
          {graticulePath && <path d={graticulePath} />}
        </g>

        {/* Land — for topographic themes we paint a soft highland tint
            offset slightly NW of the base land for a subtle relief effect */}
        <g clipPath="url(#globe-disc-clip)">
          {landPath && palette.landHi && (
            <path d={landPath}
              fill={palette.landHi}
              transform="translate(-1.2,-1.2)"
              opacity="0.85"
              stroke="none" />
          )}
          {landPath && (
            <path d={landPath}
              fill={palette.land}
              stroke={palette.landStroke}
              strokeWidth="0.6"
              strokeLinejoin="round" />
          )}
          {/* Noise overlay for topographic-style palettes */}
          {landPath && palette.texture && (
            <g style={{ mixBlendMode: 'multiply', opacity: 0.4 }}>
              <path d={landPath} fill="rgba(60,80,40,0.6)" filter={`url(#${noiseId})`} stroke="none" />
            </g>
          )}
        </g>

        {/* Shine highlight */}
        <circle cx={CX} cy={CY} r={R} fill="url(#globe-shine)" pointerEvents="none" />

        {/* Limb shadow */}
        <circle cx={CX} cy={CY} r={R} fill="url(#globe-shadow)" pointerEvents="none" />

        {/* Disc edge */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke={palette.sphereEdge} strokeWidth="1.2" />

        {/* Markers */}
        <g>
          {projectedCities.map(c => {
            if (!c._visible) return null;
            const isActive = activeCity === c.id;
            const isHover = hover === c.id;
            // Fade markers near the limb so they melt into the horizon
            const limbFade = Math.min(1, c._depth * 4.5);
            return (
              <g
                key={c.id}
                transform={`translate(${c._x.toFixed(1)} ${c._y.toFixed(1)})`}
                style={{ cursor: 'pointer', opacity: limbFade }}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); onSelect(c.id); }}
                onMouseEnter={() => setHover(c.id)}
                onMouseLeave={() => setHover(null)}
              >
                <circle r={isActive ? 16 : 11} fill={c.palette.accent} opacity="0.18">
                  <animate attributeName="r"
                    values={isActive ? '14;22;14' : '9;14;9'}
                    dur="2.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity"
                    values="0.28;0.05;0.28" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle r="5" fill={c.palette.accent} stroke={palette.markerRing} strokeWidth="1.4" />
                <circle r="1.6" fill={palette.markerCore} />
                {(isHover || isActive) && (
                  <g transform="translate(10, -10)">
                    <rect x="-2" y="-14" rx="3" ry="3" width={c.name.length * 8 + 14} height="20"
                      fill="rgba(26,22,19,0.88)" />
                    <text x="5" y="1" fill="#faf6ee" fontSize="12"
                      style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}>
                      {c.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

window.Globe = Globe;
window.GLOBE_PALETTES = GLOBE_PALETTES;
