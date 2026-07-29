import { AdaptiveHeader } from "@/components/adaptive-header";
import { BrandLogo } from "@/components/brand-logo";
import { HeroShowcase } from "@/components/hero-showcase";
import {
  EditorialPanels,
  FeatureStory,
  HackathonStory,
  OATrustWall,
  PhoneDemoStory,
  ProjectJourney,
} from "@/components/landing-story";
import { OaButton } from "@/components/oa-cta";
import { oaLink } from "@/lib/oa";
import Link from "next/link";

export default function LandingPage() {
  const { url: oaUrl } = oaLink();

  return (
    <main>
      <AdaptiveHeader oaUrl={oaUrl} />

      <section id="top" className="hero-section">
        <div className="site-container relative z-[1] pt-16 text-center sm:pt-20">
          <div className="eyebrow">
            <span className="status-dot" />
            Trợ lý tìm dịch vụ ngay trong Zalo
          </div>
          <h1 className="hero-title">
            Một câu hỏi.
            <br />
            <span>Đúng nơi cần đến.</span>
          </h1>
          <p className="hero-lead">
            FOne hiểu nhu cầu của bạn và kết nối đến đúng Official Account hoặc Mini App
            đã được xác minh — nhanh, gọn và an toàn.
          </p>
          <div className="hero-actions">
            <OaButton size="large" />
            <Link href="/chat" className="button button-ghost button-large">
              Trải nghiệm Chat Web
              <span aria-hidden>→</span>
            </Link>
          </div>
          <p className="hero-note">
            Miễn phí trải nghiệm · Không cài thêm ứng dụng · Không tự tạo link
          </p>
        </div>

        <HeroShowcase />
      </section>

      <PhoneDemoStory />
      <FeatureStory />
      <EditorialPanels />
      <OATrustWall />
      <ProjectJourney />
      <HackathonStory oaUrl={oaUrl} />

      <footer className="site-footer story-footer">
        <div className="site-container footer-inner">
          <div className="brand-footer">
            <BrandLogo />
          </div>
          <p>
            Dự án hackathon được phát triển bởi đội ngũ 4 thành viên. FOne vận hành
            trên nền tảng Zalo và không phải sản phẩm chính thức của Zalo.
          </p>
          <span>© 2026 FOne</span>
        </div>
      </footer>
    </main>
  );
}
