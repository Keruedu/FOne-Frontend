import QRCode from "qrcode";

/**
 * Canonical numeric Zalo OA deeplink, matching the backend's only allowed CTA form
 * (`https://zalo.me/<numeric-oa-id>`; see `src/domain/urls.py`).
 */
const CANONICAL_OA_URL = /^https:\/\/zalo\.me\/[0-9]{10,25}$/;

export interface OaLink {
  url: string | null;
  /** Set when the value is present but not a canonical numeric deeplink. */
  invalid: boolean;
}

/**
 * Read the OA deeplink from configuration.
 *
 * Deliberately not defaulted to a placeholder id: a wrong-but-plausible OA link
 * would send visitors to somebody else's Official Account, so an unset value renders
 * an explicit "not configured yet" state instead.
 */
export function oaLink(): OaLink {
  const raw = (process.env.NEXT_PUBLIC_ZALO_OA_URL ?? "").trim();
  if (!raw) return { url: null, invalid: false };
  if (!CANONICAL_OA_URL.test(raw)) return { url: null, invalid: true };
  return { url: raw, invalid: false };
}

/** Render the deeplink as an inline SVG data URI so the page makes no outbound requests. */
export async function oaQrCode(url: string): Promise<string> {
  const svg = await QRCode.toString(url, {
    type: "svg",
    margin: 1,
    color: { dark: "#0046b0", light: "#ffffff" },
  });
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
