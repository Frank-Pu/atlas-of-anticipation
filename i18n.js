// UI chrome translations + helpers.
// Supported langs: 'en' | 'zh-Hans' | 'zh-Hant'

window.I18N_UI = {
  en: {
    brand: 'Atlas & Anticipation',
    brandSub: 'est. MMXXVI',
    eyebrow: 'Before you arrive',
    heroTitle: ['Read the city ', 'before', ' you walk it.'], // middle piece italic+accent
    heroP1: 'A small study in anticipation: cities across every continent, each with the novels, songs, films and histories that will tune your ear before you land.',
    heroP2: 'Spin the globe. Choose a mark. Arrive, already listening.',
    hint: 'Drag to rotate  ·  Click a pin',
    indexTitle: 'The Index',
    indexSub: '',
    colophonLeft: 'An atlas for the slow traveler',
    colophonMid: 'Spin. Arrive. Listen.',
    colophonRight: 'No. I / MMXXVI',
    tabs: { novels: 'Novels', music: 'Music', film: 'Film', history: 'History' },
    panelFooterLeft: "A traveler's pre-reading",
    coordsN: 'N', coordsS: 'S', coordsE: 'E', coordsW: 'W',
    langName: 'EN',
    tweaks: 'Tweaks',
    tweakPaperTone: 'Paper tone',
    tweakAutoRotate: 'Auto-rotate',
    paperWarm: 'Warm', paperCool: 'Cool', paperDusk: 'Dusk',
    metaAuthor: '', metaArtist: '', metaDirector: 'dir.',
  },
  'zh-Hans': {
    brand: '城邦与远方',
    brandSub: '丙午年 · 二零二六',
    eyebrow: '在抵达之前',
    heroTitle: ['走进一座城之前，', '先读懂', '它。'],
    heroP1: '一份给旅人的预习：覆盖各大洲的城市，每一座都附上将为你调音的小说、歌曲、电影与历史——让你尚未落地，已在聆听。',
    heroP2: '转动地球。选一处标记。抵达时，世界已在耳畔。',
    hint: '拖动旋转  ·  点击标记',
    indexTitle: '城市索引',
    indexSub: '',
    colophonLeft: '一份慢旅人的地图集',
    colophonMid: '旋转。抵达。聆听。',
    colophonRight: '第一卷 / 二零二六',
    tabs: { novels: '小说', music: '音乐', film: '电影', history: '历史' },
    panelFooterLeft: '旅人的行前阅读',
    coordsN: '北纬', coordsS: '南纬', coordsE: '东经', coordsW: '西经',
    langName: '简',
    tweaks: '微调',
    tweakPaperTone: '纸张色调',
    tweakAutoRotate: '自动旋转',
    paperWarm: '暖', paperCool: '冷', paperDusk: '暮',
    metaAuthor: '', metaArtist: '', metaDirector: '导演',
  },
  'zh-Hant': {
    brand: '城邦與遠方',
    brandSub: '丙午年 · 二〇二六',
    eyebrow: '在抵達之前',
    heroTitle: ['走進一座城之前，', '先讀懂', '它。'],
    heroP1: '一份給旅人的預習：覆蓋各大洲的城市，每一座都附上將為你調音的小說、歌曲、電影與歷史——讓你尚未落地，已在聆聽。',
    heroP2: '轉動地球。選一處標記。抵達時，世界已在耳畔。',
    hint: '拖曳旋轉  ·  點擊標記',
    indexTitle: '城市索引',
    indexSub: '',
    colophonLeft: '一份慢旅人的地圖集',
    colophonMid: '旋轉。抵達。聆聽。',
    colophonRight: '第一卷 / 二〇二六',
    tabs: { novels: '小說', music: '音樂', film: '電影', history: '歷史' },
    panelFooterLeft: '旅人的行前閱讀',
    coordsN: '北緯', coordsS: '南緯', coordsE: '東經', coordsW: '西經',
    langName: '繁',
    tweaks: '微調',
    tweakPaperTone: '紙張色調',
    tweakAutoRotate: '自動旋轉',
    paperWarm: '暖', paperCool: '冷', paperDusk: '暮',
    metaAuthor: '', metaArtist: '', metaDirector: '導演',
  }
};

// Pull a translated city field. Falls back to the city's own field if no translation exists.
window.cityField = function(city, field, lang) {
  if (lang && lang !== 'en') {
    const tr = window.CITY_I18N && window.CITY_I18N[city.id] && window.CITY_I18N[city.id][lang];
    if (tr && tr[field] != null) return tr[field];
  }
  return city[field];
};

// For arrays of items (novels/music/film/history), merge translated overrides with originals.
// Translated entry at index i overrides any provided fields; missing fields fall back to original.
window.cityItems = function(city, field, lang) {
  const base = city[field] || [];
  if (!lang || lang === 'en') return base;
  const tr = window.CITY_I18N && window.CITY_I18N[city.id] && window.CITY_I18N[city.id][lang];
  if (!tr || !tr[field]) return base;
  const over = tr[field];
  return base.map((item, i) => ({ ...item, ...(over[i] || {}) }));
};

// In Chinese modes, force the BODY font of any city panel to a Chinese serif so the
// translated prose renders cleanly. Display font (the city name) keeps its country DNA.
window.langBodyFont = function(lang) {
  if (lang === 'zh-Hans') return "'Noto Serif SC', 'Source Han Serif SC', serif";
  if (lang === 'zh-Hant') return "'Noto Serif TC', 'Source Han Serif TC', serif";
  return null;
};
window.langCaptionFont = function(lang) {
  if (lang === 'zh-Hans') return "'Noto Sans SC', sans-serif";
  if (lang === 'zh-Hant') return "'Noto Sans TC', sans-serif";
  return null;
};
