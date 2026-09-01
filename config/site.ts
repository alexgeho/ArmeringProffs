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
  phone: "+46 70 000 00 00", // TODO: riktigt telefonnummer
  phoneHref: "tel:+46700000000", // TODO
  phoneOffice: "", // valfritt kontorsnummer
  phoneOfficeHref: "",
  email: "info@armeringproffs.se",
  orgNumber: "000000-0000", // TODO

  address: {
    street: "Gatuadress 1", // TODO
    zip: "100 00", // TODO
    city: "Sverige", // TODO – ort för tillverkning/lager
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
} as const;

export type Site = typeof site;
