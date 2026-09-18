/* ====================================================================
   PROGRAM PAGE - JSON-driven tab panels
   Program Studi Profesi Dokter - FKKG UNPRI

   Each tab reads one JSON file sitting next to this script:

     overview.json    -> Gambaran Umum
     academics.json   -> Akademik & Karier
     lecturers.json   -> Pimpinan & Dosen
     alumni.json      -> Alumni  (rendered inside Gambaran Umum,
                        into the [data-alumni-slot] before Visi & Misi)
     news.json        -> Berita & Agenda  (berita + agenda/aktivitas/galeri)
     partners.json    -> Mitra
     faq.json         -> FAQ
     cta.json         -> Ajakan mendaftar (di bawah konten, sebelum footer)

   The <section data-panel="..."> shells stay in index.html, so the tab
   switcher keeps working whether or not the data loads. Only the inside
   of each panel is rendered here.

   -------------------------------------------------------------------
   FOR DEVS / EDITORS
   -------------------------------------------------------------------
   Anything still waiting on copy from the prodi is marked in the JSON
   with a "_TODO" key. Search the folder for   _TODO   to find every
   spot that still needs text. Delete the "_TODO" line once it is filled.

   Empty text / empty arrays are safe: the block renders a neat
   "Coming Soon" placeholder instead of breaking the layout. Set
   "placeholder" on a block to change that wording.

   You should not need to touch this file or the HTML to add content.
   ==================================================================== */

(function () {
  "use strict";

  /* ---------- helpers ---------- */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Escapes first, then allows **bold** and *italic* from the JSON text.
  // Keeps the JSON readable for non-developers without opening an HTML hole.
  function rich(value) {
    return esc(value)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  }

  function has(value) {
    if (value == null) return false;
    if (Object.prototype.toString.call(value) === "[object Array]") return value.length > 0;
    if (typeof value === "string") return value.trim() !== "";
    return true;
  }

  function mount(selector) {
    return document.querySelector(selector);
  }

  function fail(el, label) {
    if (!el) return;
    el.innerHTML =
      '<div class="unpri-card"><div class="unpri-card__body">' +
      '<p style="color:#B91C1C; margin:0;">Gagal memuat ' + esc(label) + ". " +
      "Pastikan file JSON ada dan halaman dibuka lewat server (Live Server), " +
      "bukan langsung dari file lokal.</p>" +
      "</div></div>";
  }

  // Fetch one JSON file and hand it to a render function. Each panel is
  // independent, so a missing file only breaks its own tab.
  function load(file, selector, label, render, after) {
    var el = mount(selector);
    if (!el) return;

    fetch(file)
      .then(function (res) {
        if (!res.ok) throw new Error(res.status + " " + res.statusText);
        return res.json();
      })
      .then(function (data) {
        el.innerHTML = render(data || {});
        if (after) after();
      })
      .catch(function (err) {
        fail(el, label);
        console.error("Failed to load " + file + ":", err);
      });
  }

  /* ---------- icons ----------
     The Pe-icon-7-stroke font referenced by Untitled-1.css has no font file
     shipped alongside it, so every <i class="pe-7s-*"> rendered as an empty
     box. These inline SVGs replace it. They inherit colour via currentColor
     and size via the CSS on .unpri-ic / .unpri-video__play.
     JSON still uses the old pe-7s-* names; they are mapped here.           */

  var ICONS = {
    play: '<path d="M9 6.2l9.5 5.8L9 17.8z" fill="currentColor"/>',

    study:
      '<path d="M2.5 8.2L12 4.2l9.5 4-9.5 4-9.5-4z"/>' +
      '<path d="M6.6 9.9v4.6c0 1.5 2.4 2.6 5.4 2.6s5.4-1.1 5.4-2.6V9.9"/>' +
      '<path d="M21.5 8.2v5.1"/>',

    portfolio:
      '<rect x="2.8" y="7.2" width="18.4" height="12.6" rx="2.2"/>' +
      '<path d="M8.8 7.2V5.6a1.8 1.8 0 0 1 1.8-1.8h2.8a1.8 1.8 0 0 1 1.8 1.8v1.6"/>' +
      '<path d="M2.8 12.4h18.4"/>' +
      '<path d="M10.4 12.4v1.8h3.2v-1.8"/>',

    note:
      '<path d="M5.8 3.4h7.6l4.8 4.8v12.4H5.8z"/>' +
      '<path d="M13.4 3.4v4.8h4.8"/>' +
      '<path d="M9 12.6h6M9 15.8h6M9 9.4h2.6"/>',

    medal:
      '<circle cx="12" cy="14.6" r="5.4"/>' +
      '<path d="M12 12.4l.8 1.7 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.3 1.8-.3z"/>' +
      '<path d="M8.6 9.8L6.2 3.6h11.6l-2.4 6.2"/>',

    id:
      '<rect x="2.4" y="5" width="19.2" height="14" rx="2.2"/>' +
      '<circle cx="8.4" cy="10.6" r="2.1"/>' +
      '<path d="M5.2 15.8c.6-1.4 1.8-2.1 3.2-2.1s2.6.7 3.2 2.1"/>' +
      '<path d="M14.6 9.6h4.4M14.6 13.2h4.4"/>',

    ribbon:
      '<circle cx="12" cy="8.8" r="5.2"/>' +
      '<path d="M12 6.6l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/>' +
      '<path d="M8.6 13.2L7.2 20.6 12 18.2l4.8 2.4-1.4-7.4"/>',

    clock: '<circle cx="12" cy="12" r="8.4"/><path d="M12 6.8V12l3.4 2.1"/>',

    search: '<circle cx="10.6" cy="10.6" r="6.4"/><path d="M15.3 15.3l5.2 5.2"/>',

    news:
      '<path d="M3 5.4h13.4v14.2H4.8A1.8 1.8 0 0 1 3 17.8z"/>' +
      '<path d="M16.4 9.2h2.9a1.7 1.7 0 0 1 1.7 1.7v6.9a1.8 1.8 0 0 1-3.6 0"/>' +
      '<path d="M6.2 8.8h7M6.2 12.2h7M6.2 15.6h4.4"/>',

    chevronRight: '<circle cx="12" cy="12" r="8.4"/><path d="M10.6 8.4l3.6 3.6-3.6 3.6"/>',

    // Speech bubble - sambutan / kata sambutan.
    quote:
      '<path d="M4 5.2h16a1.4 1.4 0 0 1 1.4 1.4v8.6a1.4 1.4 0 0 1-1.4 1.4H9.4L5 20.2v-3.6H4a1.4 1.4 0 0 1-1.4-1.4V6.6A1.4 1.4 0 0 1 4 5.2z"/>' +
      '<path d="M7.6 10.6h8.8M7.6 13.4h5.6"/>',

    // Star / nilai-nilai.
    star:
      '<path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4.1 5.8-.8z"/>',

    // Sitemap / struktur organisasi.
    org:
      '<rect x="9" y="3" width="6" height="4.4" rx="1.1"/>' +
      '<rect x="2.6" y="16.6" width="6" height="4.4" rx="1.1"/>' +
      '<rect x="15.4" y="16.6" width="6" height="4.4" rx="1.1"/>' +
      '<path d="M12 7.4v4.4M5.6 16.6v-2.4h12.8v2.4M12 11.8v2.4"/>',

    // Checklist / capaian pembelajaran.
    check:
      '<path d="M20.4 11.2v7.2a2 2 0 0 1-2 2H5.6a2 2 0 0 1-2-2V5.6a2 2 0 0 1 2-2h9"/>' +
      '<path d="M8.4 11.4l2.8 2.8 8-8.4"/>',

    // Hospital / clinical learning ecosystem.
    hospital:
      '<path d="M3.6 20.4V8.4L12 3.6l8.4 4.8v12"/>' +
      '<path d="M2.4 20.4h19.2"/>' +
      '<path d="M12 8.8v5M9.5 11.3h5"/>' +
      '<path d="M9.6 20.4v-4.2h4.8v4.2"/>',

    // People / kehidupan mahasiswa.
    people:
      '<circle cx="9" cy="8.4" r="3.2"/>' +
      '<path d="M3.4 19.6c.6-3 2.8-4.8 5.6-4.8s5 1.8 5.6 4.8"/>' +
      '<path d="M16 5.6a3.2 3.2 0 0 1 0 6"/>' +
      '<path d="M17.2 14.9c2 .6 3.3 2.2 3.8 4.7"/>',

    // Trophy / prestasi.
    trophy:
      '<path d="M7.4 3.8h9.2v4.4a4.6 4.6 0 0 1-9.2 0z"/>' +
      '<path d="M7.4 5.2H4.8v1.4a3 3 0 0 0 2.6 3"/>' +
      '<path d="M16.6 5.2h2.6v1.4a3 3 0 0 1-2.6 3"/>' +
      '<path d="M12 12.8v3.4M8.6 20.2h6.8l-.8-4H9.4z"/>',

    // Image / galeri.
    image:
      '<rect x="3" y="4.6" width="18" height="14.8" rx="2.2"/>' +
      '<circle cx="8.6" cy="9.8" r="1.7"/>' +
      '<path d="M3.6 17.4l4.8-4.6 3.4 3.2 3.4-3.4 5.2 5"/>',

    // Question mark / FAQ.
    question:
      '<circle cx="12" cy="12" r="8.6"/>' +
      '<path d="M9.7 9.5a2.4 2.4 0 1 1 3.1 2.3c-.6.2-.9.8-.9 1.4v.6"/>' +
      '<path d="M12 16.6h.01"/>',

    // Flask / laboratorium.
    flask:
      '<path d="M9.6 3.4h4.8"/>' +
      '<path d="M10.4 3.4v5.4L5.4 17.6a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3l-5-8.8V3.4"/>' +
      '<path d="M7.8 14.9h8.4"/>',

    // Monitor / teknologi pembelajaran.
    monitor:
      '<rect x="3" y="4.6" width="18" height="12.2" rx="2"/>' +
      '<path d="M12 16.8v3M8.4 19.8h7.2"/>',

    // Globe / kerja sama internasional.
    globe:
      '<circle cx="12" cy="12" r="8.4"/>' +
      '<path d="M3.6 12h16.8"/>' +
      '<path d="M12 3.6c2.2 2.3 3.4 5.3 3.4 8.4s-1.2 6.1-3.4 8.4c-2.2-2.3-3.4-5.3-3.4-8.4S9.8 5.9 12 3.6z"/>',

    // Handshake-ish / alumni & mitra.
    alumni:
      '<path d="M2.6 8.6L12 4.4l9.4 4.2L12 12.8z"/>' +
      '<path d="M6.4 10.6v4.2c0 1.5 2.5 2.7 5.6 2.7s5.6-1.2 5.6-2.7v-4.2"/>' +
      '<path d="M19.6 9.6v5.2M18.4 19.6h2.4l-1.2-4.8z"/>'
  };

  // Old font class names -> icon keys, so the JSON files keep working as-is.
  var ICON_ALIASES = {
    "pe-7s-play": "play",
    "pe-7s-study": "study",
    "pe-7s-portfolio": "portfolio",
    "pe-7s-note2": "note",
    "pe-7s-note": "note",
    "pe-7s-medal": "medal",
    "pe-7s-id": "id",
    "pe-7s-ribbon": "ribbon",
    "pe-7s-clock": "clock",
    "pe-7s-search": "search",
    "pe-7s-news-paper": "news",
    "pe-7s-angle-right-circle": "chevronRight",
    "pe-7s-chat": "quote",
    "pe-7s-star": "star",
    "pe-7s-network": "org",
    "pe-7s-check": "check",
    "pe-7s-culture": "hospital",
    "pe-7s-users": "people",
    "pe-7s-cup": "trophy",
    "pe-7s-photo": "image",
    "pe-7s-help1": "question",
    "pe-7s-graph3": "alumni",
    "pe-7s-science": "flask",
    "pe-7s-monitor": "monitor",
    "pe-7s-global": "globe"
  };

  function icon(name, cls) {
    var key = ICON_ALIASES[name] || name;
    var body = ICONS[key] || ICONS.study;
    return (
      '<svg class="unpri-svg' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" ' +
      'width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ' +
      'focusable="false">' + body + "</svg>"
    );
  }

  /* ---------- shared building blocks ---------- */

  function sectionTitle(text) {
    return has(text) ? '<h2 class="unpri-sectionTitle">' + esc(text) + "</h2>" : "";
  }

  function placeholder(text) {
    return (
      '<div class="unpri-placeholder"><p>' +
      esc(has(text) ? text : "Coming Soon") +
      "</p></div>"
    );
  }

  // Standard content block: a white card with an icon + title head.
  // `inner` is already-built HTML; when it is empty the block falls back to
  // the placeholder so an unfinished section still looks deliberate.
  function block(opts) {
    var head =
      '<div class="unpri-cardHead">' +
      '<h3 class="unpri-card__ttl">' +
      '<span class="unpri-ic">' + icon(opts.icon || "pe-7s-study") + "</span>" +
      esc(opts.title) +
      "</h3>";
    if (has(opts.chip)) head += '<span class="unpri-chip">' + esc(opts.chip) + "</span>";
    head += "</div>";

    var body = "";
    if (has(opts.subtitle)) {
      body += '<p class="unpri-blockSub">' + esc(opts.subtitle) + "</p>";
    }
    if (has(opts.intro)) {
      body += '<p class="unpri-cardIntro">' + rich(opts.intro) + "</p>";
    }
    body += has(opts.inner) ? opts.inner : placeholder(opts.placeholder);

    return (
      '<div class="unpri-card" id="' + esc(opts.id || "") + '">' +
      '<div class="unpri-card__body">' + head + body + "</div></div>"
    );
  }

  function paragraphs(list) {
    if (!has(list)) return "";
    return (
      '<div class="unpri-prose">' +
      list
        .map(function (t) {
          return has(t) ? "<p>" + rich(t) + "</p>" : "";
        })
        .join("") +
      "</div>"
    );
  }

  // Plain bullet list.
  function bullets(list) {
    if (!has(list)) return "";
    var lis = list
      .map(function (t) {
        return has(t) ? "<li>" + rich(t) + "</li>" : "";
      })
      .join("");
    return has(lis) ? '<ul class="unpri-ul">' + lis + "</ul>" : "";
  }

  // Keunggulan cards - numbered badge, icon blob, title. Three per row; a
  // trailing row of one or two centres itself (flex + justify-content),
  // while a full row of three fills the width exactly and does not shift.
  // Entries may be a plain string or { "title": "...", "icon": "..." }.
  function renderWhyCards(list) {
    if (!has(list)) return "";

    return (
      '<div class="unpri-whyGrid">' +
      list
        .map(function (item, i) {
          var c = typeof item === "string" ? { title: item } : item || {};
          var num = i + 1 < 10 ? "0" + (i + 1) : String(i + 1);

          return (
            '<article class="unpri-whyCard">' +
            '<span class="unpri-whyCard__num">' + num +
            '<svg class="unpri-whyCard__ring" width="44" height="44" ' +
            'viewBox="0 0 44 44" aria-hidden="true" focusable="false">' +
            '<circle cx="22" cy="22" r="19.5"/></svg>' +
            "</span>" +
            '<div class="unpri-whyCard__blob">' +
            '<span class="unpri-whyCard__icon">' + icon(c.icon || "pe-7s-star") + "</span>" +
            "</div>" +
            '<h4 class="unpri-whyCard__ttl">' + rich(c.title) + "</h4>" +
            "</article>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  // Title + paragraph blocks. Entries with no text still show their heading
  // and a short "belum tersedia" note, so the outline of the page is visible
  // while the prodi is still writing the copy.
  function defBlocks(list) {
    if (!has(list)) return "";
    return (
      '<div class="unpri-defList">' +
      list
        .map(function (e) {
          var body = "";
          if (has(e.text)) body += "<p>" + rich(e.text) + "</p>";
          if (has(e.items)) body += bullets(e.items);
          if (!has(body)) {
            body = '<p class="unpri-defEmpty">Konten sedang disiapkan.</p>';
          }
          return (
            '<div class="unpri-def">' +
            '<h4 class="unpri-def__ttl">' + esc(e.title) + "</h4>" +
            '<div class="unpri-def__body">' + body + "</div></div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  /* ---------- shared: video frame ---------- */

  // Renders a 16:9 frame. With no `src` it stays an empty placeholder box, so
  // the layout is already correct before anyone has a video file to drop in.
  // Fill `src` with a YouTube/Vimeo embed URL, or a path to an .mp4/.webm and
  // it switches to a native <video> player on its own.
  function renderVideo(v, extraClass) {
    if (!v) return "";

    var cls = "unpri-video" + (extraClass ? " " + extraClass : "");
    var src = (v.src || "").trim();
    var inner;

    if (!src) {
      inner =
        '<div class="unpri-video__empty">' +
        '<span class="unpri-video__play">' + icon("play") + "</span>" +
        '<p class="unpri-video__caption">' + esc(v.caption || " ") + "</p>" +
        "</div>";
    } else if (/\.(mp4|webm|ogg|ogv|mov)(\?|#|$)/i.test(src)) {
      inner =
        '<video class="unpri-video__player" controls playsinline preload="metadata"' +
        (v.poster ? ' poster="' + esc(v.poster) + '"' : "") +
        '><source src="' + esc(src) + '"></video>';
    } else {
      inner =
        '<iframe class="unpri-video__player" src="' + esc(src) + '" ' +
        'title="' + esc(v.title || "Video") + '" frameborder="0" loading="lazy" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
        "allowfullscreen></iframe>";
    }

    var html = '<figure class="' + cls + '">';
    if (v.title) {
      html += '<figcaption class="unpri-video__title">' + esc(v.title) + "</figcaption>";
    }
    html += '<div class="unpri-video__frame">' + inner + "</div></figure>";
    return html;
  }

  /* ---------- shared: statistik strip ---------- */

  // `suffix` defaults to "+" so placeholder counts read as "1000+". Once the
  // real figures are known, set "suffix": "" on that item. Items with an empty
  // `value` are skipped, so the strip disappears until the numbers exist.
  function renderStats(stats) {
    if (!stats) return "";
    var items = stats.items || (stats.length ? stats : []);
    items = items.filter(function (s) {
      return has(s.value);
    });
    if (!items.length) return "";

    var cells = items
      .map(function (s) {
        var suffix = s.suffix == null ? "+" : s.suffix;
        return (
          '<div class="unpri-stat">' +
          '<span class="unpri-stat__num">' + esc(s.value) + esc(suffix) + "</span>" +
          '<span class="unpri-stat__label">' + esc(s.label) + "</span>" +
          "</div>"
        );
      })
      .join('<span class="unpri-stat__sep" aria-hidden="true"></span>');

    return '<div class="unpri-stats">' + cells + "</div>";
  }

  /* ====================================================================
     A. GAMBARAN UMUM
     ==================================================================== */

  // Sambutan Ketua Program Studi - portrait on the left, letter on the
  // right, signature under the portrait. Matches the layout sketch but
  // uses the page palette instead of the flat purple from the mockup.
  function renderSambutan(d) {
    if (!d) return "";

    var photo = has(d.photo)
      ? '<img src="' + esc(d.photo) + '" alt="' + esc(d.name || "Ketua Program Studi") + '" loading="lazy">'
      : '<span class="unpri-sambutan__ph">Foto Ketua Program Studi</span>';

    // The closing line ("Salam hangat, Medan") is just the last paragraph of
    // the letter - no separate styling, so it reads like the rest of the text.
    var lines = (d.paragraphs || []).slice();
    if (has(d.closing)) lines.push(d.closing);

    var body = paragraphs(lines);
    if (!has(body)) body = placeholder(d.placeholder);

    var caption = "";
    if (has(d.name)) {
      caption += '<p class="unpri-sambutan__name">' + esc(d.name) + "</p>";
    }
    if (has(d.role)) {
      caption += '<p class="unpri-sambutan__role">' + esc(d.role) + "</p>";
    }
    if (!has(caption)) {
      caption = '<p class="unpri-sambutan__role">Ketua Program Studi Profesi Dokter FKKG UNPRI</p>';
    }

    // The two sheets are full-size cards sitting BEHIND the letter, not
    // strips above it. At rest they are exactly under the card and invisible;
    // on hover they rise and shrink so their top edges fan out, while the
    // letter itself lifts with them.
    return (
      '<div class="unpri-sambutan">' +
      '<span class="unpri-sambutan__sheet unpri-sambutan__sheet--far" aria-hidden="true"></span>' +
      '<span class="unpri-sambutan__sheet unpri-sambutan__sheet--near" aria-hidden="true"></span>' +
      '<div class="unpri-sambutan__inner">' +
      '<div class="unpri-sambutan__media">' +
      '<div class="unpri-sambutan__photo">' + photo + "</div>" +
      '<div class="unpri-sambutan__caption">' + caption + "</div>" +
      "</div>" +
      '<div class="unpri-sambutan__text">' + body + "</div>" +
      "</div></div>"
    );
  }

  // Nilai-nilai prodi - one small card per value.
  function renderValues(list) {
    if (!has(list)) return "";
    return (
      '<div class="unpri-valueGrid">' +
      list
        .map(function (v, i) {
          var t = typeof v === "string" ? { title: v } : v;
          return (
            '<article class="unpri-value">' +
            '<span class="unpri-value__num">' + (i + 1) + "</span>" +
            '<h4 class="unpri-value__ttl">' + esc(t.title) + "</h4>" +
            (has(t.text) ? "<p>" + rich(t.text) + "</p>" : "") +
            "</article>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  // Akreditasi band + sertifikat strip.
  function renderAkreditasi(d) {
    if (!d) return "";

    // Reads as one line:  Akreditasi : A
    var band =
      '<div class="unpri-akredBand">' +
      '<p class="unpri-akredBand__line">' +
      '<span class="unpri-akredBand__label">' + esc(d.label || "Akreditasi") + "</span>" +
      '<span class="unpri-akredBand__sep">:</span>' +
      '<span class="unpri-akredBand__value">' +
      (has(d.status) ? esc(d.status) : '<span class="unpri-akredBand__empty">Belum tersedia</span>') +
      "</span></p>";
    if (has(d.note)) {
      band += '<p class="unpri-akredBand__note">' + rich(d.note) + "</p>";
    }
    band += "</div>";

    var certs = d.certificates || [];
    var strip;

    if (!certs.length) {
      strip = placeholder(d.placeholder || "Sertifikat dan pengakuan akan ditampilkan di sini.");
    } else {
      strip =
        '<div class="unpri-certGrid">' +
        certs
          .map(function (c) {
            var img = has(c.image)
              ? '<img src="' + esc(c.image) + '" alt="' + esc(c.title || "Sertifikat") + '" loading="lazy">'
              : '<span class="unpri-cert__ph">' + icon("pe-7s-medal") + "</span>";
            return (
              '<figure class="unpri-cert">' +
              '<div class="unpri-cert__frame">' + img + "</div>" +
              '<figcaption class="unpri-cert__meta">' +
              '<span class="unpri-cert__ttl">' + esc(c.title) + "</span>" +
              (has(c.issuer) ? '<span class="unpri-cert__issuer">' + esc(c.issuer) + "</span>" : "") +
              (has(c.year) ? '<span class="unpri-cert__year">' + esc(c.year) + "</span>" : "") +
              "</figcaption></figure>"
            );
          })
          .join("") +
        "</div>";
    }

    var sub = has(d.subtitle)
      ? '<h4 class="unpri-akredSub">' + esc(d.subtitle) + "</h4>"
      : "";

    return band + sub + strip;
  }

  function renderOverview(d) {
    var html = sectionTitle(d.sectionTitle || "Gambaran Umum");

    // Program video + counts strip stay at the top of the tab.
    html +=
      '<div class="unpri-overview">' + renderVideo(d.video) + renderStats(d.stats) + "</div>";

    // 1. Sekilas Program Studi
    var sekilas = d.sekilas || {};
    html += block({
      id: "sekilas",
      icon: "pe-7s-note2",
      title: sekilas.title || "Sekilas Program Studi",
      inner: paragraphs(sekilas.paragraphs),
      placeholder: sekilas.placeholder
    });

    // 2. Mengapa Memilih Profesi Dokter?
    var whyProfession = d.mengapaProfesiDokter || {};
    html += block({
      id: "mengapa-profesi",
      icon: "pe-7s-ribbon",
      title: whyProfession.title || "Mengapa Memilih Profesi Dokter?",
      inner: paragraphs(whyProfession.paragraphs),
      placeholder: whyProfession.placeholder
    });

    // 3. Mengapa Memilih Kami
    var why = d.mengapaPilihKami || {};
    html += block({
      id: "mengapa",
      icon: "pe-7s-star",
      title: why.title || "Mengapa Memilih Kami?",
      subtitle: why.subtitle,
      intro: why.intro,
      inner: renderWhyCards(why.items),
      placeholder: why.placeholder
    });

    // 4. Sambutan Ketua Program Studi
    var sambutan = d.sambutan || {};
    html += block({
      id: "sambutan",
      icon: "pe-7s-chat",
      title: sambutan.title || "Sambutan Ketua Program Studi",
      inner: renderSambutan(sambutan),
      placeholder: sambutan.placeholder
    });

    // 5. Alumni - filled from alumni.json once this panel is in the DOM.
    html += '<div data-alumni-slot></div>';

    // 6. Visi & Misi - two columns on one row.
    var visi = "";
    if (d.visi) {
      visi =
        '<div class="unpri-visi">' +
        '<p class="unpri-kicker">' + esc(d.visi.kicker || "Visi") + "</p>" +
        '<div class="unpri-visi__box">' +
        (has(d.visi.text)
          ? "<p>" + rich(d.visi.text) + "</p>"
          : '<p class="unpri-defEmpty">Konten sedang disiapkan.</p>') +
        "</div></div>";
    }

    var misiItems = (d.misi && d.misi.items) || [];
    var misi = "";
    if (d.misi) {
      var rows = misiItems
        .map(function (text, i) {
          return (
            '<div class="unpri-misi__item">' +
            '<span class="unpri-misi__num">' + (i + 1) + "</span>" +
            "<p>" + rich(text) + "</p></div>"
          );
        })
        .join("");
      misi =
        '<div class="unpri-misi">' +
        '<p class="unpri-kicker">' + esc(d.misi.kicker || "Misi") + "</p>" +
        (has(rows)
          ? '<div class="unpri-misi__list">' + rows + "</div>"
          : '<div class="unpri-visi__box"><p class="unpri-defEmpty">Konten sedang disiapkan.</p></div>') +
        "</div>";
    }

    html += block({
      id: "visimisi",
      icon: "pe-7s-ribbon",
      title: "Visi & Misi",
      inner: visi || misi ? '<div class="unpri-vm">' + visi + misi + "</div>" : ""
    });

    // 7. Nilai-nilai Program Studi
    var nilai = d.nilai || {};
    html += block({
      id: "nilai",
      icon: "pe-7s-medal",
      title: nilai.title || "Nilai-nilai Program Studi",
      intro: nilai.intro,
      inner: renderValues(nilai.items),
      placeholder: nilai.placeholder
    });

    // 8. Akreditasi + sertifikasi
    var akred = d.akreditasi || {};
    html += block({
      id: "akreditasi",
      icon: "pe-7s-medal",
      title: akred.title || "Akreditasi & Sertifikasi",
      inner: renderAkreditasi(akred),
      placeholder: akred.placeholder
    });

    return html;
  }

  /* ====================================================================
     B. AKADEMIK & KARIER
     ==================================================================== */

  // The nine career cards. Each carries a number, a short explanation and
  // the list of roles that sit under it.
  function renderCareerCards(list) {
    if (!has(list)) return "";
    return (
      '<div class="unpri-careerGrid">' +
      list
        .map(function (c, i) {
          var roles = (c.opportunities || [])
            .map(function (r) {
              return "<li>" + rich(r) + "</li>";
            })
            .join("");

          // Image sits on top of the card. With no `image` it stays a neutral
          // framed box, so all nine cards keep the same height and rhythm.
          var media =
            '<div class="unpri-careerCard__media">' +
            (has(c.image)
              ? '<img src="' + esc(c.image) + '" alt="' + esc(c.alt || c.title) + '" loading="lazy" onerror="this.remove();">'
              : "") +
            '<span class="unpri-careerCard__ph" aria-hidden="true">' + icon("pe-7s-portfolio") + "</span>" +
            "</div>";

          return (
            '<article class="unpri-careerCard">' +
            media +
            '<div class="unpri-careerCard__body">' +
            '<span class="unpri-careerCard__num">' + esc(c.number || i + 1) + "</span>" +
            '<h4 class="unpri-careerCard__ttl">' + esc(c.title) + "</h4>" +
            (has(c.description) ? '<p class="unpri-careerCard__desc">' + rich(c.description) + "</p>" : "") +
            (has(roles)
              ? '<p class="unpri-careerCard__label">' + esc(c.label || "Peluang Karier") + "</p>" +
                '<ul class="unpri-careerCard__list">' + roles + "</ul>"
              : "") +
            "</div></article>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderAcademics(d) {
    var html = sectionTitle(d.sectionTitle || "Akademik & Karier");

    var kur = d.kurikulum || {};
    html += block({
      id: "kurikulum",
      icon: "pe-7s-note2",
      title: kur.title || "Kurikulum dan Pembelajaran",
      intro: kur.intro,
      inner: defBlocks(kur.blocks),
      placeholder: kur.placeholder
    });

    var karier = d.peluangKarier || {};
    var karierInner = "";
    if (has(karier.tagline)) {
      karierInner += '<p class="unpri-careerTagline">' + esc(karier.tagline) + "</p>";
    }
    if (has(karier.paragraphs)) karierInner += paragraphs(karier.paragraphs);
    karierInner += renderCareerCards(karier.cards);

    html += block({
      id: "karier",
      icon: "pe-7s-portfolio",
      title: karier.title || "Peluang Karier Lulusan Profesi Dokter",
      inner: karierInner,
      placeholder: karier.placeholder
    });

    var cpl = d.cpl || {};
    html += block({
      id: "cpl",
      icon: "pe-7s-check",
      title: cpl.title || "Capaian Pembelajaran Lulusan (CPL)",
      intro: cpl.intro,
      inner: defBlocks(cpl.blocks),
      placeholder: cpl.placeholder
    });

    // Fasilitas Pendidikan - layout not decided yet, so this stays a
    // deliberate "Coming Soon" block.
    var fas = d.fasilitas || {};
    html += block({
      id: "fasilitas",
      icon: "pe-7s-culture",
      title: fas.title || "Fasilitas Pendidikan",
      intro: fas.intro,
      inner: has(fas.blocks) ? defBlocks(fas.blocks) : "",
      placeholder: fas.placeholder || "Coming Soon"
    });

    var rs = d.rumahSakit || {};
    html += block({
      id: "clinical",
      icon: "pe-7s-culture",
      title: rs.title || "Rumah Sakit dan Clinical Learning Ecosystem",
      intro: rs.intro,
      inner: defBlocks(rs.blocks),
      placeholder: rs.placeholder
    });

    var life = d.kehidupanMahasiswa || {};
    html += block({
      id: "student-life",
      icon: "pe-7s-users",
      title: life.title || "Kehidupan Mahasiswa",
      intro: life.intro,
      inner: defBlocks(life.blocks),
      placeholder: life.placeholder
    });

    var pres = d.prestasi || {};
    html += block({
      id: "prestasi",
      icon: "pe-7s-cup",
      title: pres.title || "Prestasi dan Penghargaan",
      intro: pres.intro,
      inner: defBlocks(pres.blocks),
      placeholder: pres.placeholder
    });

    return html;
  }

  /* ====================================================================
     C. PIMPINAN & DOSEN
     ==================================================================== */

  function renderLecturers(d) {
    var html = sectionTitle(d.sectionTitle || "Pimpinan & Dosen");
    var inner = "";
    var head = d.head;

    if (head && (has(head.name) || has(head.photo))) {
      inner +=
        '<div class="unpri-pmuLead">' +
        '<div class="unpri-avatar unpri-avatar--lg">' +
        (has(head.photo) ? '<img src="' + esc(head.photo) + '" alt="' + esc(head.name) + '">' : "") +
        "</div><div>" +
        '<p class="unpri-pmuLead__name">' + esc(head.name) + "</p>" +
        '<p class="unpri-pmuLead__role">' + esc(head.role) + "</p>" +
        "</div></div>";
    }

    // One card per dosen. The field set mirrors the "Dosen" form in the
    // Isi Website doc: Nama Lengkap (the heading) plus Gelar Akademik,
    // Sertifikasi, Bidang Ilmu and Fokus Keahlian. Rows with no value are
    // skipped, and an entry that only carries `meta` still renders fine.
    var FIELDS = [
      ["gelarAkademik", "Gelar Akademik"],
      ["sertifikasi", "Sertifikasi"],
      ["bidangIlmu", "Bidang Ilmu"],
      ["fokusKeahlian", "Fokus Keahlian"],
      ["pendidikanTerakhir", "Pendidikan Terakhir"],
      ["jabatanAkademik", "Jabatan Akademik"],
      ["penelitianUnggulan", "Penelitian Unggulan"],
      ["prestasi", "Prestasi"]
    ];

    var cards = (d.lecturers || [])
      .filter(function (l) {
        return has(l.name);
      })
      .map(function (l) {
        // photos is a list so a lecturer can carry fallback images; each one
        // removes itself on error, leaving the initials underneath.
        var imgs = (l.photos || [])
          .filter(has)
          .map(function (photo) {
            return '<img src="' + esc(photo) + '" alt="' + esc(l.name) + '" onerror="this.remove();">';
          })
          .join("");

        var rows = FIELDS.filter(function (f) {
          return has(l[f[0]]);
        })
          .map(function (f) {
            return (
              '<li><span class="unpri-dosenCard__key">' + esc(f[1]) + "</span>" +
              '<span class="unpri-dosenCard__val">' + rich(l[f[0]]) + "</span></li>"
            );
          })
          .join("");

        if (!has(rows) && has(l.meta)) {
          rows =
            '<li><span class="unpri-dosenCard__val">' + esc(l.meta) + "</span></li>";
        }

        var inner =
          '<div class="unpri-dosenCard__head">' +
          '<span class="unpri-lecturerAvatar">' + imgs + esc(l.initials) + "</span>" +
          '<h4 class="unpri-dosenCard__name">' + esc(l.name) + "</h4>" +
          "</div>" +
          (has(rows) ? '<ul class="unpri-dosenCard__list">' + rows + "</ul>" : "");

        return has(l.href)
          ? '<a class="unpri-dosenCard" href="' + esc(l.href) + '">' + inner + "</a>"
          : '<article class="unpri-dosenCard">' + inner + "</article>";
      })
      .join("");

    if (has(cards)) {
      inner +=
        '<div class="unpri-lecturers">' +
        '<span class="unpri-badge unpri-badge--outline">' +
        esc(d.sectionLabel || "Dosen Tetap") + "</span>" +
        '<div class="unpri-dosenGrid">' + cards + "</div>" +
        "</div>";
    }

    html += block({
      id: "pimpinan",
      icon: "pe-7s-users",
      title: d.title || "Pimpinan & Dosen",
      intro: d.intro,
      inner: inner,
      placeholder: d.placeholder
    });

    return html;
  }

  /* ====================================================================
     D. ALUMNI
     ==================================================================== */

  // One card per alumnus: photo on top, then the details list. Two columns.
  // `details` is a plain list of { label, value } rows so extra fields can be
  // added per person without touching this file.
  function renderAlumniCards(list) {
    if (!has(list)) return "";

    return (
      '<div class="unpri-alumniGrid">' +
      list
        .map(function (a) {
          var photo =
            '<div class="unpri-alumniCard__photo">' +
            (has(a.photo)
              ? '<img src="' + esc(a.photo) + '" alt="' + esc(a.name || "Alumni") + '" loading="lazy" onerror="this.remove();">'
              : "") +
            '<span class="unpri-alumniCard__ph" aria-hidden="true">' + icon("pe-7s-users") + "</span>" +
            "</div>";

          var rows = (a.details || [])
            .filter(function (r) {
              return has(r.label);
            })
            .map(function (r) {
              return (
                '<li><span class="unpri-alumniCard__key">' + esc(r.label) + "</span>" +
                '<span class="unpri-alumniCard__val">' +
                (has(r.value) ? rich(r.value) : "&mdash;") +
                "</span></li>"
              );
            })
            .join("");

          var body =
            '<div class="unpri-alumniCard__body">' +
            '<h4 class="unpri-alumniCard__name">' + esc(a.name) + "</h4>" +
            (has(a.role) ? '<p class="unpri-alumniCard__role">' + esc(a.role) + "</p>" : "") +
            (has(rows) ? '<ul class="unpri-alumniCard__list">' + rows + "</ul>" : "") +
            (has(a.quote) ? '<p class="unpri-alumniCard__quote">' + rich(a.quote) + "</p>" : "") +
            "</div>";

          return '<article class="unpri-alumniCard">' + photo + body + "</article>";
        })
        .join("") +
      "</div>"
    );
  }

  // Rendered into the [data-alumni-slot] placeholder inside the Gambaran
  // Umum panel, just above Visi & Misi. Kept in its own file so the alumni
  // data stays easy to find and edit.
  function renderAlumni(d) {
    // "Cerita Alumni" video.
    var html = renderVideo(d.video, "unpri-video--alumni");

    // Tracer study, serapan lulusan and peluang karier live inside the same
    // Profil Alumni card as the alumni themselves - they are facts about the
    // same group of people, not a separate section.
    var profil = d.profil || {};
    var inner = renderAlumniCards(profil.items);
    if (has(d.blocks)) inner += defBlocks(d.blocks);

    html += block({
      id: "alumni-profil",
      icon: "pe-7s-graph3",
      title: profil.title || "Profil Alumni",
      intro: profil.intro,
      inner: inner,
      placeholder: profil.placeholder
    });

    return html;
  }

  /* ====================================================================
     E. BERITA, AGENDA & AKTIVITAS
     ==================================================================== */

  function renderNews(d) {
    var all = d.allNews || {};

    // Title and the "Lihat Semua Berita" button share the card head row -
    // .unpri-cardHead is already a space-between flex row, so the button
    // lines up with the heading instead of sitting on a line of its own.
    var head =
      '<div class="unpri-cardHead">' +
      '<h3 class="unpri-card__ttl">' +
      '<span class="unpri-ic">' + icon("pe-7s-news-paper") + "</span>" +
      esc(d.title || "Berita") +
      "</h3>";
    if (all.href) {
      head +=
        '<a href="' + esc(all.href) + '" class="unpri-btn unpri-btn--ghost">' +
        icon(all.icon || "pe-7s-news-paper", "unpri-svg--lead") +
        esc(all.label || "Lihat Semua Berita") +
        "</a>";
    }
    head += "</div>";
    if (has(d.intro)) {
      head += '<p class="unpri-cardIntro">' + rich(d.intro) + "</p>";
    }

    var items = d.items || [];
    var body;

    if (!items.length) {
      body = placeholder(d.placeholder || "Belum ada berita.");
    } else {
      body =
        '<div class="unpri-newsGrid">' +
        items
          .map(function (n) {
            return (
              '<div class="unpri-newsCard">' +
              '<div class="unpri-newsCard__img">' +
              '<img src="' + esc(n.image) + '" alt="' + esc(n.title) +
              '" loading="lazy" onerror="this.remove();">' +
              "</div>" +
              '<div class="unpri-newsCard__body">' +
              '<p class="unpri-newsDate">' + esc(n.date) + "</p>" +
              '<h4 class="unpri-newsTitle">' + esc(n.title) + "</h4>" +
              '<p class="unpri-newsExcerpt">' + esc(n.excerpt) + "</p>" +
              '<a href="' + esc(n.href) + '" class="unpri-newsMore">' +
              esc(n.moreLabel || "Baca Selengkapnya \u2192") +
              "</a></div></div>"
            );
          })
          .join("") +
        "</div>";
    }

    var html =
      sectionTitle(d.sectionTitle || "Berita & Agenda") +
      '<div class="unpri-card" id="berita"><div class="unpri-card__body">' +
      head +
      '<hr class="unpri-newsSep">' +
      body +
      "</div></div>";

    // Agenda, aktivitas & galeri share one masonry board. `ratio` staggers
    // the tile heights ("3/4", "1/1", "4/3"...); leave it out for 4/3.
    var agenda = d.agenda || {};
    var tiles = (agenda.items || [])
      .filter(function (a) {
        return has(a.title) || has(a.image);
      })
      .map(function (a) {
        var meta = [];
        if (has(a.date)) meta.push(esc(a.date));
        if (has(a.place)) meta.push(esc(a.place));

        return (
          '<figure class="unpri-tile">' +
          '<div class="unpri-tile__img" style="--tile-ratio: ' +
          esc(a.ratio || "4/3") + '">' +
          (has(a.image)
            ? '<img src="' + esc(a.image) + '" alt="' + esc(a.title || "Dokumentasi") +
              '" loading="lazy" onerror="this.remove();">'
            : "") +
          '<span class="unpri-tile__ph" aria-hidden="true">' + icon("pe-7s-photo") + "</span>" +
          "</div>" +
          '<figcaption class="unpri-tile__cap">' +
          (has(a.title) ? '<h4 class="unpri-tile__ttl">' + esc(a.title) + "</h4>" : "") +
          (meta.length
            ? '<p class="unpri-tile__meta">' + meta.join(" \u00b7 ") + "</p>"
            : "") +
          "</figcaption></figure>"
        );
      })
      .join("");

    html += block({
      id: "agenda",
      icon: "pe-7s-photo",
      title: agenda.title || "Agenda, Aktivitas & Galeri",
      intro: agenda.intro,
      inner: has(tiles) ? '<div class="unpri-tileBoard">' + tiles + "</div>" : "",
      placeholder: agenda.placeholder
    });

    return html;
  }

  /* ====================================================================
     G. MITRA
     ==================================================================== */

  // Documentation band. Built only from partners that carry a `video` key, so
  // it disappears entirely when none do and grows as footage is collected.
  function renderPartnerDocs(d) {
    var withVideo = (d.partners || []).filter(function (p) {
      return p.video && has(p.name);
    });
    if (!withVideo.length) return "";

    var meta = d.documentation || {};

    var cards = withVideo
      .map(function (p) {
        var v = p.video || {};
        var frame = renderVideo(
          { src: v.src, poster: v.poster, caption: v.placeholder },
          "unpri-docCard__video"
        );

        var body =
          '<div class="unpri-docCard__body">' +
          '<h4 class="unpri-docCard__ttl">' + esc(p.name) + "</h4>";
        if (v.caption) body += '<p class="unpri-docCard__desc">' + esc(v.caption) + "</p>";
        if (v.date) body += '<p class="unpri-docCard__date">' + esc(v.date) + "</p>";
        body += "</div>";

        return '<article class="unpri-docCard">' + frame + body + "</article>";
      })
      .join("");

    var head = "";
    if (meta.title) head += '<h3 class="unpri-docHead__ttl">' + esc(meta.title) + "</h3>";
    if (meta.intro) head += '<p class="unpri-docHead__intro">' + esc(meta.intro) + "</p>";
    if (head) head = '<div class="unpri-docHead">' + head + "</div>";

    return (
      '<section class="unpri-partnerDocs">' +
      head +
      '<div class="unpri-docGrid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderPartners(d) {
    var list = (d.partners || []).filter(function (p) {
      return has(p.name);
    });

    var inner = renderPartnerDocs(d);

    if (list.length) {
      var cards = list
        .map(function (p) {
          // logoHeight overrides the default logo box height for logos with
          // odd proportions (see --logo-h in Untitled-2.css).
          var style = has(p.logoHeight) ? ' style="--logo-h: ' + esc(p.logoHeight) + '"' : "";
          var tooltip = p.tooltip || p.name;
          var img = has(p.logo)
            ? '<img src="' + esc(p.logo) + '" alt="' + esc(p.name) + '" onerror="this.remove();">'
            : "";

          return (
            '<div class="unpri-partnerCard" data-tooltip="' + esc(tooltip) + '">' +
            '<div class="unpri-partnerLogo"' + style + ">" +
            img +
            '<span class="unpri-partnerName">' + esc(p.name) + "</span>" +
            "</div></div>"
          );
        })
        .join("");

      if (d.logosTitle) {
        inner +=
          '<h3 class="unpri-docHead__ttl unpri-docHead__ttl--sub">' +
          esc(d.logosTitle) + "</h3>";
      }
      inner += '<div class="unpri-partnerGrid">' + cards + "</div>";
    }

    return (
      sectionTitle(d.sectionTitle || "Mitra") +
      block({
        id: "mitra",
        icon: "pe-7s-graph3",
        title: d.title || "Mitra Program Studi",
        intro: d.intro,
        inner: inner,
        placeholder: d.placeholder
      })
    );
  }

  /* ====================================================================
     H. FAQ
     ==================================================================== */

  // Native <details>/<summary> so the accordion needs no JavaScript and
  // stays keyboard accessible.
  function renderFaq(d) {
    var items = (d.items || []).filter(function (f) {
      return has(f.question);
    });

    var inner = "";
    if (items.length) {
      inner =
        '<div class="unpri-faq">' +
        items
          .map(function (f, i) {
            var answer = has(f.paragraphs)
              ? paragraphs(f.paragraphs)
              : has(f.answer)
              ? "<p>" + rich(f.answer) + "</p>"
              : '<p class="unpri-defEmpty">Jawaban sedang disiapkan.</p>';

            if (has(f.items)) answer += bullets(f.items);

            return (
              '<details class="unpri-faqItem"' + (i === 0 ? " open" : "") + ">" +
              '<summary class="unpri-faqQ">' +
              '<span class="unpri-faqQ__mark" aria-hidden="true">' + icon("pe-7s-help1") + "</span>" +
              '<span class="unpri-faqQ__text">' + esc(f.question) + "</span>" +
              '<span class="unpri-faqQ__chevron" aria-hidden="true"></span>' +
              "</summary>" +
              '<div class="unpri-faqA">' + answer + "</div>" +
              "</details>"
            );
          })
          .join("") +
        "</div>";
    }

    return (
      sectionTitle(d.sectionTitle || "FAQ") +
      block({
        id: "faq-list",
        icon: "pe-7s-help1",
        title: d.title || "Pertanyaan yang Sering Diajukan",
        intro: d.intro,
        inner: inner,
        placeholder: d.placeholder
      })
    );
  }

  /* ====================================================================
     CTA
     ==================================================================== */

  function renderCta(d) {
    var btn = d.button || {};

    // Nothing written yet -> hide the whole dark band rather than show an
    // empty strip. It comes back on its own once heading/text are filled.
    if (!has(d.heading) && !has(d.text)) {
      var band = document.querySelector(".unpri-cta");
      if (band) band.style.display = "none";
      return "";
    }

    var html = '<div class="unpri-cta__inner"><div class="unpri-cta__text">';

    if (d.eyebrow) html += '<p class="unpri-cta__eyebrow">' + esc(d.eyebrow) + "</p>";
    html +=
      '<h2 class="unpri-cta__title">' + esc(d.heading) + "</h2>" +
      '<p class="unpri-cta__desc">' + esc(d.text) + "</p>" +
      "</div>";

    if (btn.label) {
      html +=
        '<div class="unpri-cta__action">' +
        '<a class="unpri-cta__btn" href="' + esc(btn.href || "#") + '"' +
        (btn.target ? ' target="' + esc(btn.target) + '" rel="noopener"' : "") +
        ">" + esc(btn.label) + "</a>" +
        "</div>";
    }

    return html + "</div>";
  }

  /* ---------- boot ---------- */

  // Accordion behaviour: opening one FAQ entry closes the others. Delegated
  // from the document because the list is rendered after this script runs.
  function initFaqAccordion() {
    document.addEventListener("click", function (e) {
      var node = e.target;
      var summary = null;
      while (node && node !== document) {
        if (node.tagName === "SUMMARY" && node.className.indexOf("unpri-faqQ") > -1) {
          summary = node;
          break;
        }
        node = node.parentNode;
      }
      if (!summary) return;

      var item = summary.parentNode;
      var list = item.parentNode;

      // Let the browser toggle first, then close every sibling.
      window.setTimeout(function () {
        if (!item.open) return;
        var all = list.querySelectorAll("details.unpri-faqItem");
        for (var i = 0; i < all.length; i++) {
          if (all[i] !== item) all[i].removeAttribute("open");
        }
      }, 0);
    });
  }

  function boot() {
    initFaqAccordion();
    // Gambaran Umum first; the alumni block is rendered into the slot it
    // leaves behind, so it has to wait for the panel to exist.
    load("overview.json", '[data-panel="overview"]', "Gambaran Umum", renderOverview,
      function () {
        load("alumni.json", "[data-alumni-slot]", "Alumni", renderAlumni);
      });
    load("academics.json", '[data-panel="academics"]', "Akademik & Karier", renderAcademics);
    load("lecturers.json", '[data-panel="lecturers"]', "Pimpinan & Dosen", renderLecturers);
    load("news.json", '[data-panel="news"]', "Berita & Agenda", renderNews);
    load("partners.json", '[data-panel="partners"]', "Mitra", renderPartners);
    load("faq.json", '[data-panel="faq"]', "FAQ", renderFaq);
    load("cta.json", "[data-cta]", "Ajakan Mendaftar", renderCta);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
