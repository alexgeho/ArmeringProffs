/**
 * Central site configuration for Armeringsproffs.
 *
 * Alla riktiga kontaktuppgifter samlas HÄR. Fyll i fälten markerade med TODO
 * så uppdateras hela sajten (sidfot, kontaktsida, JSON-LD, sitemap) automatiskt.
 */

export const site = {
  company: "Armeringsproffs",
  brand: "Armeringsproffs",
  // Huvudtjänst / SEO-fokus
  service: "Prefab armering",
  tagline: "Prefabricerad armering – klippt & bockad, korgar och nät i hela Sverige",

  // Domän (utan avslutande slash). OBS: domänen stavas utan genitiv-s.
  url: "https://armeringproffs.se",

  // Kontaktuppgifter
  phone: "+46 72 858 99 75",
  phoneHref: "tel:+46728589975",
  phoneOffice: "", // valfritt kontorsnummer
  phoneOfficeHref: "",
  email: "info@armeringproffs.se",

  // Juridisk info – varumärket "Armeringsproffs" drivs av det estniska bolaget AGRY OÜ.
  legalName: "AGRY OÜ",
  regNumber: "14785246", // estniskt registrikood
  vat: "EE102510841", // EU-momsnummer

  // Adress döljs publikt (bolaget är registrerat i Estland, tjänsten levereras i hela
  // Sverige). Fyll i street/zip/city om ni vill visa en svensk adress – då syns den
  // automatiskt i sidfot, kontaktsida och JSON-LD igen.
  address: {
    street: "",
    zip: "",
    city: "Sverige",
    country: "SE",
  },

  // Öppettider (för LocalBusiness-schema)
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "16:00" },
  ],

  // Leveransområde – hela landet
  region: "Sverige",
  regionInflected: "hela Sverige",

  // Sociala länkar (valfritt) – TODO
  social: {
    facebook: "",
    instagram: "",
  },

  // Geografiska koordinater (för LocalBusiness) – TODO: uppdatera vid behov
  geo: { lat: 62.0, lng: 15.0 },

  // Google Analytics 4 mät-ID (gtag.js). Tomt = ingen spårning laddas.
  gaId: "G-730LFLXQCP",

  // Meta (Facebook) Pixel-ID för retargeting. Laddas ENDAST efter cookie-samtycke.
  // Tomt = ingen pixel laddas. TODO [OWNER]: klistra in pixel-ID från Meta Events Manager.
  metaPixelId: "",
} as const;

export type Site = typeof site;
