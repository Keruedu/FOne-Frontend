import Image from "next/image";

export function BrandLogo() {
  return (
    <span className="brand-lockup brand-logo-lockup">
      <span className="brand-logo-image">
        <Image
          src="/brand/fone-logo.webp"
          alt="FOne"
          width={240}
          height={120}
          priority
        />
      </span>
      <small className="brand-logo-tagline">AI Service Navigator</small>
    </span>
  );
}
