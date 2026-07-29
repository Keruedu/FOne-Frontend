import { oaLink, oaQrCode } from "@/lib/oa";

export async function OaButton({
  size = "base",
}: {
  size?: "base" | "large";
}) {
  const { url, invalid } = oaLink();
  const sizing = size === "large" ? "button-large" : "";

  if (!url) {
    return (
      <span
        className={`button button-outline cursor-not-allowed opacity-60 ${sizing}`}
        title={
          invalid
            ? "NEXT_PUBLIC_ZALO_OA_URL phải có dạng https://zalo.me/<oa_id_dạng_số>"
            : "Đặt NEXT_PUBLIC_ZALO_OA_URL để bật liên kết này"
        }
      >
        {invalid ? "OA chưa hợp lệ" : "Mở OA FOne"}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className={`button button-outline ${sizing}`}
    >
      Mở OA FOne
    </a>
  );
}

export async function OaQrPanel() {
  const { url, invalid } = oaLink();

  if (!url) {
    return (
      <div className="rounded-card border border-dashed border-line p-6 text-center">
        <p className="text-sm font-medium text-ink">Mã QR chưa sẵn sàng</p>
        <p className="mt-2 text-xs text-ink-muted">
          {invalid ? (
            <>
              <code className="font-mono">NEXT_PUBLIC_ZALO_OA_URL</code> phải là
              deeplink số dạng{" "}
              <code className="font-mono">https://zalo.me/&lt;oa_id&gt;</code>.
            </>
          ) : (
            <>
              Đặt <code className="font-mono">NEXT_PUBLIC_ZALO_OA_URL</code> trong{" "}
              <code className="font-mono">.env.local</code> để hiện mã QR và bật nút
              quan tâm OA.
            </>
          )}
        </p>
      </div>
    );
  }

  const qr = await oaQrCode(url);
  return (
    <div className="rounded-card border border-line bg-surface p-5 text-center">
      {/* Inline SVG data URI: the page makes no outbound request to render this. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={qr}
        alt={`Mã QR mở Official Account FOne: ${url}`}
        className="mx-auto h-40 w-40"
      />
      <p className="mt-3 text-sm font-medium text-ink">Quét bằng ứng dụng Zalo</p>
      <p className="mt-1 font-mono text-xs break-all text-ink-muted">{url}</p>
    </div>
  );
}
