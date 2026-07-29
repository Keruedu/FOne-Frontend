"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";

export function AdaptiveHeader({ oaUrl }: { oaUrl: string | null }) {
  const [compact, setCompact] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    lastScroll.current = window.scrollY;

    function updateHeader() {
      const current = window.scrollY;
      const delta = current - lastScroll.current;

      if (current < 36) {
        setCompact(false);
      } else if (delta > 1) {
        setCompact(true);
      } else if (delta < -1) {
        setCompact(false);
      }

      lastScroll.current = current;
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`adaptive-header ${compact ? "is-compact" : ""}`}>
      <div className="adaptive-header-inner">
        <Link href="#top" className="brand-home-link" aria-label="FOne - về đầu trang">
          <BrandLogo />
        </Link>

        <nav className="adaptive-nav" aria-label="Điều hướng chính">
          <a href="#trai-nghiem"><span>Trải nghiệm</span></a>
          <a href="#tinh-nang"><span>Tính năng</span></a>
          <a href="#oa-noi-bat"><span>OA nổi bật</span></a>
          <a href="#hanh-trinh">Hành trình</a>
        </nav>

        <div className="adaptive-actions">
          {oaUrl ? (
            <a
              href={oaUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="header-oa-button"
            >
              Mở OA FOne
            </a>
          ) : (
            <span className="header-oa-button is-disabled">Mở OA FOne</span>
          )}
          <Link href="/chat" className="header-chat-button">
            Chat trên web
          </Link>
        </div>
      </div>
    </header>
  );
}
