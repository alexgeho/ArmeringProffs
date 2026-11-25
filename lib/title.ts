import { site } from "@/config/site";

/**
 * Title med varumärket bara när det ryms: Google kapar titlar efter ~60 tecken.
 * Blir "<title> | Armeringsproffs" längre än 60 tecken visas titeln utan suffix
 * (sökorden står först, så det är varumärket som faller bort – inte sökordet).
 */
export function fitTitle(title: string): string | { absolute: string } {
  return `${title} | ${site.company}`.length <= 60 ? title : { absolute: title };
}
