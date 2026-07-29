import type { ReactNode } from "react";

export function Section({
  id,
  children,
  muted = false,
}: {
  id?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "bg-surface-muted" : "bg-surface"}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold tracking-widest text-zalo-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
      {lead ? <p className="mt-3 text-ink-muted">{lead}</p> : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-line bg-surface p-6 ${className}`}
    >
      {children}
    </div>
  );
}

/** Zalo-style chat bubbles used for the hero conversation mock. */
export function BubbleIn({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="bubble-in max-w-[85%] rounded-bubble border border-line bg-surface px-4 py-2.5 text-sm text-ink shadow-sm">
        {children}
      </div>
    </div>
  );
}

export function BubbleOut({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="bubble-out max-w-[85%] rounded-bubble bg-zalo-100 px-4 py-2.5 text-sm text-ink">
        {children}
      </div>
    </div>
  );
}

export function ServiceCardMock({
  name,
  reason,
}: {
  name: string;
  reason: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-3">
      <p className="text-sm font-medium text-ink">{name}</p>
      <p className="mt-0.5 text-xs text-ink-muted">{reason}</p>
      <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-zalo-600">
        Mở trong Zalo
        <span aria-hidden>→</span>
      </p>
    </div>
  );
}
