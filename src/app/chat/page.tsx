import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { WebChat } from "@/components/web-chat";

export default function ChatPage() {
  return (
    <main className="chat-page">
      <header className="chat-page-header">
        <div className="chat-page-nav">
          <Link href="/" className="chat-brand-link" aria-label="Về trang FOne">
            <BrandLogo />
          </Link>
          <Link href="/" className="chat-back">
            <span aria-hidden="true">←</span>
            Trang giới thiệu
          </Link>
        </div>
      </header>
      <WebChat />
    </main>
  );
}
