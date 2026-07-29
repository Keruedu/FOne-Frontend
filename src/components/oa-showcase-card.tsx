type OaCardVariant =
  | "white"
  | "blue"
  | "split";

type OaShowcaseCardProps = {
  name: string;
  category: string;
  image: string | null;
  href: string;
  variant?: OaCardVariant;
  className?: string;
  size?: "floating" | "directory";
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

function EditMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14.2 5.2 4.6 4.6M4.8 19.2l1-4.6L16.6 3.8a1.8 1.8 0 0 1 2.6 0l1 1a1.8 1.8 0 0 1 0 2.6L9.4 18.2l-4.6 1Z" />
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
}: OaShowcaseCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Mở ${name} trên Zalo`}
      className={`oa-showcase-card oa-card-${size} oa-variant-${variant} ${className}`.trim()}
    >
      <span className="oa-showcase-logo">
        <OaLogo image={image} />
      </span>
      <span className="oa-showcase-copy">
        <strong>{name}</strong>
        <small>{category}</small>
      </span>
      <span className="oa-showcase-action">
        <EditMark />
      </span>
    </a>
  );
}
