import { site } from "@/config/site";

/**
 * Title med varumärket bara när det ryms: Google kapar titlar efter ~60 tecken.
 * Blir "<title> | Armeringsproffs" längre än 60 tecken visas titeln utan suffix
 * (sökorden står först, så det är varumärket som faller bort – inte sökordet).
 */
export function fitTitle(title: string): string | { absolute: string } {
  return `${title} | ${site.company}`.length <= 60 ? title : { absolute: title };
}

/** «Frågor och svar om <ämne>» – ämnet = H1:s första led. */
export function faqTitle(h1: string): string {
  const topic = h1.split(" – ")[0].trim();
  const keepCase = /^[A-ZÅÄÖ0-9-]{2,}/.test(topic);
  const lc = keepCase ? topic : topic.charAt(0).toLowerCase() + topic.slice(1);
  return `Frågor och svar om ${/^köpa /.test(lc) ? `att ${lc}` : lc}`;
}
