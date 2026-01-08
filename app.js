(() => {
  "use strict";

  // ===== Config =====
  const STORAGE_KEY = "lang";
  const EMAIL_TO = "slottesin@gmail.com"; // <-- change target email here

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ===== i18n =====
  const I18N = {
    de: {
      "a11y.skip": "Zum Inhalt springen",

      "brand.title": "Text Humanizing Studio",
      "brand.tag": "AI-Entwürfe → Sprache, die nach Mensch klingt.",

      "nav.services": "Leistung",
      "nav.process": "Prozess",
      "nav.pricing": "Pakete",
      "nav.faq": "FAQ",
      "nav.cta": "Kostenloses Mini-Audit",

      "hero.pill": "High-End AI-Humanisierung · Copyediting · Brand Voice",
      "hero.titleHtml": "Mach aus KI-Texten <span class=\"grad\">glaubwürdige, lebendige Sprache.</span>",
      "hero.lead":
        "Du nutzt KI für schnelle Entwürfe – aber der Text wirkt glatt, austauschbar oder „zu AI“? Ich überarbeite deine Inhalte so, dass sie menschlich klingen, markenkonform sind und konvertieren – ohne den künstlichen Nachgeschmack.",
      "hero.cta1": "Text schicken & Angebot bekommen",
      "hero.cta2": "Vorher/Nachher ansehen",
      "hero.cta3": "Preise",
      "hero.kpi1b": "24–48h",
      "hero.kpi1": "typische Turnaround-Zeit",
      "hero.kpi2b": "Brand Voice",
      "hero.kpi2": "statt Standard-Glätte",
      "hero.kpi3b": "De-AI",
      "hero.kpi3": "Rhythmus, Subtext, Dichte",
      "hero.kpi4b": "DE/EN",
      "hero.kpi4": "möglich",

      "audit.title": "Mini-Audit (kostenlos)",
      "audit.text": "Schick mir 300–600 Wörter. Du bekommst kurzes Feedback + 1 Beispiel-Absatz „humanisiert“ zurück.",
      "audit.quote":
        "„Der Text klingt jetzt wie unsere Marke – nicht wie ein generischer KI-Output. Und die Landingpage-Conversion ist spürbar hochgegangen.“",
      "audit.who": "— Kund*in, DTC Brand (Testimonial-Beispiel)",

      "form.name": "Name",
      "form.email": "E-Mail",
      "form.website": "Website URL",
      "form.message": "Kurztext / Link / Kontext",
      "form.namePh": "Vorname Nachname",
      "form.emailPh": "name@domain.de",
      "form.websitePh": "https://…",
      "form.messagePh":
        "Worum geht’s? Zielgruppe, Tonalität, gewünschter Stil (z.B. klar, edgy, poetisch, seriös)…",
      "form.req": "Pflichtfeld",
      "form.opt": "Optional",
      "form.submit": "Mini-Audit anfragen",
      "form.altEmail": "Oder per E-Mail",
      "form.note": "Kein Backend: Beim Absenden öffnet sich dein E-Mail-Programm mit vorausgefüllter Nachricht (mailto:).",

      "services.title": "Was genau ist „AI-Humanisierung“?",
      "services.subtitle":
        "Kein oberflächliches Umschreiben. Sondern Copyediting auf Profi-Level: Rhythmus, Logik, Ton, Subtext, Relevanz – und der letzte Schliff, der nach Mensch riecht.",
      "services.c1t": "De-AI & Stil",
      "services.c1p": "Ich entferne typische KI-Muster (Floskeln, monotone Satzmelodie) und gebe dem Text echte Stimme.",
      "services.c2t": "Brand Voice",
      "services.c2p": "Ton trifft Zielgruppe: seriös, edgy, warm, poetisch – aber immer konsistent. Optional: Voice-Card.",
      "services.c3t": "Struktur & Conversion",
      "services.c3p": "Ich schärfe Argumentation, Reihenfolge, Headlines und CTA-Logik – damit Text nicht nur schön ist, sondern wirkt.",

      "examples.title": "Vorher/Nachher – typische Verbesserungen",
      "examples.subtitle":
        "Beispieltexte sind bewusst kurz. Du bekommst auf Wunsch ein echtes Vorher/Nachher an deinem Text (Mini-Audit).",
      "examples.beforeTitle": "Vorher (KI-typisch)",
      "examples.afterTitle": "Nachher (humanisiert)",
      "examples.b1t": "„In der heutigen schnelllebigen Welt…“",
      "examples.b1p": "Generische Einleitungen, null Kontext, null Profil.",
      "examples.b2t": "„Wir bieten innovative Lösungen…“",
      "examples.b2p": "Marketing-Nebel statt konkreter Nutzen/Beweise.",
      "examples.b3t": "Monotone Satzmelodie",
      "examples.b3p": "Gleich lange Sätze, keine Pausen, kein Rhythmus.",
      "examples.a1t": "Konkreter Einstieg",
      "examples.a1p": "Problem + Zielgruppe + messbarer Nutzen in 2–3 Sätzen.",
      "examples.a2t": "Beweis & Präzision",
      "examples.a2p": "Features werden in Resultate übersetzt – mit echten Details.",
      "examples.a3t": "Rhythmus & Stimme",
      "examples.a3p": "Varianz, Pointen, Subtext – ohne künstliche „AI“-Signatur.",

      "process.title": "Prozess",
      "process.subtitle": "Minimaler Aufwand für dich. Klare Übergaben. Saubere Versionierung.",
      "process.s1t": "1) Input",
      "process.s1p": "Du schickst Text/Link + Kontext (Ziel, Zielgruppe, Ton). Optional: Beispiele deiner Kommunikation.",
      "process.s2t": "2) Humanize & Optimize",
      "process.s2p": "Ich überarbeite Stil, Struktur, Logik, Dichte – und entferne KI-typische Muster. Optional: SEO/UX-Copy.",
      "process.s3t": "3) Lieferung",
      "process.s3p": "Du bekommst eine finale Version + (wenn sinnvoll) Alternativen. Format: Google Doc, Word oder Markdown.",

      "pricing.title": "Pakete",
      "pricing.subtitle": "Richtwerte. Exakter Fixpreis hängt von Umfang/Deadline ab – ich antworte schnell mit einem Angebot.",
      "pricing.ask": "Anfragen",
      "pricing.start": "Jetzt starten",
      "pricing.call": "Call anfragen",
      "pricing.pop": "Beliebt",
      "pricing.p1t": "Quick Polish",
      "pricing.p1p": "Für kurze Texte, Newsletter, Social Captions, Blog-Abschnitte.",
      "pricing.p1a": "ab 79€",
      "pricing.p1s": "/ bis ~600 Wörter",
      "pricing.p1l1": "De-AI Stil & Rhythmus",
      "pricing.p1l2": "Klarheit & Kürzen",
      "pricing.p1l3": "1 Runde Korrekturen",
      "pricing.p2t": "Landingpage Upgrade",
      "pricing.p2p": "Für Sales/Service Landingpages, About-Seiten, Angebotsseiten.",
      "pricing.p2a": "ab 249€",
      "pricing.p2s": "/ 1 Seite",
      "pricing.p2l1": "Headline-Varianten + CTA",
      "pricing.p2l2": "Struktur & Argumentation",
      "pricing.p2l3": "Brand-Voice Feinabstimmung",
      "pricing.p2l4": "2 Runden Korrekturen",
      "pricing.p3t": "Voice System",
      "pricing.p3p": "Für Creator/Teams: konsistente Stimme über alle Kanäle.",
      "pricing.p3a": "ab 490€",
      "pricing.p3s": "/ Setup",
      "pricing.p3l1": "Mini Brand-Voice Guide",
      "pricing.p3l2": "Beispiel-Texte + Do/Don’t",
      "pricing.p3l3": "Prompt-Snippets & Checkliste",
      "pricing.p3l4": "Feedback-Call (30 min)",
      "pricing.addons":
        "<b>Add-ons:</b> Express, SEO-Optimierung, Tonalitäts-Varianten, Longform, EN Übersetzung + Humanizing.",

      "faq.title": "FAQ",
      "faq.subtitle": "Die häufigsten Fragen – klar beantwortet.",
      "faq.q1": "Ist das einfach „Umschreiben“?",
      "faq.a1": "Nein. Humanisierung ist Copyediting: Logik, Struktur, Ton, Rhythmus, Präzision, Subtext. Ergebnis: glaubwürdig statt „Poliert“.",
      "faq.q2": "Kannst du meinen Stil exakt treffen?",
      "faq.a2": "Ja – ein bis zwei Beispiele reichen oft. Für langfristige Konsistenz empfehle ich das „Voice System“.",
      "faq.q3": "Arbeitest du vertraulich?",
      "faq.a3": "Ja. Auf Wunsch NDA. Standard: keine Nutzung deiner Texte als Beispiele ohne explizites OK.",
      "faq.q4": "Welche Formate?",
      "faq.a4": "Google Docs, Word, Notion, Markdown. Sag einfach, was du nutzt.",
      "faq.q5": "Wie schnell geht das?",
      "faq.a5": "Kurze Texte oft 24–48h. Express möglich abhängig von Umfang und Kalender. Sag deine Deadline – ich antworte mit Slot.",

      "cta.title": "Bereit für Text, der nach dir klingt?",
      "cta.text": "Schick mir deinen Entwurf. Du bekommst schnell ein klares Angebot – ohne Ping-Pong.",
      "cta.emailLine": "E-Mail-Ziel: <span class=\"mono\">slottesin@gmail.com</span>",
      "cta.btn1": "Mini-Audit anfragen",
      "cta.btn2": "Per E-Mail starten",

      "footer.copy": "©",
      "footer.name": "Charlotte — Text Humanizing Studio",
      "footer.impressum": "Impressum",
      "footer.privacy": "Datenschutz",

      "modal.close": "Schließen",
      "modal.impressum.title": "Impressum",
      "modal.impressum.body":
        "<p><strong>Platzhalter-Text</strong></p><p>Angaben gemäß § 5 TMG (Beispiel): Name, Anschrift, Kontakt.</p><p>Bitte ersetze diesen Text durch dein echtes Impressum.</p>",
      "modal.privacy.title": "Datenschutz",
      "modal.privacy.body":
        "<p><strong>Platzhalter-Text</strong></p><p>Diese Seite nutzt kein Tracking. Beim Kontaktformular wird eine E-Mail über dein Mail-Programm erstellt (mailto:).</p><p>Bitte ersetze diesen Text durch deine echte Datenschutzerklärung.</p>"
    },
    },
    en: {
      "a11y.skip": "Skip to content",
      "brand.title": "Text Humanizing Studio",
      "brand.tag": "AI drafts → language that sounds human.",

      "nav.services": "Service",
      "nav.process": "Process",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.cta": "Free mini audit",

      "hero.pill": "High-end AI humanizing · Copyediting · Brand voice",
      "hero.titleHtml": "Turn AI text into <span class=\"grad\">credible, alive language.</span>",
      "hero.lead": "You use AI for quick drafts — but the text feels glossy, generic or ‘too AI’? I refine your content so it sounds human, matches your brand and converts — without the artificial aftertaste.",
      "hero.cta1": "Send text & get a quote",
      "hero.cta2": "See before/after",
      "hero.cta3": "Pricing",
      "hero.kpi1b": "24–48h",
      "hero.kpi1": "typical turnaround time",
      "hero.kpi2b": "Brand voice",
      "hero.kpi2": "instead of generic polish",
      "hero.kpi3b": "De-AI",
      "hero.kpi3": "rhythm, subtext, density",
      "hero.kpi4b": "DE/EN",
      "hero.kpi4": "available",

      "audit.title": "Mini audit (free)",
      "audit.text": "Send 300–600 words. You’ll get quick feedback + one “humanized” sample paragraph back.",
      "audit.quote":
        "“The text finally sounds like our brand — not like generic AI output. And conversions improved noticeably.”",
      "audit.who": "— Client, DTC brand (example testimonial)",

      "form.name": "Name",
      "form.email": "Email",
      "form.website": "Website URL",
      "form.message": "Short text / link / context",
      "form.namePh": "First name Last name",
      "form.emailPh": "name@domain.com",
      "form.websitePh": "https://…",
      "form.messagePh":
        "What is it about? Audience, tone, desired style (e.g., clear, edgy, poetic, formal)…",
      "form.req": "Required",
      "form.opt": "Optional",
      "form.submit": "Request mini audit",
      "form.altEmail": "Or email instead",
      "form.note": "No backend: on submit, your email app opens with a prefilled message (mailto:).",

      "services.title": "What is ‘AI humanizing’ exactly?",
      "services.subtitle":
        "Not superficial rewriting. Professional copyediting: rhythm, logic, tone, subtext, relevance — the final pass that smells human.",
      "services.c1t": "De-AI & style",
      "services.c1p": "I remove typical AI patterns (fluff, monotone cadence) and give your copy a real voice.",
      "services.c2t": "Brand voice",
      "services.c2p": "Tone meets audience: serious, edgy, warm, poetic — always consistent. Optional: a small voice card.",
      "services.c3t": "Structure & conversion",
      "services.c3p": "I sharpen argument flow, order, headlines and CTA logic — so it’s not only pretty, but effective.",

      "examples.title": "Before/after — typical improvements",
      "examples.subtitle":
        "Examples are intentionally short. If you want, you’ll get a real before/after on your text (mini audit).",
      "examples.beforeTitle": "Before (AI-ish)",
      "examples.afterTitle": "After (humanized)",
      "examples.b1t": "“In today’s fast-paced world…”",
      "examples.b1p": "Generic openings: no context, no profile.",
      "examples.b2t": "“We offer innovative solutions…”",
      "examples.b2p": "Marketing fog instead of concrete benefits/proof.",
      "examples.b3t": "Monotone cadence",
      "examples.b3p": "Same-length sentences, no pauses, no rhythm.",
      "examples.a1t": "Concrete opener",
      "examples.a1p": "Problem + audience + measurable value in 2–3 sentences.",
      "examples.a2t": "Proof & precision",
      "examples.a2p": "Features translated into outcomes — with real, specific detail.",
      "examples.a3t": "Rhythm & voice",
      "examples.a3p": "Variation, punch, subtext — without an ‘AI signature’.",

      "process.title": "Process",
      "process.subtitle": "Minimal effort for you. Clear handoffs. Clean versions.",
      "process.s1t": "1) Input",
      "process.s1p": "You send text/link + context (goal, audience, tone). Optional: examples of your existing communication.",
      "process.s2t": "2) Humanize & optimize",
      "process.s2p": "I refine style, structure, logic and density — removing AI-typical patterns. Optional: SEO/UX copy.",
      "process.s3t": "3) Delivery",
      "process.s3p": "You get a final version + (when useful) alternatives. Formats: Google Doc, Word or Markdown.",

      "pricing.title": "Pricing",
      "pricing.subtitle": "Guidelines. Exact fixed price depends on scope/deadline — I’ll reply quickly with a quote.",
      "pricing.ask": "Ask",
      "pricing.start": "Start now",
      "pricing.call": "Book a call",
      "pricing.pop": "Popular",
      "pricing.p1t": "Quick polish",
      "pricing.p1p": "For short texts, newsletters, social captions, blog sections.",
      "pricing.p1a": "from €79",
      "pricing.p1s": "/ up to ~600 words",
      "pricing.p1l1": "De-AI style & rhythm",
      "pricing.p1l2": "Clarity & tightening",
      "pricing.p1l3": "1 revision round",

      "pricing.p2t": "Landing page upgrade",
      "pricing.p2p": "For service/sales pages, about pages, offer pages.",
      "pricing.p2a": "from €249",
      "pricing.p2s": "/ 1 page",
      "pricing.p2l1": "Headline variants + CTA",
      "pricing.p2l2": "Structure & argument flow",
      "pricing.p2l3": "Brand voice refinement",
      "pricing.p2l4": "2 revision rounds",

      "pricing.p3t": "Voice system",
      "pricing.p3p": "For creators/teams: consistent voice across channels.",
      "pricing.p3a": "from €490",
      "pricing.p3s": "/ setup",
      "pricing.p3l1": "Mini brand-voice guide",
      "pricing.p3l2": "Examples + do/don’t",
      "pricing.p3l3": "Prompt snippets & checklist",
      "pricing.p3l4": "30-min feedback call",

      "pricing.addons":
        "<b>Add-ons:</b> Express, SEO optimization, tone variants, longform, EN translation + humanizing.",

      "faq.title": "FAQ",
      "faq.subtitle": "Most common questions — answered clearly.",
      "faq.q1": "Is this just ‘rewriting’?",
      "faq.a1":
        "No. Humanizing is copyediting: logic, structure, tone, rhythm, precision, subtext. Result: credible, not ‘polished’.",
      "faq.q2": "Can you match my style exactly?",
      "faq.a2":
        "Yes — one or two examples are often enough. For long-term consistency, choose ‘Voice system’.",
      "faq.q3": "Do you work confidentially?",
      "faq.a3":
        "Yes. NDA on request. Default: no public use of your text without explicit approval.",
      "faq.q4": "Which formats?",
      "faq.a4": "Google Docs, Word, Notion, Markdown — tell me what you use.",
      "faq.q5": "How fast?",
      "faq.a5":
        "Short copy often within 24–48h. Express depends on scope and calendar. Tell me your deadline.",

      "cta.title": "Ready for copy that sounds like you?",
      "cta.text": "Send your draft. You’ll get a clear quote fast — no ping-pong.",
      "cta.emailLine": "Email target: <span class=\"mono\">slottesin@gmail.com</span>",
      "cta.btn1": "Request mini audit",
      "cta.btn2": "Start via email",

      "footer.copy": "©",
      "footer.name": "Charlotte — Text Humanizing Studio",
      "footer.impressum": "Imprint",
      "footer.privacy": "Privacy",

      "modal.close": "Close",
      "modal.impressum.title": "Imprint",
      "modal.impressum.body":
        "<p><strong>Placeholder</strong></p><p>Legal details (example): name, address, contact details.</p><p>Please replace this text with your real imprint.</p>",
      "modal.privacy.title": "Privacy",
      "modal.privacy.body":
        "<p><strong>Placeholder</strong></p><p>No tracking is used. The contact form opens your email client (mailto:).</p><p>Please replace this text with your real privacy policy.</p>"
    }
  };

  function setPressedLangButtons(lang) {
    $$(".lang-btn").forEach((btn) => {
      const pressed = btn.dataset.lang === lang;
      btn.setAttribute("aria-pressed", pressed ? "true" : "false");
    });
  }

  function t(lang, key) {
    const table = I18N[lang] || I18N.de;
    return table[key] ?? I18N.de[key] ?? "";
  }

  function applyI18n(lang) {
    document.documentElement.lang = lang;

    // text nodes
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      el.textContent = value;
    });

    // placeholders
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(lang, key);
      el.setAttribute("placeholder", value);
    });

    // HTML blocks
    $$("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = t(lang, key);
      el.innerHTML = value;
    });

    // hero title HTML duplicates
    $$("[data-i18n-html][data-i18n-html='hero.titleHtml'], [data-i18n-html='hero.titleHtml']").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(lang, key);
    });

    setPressedLangButtons(lang);
  }

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "de" || saved === "en") return saved;
    return "de";
  }

  function saveLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function encodeRFC3986(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) =>
      "%" + c.charCodeAt(0).toString(16).toUpperCase()
    );
  }

  function buildMailto({ lang, name, email, website, message }) {
    const subject =
      lang === "en"
        ? "Mini audit request — AI draft → human copy"
        : "Mini-Audit Anfrage — AI Draft → Human Copy";

    const lines = [
      lang === "en" ? "Hi Charlotte," : "Hi Charlotte,",
      "",
      lang === "en"
        ? "Here is my text/link/context:"
        : "Hier ist mein Text/Link/Kontext:",
      message || "",
      "",
      (lang === "en" ? "Name: " : "Name: ") + (name || ""),
      (lang === "en" ? "Email: " : "E-Mail: ") + (email || ""),
      (lang === "en" ? "Website: " : "Website: ") + (website || ""),
      "",
      lang === "en" ? "Thanks!" : "Danke!"
    ];

    const body = lines.join("\n");

    const mailto =
      "mailto:" +
      encodeRFC3986(EMAIL_TO) +
      "?subject=" +
      encodeRFC3986(subject) +
      "&body=" +
      encodeRFC3986(body);

    return mailto;
  }

  function validateForm(form) {
    const name = $("#name", form);
    const email = $("#email", form);
    const message = $("#message", form);

    // required fields
    if (!name.value.trim()) return { ok: false, field: name };
    if (!email.value.trim()) return { ok: false, field: email };
    if (!message.value.trim()) return { ok: false, field: message };

    // email validity
    if (email.type === "email" && !email.checkValidity()) return { ok: false, field: email };
    return { ok: true };
  }

  function closeModalIfOpen() {
    if (location.hash.includes("-modal")) {
      location.hash = "#top";
    }
  }

  function setupSmoothScroll() {
    if (prefersReducedMotion()) return;

    document.addEventListener("click", (e) => {
      const a = e.target.closest && e.target.closest("a[href^='#']");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      // allow default for modal targets
      if (href.endsWith("-modal")) return;

      // allow default for top
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Keep hash in URL (no jump)
      history.pushState(null, "", href);
    });
  }

  function init() {
    // Year
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());

    // Language
    const initialLang = getInitialLang();
    applyI18n(initialLang);

    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang !== "de" && lang !== "en") return;
        saveLang(lang);
        applyI18n(lang);
      });
    });

    // ESC closes modals
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModalIfOpen();
    });

    // Contact form -> mailto
    const form = $("#contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Use native validation UI
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const lang = getInitialLang();
        const data = {
          name: $("#name")?.value.trim() || "",
          email: $("#email")?.value.trim() || "",
          website: $("#website")?.value.trim() || "",
          message: $("#message")?.value.trim() || ""
        };

        const mailto = buildMailto({ lang, ...data });
        location.href = mailto;
      });
    }

    // Email fallback button (no JS -> harmless, with JS -> mailto blank template)
    const fallbackBtn = $("#emailFallbackBtn");
    if (fallbackBtn) {
      fallbackBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = getInitialLang();
        const mailto = buildMailto({ lang, name: "", email: "", website: "", message: "" });
        location.href = mailto;
      });
    }

    // Smooth scroll
    setupSmoothScroll();
  }

  // Safety: init only when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
