import Link from "next/link";
import type { ReactNode } from "react";

/** Gör om inline-länkar i markdown-stil [text](/sökväg) till klickbara länkar. */
export function renderText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    const cls = "text-brand underline underline-offset-2 hover:no-underline";
    parts.push(
      href.startsWith("/")
        ? <Link key={key++} href={href} className={cls}>{label}</Link>
        : <a key={key++} href={href} className={cls} rel="noopener">{label}</a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}
