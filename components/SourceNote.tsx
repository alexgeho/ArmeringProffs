import { SOURCES, type SourceId } from "@/config/sources";

/** En rad med extern källa (myndighet/Wikipedia) – samma stil som brödtextens länkar. */
export function SourceNote({ id, className = "mt-6" }: { id: SourceId; className?: string }) {
  const s = SOURCES[id];
  return (
    <p className={`${className} text-sm text-ink-soft`}>
      Läs mer:{" "}
      <a href={s.href} rel="noopener" target="_blank" className="text-brand underline underline-offset-2 hover:no-underline">
        {s.label}
      </a>{" "}
      ({s.publisher})
    </p>
  );
}
