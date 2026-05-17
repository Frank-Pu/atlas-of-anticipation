# Atlas of Anticipation

<div align="center">

<kbd><a href="#english">English</a></kbd> &nbsp; <kbd><a href="#中文-简体">简体中文</a></kbd> &nbsp; <kbd><a href="#繁體中文">繁體中文</a></kbd>

<br/>

*A small globe that remembers what places mean to the people who love them.*

*一颗记录「一座城对爱它的人意味着什么」的小地球。*

[![License: MIT](https://img.shields.io/badge/License-MIT-c8a96e.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-8a9a7b.svg)](CONTRIBUTING.md)
[![Made with care](https://img.shields.io/badge/made%20with-care-d4826a.svg)](#)

</div>

---

![preview](screenshots/globe-wide.jpg)

---

## English

<kbd><a href="#中文-简体">简体中文</a></kbd> &nbsp; <kbd><a href="#繁體中文">繁體中文</a></kbd>

**Atlas of Anticipation** is an interactive globe — not of tourist routes or landmarks, but of **what cities feel like from the inside.**

Spin it. Pick a city. Read the novels written there, the films set on its streets, the music born in its cafés, the histories that shaped the way its light falls in late afternoon. Then close your laptop and think about the place differently.

This is not a travel guide. It is not Wikipedia. It is something closer to a **collective letter to places we love** — written in fragments, across languages, by people who know these cities as more than coordinates.

---

### The Philosophy

Most maps tell you where things are.

This one tries to tell you what they *mean*.

Every city in the atlas has a color palette pulled from its ceramics or its dust, a tagline that reaches for its feeling rather than its facts, and a small library of cultural works — novels, films, music, history — that help explain why this city is *this* city and no other. The design changes city by city: Kyoto in vermilion and silence, Havana in salt-bleached colonial paint, Reykjavík in basalt and cloud.

It's handmade. It grows by accretion. There is no algorithm here.

---

### What's Inside

Currently the atlas includes cities across Asia, Europe, the Americas, and Africa. Each entry carries:

- **Novels & literature** — books written in the city, or books that couldn't have been written anywhere else
- **Film** — cinema that uses the city as more than a backdrop
- **Music** — recordings that carry the city's particular atmosphere
- **History** — 3–5 turning points that explain what the city feels like *today*, not just what happened there
- **A palette** — six colors drawn from the city's visual culture: its tiles, its textiles, its weather
- **A tagline** — one line, 7–12 words, that reaches for the feeling of the place

---

### Contribute

**If a city you love is missing — add it.**  
**If a city that's here is missing something you know — add that.**

A paragraph, a film, a piece of music, a correction, a translation. The atlas grows by the people who care enough to write a sentence about a place they know.

You don't need to be a developer. You don't need to know Git well. You just need to know a city, and to write one careful sentence about it.

Full guide: [**CONTRIBUTING.md**](CONTRIBUTING.md)

```
# The kind of contributions we want:
Add city: Thessaloniki
Add film to Buenos Aires: La ciénaga
Fix tagline for Lagos
zh-Hans translation: Lisbon
Add poetry category to Istanbul
```

If you're unsure whether something belongs — open an issue and ask. The only question we're really asking is: *does this help someone understand the place?*

---

### Run Locally

No build step. No dependencies to install.

```bash
python3 -m http.server 8000
# open http://localhost:8000/index.html
```

Or double-click `index.html`. (If the globe renders blank, use the server above — some browsers block `fetch()` from `file://`.)

---

### Tech

- Vanilla HTML + React 18 via Babel-standalone (no bundler needed)
- `d3-geo` orthographic projection
- TopoJSON coastlines from [Natural Earth](https://www.naturalearthdata.com/) via [world-atlas](https://github.com/topojson/world-atlas)
- Trilingual UI (English / 简体中文 / 繁體中文) with per-city localized fields

---

### License

[MIT](LICENSE) — fork it, use it, remix it. Attribution appreciated, not required.

---

## 中文 (简体)

<kbd><a href="#english">English</a></kbd> &nbsp; <kbd><a href="#繁體中文">繁體中文</a></kbd>

**Atlas of Anticipation**（"期盼之图集"）是一颗交互式地球仪。

它记录的不是城市的地标和旅游路线，而是更难描述的东西：**一座城为什么是它自己，而不是另一座城。**

转动它，选一座城，去读那里写就的小说、拍摄的电影、在某个咖啡馆诞生的音乐、以及让它今天仍带着那种气质的历史时刻。然后合上屏幕，想想这个地方——希望你看见了一些新的东西。

这不是旅游攻略，也不是百科全书。它更接近一封**写给我们爱过的城市的集体信**——用碎片，用多种语言，由真正了解这些地方的人，一点一点写下来。

---

### 这个项目想做什么

大多数地图告诉你一个地方在哪里。

这颗地球仪想告诉你它**意味着什么**。

图集里的每座城都有从当地陶瓷或尘土里提炼出来的色彩方案，有一行触碰它气质而非罗列事实的标语，还有一小片文化作品——小说、电影、音乐、历史——帮你理解为什么这座城是它自己，而不是另一座城。设计随城市变化：京都是朱红与静默，哈瓦那是剥落的殖民地蓝绿，雷克雅未克是玄武岩与风暴云。

这是手工制作的。它靠堆积生长。这里没有算法。

---

### 里面有什么

图集目前收录了亚洲、欧洲、美洲和非洲的若干城市。每座城的条目包含：

- **小说与文学** — 写于这座城的书，或者只能在这里才能被写出的书
- **电影** — 把城市用作不止背景板的影像
- **音乐** — 带着这座城特有气息的录音
- **历史** — 3—5 个关键时刻，解释这座城**今天的气质**从何而来
- **色彩方案** — 六个颜色，从当地的瓷砖、织物、天光里取来
- **标语** — 一行话，7—12 字，触碰这个地方的感觉，而不是陈述它的事实

---

### 如何参与

**你爱的某座城不在这里——加进来。**  
**已有的某座城缺少你知道的东西——补上去。**

一段话、一部电影、一首音乐、一处校对、一个翻译都行。这本图集靠那些愿意为一个地方写一句话的人生长。

你不需要是开发者，也不需要精通 Git。你只需要了解一座城，并愿意认真写下关于它的一句话。

完整贡献指南：[**CONTRIBUTING.md**](CONTRIBUTING.md)

```
# 我们希望看到的贡献类型：
Add city: 塔林
Add film to Buenos Aires: 沼泽
Fix tagline for Lagos
zh-Hans translation: 里斯本
Add poetry category: 伊斯坦布尔
```

如果你不确定某样东西是否合适——开一个 Issue 来聊。我们真正在问的只有一个问题：*这会帮助某个人更好地理解这个地方吗？*

---

### 本地运行

不需要 build，不需要安装任何依赖：

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/index.html
```

也可以直接双击 `index.html`（若地球渲染为空白，用上面的本地服务器——部分浏览器会拦截 `file://` 协议下的 `fetch()` 请求）。

---

### 技术栈

- 原生 HTML + React 18（Babel-standalone 即时编译，零打包步骤）
- `d3-geo` 正射投影
- 海岸线数据来自 [Natural Earth](https://www.naturalearthdata.com/)（经 [world-atlas](https://github.com/topojson/world-atlas) 转 TopoJSON）
- 三语界面（English / 简体中文 / 繁體中文），每座城的字段均支持分语言覆盖

---

### 协议

[MIT](LICENSE)。随便 fork，随便改，随便用。注明来源是情义，不是义务。

---

## 繁體中文

<kbd><a href="#english">English</a></kbd> &nbsp; <kbd><a href="#中文-简体">简体中文</a></kbd>

**Atlas of Anticipation**（「期盼之圖集」）是一顆互動式地球儀。

它記錄的不是城市的地標和旅遊路線，而是更難描述的東西：**一座城為什麼是它自己，而不是另一座城。**

轉動它，選一座城，去讀那裡寫就的小說、拍攝的電影、在某個咖啡館誕生的音樂、以及讓它今天仍帶著那種氣質的歷史時刻。然後合上螢幕，想想這個地方——希望你看見了一些新的東西。

這不是旅遊攻略，也不是百科全書。它更接近一封**寫給我們愛過的城市的集體信**——用碎片，用多種語言，由真正了解這些地方的人，一點一點寫下來。

---

### 這個專案想做什麼

大多數地圖告訴你一個地方在哪裡。

這顆地球儀想告訴你它**意味著什麼**。

圖集裡的每座城都有從當地陶瓷或塵土裡提煉出來的色彩方案，有一行觸碰它氣質而非羅列事實的標語，還有一小片文化作品——小說、電影、音樂、歷史——幫你理解為什麼這座城是它自己，而不是另一座城。設計隨城市變化：京都是朱紅與靜默，哈瓦那是剝落的殖民地藍綠，雷克雅未克是玄武岩與風暴雲。

這是手工製作的。它靠堆積生長。這裡沒有演算法。

---

### 裡面有什麼

圖集目前收錄了亞洲、歐洲、美洲和非洲的若干城市。每座城的條目包含：

- **小說與文學** — 寫於這座城的書，或者只能在這裡才能被寫出的書
- **電影** — 把城市用作不止背景板的影像
- **音樂** — 帶著這座城特有氣息的錄音
- **歷史** — 3—5 個關鍵時刻，解釋這座城**今天的氣質**從何而來
- **色彩方案** — 六個顏色，從當地的瓷磚、織物、天光裡取來
- **標語** — 一行話，7—12 字，觸碰這個地方的感覺，而不是陳述它的事實

---

### 如何參與

**你愛的某座城不在這裡——加進來。**  
**已有的某座城缺少你知道的東西——補上去。**

一段話、一部電影、一首音樂、一處校對、一個翻譯都行。這本圖集靠那些願意為一個地方寫一句話的人生長。

你不需要是開發者，也不需要精通 Git。你只需要了解一座城，並願意認真寫下關於它的一句話。

完整貢獻指南：[**CONTRIBUTING.md**](CONTRIBUTING.md)

```
# 我們希望看到的貢獻類型：
Add city: 塔林
Add film to Buenos Aires: 沼澤
Fix tagline for Lagos
zh-Hant translation: 里斯本
Add poetry category: 伊斯坦堡
```

如果你不確定某樣東西是否合適——開一個 Issue 來聊。我們真正在問的只有一個問題：*這會幫助某個人更好地理解這個地方嗎？*

---

### 本地端執行

不需要 build，不需要安裝任何依賴：

```bash
python3 -m http.server 8000
# 瀏覽器打開 http://localhost:8000/index.html
```

也可以直接雙擊 `index.html`（若地球渲染為空白，請使用上方的本地伺服器——部分瀏覽器會攔截 `file://` 協議下的 `fetch()` 請求）。

---

### 技術架構

- 原生 HTML + React 18（Babel-standalone 即時編譯，零打包步驟）
- `d3-geo` 正射投影
- 海岸線資料來自 [Natural Earth](https://www.naturalearthdata.com/)（經 [world-atlas](https://github.com/topojson/world-atlas) 轉 TopoJSON）
- 三語介面（English / 简体中文 / 繁體中文），每座城的欄位均支援分語言覆蓋

---

### 授權

[MIT](LICENSE)。隨便 fork，隨便改，隨便用。註明來源是情義，不是義務。

---

<div align="center">

*Made with care. Spin slow.*

*用心做的。慢慢轉。*

</div>
