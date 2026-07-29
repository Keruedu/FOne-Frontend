import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOne — Trợ lý tìm dịch vụ trên Zalo",
  description:
    "Nhắn nhu cầu của bạn, FOne gợi ý tối đa 5 dịch vụ đã được kiểm chứng kèm liên kết mở trực tiếp trong Zalo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
