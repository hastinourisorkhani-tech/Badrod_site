/* ============================================================
   تنظیمات کلی
   ============================================================ */
const ADMIN_PASSWORD = `Nehomisa`; // فقط نسخه آزمایشی؛ امنیت واقعی ندارد
const STORAGE_KEY = `badrudSiteData_v2`;
const EMPTY_MSG = `اطلاعات این بخش به‌زودی تکمیل می‌شود`;
const AD_PLACEHOLDER = `فضای تبلیغاتی شما`;

/* ============================================================
   متن‌های قابل ویرایش (همه چندخطی‌ها با بک‌تیک)
   پاراگراف‌ها را با یک خط خالی جدا کنید.
   ============================================================ */
const siteContent = {
  about: `بادرود شهری در لبه کویر مرکزی ایران است؛ جایی که باغ‌ها با آب کم و دست‌های پرکار سبز مانده‌اند.

اینجا می‌شود صبح میان باغ‌های انار قدم زد، ظهر در بافت قدیمی سایه‌ها را دنبال کرد و شب زیر آسمانی ایستاد که چراغ شهر آن را کم‌رنگ نکرده است.

این متن نمونه است؛ از پنل مدیریت آن را با اطلاعات دقیق جایگزین کنید.`,
  history: `بخش تاریخ و پیشینه: اطلاعات تاریخی تأییدشده بادرود را اینجا بنویسید.`,
  culture: `بخش فرهنگ: آیین‌ها، غذاها، صنایع دستی و فرهنگ محلی را اینجا بنویسید.`,
  nature: `بخش طبیعت: کویر، باغ‌ها و چشم‌اندازهای اطراف بادرود را اینجا بنویسید.`,
  location: `بخش موقعیت: استان، شهرستان و فاصله تا شهرهای اصلی را اینجا بنویسید.`
};

const WHY = [
  { t: `طبیعت کویری`, d: `افق باز و سکوت کویر` },
  { t: `باغ‌های انار`, d: `رنگ و طعم پاییز` },
  { t: `تاریخ و فرهنگ`, d: `بافت و آیین‌های دیرینه` },
  { t: `آسمان شب`, d: `ستاره‌هایی که در شهر نمی‌بینید` },
  { t: `مهمان‌نوازی مردم`, d: `سفره‌ای باز برای مسافر` }
];

const FACT_KEYS = [
  { key: `history`, title: `تاریخ و پیشینه` },
  { key: `culture`, title: `فرهنگ` },
  { key: `nature`, title: `طبیعت` },
  { key: `location`, title: `موقعیت` }
];

/* تب‌های بخش گردشگری؛ cat = دسته گالری */
const TOURISM_TABS = [
  { key: `symbols`, title: `نمادهای بادرود`, icon: `🏜️`, cat: `طبیعت` },
  { key: `villages`, title: `روستاهای بخش`, icon: `🏘️`, cat: `روستاها` },
  { key: `accommodations`, title: `اقامت در بادرود`, icon: `🏡`, cat: `اقامتگاه‌ها` },
  { key: `medicalCenters`, title: `مراکز درمانی`, icon: `⚕️`, cat: `گردشگری` },
  { key: `ads`, title: `تبلیغات و خدمات بادرود`, icon: `📣`, cat: `گردشگری` }
];
const GALLERY_CATS = [`همه`, `طبیعت`, `جاهای دیدنی`, `گردشگری`, `روستاها`, `اقامتگاه‌ها`, `جشنواره انار`];

/* ============================================================
   داده‌های پیش‌فرض
   ============================================================ */
function mk(id, name, description, image, extra) {
  return Object.assign({
    id: id, name: name, image: image || ``, description: description || ``,
    details: ``, address: ``, phone: ``, map: ``, social: ``
  }, extra || {});
}

function makeDefaults() {
  const soon = `معرفی کوتاه به‌زودی تکمیل می‌شود.`;
  const ad = function (id) {
    return mk(id, AD_PLACEHOLDER, `برای ثبت تبلیغ کسب‌وکار خود با ما تماس بگیرید.`, ``, { placeholder: true });
  };
  return {
    content: JSON.parse(JSON.stringify(siteContent)),
    places: [
      mk(`pl1`, `کویر بادرود`, `تپه‌ها، افق باز و غروب‌های طلایی در حاشیه شهر.`, `images/place-desert.jpg`,
        { details: `کویر بادرود برای کسانی است که سکوت و فضای باز می‌خواهند. غروب و طلوع بهترین زمان دیدن آن است.

هنگام سفر آب، کلاه و کفش مناسب همراه داشته باشید و بدون راهنمای محلی وارد مسیرهای دور نشوید.` }),
      mk(`pl2`, `باغ‌های انار`, `باغ‌هایی که در پاییز سرخ می‌شوند.`, `images/place-orchards.jpg`,
        { details: `باغ‌های انار بخش مهمی از هویت بادرودند. برای بازدید از باغ‌ها بهتر است با صاحب باغ هماهنگ کنید.` }),
      mk(`pl3`, `آثار و بناهای تاریخی`, `بناهایی که حافظه شهر را نگه داشته‌اند.`, `images/place-history.jpg`,
        { details: `نام بنا، دوره تاریخی و ساعت بازدید را از پنل مدیریت اینجا وارد کنید.` }),
      mk(`pl4`, `محله‌ها و بافت تاریخی`, `کوچه‌های خشتی و خانه‌های حیاط‌دار.`, `images/place-oldtown.jpg`,
        { details: `توضیح کامل بافت تاریخی را از پنل مدیریت اینجا وارد کنید.` }),
      mk(`pl5`, `جاذبه‌های طبیعی اطراف`, `کوه، دشت و مسیرهای کوتاه طبیعت‌گردی.`, `images/place-nature.jpg`,
        { details: `نام و فاصله جاذبه‌های طبیعی اطراف را از پنل مدیریت اینجا وارد کنید.` })
    ],
    symbols: [
      mk(`sy1`, `آقا علی عباس (ع)`, `از نمادهای مذهبی و فرهنگی بادرود.`, `images/symbol-aqaali.jpg`),
      mk(`sy2`, `کویر`, `نماد طبیعی بادرود؛ افق باز و آسمان صاف شب.`, `images/symbol-desert.jpg`),
      mk(`sy3`, `انار`, `از محصولات شاخص باغ‌های بادرود.`, `images/symbol-pomegranate.jpg`),
      mk(`sy4`, `طالبی`, `از محصولات کشاورزی منطقه.`, `images/symbol-melon.jpg`),
      mk(`sy5`, `خیار`, `از محصولات کشاورزی منطقه.`, `images/symbol-cucumber.jpg`),
      mk(`sy6`, `انگور`, `از محصولات باغی منطقه.`, `images/symbol-grape.jpg`),
      mk(`sy7`, `سایر محصولات و نمادها`, soon, `images/symbol-other.jpg`)
    ],
    villages: [
      mk(`vi1`, `نام روستا را وارد کنید`, `روستاهای بخش را از پنل مدیریت اضافه کنید.`, `images/village-sample.jpg`)
    ],
    accommodations: [
      mk(`ac1`, `افصح‌الدوله`, soon, `images/stay-afsahodoleh.jpg`),
      mk(`ac2`, `عمارت سرهنگ`, soon, `images/stay-sarhang.jpg`),
      mk(`ac3`, `عمارت جیران`, soon, `images/stay-jiran.jpg`),
      mk(`ac4`, `عمارت دیاآوا`, soon, `images/stay-diaava.jpg`),
      mk(`ac5`, `کمپ متین‌آباد`, soon, `images/stay-matinabad.jpg`),
      mk(`ac6`, `سوئیت‌ها و هتل امامزاده`, soon, `images/stay-imamzadeh.jpg`),
      mk(`ac7`, `بوم‌گردی‌های روستاها`, soon, `images/stay-ecolodge.jpg`)
    ],
    medicalCenters: [
      mk(`me1`, `نام مرکز درمانی`, `نام، آدرس و تلفن واقعی را از پنل مدیریت وارد کنید.`, `images/medical-sample.jpg`)
    ],
    ads: [
      { id: `restaurants`, title: `رستوران`, items: [ad(`ad1`)] },
      { id: `fastFood`, title: `فست‌فود`, items: [ad(`ad2`)] },
      { id: `cafes`, title: `کافی‌شاپ`, items: [ad(`ad3`)] },
      { id: `hypermarkets`, title: `هایپرمارکت`, items: [ad(`ad4`)] },
      { id: `repairShops`, title: `تعمیرگاه`, items: [ad(`ad5`)] },
      { id: `other`, title: `سایر خدمات`, items: [ad(`ad6`)] }
    ],
    /* تصاویر اضافه گالری؛ تصاویر کارت‌ها خودکار به گالری می‌آیند */
    gallery: [
      { id: `g1`, name: `انارهای رسیده`, image: `images/gallery-1.jpg`, category: `طبیعت`, relatedPlace: `` },
      { id: `g2`, name: `غروب کویر`, image: `images/gallery-2.jpg`, category: `طبیعت`, relatedPlace: `pl1` },
      { id: `g3`, name: `جشنواره انار`, image: `images/gallery-festival-1.jpg`, category: `جشنواره انار`, relatedPlace: `` }
    ],
    contact: {
      phones: [],
      email: ``,
      address: `بادرود، شهرستان نطنز، استان اصفهان`,
      socials: [],
      emblem: ``,
      lat: 33.7167,
      lng: 52.95
    }
  };
}

/* ============================================================
   ذخیره‌سازی
   ============================================================ */
function loadData() {
  const base = makeDefaults();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const d = JSON.parse(raw);
    if (!d || typeof d !== `object`) return base;
    Object.keys(base).forEach(function (k) {
      if (d[k] !== undefined && typeof d[k] === typeof base[k] && Array.isArray(d[k]) === Array.isArray(base[k])) base[k] = d[k];
    });
    return base;
  } catch (e) {
    return base;
  }
}

function saveData() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); return true; }
  catch (e) { return false; }
}

let data = loadData();
const tState = { tab: `symbols`, adCat: `restaurants` };
const gState = { cat: `همه`, rel: `` };

/* ============================================================
   ابزارها
   ============================================================ */
function $(id) { return document.getElementById(id); }

function esc(s) {
  return String(s == null ? `` : s).replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`).replace(/"/g, `&quot;`);
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function mkImg(src, alt) {
  const wrap = document.createDocumentFragment();
  if (!src) {
    wrap.appendChild(el(`div`, `ph`, alt || `تصویر`));
    return wrap;
  }
  const i = document.createElement(`img`);
  i.alt = alt || ``;
  i.loading = `lazy`;
  i.addEventListener(`error`, function () { i.replaceWith(el(`div`, `ph`, alt || `تصویر`)); });
  i.src = src;
  wrap.appendChild(i);
  return wrap;
}

function paras(box, text) {
  box.textContent = ``;
  String(text || ``).split(/\n\s*\n/).forEach(function (t) {
    if (t.trim()) box.appendChild(el(`p`, ``, t.trim()));
  });
}

function toast(msg) {
  const t = $(`toast`);
  t.textContent = msg;
  t.classList.add(`show`);
  clearTimeout(toast.timer);
  toast.timer = setTimeout(function () { t.classList.remove(`show`); }, 2800);
}

function safeUrl(u) {
  const s = String(u || ``).trim();
  return /^(https?:\/\/|tel:|mailto:)/i.test(s) ? s : ``;
}

function toTel(p) {
  const digits = `۰۱۲۳۴۵۶۷۸۹`;
  return `tel:` + String(p).replace(/[۰-۹]/g, function (d) { return digits.indexOf(d); }).replace(/[^\d+]/g, ``);
}

function scrollToId(id) {
  const t = $(id);
  if (!t) { toast(EMPTY_MSG); return; }
  t.scrollIntoView({ behavior: `smooth`, block: `start` });
}

function uid(p) { return p + Date.now().toString(36) + Math.floor(Math.random() * 1000); }

/* ============================================================
   جستجوی آیتم‌ها و ساخت گالری مرکزی
   ============================================================ */
function adItems() {
  let all = [];
  data.ads.forEach(function (c) { all = all.concat(c.items); });
  return all;
}

function findItem(id) {
  let r = null;
  const lists = [{ s: `places`, l: data.places }];
  TOURISM_TABS.forEach(function (t) { if (t.key !== `ads`) lists.push({ s: t.key, l: data[t.key] }); });
  data.ads.forEach(function (c) { lists.push({ s: `ads`, l: c.items, c: c.id }); });
  lists.forEach(function (x) {
    x.l.forEach(function (it) { if (!r && it.id === id) r = { item: it, section: x.s, adCat: x.c || `` }; });
  });
  return r;
}

function allImages() {
  const out = [];
  function add(list, cat) {
    list.forEach(function (it) {
      if (it.image && !it.placeholder) out.push({ id: it.id, title: it.name, image: it.image, category: cat, relatedPlace: it.id });
    });
  }
  add(data.places, `جاهای دیدنی`);
  TOURISM_TABS.forEach(function (t) {
    if (t.key === `ads`) add(adItems(), t.cat); else add(data[t.key], t.cat);
  });
  data.gallery.forEach(function (g) {
    out.push({ id: g.id, title: g.name, image: g.image, category: g.category || `طبیعت`, relatedPlace: g.relatedPlace || `` });
  });
  return out;
}

/* ============================================================
   رندر بخش‌ها
   ============================================================ */
function renderAbout() {
  paras($(`aboutText`), data.content.about);
  const box = $(`whyGrid`);
  box.textContent = ``;
  WHY.forEach(function (w) {
    const d = el(`div`);
    d.appendChild(el(`b`, ``, w.t));
    d.appendChild(el(`span`, ``, w.d));
    box.appendChild(d);
  });
  const facts = $(`aboutFacts`);
  facts.textContent = ``;
  FACT_KEYS.forEach(function (f) {
    const d = el(`div`, `fact`);
    d.appendChild(el(`h3`, ``, f.title));
    const p = el(`div`);
    paras(p, data.content[f.key] || EMPTY_MSG);
    d.appendChild(p);
    facts.appendChild(d);
  });
}

function cardEl(item, icon) {
  const card = el(`article`, `card` + (item.placeholder ? ` is-ad` : ``));
  const im = el(`div`, `card-img`);
  im.appendChild(mkImg(item.image, item.name));
  const body = el(`div`, `card-body`);
  body.appendChild(el(`h3`, ``, (icon ? icon + ` ` : ``) + item.name));
  body.appendChild(el(`p`, ``, item.description || EMPTY_MSG));
  const btn = el(`button`, `btn small`, item.placeholder ? `ثبت تبلیغ` : `مشاهده بیشتر`);
  btn.type = `button`;
  btn.addEventListener(`click`, function () { openDetail(item.id); });
  body.appendChild(btn);
  card.appendChild(im);
  card.appendChild(body);
  return card;
}

function renderPlaces() {
  const g = $(`placesGrid`);
  g.textContent = ``;
  if (!data.places.length) g.appendChild(el(`p`, `empty`, EMPTY_MSG));
  data.places.forEach(function (p) { g.appendChild(cardEl(p, ``)); });
}

function renderTourism() {
  const tabs = $(`tourismTabs`);
  tabs.textContent = ``;
  TOURISM_TABS.forEach(function (t) {
    const b = el(`button`, `tab` + (t.key === tState.tab ? ` active` : ``), t.icon + ` ` + t.title);
    b.type = `button`;
    b.setAttribute(`role`, `tab`);
    b.addEventListener(`click`, function () { tState.tab = t.key; renderTourism(); });
    tabs.appendChild(b);
  });
  const sub = $(`tourismSub`);
  sub.textContent = ``;
  const cur = TOURISM_TABS.find(function (t) { return t.key === tState.tab; }) || TOURISM_TABS[0];
  let list;
  if (cur.key === `ads`) {
    if (!data.ads.some(function (c) { return c.id === tState.adCat; })) tState.adCat = data.ads.length ? data.ads[0].id : ``;
    data.ads.forEach(function (c) {
      const b = el(`button`, `chip` + (c.id === tState.adCat ? ` active` : ``), c.title);
      b.type = `button`;
      b.addEventListener(`click`, function () { tState.adCat = c.id; renderTourism(); });
      sub.appendChild(b);
    });
    const c = data.ads.find(function (x) { return x.id === tState.adCat; });
    list = c ? c.items : [];
  } else {
    list = data[cur.key] || [];
  }
  $(`tourismTitle`).textContent = cur.title;
  const grid = $(`tourismGrid`);
  grid.textContent = ``;
  if (!list.length) grid.appendChild(el(`p`, `empty`, EMPTY_MSG));
  list.forEach(function (it) { grid.appendChild(cardEl(it, cur.icon)); });
}

function renderGallery() {
  const f = $(`galleryFilters`);
  f.textContent = ``;
  GALLERY_CATS.forEach(function (c) {
    const b = el(`button`, `chip` + (c === gState.cat && !gState.rel ? ` active` : ``), c);
    b.type = `button`;
    b.addEventListener(`click`, function () { gState.cat = c; gState.rel = ``; renderGallery(); });
    f.appendChild(b);
  });
  const imgs = allImages().filter(function (i) {
    if (gState.rel) return i.relatedPlace === gState.rel;
    return gState.cat === `همه` || i.category === gState.cat;
  });
  const note = $(`galleryNote`);
  note.textContent = ``;
  if (gState.rel) {
    const r = findItem(gState.rel);
    note.appendChild(document.createTextNode(`تصاویر مربوط به «` + (r ? r.item.name : ``) + `» `));
    const b = el(`button`, `chip`, `نمایش همه تصاویر`);
    b.type = `button`;
    b.addEventListener(`click`, function () { gState.rel = ``; gState.cat = `همه`; renderGallery(); });
    note.appendChild(b);
  }
  const g = $(`galleryGrid`);
  g.textContent = ``;
  if (!imgs.length) { g.appendChild(el(`p`, `empty`, EMPTY_MSG)); return; }
  imgs.forEach(function (im) {
    const fig = el(`figure`);
    fig.tabIndex = 0;
    fig.appendChild(mkImg(im.image, im.title));
    fig.appendChild(el(`figcaption`, ``, im.title));
    const open = function () { openImage(im); };
    fig.addEventListener(`click`, open);
    fig.addEventListener(`keydown`, function (e) { if (e.key === `Enter`) open(); });
    g.appendChild(fig);
  });
}

function renderContact() {
  const c = data.contact;
  const ul = $(`contactList`);
  ul.textContent = ``;
  function row(label) {
    const li = el(`li`);
    li.appendChild(el(`span`, ``, label));
    ul.appendChild(li);
    return li;
  }
  const phoneLi = row(`شماره تماس`);
  if (c.phones.length) {
    c.phones.forEach(function (p, i) {
      if (i > 0) phoneLi.appendChild(document.createTextNode(` | `));
      const a = el(`a`, ``, p);
      a.href = toTel(p);
      phoneLi.appendChild(a);
    });
  } else {
    phoneLi.appendChild(document.createTextNode(EMPTY_MSG));
  }
  row(`آدرس`).appendChild(document.createTextNode(c.address || EMPTY_MSG));
  const mailLi = row(`ایمیل`);
  if (c.email) { const a = el(`a`, ``, c.email); a.href = `mailto:` + c.email; mailLi.appendChild(a); }
  else mailLi.appendChild(document.createTextNode(EMPTY_MSG));
  const socLi = row(`شبکه‌های اجتماعی`);
  let n = 0;
  c.socials.forEach(function (s) {
    const u = safeUrl(s.url);
    if (!u) return;
    if (n++ > 0) socLi.appendChild(document.createTextNode(` | `));
    const a = el(`a`, ``, s.name);
    a.href = u; a.target = `_blank`; a.rel = `noopener noreferrer`;
    socLi.appendChild(a);
  });
  if (!n) socLi.appendChild(document.createTextNode(EMPTY_MSG));
  const d = 0.08;
  $(`mapFrame`).src = `https://www.openstreetmap.org/export/embed.html?bbox=` +
    [c.lng - d, c.lat - d, c.lng + d, c.lat + d].join(`%2C`) + `&layer=mapnik&marker=` + c.lat + `%2C` + c.lng;
}

function renderAll() {
  renderAbout(); renderPlaces(); renderTourism(); renderGallery(); renderContact();
}

/* ============================================================
   مودال جزئیات و تصویر
   ============================================================ */
let lastFocus = null;

function openOverlay(o) {
  lastFocus = document.activeElement;
  o.hidden = false;
  document.body.style.overflow = `hidden`;
}

function closeOverlay(o) {
  o.hidden = true;
  if ($(`modalOverlay`).hidden && $(`adminOverlay`).hidden) document.body.style.overflow = ``;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

function actionBtn(text, fn, cls) {
  const b = el(`button`, `btn small ` + (cls || ``), text);
  b.type = `button`;
  b.addEventListener(`click`, fn);
  return b;
}

function showModal(title, image) {
  $(`modalTitle`).textContent = title;
  const im = $(`modalImg`);
  im.textContent = ``;
  if (image) im.appendChild(mkImg(image, title));
  $(`modalActions`).textContent = ``;
  openOverlay($(`modalOverlay`));
}

function closeModal() { closeOverlay($(`modalOverlay`)); }

function openDetail(id) {
  const f = findItem(id);
  if (!f) { toast(EMPTY_MSG); return; }
  const it = f.item;
  showModal(it.name, it.image);
  const body = $(`modalBody`);
  body.textContent = ``;
  const d = el(`div`);
  paras(d, it.description);
  body.appendChild(d);
  if (it.details) { const e = el(`div`); paras(e, it.details); body.appendChild(e); }
  const ul = el(`ul`, `info-list`);
  if (it.address) ul.appendChild(el(`li`, ``, `آدرس: ` + it.address));
  if (it.phone) {
    const li = el(`li`, ``, `تلفن: `);
    const a = el(`a`, ``, it.phone); a.href = toTel(it.phone);
    li.appendChild(a); ul.appendChild(li);
  }
  [[`map`, `مشاهده روی نقشه`], [`social`, `شبکه اجتماعی`]].forEach(function (k) {
    const u = safeUrl(it[k[0]]);
    if (!u) return;
    const li = el(`li`);
    const a = el(`a`, ``, k[1]); a.href = u; a.target = `_blank`; a.rel = `noopener noreferrer`;
    li.appendChild(a); ul.appendChild(li);
  });
  if (ul.children.length) body.appendChild(ul);
  if (!it.details && !ul.children.length && !it.placeholder && !it.description) body.appendChild(el(`p`, ``, EMPTY_MSG));
  if (!it.details && !ul.children.length && !it.placeholder && it.description) body.appendChild(el(`p`, `note-line`, EMPTY_MSG));
  const act = $(`modalActions`);
  if (it.placeholder) act.appendChild(actionBtn(`تماس با ما`, function () { closeModal(); scrollToId(`contact`); }));
  if (it.image && !it.placeholder) {
    act.appendChild(actionBtn(`مشاهده تصاویر`, function () {
      closeModal(); gState.rel = it.id; renderGallery(); scrollToId(`gallery`);
    }));
  }
  act.appendChild(actionBtn(`بستن`, closeModal, `ghost`));
}

function openImage(im) {
  showModal(im.title, im.image);
  $(`modalBody`).textContent = ``;
  $(`modalBody`).appendChild(el(`p`, ``, `دسته: ` + im.category));
  const act = $(`modalActions`);
  const f = im.relatedPlace ? findItem(im.relatedPlace) : null;
  if (f) {
    act.appendChild(actionBtn(`مشاهده جزئیات`, function () { openDetail(f.item.id); }));
    act.appendChild(actionBtn(`رفتن به بخش مربوطه`, function () {
      closeModal();
      if (f.section === `places`) { scrollToId(`places`); return; }
      tState.tab = f.section;
      if (f.adCat) tState.adCat = f.adCat;
      renderTourism();
      scrollToId(`tourism`);
    }));
  }
  act.appendChild(actionBtn(`بستن`, closeModal, `ghost`));
}

/* ============================================================
   ناوبری
   ============================================================ */
function setupNav() {
  const toggle = $(`navToggle`);
  const menu = $(`navMenu`);
  function setMenu(open) {
    menu.classList.toggle(`open`, open);
    toggle.classList.toggle(`open`, open);
    toggle.setAttribute(`aria-expanded`, String(open));
  }
  toggle.addEventListener(`click`, function () { setMenu(!menu.classList.contains(`open`)); });
  document.querySelectorAll(`a[href^="#"]`).forEach(function (a) {
    a.addEventListener(`click`, function (e) {
      const id = a.getAttribute(`href`).slice(1);
      e.preventDefault();
      setMenu(false);
      if (id === `home`) window.scrollTo({ top: 0, behavior: `smooth` }); else scrollToId(id);
    });
  });
  function onScroll() { $(`siteHeader`).classList.toggle(`scrolled`, window.scrollY > 40); }
  window.addEventListener(`scroll`, onScroll, { passive: true });
  onScroll();
  $(`emblemBtn`).addEventListener(`click`, function () {
    const u = safeUrl(data.contact.emblem);
    if (u) window.open(u, `_blank`, `noopener`); else toast(EMPTY_MSG);
  });
}

/* ============================================================
   پنل مدیریت (آزمایشی، بدون امنیت واقعی)
   ============================================================ */
const adm = { coll: `places`, id: null, msg: `` };

function collOptions() {
  const base = [[`content`, `متن‌های معرفی`], [`contact`, `اطلاعات تماس`], [`places`, `جاهای دیدنی`],
    [`symbols`, `نمادهای بادرود`], [`villages`, `روستاها`], [`accommodations`, `اماکن اقامتی`],
    [`medicalCenters`, `مراکز درمانی`]];
  data.ads.forEach(function (c) { base.push([`ads:` + c.id, `تبلیغات: ` + c.title]); });
  base.push([`gallery`, `تصاویر اضافه گالری`]);
  return base;
}

function getList(key) {
  if (key.indexOf(`ads:`) === 0) {
    const c = data.ads.find(function (x) { return x.id === key.slice(4); });
    return c ? c.items : null;
  }
  return Array.isArray(data[key]) ? data[key] : null;
}

function fld(id, label, value, area) {
  return `<label for="${id}">${esc(label)}</label>` + (area
    ? `<textarea id="${id}">${esc(value)}</textarea>`
    : `<input id="${id}" value="${esc(value)}">`);
}

function val(id) { const e = $(id); return e ? e.value : ``; }

function contentForm() {
  let h = `<h3>متن‌های معرفی</h3>` + fld(`admC_about`, `معرفی بادرود`, data.content.about, true);
  FACT_KEYS.forEach(function (f) { h += fld(`admC_` + f.key, f.title, data.content[f.key], true); });
  return h + `<p class="note">پاراگراف‌ها را با یک خط خالی جدا کنید.</p>` +
    `<div class="row"><button class="btn small" type="button" data-act="saveContent">ذخیره متن‌ها</button></div>`;
}

function contactForm() {
  const c = data.contact;
  const soc = c.socials.map(function (s) { return s.name + ` | ` + s.url; }).join(`\n`);
  return `<h3>اطلاعات تماس</h3>` +
    fld(`admT_phones`, `شماره‌ها (هر خط یک شماره)`, c.phones.join(`\n`), true) +
    fld(`admT_email`, `ایمیل`, c.email) + fld(`admT_address`, `آدرس`, c.address) +
    fld(`admT_socials`, `شبکه‌ها (هر خط: نام | لینک)`, soc, true) +
    fld(`admT_emblem`, `لینک نشان بادرود`, c.emblem) +
    fld(`admT_lat`, `عرض جغرافیایی`, c.lat) + fld(`admT_lng`, `طول جغرافیایی`, c.lng) +
    `<div class="row"><button class="btn small" type="button" data-act="saveContact">ذخیره تماس</button></div>`;
}

function listForm() {
  const list = getList(adm.coll) || [];
  if (!list.some(function (x) { return x.id === adm.id; })) adm.id = list.length ? list[0].id : null;
  const it = list.find(function (x) { return x.id === adm.id; });
  let h = `<h3>آیتم‌ها</h3><label for="admItem">انتخاب آیتم</label><select id="admItem">` +
    list.map(function (x) { return `<option value="${esc(x.id)}"${x.id === adm.id ? ` selected` : ``}>${esc(x.name)}</option>`; }).join(``) + `</select>`;
  if (it) {
    h += fld(`admF_name`, `نام`, it.name) + fld(`admF_image`, `مسیر تصویر (مثلاً images/نام.jpg)`, it.image);
    if (adm.coll === `gallery`) {
      h += `<label for="admF_category">دسته</label><select id="admF_category">` + GALLERY_CATS.slice(1).map(function (c) {
        return `<option${c === it.category ? ` selected` : ``}>${esc(c)}</option>`;
      }).join(``) + `</select>` + fld(`admF_relatedPlace`, `شناسه آیتم مرتبط (اختیاری)`, it.relatedPlace);
    } else {
      h += fld(`admF_description`, `توضیح کوتاه`, it.description, true) + fld(`admF_details`, `توضیح کامل`, it.details, true) +
        fld(`admF_address`, `آدرس`, it.address) + fld(`admF_phone`, `تلفن`, it.phone) +
        fld(`admF_map`, `لینک نقشه`, it.map) + fld(`admF_social`, `لینک شبکه اجتماعی`, it.social);
    }
  }
  return h + `<div class="row">` + (it ? `<button class="btn small" type="button" data-act="saveItem">ذخیره</button>` +
    `<button class="btn small danger" type="button" data-act="delItem">حذف</button>` : ``) +
    `<button class="btn small ghost" type="button" data-act="addItem">افزودن مورد جدید</button></div>`;
}

function adminLogin() {
  $(`adminBody`).innerHTML = `<h3>ورود مدیر</h3><label for="admPass">رمز عبور</label>` +
    `<input type="password" id="admPass" autocomplete="off"><div class="row">` +
    `<button class="btn small" type="button" data-act="login">ورود</button></div><p class="msg" id="admErr"></p>` +
    `<p class="note">نسخه آزمایشی؛ این ورود امنیت واقعی ندارد.</p>`;
  setTimeout(function () { const i = $(`admPass`); if (i) i.focus(); }, 0);
}

function adminPanel() {
  let h = `<h3>پنل مدیریت</h3><p class="msg">${esc(adm.msg)}</p><label for="admColl">بخش</label><select id="admColl">` +
    collOptions().map(function (o) { return `<option value="${esc(o[0])}"${o[0] === adm.coll ? ` selected` : ``}>${esc(o[1])}</option>`; }).join(``) + `</select>`;
  if (adm.coll === `content`) h += contentForm();
  else if (adm.coll === `contact`) h += contactForm();
  else h += listForm();
  h += `<h3>دسته‌های تبلیغاتی</h3>` + fld(`admNewCat`, `عنوان دسته جدید`, ``) +
    `<div class="row"><button class="btn small" type="button" data-act="addCat">افزودن دسته</button>` +
    (adm.coll.indexOf(`ads:`) === 0 ? `<button class="btn small danger" type="button" data-act="delCat">حذف دسته فعلی</button>` : ``) + `</div>` +
    `<div class="row"><button class="btn small ghost" type="button" data-act="reset">بازگشت به اطلاعات اولیه</button>` +
    `<button class="btn small danger" type="button" data-act="logout">خروج</button></div>`;
  $(`adminBody`).innerHTML = h;
  $(`admColl`).addEventListener(`change`, function (e) { adm.coll = e.target.value; adm.id = null; adm.msg = ``; adminPanel(); });
  const s = $(`admItem`);
  if (s) s.addEventListener(`change`, function (e) { adm.id = e.target.value; adm.msg = ``; adminPanel(); });
}

function persist(msg) {
  adm.msg = saveData() ? msg : `ذخیره‌سازی در مرورگر ممکن نشد.`;
  renderAll();
  adminPanel();
}

function lines(id) {
  return val(id).split(`\n`).map(function (l) { return l.trim(); }).filter(Boolean);
}

function adminAction(act) {
  const list = getList(adm.coll);
  const it = list ? list.find(function (x) { return x.id === adm.id; }) : null;
  if (act === `login`) {
    if (val(`admPass`) === ADMIN_PASSWORD) { adm.msg = ``; adminPanel(); }
    else $(`admErr`).textContent = `رمز عبور اشتباه است.`;
  } else if (act === `logout`) {
    adminLogin();
  } else if (act === `saveContent`) {
    ['about'].concat(FACT_KEYS.map(function (f) { return f.key; })).forEach(function (k) { data.content[k] = val(`admC_` + k); });
    persist(`متن‌ها ذخیره شد.`);
  } else if (act === `saveContact`) {
    const c = data.contact;
    c.phones = lines(`admT_phones`);
    c.email = val(`admT_email`).trim();
    c.address = val(`admT_address`).trim();
    c.emblem = val(`admT_emblem`).trim();
    c.socials = lines(`admT_socials`).map(function (l) {
      const p = l.split(`|`);
      return { name: p[0].trim(), url: p.slice(1).join(`|`).trim() };
    });
    const la = parseFloat(val(`admT_lat`)), ln = parseFloat(val(`admT_lng`));
    if (!isNaN(la) && !isNaN(ln)) { c.lat = la; c.lng = ln; }
    persist(`اطلاعات تماس ذخیره شد.`);
  } else if (act === `saveItem` && it) {
    it.name = val(`admF_name`).trim() || it.name;
    it.image = val(`admF_image`).trim();
    if (adm.coll === `gallery`) {
      it.category = val(`admF_category`);
      it.relatedPlace = val(`admF_relatedPlace`).trim();
    } else {
      [`description`, `details`, `address`, `phone`, `map`, `social`].forEach(function (k) { it[k] = val(`admF_` + k); });
      it.placeholder = false;
    }
    persist(`ذخیره شد.`);
  } else if (act === `delItem` && it) {
    if (!window.confirm(`این مورد حذف شود؟`)) return;
    list.splice(list.indexOf(it), 1);
    adm.id = null;
    persist(`حذف شد.`);
  } else if (act === `addItem` && list) {
    const n = adm.coll === `gallery`
      ? { id: uid(`g`), name: `تصویر جدید`, image: ``, category: `طبیعت`, relatedPlace: `` }
      : mk(uid(`it`), `مورد جدید`, ``, ``);
    list.push(n);
    adm.id = n.id;
    persist(`مورد جدید اضافه شد؛ اطلاعاتش را ویرایش و ذخیره کنید.`);
  } else if (act === `addCat`) {
    const t = val(`admNewCat`).trim();
    if (!t) { adm.msg = `عنوان دسته را وارد کنید.`; adminPanel(); return; }
    const c = { id: uid(`cat`), title: t, items: [] };
    data.ads.push(c);
    adm.coll = `ads:` + c.id; adm.id = null;
    persist(`دسته اضافه شد.`);
  } else if (act === `delCat`) {
    if (!window.confirm(`این دسته با همه آیتم‌هایش حذف شود؟`)) return;
    const cid = adm.coll.slice(4);
    data.ads = data.ads.filter(function (c) { return c.id !== cid; });
    adm.coll = `places`; adm.id = null;
    persist(`دسته حذف شد.`);
  } else if (act === `reset`) {
    if (!window.confirm(`همه تغییرات پاک و اطلاعات اولیه برگردانده شود؟`)) return;
    data = makeDefaults();
    adm.coll = `places`; adm.id = null;
    persist(`اطلاعات اولیه بازگردانی شد.`);
  }
}

function setupAdmin() {
  $(`adminOpen`).addEventListener(`click`, function () { adminLogin(); openOverlay($(`adminOverlay`)); });
  $(`adminClose`).addEventListener(`click`, function () { closeOverlay($(`adminOverlay`)); });
  $(`adminBody`).addEventListener(`click`, function (e) {
    const b = e.target.closest(`[data-act]`);
    if (b) adminAction(b.getAttribute(`data-act`));
  });
  $(`adminBody`).addEventListener(`keydown`, function (e) {
    if (e.key === `Enter` && e.target.id === `admPass`) adminAction(`login`);
  });
}

function setupModals() {
  $(`modalClose`).addEventListener(`click`, closeModal);
  [`modalOverlay`, `adminOverlay`].forEach(function (id) {
    $(id).addEventListener(`click`, function (e) { if (e.target === $(id)) closeOverlay($(id)); });
  });
  document.addEventListener(`keydown`, function (e) {
    if (e.key !== `Escape`) return;
    [`modalOverlay`, `adminOverlay`].forEach(function (id) { if (!$(id).hidden) closeOverlay($(id)); });
  });
}

document.addEventListener(`DOMContentLoaded`, function () {
  renderAll();
  setupNav();
  setupModals();
  setupAdmin();
});
