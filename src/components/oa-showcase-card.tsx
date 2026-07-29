type OaCardVariant =
  | "white"
  | "blue";

type OaCardLayout =
  | "standard"
  | "reverse"
  | "compact";

type OaShowcaseCardProps = {
  name: string;
  category: string;
  image: string | null;
  href: string;
  variant?: OaCardVariant;
  className?: string;
  size?: "floating" | "directory";
  layout?: OaCardLayout;
};

function OaLogo({
  image,
}: {
  image: string | null;
}) {
  if (!image) {
    return <b aria-hidden="true">F</b>;
  }

  // Small local OA assets should be rendered without transformation artifacts.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={image} alt="" width={58} height={58} />;
}

function ChatMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9.3 9.3 0 0 1-3.1-.55L4 20l1.55-4.15A7.15 7.15 0 0 1 4 11.5a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7.5Z" />
      <path d="M8.5 10h7M8.5 13.5h4.5" />
    </svg>
  );
}

export function OaShowcaseCard({
  name,
  category,
  image,
  href,
  variant = "white",
  className = "",
  size = "floating",
  layout = "standard",
}: OaShowcaseCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Mở ${name} trên Zalo`}
      className={`oa-showcase-card oa-card-${size} oa-variant-${variant} oa-layout-${layout} ${className}`.trim()}
    >
      <span className="oa-showcase-logo">
        <OaLogo image={image} />
      </span>
      <span className="oa-showcase-copy">
        <strong>{name}</strong>
        <small>{category}</small>
      </span>
      <span className="oa-showcase-action">
        <ChatMark />
      </span>
    </a>
  );
}
