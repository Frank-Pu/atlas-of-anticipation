// City data — lat/lon + cultural content per city
window.CITIES = [
  {
    id: 'kyoto',
    name: 'Kyoto',
    nameLocal: '京都',
    country: 'Japan',
    countryLocal: '日本',
    lat: 35.0116,
    lon: 135.7681,
    tagline: 'A thousand temples in the hush of moss.',
    palette: {
      bg: '#f3ece0',
      paper: '#faf6ee',
      ink: '#1a1613',
      accent: '#a32a1c', // vermilion
      muted: '#6b5d4f',
      rule: '#d9cdb8'
    },
    fonts: {
      display: "'Shippori Mincho', 'Noto Serif JP', serif",
      body: "'Noto Serif JP', 'Shippori Mincho', serif",
      caption: "'Noto Sans JP', sans-serif"
    },
    motif: 'seigaiha', // waves
    novels: [
      { title: 'The Tale of Genji', author: 'Murasaki Shikibu', year: '~1010', note: 'Written at the imperial court; often called the first novel. Set in the Heian capital.' },
      { title: 'The Old Capital', author: 'Yasunari Kawabata', year: '1962', note: 'Twin sisters, silk weavers, cherry blossoms — a melancholy love letter to Kyoto.' },
      { title: 'The Temple of the Golden Pavilion', author: 'Yukio Mishima', year: '1956', note: 'Obsession and beauty, fictionalizing the 1950 arson of Kinkaku-ji.' }
    ],
    music: [
      { title: 'Gagaku court music', artist: 'Imperial ensemble', year: '8th c.–', note: 'The oldest continuously performed orchestral music in the world.' },
      { title: 'Kojo no Tsuki', artist: 'Rentarō Taki', year: '1901', note: '“Moon over the ruined castle” — a melody that feels like Kyoto at dusk.' },
      { title: 'Music for 18 Musicians (live at Kyoto)', artist: 'Steve Reich', year: '1976', note: 'Western minimalism meeting temple acoustics.' }
    ],
    film: [
      { title: 'Rashomon', director: 'Akira Kurosawa', year: '1950', note: 'Set in the crumbling Rashōmon gate south of the old capital.' },
      { title: 'Lost in Translation (Kyoto scenes)', director: 'Sofia Coppola', year: '2003', note: 'The shrine walks that became every traveler’s fantasy.' },
      { title: 'Memoirs of a Geisha', director: 'Rob Marshall', year: '2005', note: 'Gion’s lantern-lit alleys in golden-hour bloom.' }
    ],
    history: [
      { year: '794', event: 'Founded as Heian-kyō, capital for over a millennium.' },
      { year: '1336', event: 'Ashikaga shogunate — the Muromachi cultural flowering: Noh, tea, ink painting.' },
      { year: '1467', event: 'Ōnin War devastates the city; the aesthetic of wabi emerges from ruin.' },
      { year: '1868', event: 'Emperor moves to Tokyo; Kyoto preserves its role as cultural heart.' },
      { year: '1945', event: 'Spared from atomic bombing by Secretary Stimson’s personal intervention.' }
    ]
  },
  {
    id: 'paris',
    name: 'Paris',
    nameLocal: 'Paris',
    country: 'France',
    countryLocal: 'France',
    lat: 48.8566,
    lon: 2.3522,
    tagline: 'A moveable feast of light and limestone.',
    palette: {
      bg: '#eae4da',
      paper: '#f5f0e6',
      ink: '#1b2238',
      accent: '#7a1f2b', // oxblood
      muted: '#5a6170',
      rule: '#c9c1b3'
    },
    fonts: {
      display: "'Playfair Display', serif",
      body: "'Cormorant Garamond', serif",
      caption: "'Work Sans', sans-serif"
    },
    motif: 'fleur',
    novels: [
      { title: 'Les Misérables', author: 'Victor Hugo', year: '1862', note: 'The barricades of 1832 — Paris as a character in revolt.' },
      { title: 'À la recherche du temps perdu', author: 'Marcel Proust', year: '1913', note: 'The Faubourg Saint-Germain, memory, the shape of an afternoon.' },
      { title: 'Bonjour Tristesse', author: 'Françoise Sagan', year: '1954', note: 'Eighteen years old and already bored of the Riviera.' }
    ],
    music: [
      { title: 'Gymnopédies', artist: 'Erik Satie', year: '1888', note: 'Written above a Montmartre café; the sound of slow Paris rain.' },
      { title: 'La Vie en rose', artist: 'Édith Piaf', year: '1947', note: 'Every accordion since has been a footnote.' },
      { title: 'Homework', artist: 'Daft Punk', year: '1997', note: 'The city’s electronic pulse; Versailles suburbs, filtered disco.' }
    ],
    film: [
      { title: 'Les 400 coups', director: 'François Truffaut', year: '1959', note: 'Antoine Doinel running through the streets — the Nouvelle Vague is born.' },
      { title: 'Amélie', director: 'Jean-Pierre Jeunet', year: '2001', note: 'A candy-colored Montmartre that locals pretend to resent.' },
      { title: 'Before Sunset', director: 'Richard Linklater', year: '2004', note: 'Shakespeare & Company to a courtyard on Rue de l’Hôtel de Ville.' }
    ],
    history: [
      { year: '52 BCE', event: 'Roman Lutetia founded on the Île de la Cité.' },
      { year: '1163', event: 'Notre-Dame begun; Gothic Paris rises.' },
      { year: '1789', event: 'Storming of the Bastille — the Revolution remakes Europe.' },
      { year: '1853', event: 'Haussmann’s boulevards carve the modern city from medieval lanes.' },
      { year: '1968', event: 'Mai 68 — students, workers, and a month that shook the Fifth Republic.' }
    ]
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    nameLocal: 'مراكش',
    country: 'Morocco',
    countryLocal: 'المغرب',
    lat: 31.6295,
    lon: -7.9811,
    tagline: 'The red city at the foot of the Atlas.',
    palette: {
      bg: '#efdccb',
      paper: '#f7e8d4',
      ink: '#2a1a10',
      accent: '#b8441f', // terracotta
      muted: '#8b6b4a',
      rule: '#d9b48a'
    },
    fonts: {
      display: "'Amiri', serif",
      body: "'Tajawal', 'Amiri', sans-serif",
      caption: "'Tajawal', sans-serif"
    },
    motif: 'zellige',
    novels: [
      { title: 'The Sheltering Sky', author: 'Paul Bowles', year: '1949', note: 'Americans undone by the Sahara; the desert as an annihilating mirror.' },
      { title: 'For Bread Alone', author: 'Mohamed Choukri', year: '1973', note: 'A Moroccan childhood of hunger, translated by Paul Bowles himself.' },
      { title: 'Leo Africanus', author: 'Amin Maalouf', year: '1986', note: 'A 16th-century traveler between Granada, Fez, and the courts of Rome.' }
    ],
    music: [
      { title: 'Gnawa trance music', artist: 'Maâlem masters', year: 'ancient', note: 'Sub-Saharan roots, iron krakebs, all-night lila ceremonies.' },
      { title: 'Andalusian Nuba', artist: 'Orchestre de Fès', year: 'medieval', note: 'Courtly music inherited from Moorish Spain.' },
      { title: 'Marhaba', artist: 'Nass El Ghiwane', year: '1970s', note: 'The band Scorsese called the Rolling Stones of Africa.' }
    ],
    film: [
      { title: 'The Man Who Knew Too Much', director: 'Alfred Hitchcock', year: '1956', note: 'Doris Day and Jimmy Stewart in the souks.' },
      { title: 'Hideous Kinky', director: 'Gillies MacKinnon', year: '1998', note: 'A 1970s hippie mother drags her daughters through the medina.' },
      { title: 'Marock', director: 'Laïla Marrakchi', year: '2005', note: 'Moroccan youth across religious lines in contemporary Casablanca.' }
    ],
    history: [
      { year: '1070', event: 'Founded by the Almoravids as a Saharan caravan capital.' },
      { year: '1147', event: 'Almohads take the city; the Koutoubia minaret rises.' },
      { year: '1269', event: 'Marinids shift power north to Fez; Marrakech enters a long quiet.' },
      { year: '1912', event: 'French Protectorate begins; the Ville Nouvelle is laid out beyond the walls.' },
      { year: '1956', event: 'Moroccan independence; the medina, untouched, becomes a UNESCO site in 1985.' }
    ]
  },
  {
    id: 'havana',
    name: 'Havana',
    nameLocal: 'La Habana',
    country: 'Cuba',
    countryLocal: 'Cuba',
    lat: 23.1136,
    lon: -82.3666,
    tagline: 'Salt air, slow time, and a trumpet three blocks away.',
    palette: {
      bg: '#e4dfd2',
      paper: '#f3ecd8',
      ink: '#1a2e3a',
      accent: '#d66a3b', // coral
      muted: '#4d7a82',
      rule: '#cbb98a'
    },
    fonts: {
      display: "'Abril Fatface', serif",
      body: "'Lora', serif",
      caption: "'Bebas Neue', sans-serif"
    },
    motif: 'palm',
    novels: [
      { title: 'The Old Man and the Sea', author: 'Ernest Hemingway', year: '1952', note: 'Written at Finca Vigía; Santiago rows out from Cojímar, just east of the city.' },
      { title: 'Three Trapped Tigers', author: 'Guillermo Cabrera Infante', year: '1967', note: 'Pre-revolution Havana nightlife, dazzling wordplay, a city on the edge.' },
      { title: 'Our Man in Havana', author: 'Graham Greene', year: '1958', note: 'A vacuum-cleaner salesman invents a spy ring. Daiquiris consumed: many.' }
    ],
    music: [
      { title: 'Chan Chan', artist: 'Compay Segundo', year: '1987', note: 'The Buena Vista Social Club reintroduced son to the world.' },
      { title: 'El Manisero', artist: 'Moisés Simons', year: '1928', note: 'The Peanut Vendor — the first Cuban hit to conquer New York.' },
      { title: 'Missa Cubana', artist: 'José María Vitier', year: '1996', note: 'Cuban rhythms meet sacred choral writing.' }
    ],
    film: [
      { title: 'Soy Cuba', director: 'Mikhail Kalatozov', year: '1964', note: 'Soviet-Cuban co-production, astonishing long takes down Havana stairwells.' },
      { title: 'Fresa y chocolate', director: 'Tomás Gutiérrez Alea', year: '1993', note: 'Friendship across ideology in 1970s Havana.' },
      { title: 'Buena Vista Social Club', director: 'Wim Wenders', year: '1999', note: 'Old musicians, older bandstands, a city filmed like a love song.' }
    ],
    history: [
      { year: '1519', event: 'Founded by the Spanish on its current site on the north coast.' },
      { year: '1762', event: 'Briefly occupied by the British; Havana’s port exploded with trade.' },
      { year: '1898', event: 'USS Maine explodes in the harbor; the Spanish-American War begins.' },
      { year: '1959', event: 'Revolution. Fidel enters the city on January 8th.' },
      { year: '2015', event: 'U.S.–Cuba diplomatic relations restored (Havana again filled with film crews).' }
    ]
  },
  {
    id: 'reykjavik',
    name: 'Reykjavík',
    nameLocal: 'Reykjavík',
    country: 'Iceland',
    countryLocal: 'Ísland',
    lat: 64.1466,
    lon: -21.9426,
    tagline: 'A small capital under very large skies.',
    palette: {
      bg: '#dfe4e8',
      paper: '#eef1f4',
      ink: '#101a24',
      accent: '#2e5c6e', // glacier teal
      muted: '#5a6c78',
      rule: '#b9c4cc'
    },
    fonts: {
      display: "'Fraunces', serif",
      body: "'IBM Plex Sans', sans-serif",
      caption: "'IBM Plex Mono', monospace"
    },
    motif: 'aurora',
    novels: [
      { title: 'Independent People', author: 'Halldór Laxness', year: '1934', note: 'The great Icelandic novel; Nobel 1955. Sheep, stubbornness, and cold.' },
      { title: 'Njáls saga', author: 'Anonymous', year: '~1280', note: 'A medieval blood feud — the world’s first great prose epic, written here.' },
      { title: 'Jar City', author: 'Arnaldur Indriðason', year: '2000', note: 'Detective Erlendur walks Reykjavík in perpetual drizzle.' }
    ],
    music: [
      { title: 'Hoppípolla', artist: 'Sigur Rós', year: '2005', note: 'Post-rock as glacial weather system. Filmed on Icelandic moors.' },
      { title: 'Jóga', artist: 'Björk', year: '1997', note: 'Strings and volcanic breath; an ode to her country.' },
      { title: 'Saltbreaker', artist: 'Ólafur Arnalds', year: '2020', note: 'Minimalist piano from a converted Reykjavík lighthouse.' }
    ],
    film: [
      { title: 'Children of Nature', director: 'Friðrik Þór Friðriksson', year: '1991', note: 'Iceland’s first Oscar-nominated film. Two elderly escapees cross the highlands.' },
      { title: 'Rams', director: 'Grímur Hákonarson', year: '2015', note: 'Two brothers, one fjord, forty years of silence.' },
      { title: 'Woman at War', director: 'Benedikt Erlingsson', year: '2018', note: 'A choir conductor sabotages an aluminum plant. The landscape is the third lead.' }
    ],
    history: [
      { year: '874', event: 'Ingólfr Arnarson settles the bay — “smoky bay” for its geothermal steam.' },
      { year: '930', event: 'Alþingi founded at Þingvellir — one of the world’s oldest parliaments.' },
      { year: '1000', event: 'Iceland converts to Christianity by peaceful parliamentary vote.' },
      { year: '1944', event: 'Full independence from Denmark.' },
      { year: '2008', event: 'Banking collapse; a slow, bright recovery follows.' }
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    nameLocal: 'वाराणसी',
    country: 'India',
    countryLocal: 'भारत',
    lat: 25.3176,
    lon: 82.9739,
    tagline: 'Older than history, older than legend — older than even time.',
    palette: {
      bg: '#ecdcb6',
      paper: '#f6e9c9',
      ink: '#2a1506',
      accent: '#b8461a', // temple red
      muted: '#8a5a2a',
      rule: '#d8b978'
    },
    fonts: {
      display: "'Yatra One', 'Tiro Devanagari Hindi', serif",
      body: "'Tiro Devanagari Hindi', serif",
      caption: "'Hind', sans-serif"
    },
    motif: 'lotus',
    novels: [
      { title: 'A Flight of Pigeons', author: 'Ruskin Bond', year: '1978', note: 'The 1857 rebellion across the Gangetic plain, from Shahjahanpur south.' },
      { title: 'The Romantics', author: 'Pankaj Mishra', year: '1999', note: 'A young man reads Flaubert in a Benares boarding house.' },
      { title: 'Raag Darbari', author: 'Shrilal Shukla', year: '1968', note: 'Satire of rural Uttar Pradesh — the province Varanasi anchors.' }
    ],
    music: [
      { title: 'Raga Bhairav at dawn', artist: 'Pandit Ravi Shankar', year: '1956', note: 'Shankar was born in Varanasi; the city’s morning raga is in his blood.' },
      { title: 'Shehnai of Bismillah Khan', artist: 'Bismillah Khan', year: '1960s', note: 'The great shehnai player lived here nearly all his life.' },
      { title: 'Kabir bhajans', artist: 'Kumar Gandharva', year: '1970s', note: 'The 15th-century weaver-poet of Kashi, sung anew.' }
    ],
    film: [
      { title: 'Water', director: 'Deepa Mehta', year: '2005', note: 'Widows on the ghats in 1938 — shot in Sri Lanka after Indian protests.' },
      { title: 'Masaan', director: 'Neeraj Ghaywan', year: '2015', note: 'Two tender stories along the burning ghats and the city’s old quarters.' },
      { title: 'Mukti Bhawan', director: 'Shubhashish Bhutiani', year: '2016', note: 'An old man comes to Varanasi to die; his son reluctantly follows.' }
    ],
    history: [
      { year: '~1200 BCE', event: 'Continuously inhabited — one of the oldest living cities on earth.' },
      { year: '~500 BCE', event: 'The Buddha gives his first sermon at nearby Sarnath.' },
      { year: '1194', event: 'Sacked by Muhammad of Ghor; many temples razed and rebuilt.' },
      { year: '1780', event: 'Kashi Vishwanath temple rebuilt by Ahilyabai Holkar of Indore.' },
      { year: '1916', event: 'Banaras Hindu University founded by Madan Mohan Malaviya.' }
    ]
  },
  {
    id: 'beijing',
    name: 'Beijing',
    nameLocal: '北京',
    country: 'China',
    countryLocal: '中国',
    lat: 39.9042,
    lon: 116.4074,
    tagline: '皇城之下，胡同里藏着六百年的风。',
    palette: { bg: '#efe1c8', paper: '#f8ecd1', ink: '#2b1606', accent: '#b8281e', muted: '#7b5a30', rule: '#d8bf88' },
    fonts: {
      display: "'Noto Serif SC', 'Shippori Mincho', serif",
      body: "'Noto Serif SC', serif",
      caption: "'Noto Sans SC', sans-serif"
    },
    motif: 'fleur',
    novels: [
      { title: '骆驼祥子 Rickshaw Boy', author: '老舍 Lao She', year: '1937', note: '北平胡同里一个洋车夫的一生，老北京的骨与血。' },
      { title: '红楼梦 Dream of the Red Chamber', author: '曹雪芹 Cao Xueqin', year: '~1760', note: '清代王府庭院，中国古典小说的最高峰。' },
      { title: '城南旧事 My Memories of Old Beijing', author: '林海音 Lin Haiyin', year: '1960', note: '一个孩子眼中的老北京南城。' }
    ],
    music: [
      { title: '夜深沉（京剧曲牌）', artist: '京胡传统', year: '清代起', note: '京剧中最著名的过场曲牌，杀气与哀婉并存。' },
      { title: '让我们荡起双桨', artist: '刘炽 Liu Chi', year: '1955', note: '北海公园，白塔，一代人的童年。' },
      { title: '北京一夜', artist: '陈升 / 刘佳慧', year: '1992', note: '京腔与摇滚的第一次对唱。' }
    ],
    film: [
      { title: '霸王别姬 Farewell My Concubine', director: '陈凯歌 Chen Kaige', year: '1993', note: '一个世纪的京剧戏班，戛纳金棕榈。' },
      { title: '阳光灿烂的日子 In the Heat of the Sun', director: '姜文 Jiang Wen', year: '1994', note: '七十年代大院少年的夏天。' },
      { title: '末代皇帝 The Last Emperor', director: 'Bernardo Bertolucci', year: '1987', note: '紫禁城中第一部实景拍摄的西方电影。' }
    ],
    history: [
      { year: '1153', event: '金中都设立，城市格局初成。' },
      { year: '1267', event: '忽必烈建元大都，马可·波罗笔下的汗八里。' },
      { year: '1420', event: '明永乐帝迁都北京，紫禁城落成。' },
      { year: '1860', event: '英法联军焚圆明园。' },
      { year: '1949', event: '10月1日，天安门城楼上宣告新中国成立。' }
    ]
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    nameLocal: '上海',
    country: 'China',
    countryLocal: '中国',
    lat: 31.2304,
    lon: 121.4737,
    tagline: '东方与西方在此对坐，喝一杯浓咖啡。',
    palette: { bg: '#ebe4d3', paper: '#f3ecd8', ink: '#1a1f2c', accent: '#9a2740', muted: '#5e6b7a', rule: '#c9c0a8' },
    fonts: {
      display: "'Noto Serif SC', 'Playfair Display', serif",
      body: "'Noto Serif SC', serif",
      caption: "'Noto Sans SC', sans-serif"
    },
    motif: 'fleur',
    novels: [
      { title: '倾城之恋 Love in a Fallen City', author: '张爱玲 Eileen Chang', year: '1943', note: '战争阴影下的上海-香港双城记。' },
      { title: '长恨歌 The Song of Everlasting Sorrow', author: '王安忆 Wang Anyi', year: '1995', note: '一个上海小姐从四十年代走到八十年代。' },
      { title: '子夜 Midnight', author: '茅盾 Mao Dun', year: '1933', note: '三十年代上海的金融与革命。' }
    ],
    music: [
      { title: '夜上海', artist: '周璇 Zhou Xuan', year: '1947', note: '老上海的代名词。' },
      { title: '天涯歌女', artist: '周璇 Zhou Xuan', year: '1937', note: '电影《马路天使》插曲，国语流行乐的起点。' },
      { title: '和平饭店老年爵士乐队', artist: 'Peace Hotel Old Jazz Band', year: '1980s 至今', note: '平均年龄八十的现场演出。' }
    ],
    film: [
      { title: '小城之春 Spring in a Small Town', director: '费穆 Fei Mu', year: '1948', note: '中国电影史上的一座孤峰。' },
      { title: '花样年华 In the Mood for Love', director: '王家卫 Wong Kar-wai', year: '2000', note: '一曲上海离散的挽歌。' },
      { title: '苏州河 Suzhou River', director: '娄烨 Lou Ye', year: '2000', note: '世纪之交的潮湿、颓废、霓虹。' }
    ],
    history: [
      { year: '1843', event: '《南京条约》后开埠，租界时代开始。' },
      { year: '1921', event: '中共一大在望志路会址召开。' },
      { year: '1937', event: '淞沪会战，四行仓库八百壮士。' },
      { year: '1990', event: '浦东开发开放，外滩对岸拔地而起。' },
      { year: '2010', event: '世博会，"城市，让生活更美好"。' }
    ]
  },
  {
    id: 'chengdu',
    name: 'Chengdu',
    nameLocal: '成都',
    country: 'China',
    countryLocal: '中国',
    lat: 30.5728,
    lon: 104.0668,
    tagline: '一座来了就不想走的城——茶馆，竹椅，盖碗茶。',
    palette: { bg: '#e7ecd8', paper: '#eff3da', ink: '#1e2a20', accent: '#4f7c3a', muted: '#5c6e52', rule: '#c4cfa5' },
    fonts: {
      display: "'Ma Shan Zheng', 'Noto Serif SC', serif",
      body: "'Noto Serif SC', serif",
      caption: "'Noto Sans SC', sans-serif"
    },
    motif: 'lotus',
    novels: [
      { title: '家 Family', author: '巴金 Ba Jin', year: '1933', note: '五四时期一个成都公馆里三兄弟的命运。' },
      { title: '死水微澜 Ripples on Stagnant Water', author: '李劼人 Li Jieren', year: '1935', note: '晚清成都城郊小镇的风土人情。' },
      { title: '许三观卖血记 Chronicle of a Blood Merchant', author: '余华 Yu Hua', year: '1995', note: '川地方言般的叙述，一个普通人的一生。' }
    ],
    music: [
      { title: '成都', artist: '赵雷 Zhao Lei', year: '2016', note: '让整个中国重新爱上这座城。' },
      { title: '川剧变脸锣鼓', artist: '川剧传统', year: '清代起', note: '几秒一张脸，世界非遗。' },
      { title: '太阳出来喜洋洋', artist: '四川民歌', year: '传统', note: '山歌里的阳光与自在。' }
    ],
    film: [
      { title: '二十四城记 24 City', director: '贾樟柯 Jia Zhangke', year: '2008', note: '一座军工厂的成都记忆。' },
      { title: '李米的猜想 The Equation of Love and Death', director: '曹保平 Cao Baoping', year: '2008', note: '成都街头的出租车司机与等待。' },
      { title: '路边野餐 Kaili Blues', director: '毕赣 Bi Gan', year: '2015', note: '西南方湿润诗意的同一脉。' }
    ],
    history: [
      { year: '约前316', event: '秦灭蜀，设成都县——两千三百年名字未改。' },
      { year: '1023', event: '北宋益州设交子务，世界上最早的纸币诞生于此。' },
      { year: '1661', event: '清重修成都，八条大街格局定型。' },
      { year: '2008', event: '5月12日汶川地震，震中距成都不到80公里。' },
      { year: '2021', event: '大熊猫国家公园正式设立，成都是门户。' }
    ]
  },
  {
    id: 'hongkong',
    name: 'Hong Kong',
    nameLocal: '香港',
    country: 'China',
    countryLocal: '中国',
    lat: 22.3193,
    lon: 114.1694,
    tagline: 'Neon, double-deckers, and the scent of egg tarts.',
    palette: { bg: '#e5dfe2', paper: '#eee8e9', ink: '#141820', accent: '#c83a3a', muted: '#4a5260', rule: '#c8bfb9' },
    fonts: {
      display: "'Playfair Display', 'Noto Serif HK', serif",
      body: "'Noto Serif HK', 'Lora', serif",
      caption: "'Noto Sans HK', sans-serif"
    },
    motif: 'fleur',
    novels: [
      { title: 'A Many-Splendoured Thing', author: 'Han Suyin 韩素音', year: '1952', note: 'A Eurasian doctor’s love affair on the Peak.' },
      { title: '胭脂扣 Rouge', author: '李碧华 Lee Bik-wa', year: '1985', note: 'A Tangxi courtesan returns to find her lover fifty years later.' },
      { title: 'Fragrant Harbour', author: 'John Lanchester', year: '2002', note: 'Four lives braided across the colony’s century.' }
    ],
    music: [
      { title: 'Monica', artist: '张国荣 Leslie Cheung', year: '1984', note: 'The opening act of the Cantopop golden age.' },
      { title: '月亮代表我的心 The Moon Represents My Heart', artist: '邓丽君 Teresa Teng', year: '1977', note: 'The most enduring Chinese love song.' },
      { title: '海阔天空 Boundless Oceans, Vast Skies', artist: 'Beyond 黄家驹', year: '1993', note: 'A rock anthem for a generation.' }
    ],
    film: [
      { title: '花样年华 In the Mood for Love', director: '王家卫 Wong Kar-wai', year: '2000', note: 'Two neighbours in a 1960s Hong Kong tenement.' },
      { title: '重庆森林 Chungking Express', director: '王家卫 Wong Kar-wai', year: '1994', note: 'Tsim Sha Tsui and Central on a California Dreamin loop.' },
      { title: '无间道 Infernal Affairs', director: 'Lau & Mak', year: '2002', note: 'Rooftops, undercover cops, mirrored cities.' }
    ],
    history: [
      { year: '1842', event: 'Treaty of Nanking cedes Hong Kong Island to Britain.' },
      { year: '1898', event: 'The New Territories leased for 99 years.' },
      { year: '1941', event: 'Japanese occupation; 3 years 8 months.' },
      { year: '1997', event: 'July 1 — handover to the People’s Republic.' },
      { year: '2018', event: 'Hong Kong-Zhuhai-Macau Bridge opens — longest sea crossing in the world.' }
    ]
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    nameLocal: 'İstanbul',
    country: 'Türkiye',
    countryLocal: 'Türkiye',
    lat: 41.0082,
    lon: 28.9784,
    tagline: 'Two continents, one ferry ride, endless tea.',
    palette: { bg: '#e4dccb', paper: '#efe7d1', ink: '#1c2638', accent: '#c0411f', muted: '#5b6676', rule: '#cbbf9c' },
    fonts: {
      display: "'Playfair Display', 'Amiri', serif",
      body: "'Lora', serif",
      caption: "'Work Sans', sans-serif"
    },
    motif: 'zellige',
    novels: [
      { title: 'Istanbul: Memories and the City', author: 'Orhan Pamuk', year: '2003', note: 'The Nobel laureate memoir of a half-vanished city.' },
      { title: 'My Name Is Red', author: 'Orhan Pamuk', year: '1998', note: 'Ottoman miniaturists, murder, the soul of pictures.' },
      { title: 'The Bastard of Istanbul', author: 'Elif Shafak', year: '2006', note: 'Four generations of Turkish and Armenian memory.' }
    ],
    music: [
      { title: 'Uskudara Gider Iken', artist: 'Safiye Ayla', year: '1949', note: 'Every Istanbul wedding still plays it.' },
      { title: 'Mehter military music', artist: 'Janissary band', year: '16th c. onward', note: 'The worlds oldest military band.' },
      { title: 'Istanbul Hatirasi', artist: 'Fazil Say', year: '2010', note: 'A piano love letter to the city.' }
    ],
    film: [
      { title: 'Uzak / Distant', director: 'Nuri Bilge Ceylan', year: '2002', note: 'A Bosphorus winter of silence and snow.' },
      { title: 'Kedi / Cats', director: 'Ceyda Torun', year: '2016', note: 'Istanbul street cats and the people who love them.' },
      { title: 'Hamam', director: 'Ferzan Ozpetek', year: '1997', note: 'An Italian inherits a Turkish bath.' }
    ],
    history: [
      { year: '330', event: 'Constantine refounds the city as New Rome.' },
      { year: '1453', event: 'Mehmed II takes Constantinople; Hagia Sophia becomes a mosque.' },
      { year: '1923', event: 'Ankara becomes capital; Istanbul becomes simply itself.' },
      { year: '1973', event: 'Bosphorus Bridge opens — road between two continents.' },
      { year: '2013', event: 'Gezi Park protests draw millions into the streets.' }
    ]
  },
  {
    id: 'buenosaires',
    name: 'Buenos Aires',
    nameLocal: 'Buenos Aires',
    country: 'Argentina',
    countryLocal: 'Argentina',
    lat: -34.6037,
    lon: -58.3816,
    tagline: 'A tango city that stays up later than you.',
    palette: { bg: '#e6ddd0', paper: '#f2e9d9', ink: '#1c1a1e', accent: '#8a2c48', muted: '#5a5065', rule: '#cbbfa6' },
    fonts: {
      display: "'Playfair Display', serif",
      body: "'Lora', serif",
      caption: "'Work Sans', sans-serif"
    },
    motif: 'fleur',
    novels: [
      { title: 'Ficciones', author: 'Jorge Luis Borges', year: '1944', note: 'Labyrinths composed in a Palermo apartment.' },
      { title: 'Hopscotch', author: 'Julio Cortazar', year: '1963', note: 'Paris and Buenos Aires, a novel read in any order.' },
      { title: 'Kiss of the Spider Woman', author: 'Manuel Puig', year: '1976', note: 'Two cellmates, countless imagined films.' }
    ],
    music: [
      { title: 'Libertango', artist: 'Astor Piazzolla', year: '1974', note: 'Tango Nuevo — bandoneon as fever dream.' },
      { title: 'Volver', artist: 'Carlos Gardel', year: '1935', note: 'The voice of the Rio de la Plata, forever returning.' },
      { title: 'Balada para un loco', artist: 'Amelita Baltar, Piazzolla and Ferrer', year: '1969', note: 'A tango-song that split the city in half.' }
    ],
    film: [
      { title: 'The Secret in Their Eyes', director: 'Juan Jose Campanella', year: '2009', note: 'The Tribunales quarter, a case that will not rest.' },
      { title: 'Nine Queens', director: 'Fabian Bielinsky', year: '2000', note: 'Two con men across a single Buenos Aires day.' },
      { title: 'Wild Tales', director: 'Damian Szifron', year: '2014', note: 'Six tailored Argentine revenge stories.' }
    ],
    history: [
      { year: '1580', event: 'Refounded by Juan de Garay on the Rio de la Plata.' },
      { year: '1816', event: 'Argentine independence declared in Tucuman.' },
      { year: '1880', event: 'Federal capital; city booms with European immigration.' },
      { year: '1946', event: 'Peron elected; Eva becomes a civic saint.' },
      { year: '2001', event: 'Economic collapse; cacerolazos shake the Plaza.' }
    ]
  },
  {
    id: 'mexicocity',
    name: 'Mexico City',
    nameLocal: 'Ciudad de Mexico',
    country: 'Mexico',
    countryLocal: 'Mexico',
    lat: 19.4326,
    lon: -99.1332,
    tagline: 'Cathedrals built on pyramids; a lake-bed metropolis.',
    palette: { bg: '#e9dcc2', paper: '#f4e6c7', ink: '#24150a', accent: '#c24a1f', muted: '#7a5a3a', rule: '#d4b67a' },
    fonts: {
      display: "'Abril Fatface', 'Playfair Display', serif",
      body: "'Lora', serif",
      caption: "'Work Sans', sans-serif"
    },
    motif: 'zellige',
    novels: [
      { title: 'The Labyrinth of Solitude', author: 'Octavio Paz', year: '1950', note: 'Essays on what it is to be Mexican.' },
      { title: 'Pedro Paramo', author: 'Juan Rulfo', year: '1955', note: 'The ghost novel that prefigured magical realism.' },
      { title: 'Like Water for Chocolate', author: 'Laura Esquivel', year: '1989', note: 'Revolutionary-era kitchen magic in the countryside north of the city.' }
    ],
    music: [
      { title: 'Cielito Lindo', artist: 'Quirino Mendoza y Cortes', year: '1882', note: 'The unofficial anthem.' },
      { title: 'La Llorona', artist: 'Chavela Vargas', year: '1950s', note: 'A ranchera of lost lovers and haunted rivers.' },
      { title: 'Huapango', artist: 'Jose Pablo Moncayo', year: '1941', note: 'Symphonic Mexican folk — every national ceremony plays it.' }
    ],
    film: [
      { title: 'Roma', director: 'Alfonso Cuaron', year: '2018', note: 'A 1970s Mexico City childhood, through the eyes of the household help.' },
      { title: 'Los Olvidados', director: 'Luis Bunuel', year: '1950', note: 'Mexico City street children in unsentimental close-up.' },
      { title: 'Amores Perros', director: 'Alejandro Gonzalez Inarritu', year: '2000', note: 'Three stories crossing at a single intersection.' }
    ],
    history: [
      { year: '1325', event: 'Mexica found Tenochtitlan on an island in Lake Texcoco.' },
      { year: '1521', event: 'Cortes besieges and destroys the Aztec capital.' },
      { year: '1810', event: 'Father Hidalgo Grito de Dolores launches independence.' },
      { year: '1910', event: 'Mexican Revolution begins; a decade of civil war.' },
      { year: '1985', event: 'Magnitude 8.1 earthquake; civic life rebuilt by neighbours, not the state.' }
    ]
  },
  {
    id: 'newyork',
    name: 'New York',
    nameLocal: 'New York',
    country: 'United States',
    countryLocal: 'USA',
    lat: 40.7128,
    lon: -74.0060,
    tagline: 'A city so loud it became literature.',
    palette: { bg: '#e6e3d8', paper: '#f1efe3', ink: '#141822', accent: '#b4451c', muted: '#4e5765', rule: '#c7c2af' },
    fonts: {
      display: "'Playfair Display', serif",
      body: "'Lora', serif",
      caption: "'Work Sans', sans-serif"
    },
    motif: 'aurora',
    novels: [
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925', note: 'West Egg, the city across the bay, the green light.' },
      { title: 'Invisible Man', author: 'Ralph Ellison', year: '1952', note: 'Harlem as the crucible of modern Black identity.' },
      { title: 'Open City', author: 'Teju Cole', year: '2011', note: 'A Nigerian German psychiatrist walks Manhattan, thinking.' }
    ],
    music: [
      { title: 'Rhapsody in Blue', artist: 'George Gershwin', year: '1924', note: 'New York through the windows of a Pullman train.' },
      { title: 'Empire State of Mind', artist: 'Jay-Z feat. Alicia Keys', year: '2009', note: 'The 21st-century civic anthem.' },
      { title: 'Take the A Train', artist: 'Duke Ellington', year: '1941', note: 'Strayhorn wrote it; Harlem dances to it still.' }
    ],
    film: [
      { title: 'Manhattan', director: 'Woody Allen', year: '1979', note: 'The skyline in black and white, Gershwin overhead.' },
      { title: 'Do the Right Thing', director: 'Spike Lee', year: '1989', note: 'One Brooklyn block on the hottest day of the year.' },
      { title: 'Taxi Driver', director: 'Martin Scorsese', year: '1976', note: 'A 1970s New York of neon and insomnia.' }
    ],
    history: [
      { year: '1624', event: 'Dutch settlers establish New Amsterdam.' },
      { year: '1898', event: 'Five boroughs consolidated into one city.' },
      { year: '1929', event: 'Wall Street crash; the Great Depression begins here.' },
      { year: '2001', event: 'September 11 attacks; the skyline changes.' },
      { year: '2020', event: 'Pandemic empties the streets; the city proves it can come back.' }
    ]
  },
  {
    id: 'capetown',
    name: 'Cape Town',
    nameLocal: 'Kaapstad',
    country: 'South Africa',
    countryLocal: 'South Africa',
    lat: -33.9249,
    lon: 18.4241,
    tagline: 'Where two oceans meet at the foot of a flat mountain.',
    palette: { bg: '#e3e5d6', paper: '#edefdb', ink: '#1a1e24', accent: '#c46a22', muted: '#5a6556', rule: '#c3c7ae' },
    fonts: {
      display: "'Fraunces', serif",
      body: "'Lora', serif",
      caption: "'IBM Plex Sans', sans-serif"
    },
    motif: 'aurora',
    novels: [
      { title: 'Disgrace', author: 'J. M. Coetzee', year: '1999', note: 'A Cape Town professor falls into the new South Africa.' },
      { title: 'In the Heart of the Country', author: 'J. M. Coetzee', year: '1977', note: 'A Karoo farmhouse, an unreliable daughter, a broken father.' },
      { title: 'Welcome to Our Hillbrow', author: 'Phaswane Mpe', year: '2001', note: 'Johannesburg, not Cape Town — but the South African voice arriving.' }
    ],
    music: [
      { title: 'Pata Pata', artist: 'Miriam Makeba', year: '1967', note: 'Mama Africa exiled from apartheid South Africa; her most joyful hit.' },
      { title: 'Nkosi Sikelel iAfrika', artist: 'Enoch Sontonga', year: '1897', note: 'The hymn that became the national anthem.' },
      { title: 'Cape jazz', artist: 'Abdullah Ibrahim', year: '1970s', note: 'Piano, the District Six neighbourhood, a city remembered.' }
    ],
    film: [
      { title: 'Tsotsi', director: 'Gavin Hood', year: '2005', note: 'Johannesburg townships; Oscar for Best Foreign Language Film.' },
      { title: 'District 9', director: 'Neill Blomkamp', year: '2009', note: 'Apartheid as science fiction, shot in Johannesburg.' },
      { title: 'Inxeba / The Wound', director: 'John Trengove', year: '2017', note: 'A Xhosa initiation ritual in the Eastern Cape mountains.' }
    ],
    history: [
      { year: '1652', event: 'Dutch East India Company founds a refreshment station at the Cape.' },
      { year: '1806', event: 'British take the Cape Colony.' },
      { year: '1948', event: 'National Party victory; apartheid codified.' },
      { year: '1990', event: 'Nelson Mandela released from Victor Verster prison; speaks on the Grand Parade.' },
      { year: '1994', event: 'First democratic elections; Mandela president.' }
    ]
  },
  {
    id: 'sydney',
    name: 'Sydney',
    nameLocal: 'Sydney',
    country: 'Australia',
    countryLocal: 'Australia',
    lat: -33.8688,
    lon: 151.2093,
    tagline: 'A harbour city that always finds the sun.',
    palette: { bg: '#dee6ea', paper: '#e9f0f3', ink: '#15202c', accent: '#2e7a8c', muted: '#4d6572', rule: '#bfc9cf' },
    fonts: {
      display: "'Fraunces', serif",
      body: "'IBM Plex Sans', sans-serif",
      caption: "'IBM Plex Mono', monospace"
    },
    motif: 'palm',
    novels: [
      { title: 'The Secret River', author: 'Kate Grenville', year: '2005', note: 'An early Sydney settler family and the river they try to claim.' },
      { title: 'Cloudstreet', author: 'Tim Winton', year: '1991', note: 'Two families share a haunted Perth house — the Australian epic.' },
      { title: 'Oscar and Lucinda', author: 'Peter Carey', year: '1988', note: 'A glass church floated up the Bellinger River.' }
    ],
    music: [
      { title: 'Solid Rock', artist: 'Goanna', year: '1982', note: 'Rock protest song for Aboriginal land rights.' },
      { title: 'Beds Are Burning', artist: 'Midnight Oil', year: '1987', note: 'The Oils roared from inner Sydney pubs to world stages.' },
      { title: 'Treaty', artist: 'Yothu Yindi', year: '1991', note: 'Yolngu rock; the song the Prime Minister had to answer.' }
    ],
    film: [
      { title: 'Picnic at Hanging Rock', director: 'Peter Weir', year: '1975', note: 'Victorian schoolgirls vanish on a Valentines Day picnic.' },
      { title: 'The Piano', director: 'Jane Campion', year: '1993', note: 'New Zealand rather than Sydney, but the Antipodean cinema peak.' },
      { title: 'Lantana', director: 'Ray Lawrence', year: '2001', note: 'Four Sydney couples in the tangle of a single missing person.' }
    ],
    history: [
      { year: '~60,000 BP', event: 'Gadigal people of the Eora Nation settle the harbour.' },
      { year: '1788', event: 'First Fleet arrives at Sydney Cove — the British penal colony begins.' },
      { year: '1851', event: 'Gold rush transforms the colony.' },
      { year: '1932', event: 'Sydney Harbour Bridge opens.' },
      { year: '2000', event: 'Sydney Olympics; Cathy Freeman lights the cauldron.' }
    ]
  },
  {
    id: 'petra',
    name: 'Petra',
    nameLocal: 'البتراء',
    country: 'Jordan',
    countryLocal: 'الأردن',
    lat: 30.3285,
    lon: 35.4444,
    tagline: 'A rose-red city half as old as time.',
    palette: { bg: '#e9d5c0', paper: '#f2decb', ink: '#2a1408', accent: '#a9381a', muted: '#8a5a38', rule: '#d2a97e' },
    fonts: {
      display: "'Amiri', serif",
      body: "'Tajawal', 'Amiri', sans-serif",
      caption: "'Tajawal', sans-serif"
    },
    motif: 'zellige',
    novels: [
      { title: 'Appointment with Death', author: 'Agatha Christie', year: '1938', note: 'Hercule Poirot investigates a murder among the tombs of Petra.' },
      { title: 'Married to a Bedouin', author: 'Marguerite van Geldermalsen', year: '2006', note: 'A New Zealander marries into the Bdoul community living in the caves.' },
      { title: 'Cities of Salt', author: 'Abdul Rahman Munif', year: '1984', note: 'Arabian oil-era upheaval; the great Gulf Arabic novel.' }
    ],
    music: [
      { title: 'Bedouin rababa lament', artist: 'Traditional', year: 'ancient', note: 'Single-string fiddle of the desert night.' },
      { title: 'Ala Dalouna', artist: 'Levantine folk', year: 'traditional', note: 'The regional dabke song everyone dances to at weddings.' },
      { title: 'Oum Kalthoum — Al-Atlal', artist: 'Oum Kalthoum', year: '1966', note: 'Not Jordanian, but the Arab world stopped to listen every Thursday.' }
    ],
    film: [
      { title: 'Indiana Jones and the Last Crusade', director: 'Steven Spielberg', year: '1989', note: 'The Al-Khazneh facade as the Temple of the Holy Grail.' },
      { title: 'Theeb', director: 'Naji Abu Nowar', year: '2014', note: 'A Bedouin boy in Wadi Rum during the Great War.' },
      { title: 'Lawrence of Arabia', director: 'David Lean', year: '1962', note: 'Wadi Rum doubling for all of Arabia.' }
    ],
    history: [
      { year: '~400 BCE', event: 'Nabataean traders settle the Siq; caravan capital of incense and silk.' },
      { year: '106 CE', event: 'Rome annexes Nabataea; Petra becomes provincial capital.' },
      { year: '363', event: 'Major earthquake devastates the city.' },
      { year: '1812', event: 'Johann Ludwig Burckhardt, in disguise, rediscovers the ruins for Europe.' },
      { year: '1985', event: 'UNESCO World Heritage site.' }
    ]
  }
];
