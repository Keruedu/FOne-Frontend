import type { Metadata } from "next";
import { Archivo, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const displayFont = Archivo({
  weight: "variable",
  subsets: ["latin", "vietnamese"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const uiFont = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOne — Trợ lý tìm dịch vụ trên Zalo",
  description:
    "Nhắn nhu cầu của bạn, FOne gợi ý tối đa 5 dịch vụ phù hợp kèm liên kết mở trực tiếp trong Zalo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${displayFont.variable} ${uiFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
