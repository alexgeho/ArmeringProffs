/**
 * Central site configuration for Agry Entreprenad AB.
 *
 * Alla riktiga kontaktuppgifter samlas HÄR. Fyll i fälten markerade med TODO
 * så uppdateras hela sajten (sidfot, kontaktsida, JSON-LD, sitemap) automatiskt.
 */

export const site = {
  company: "Agry Entreprenad AB",
  brand: "Agry Entreprenad",
  // Huvudtjänst / SEO-fokus
  service: "Gjuta betongplatta",
  tagline: "Gjutning av betongplattor och husgrunder i Stockholm",

  // Domän (utan avslutande slash)
  url: "https://gjutabetongplatta.se",

  // Kontaktuppgifter
  phone: "+46 70 757 75 75", // Support (primär, visas i header/footer/CTA)
  phoneHref: "tel:+46707577575",
  phoneOffice: "+46 81 241 02 76", // Kontor
  phoneOfficeHref: "tel:+46812410276",
  email: "info@gjutabetongplatta.se",
  orgNumber: "000000-0000", // TODO

  address: {
    street: "Gatuadress 1", // TODO
    zip: "100 00", // TODO
    city: "Stockholm", // TODO
    country: "SE",
  },

  // Öppettider (för LocalBusiness-schema)
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" },
  ],

  // Serviceområde – huvudort
  region: "Stockholm",
  regionInflected: "Stockholm med omnejd",

  // Sociala länkar (valfritt) – TODO
  social: {
    facebook: "",
    instagram: "",
  },

  // Geografiska koordinater (för LocalBusiness) – TODO: uppdatera vid behov
  geo: { lat: 59.3293, lng: 18.0686 },
} as const;

export type Site = typeof site;
