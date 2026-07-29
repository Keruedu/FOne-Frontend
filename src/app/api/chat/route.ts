import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const apiUrl = process.env.FONE_API_URL?.trim();
  const apiKey = process.env.FONE_API_KEY?.trim();

  if (!apiUrl || !apiKey) {
    return NextResponse.json(
      {
        error:
          "Chat Web chưa được cấu hình backend. Hãy đặt FONE_API_URL và FONE_API_KEY ở server.",
      },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload không hợp lệ." }, { status: 400 });
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    typeof (payload as { text?: unknown }).text !== "string" ||
    !(payload as { text: string }).text.trim()
  ) {
    return NextResponse.json({ error: "Tin nhắn không được để trống." }, { status: 422 });
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({ text: (payload as { text: string }).text.trim() }),
      cache: "no-store",
    });
    const body = await response.json().catch(() => ({ error: "Backend trả dữ liệu không hợp lệ." }));
    return NextResponse.json(body, { status: response.status });
  } catch {
    return NextResponse.json(
      { error: "Không kết nối được FOne backend. Vui lòng thử lại sau." },
      { status: 502 },
    );
  }
}
