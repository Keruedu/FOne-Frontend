import type { ReactNode } from "react";

export function Section({
  id,
  children,
  muted = false,
  wash = false,
}: {
  id?: string;
  children: ReactNode;
  muted?: boolean;
  wash?: boolean;
}) {
  const background = wash ? "hero-wash" : muted ? "bg-surface-muted" : "bg-surface";
  return (
    <section id={id} className={background}>
      <div className="mx-auto max-w-5xl px-5 py-14 sm:py-18">{children}</div>
    </section>
  );
}

export function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-xl text-center">
      <h2 className="text-2xl font-semibold text-ink sm:text-[1.7rem]">{title}</h2>
      {lead ? <p className="mt-2 text-sm text-ink-muted">{lead}</p> : null}
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
      className={`rounded-card border border-line bg-surface p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function BubbleIn({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="bubble-in max-w-[88%] rounded-bubble border border-line bg-surface px-3.5 py-2 text-[13px] leading-snug text-ink">
        {children}
      </div>
    </div>
  );
}

export function BubbleOut({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="bubble-out max-w-[88%] rounded-bubble bg-zalo-100 px-3.5 py-2 text-[13px] leading-snug text-ink">
        {children}
      </div>
    </div>
  );
}

/**
 * A Zalo-like phone frame around the sample conversation. It is the page's main
 * visual, so the chat itself carries the explanation instead of body copy.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[19rem]">
      <div className="rounded-[2.2rem] border border-line bg-surface p-2 shadow-[0_18px_40px_-18px_rgba(16,24,40,0.35)]">
        <div className="overflow-hidden rounded-[1.8rem] bg-surface-muted">
          <div className="flex items-center gap-2.5 bg-zalo-500 px-4 pt-3 pb-3 text-white">
            <span aria-hidden className="text-lg leading-none opacity-90">
              ‹
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
              F1
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">FOne</span>
              <span className="block text-[11px] text-white/80">Official Account</span>
            </span>
          </div>
          <div className="space-y-2 px-3 py-3.5">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** A result card as it appears inside the chat, mirroring the assistant's reply. */
export function ResultCard({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface px-3 py-2">
      <p className="text-[13px] font-medium text-ink">{label}</p>
      <p className="mt-1 text-[11px] font-medium text-zalo-600">Mở trong Zalo →</p>
    </div>
  );
}

export function Tile({
  icon,
  label,
  tint,
}: {
  icon: string;
  label: string;
  tint: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-card border border-line bg-surface px-3 py-4 text-center">
      <span
        aria-hidden
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg ${tint}`}
      >
        {icon}
      </span>
      <span className="text-[13px] font-medium text-ink">{label}</span>
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-ink">
      <span aria-hidden className="mt-px text-emerald-600">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export function CrossItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-ink-muted">
      <span aria-hidden className="mt-px">
        ✕
      </span>
      <span>{children}</span>
    </li>
  );
}
