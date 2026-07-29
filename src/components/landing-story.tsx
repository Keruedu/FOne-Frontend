"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { OaShowcaseCard } from "@/components/oa-showcase-card";

function OaLogoImage({ src, size }: { src: string; size: number }) {
  // Tiny local OA brand assets do not benefit from Next.js image optimization.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" width={size} height={size} />;
}

const FEATURES = [
  {
    number: "01",
    eyebrow: "Hiểu ngôn ngữ tự nhiên",
    title: "Hỏi như cách bạn vẫn nói",
    body: "FOne đọc nhu cầu, địa điểm và ngữ cảnh trong một câu hội thoại tự nhiên — không bắt người dùng học cú pháp tìm kiếm.",
    sample: "“Mình cần ăn lẩu ở TP.HCM”",
  },
  {
    number: "02",
    eyebrow: "Danh mục có kiểm chứng",
    title: "AI không tự nghĩ ra dịch vụ",
    body: "Mọi OA và Mini App được đối chiếu với Service Catalog trước khi xuất hiện trong câu trả lời.",
    sample: "Verified OA · Canonical deeplink",
  },
  {
    number: "03",
    eyebrow: "Tìm kiếm lai",
    title: "Rộng khi cần, chính xác khi đủ dữ kiện",
    body: "Bộ lọc có cấu trúc, tìm kiếm từ khóa và xếp hạng ngữ nghĩa phối hợp để giữ đúng category, location và ý định.",
    sample: "Filter → Retrieve → Rank",
  },
  {
    number: "04",
    eyebrow: "Mở rộng nhiều dịch vụ",
    title: "Không bị khóa trong riêng OA",
    body: "Cùng một contract có thể tiếp nhận Mini App, website được duyệt hoặc nguồn dịch vụ mới mà không đổi trải nghiệm hỏi đáp.",
    sample: "OA · Mini App · Verified service",
  },
];

const OAS = [
  {
    name: "Nhà thuốc Long Châu",
    category: "Sức khỏe",
    image: "/oa/longchau.jpg",
    href: "https://zalo.me/3822805105108870889",
    variant: "white",
    layout: "standard",
  },
  {
    name: "Hocmaivn",
    category: "Giáo dục",
    image: "/oa/hocmai.jpg",
    href: "https://zalo.me/4473983057669494536",
    variant: "white",
    layout: "reverse",
  },
  {
    name: "VUS Anh văn Hội Việt Mỹ",
    category: "Giáo dục",
    image: "/oa/vus.jpg",
    href: "https://zalo.me/2470779593552436062",
    variant: "blue",
    layout: "compact",
  },
  {
    name: "GoGi House",
    category: "Ăn uống",
    image: "/oa/gogi.jpg",
    href: "https://zalo.me/4065039816957305114",
    variant: "blue",
    layout: "standard",
  },
  {
    name: "Morico",
    category: "Ăn uống",
    image: "/oa/morico.jpg",
    href: "https://zalo.me/933370737442378632",
    variant: "white",
    layout: "reverse",
  },
  {
    name: "FOne",
    category: "AI Service Navigator",
    image: null,
    href: "https://zalo.me/2624324193992110831",
    variant: "blue",
    layout: "compact",
  },
] as const;

const PHONE_SCREENS = [
  {
    src: "/phone/fone-profile.png",
    alt: "Màn hình giới thiệu OA FOne",
  },
  {
    src: "/phone/fone-food-chat.png",
    alt: "FOne gợi ý danh sách OA ăn uống",
  },
  {
    src: "/phone/fone-travel-chat.png",
    alt: "FOne tìm OA dịch vụ du lịch",
  },
] as const;

const JOURNEY = [
  {
    step: "01",
    label: "Khám phá vấn đề",
    title: "Dịch vụ có sẵn, nhưng người dùng không biết phải tìm OA nào.",
    body: "Đội bắt đầu từ một câu hỏi đơn giản: nếu chỉ cần nói nhu cầu, Zalo có thể dẫn bạn đến đúng nơi không?",
  },
  {
    step: "02",
    label: "Xây nền dữ liệu",
    title: "Chuẩn hóa OA thành một Service Catalog có thể kiểm chứng.",
    body: "Tên, danh mục, khu vực, từ khóa và canonical deeplink được gom vào một nguồn sự thật duy nhất.",
  },
  {
    step: "03",
    label: "Dạy FOne tìm đúng",
    title: "AI hiểu câu hỏi; retrieval và ranking quyết định kết quả.",
    body: "Các case mơ hồ, sai category và sai location được dùng để siết guardrail và đánh giá lại thứ hạng.",
  },
  {
    step: "04",
    label: "Kết nối Zalo",
    title: "Webhook thật, OA thật và hành trình mở dịch vụ chỉ với một chạm.",
    body: "Từ Swagger đến Zalo OA, toàn bộ flow được đóng thành một demo có thể kiểm tra đầu-cuối.",
  },
];

function useScrollProgress() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const start = section.getBoundingClientRect().top + window.scrollY;
        const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
        const value = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
        setProgress(value);
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { sectionRef, progress };
}

export function PhoneDemoStory() {
  const { sectionRef, progress } = useScrollProgress();
  const playing = progress > 0.08;
  const screenIndex = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2;
  const phoneScreen = PHONE_SCREENS[screenIndex];
  const style = {
    "--phone-progress": progress,
  } as CSSProperties;

  return (
    <section
      id="trai-nghiem"
      ref={sectionRef}
      className={`phone-story ${playing ? "is-playing" : ""}`}
      style={style}
    >
      <div className="phone-story-sticky">
        <div className="phone-story-copy">
          <span>Trải nghiệm thật trên Zalo</span>
          <h2>Nhìn FOne<br />tìm đúng nơi.</h2>
          <p>Cuộn để thu nhỏ điện thoại và bắt đầu đoạn hội thoại mẫu.</p>
        </div>

        <div className="demo-phone-wrap">
          <div className="demo-phone-glow" />
          <div className="demo-phone reference-demo-phone">
            <div className="demo-phone-notch" />
            <div className="demo-phone-screen reference-demo-screen" key={phoneScreen.src}>
              <Image
                src={phoneScreen.src}
                alt={phoneScreen.alt}
                fill
                sizes="(max-width: 760px) 315px, 390px"
                quality={100}
                priority={screenIndex === 0}
              />
            </div>
          </div>
          <div className="demo-play-state" aria-hidden>
            <span>{playing ? "Đang phát" : "Cuộn để phát"}</span>
            <i><b /></i>
          </div>
        </div>

        <div className="phone-story-index">
          <span>01</span>
          <i><b style={{ height: `${Math.max(8, progress * 100)}%` }} /></i>
          <span>04</span>
        </div>
      </div>
    </section>
  );
}

export function FeatureStory() {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.index));
      },
      { rootMargin: "-28% 0px -42% 0px", threshold: [0, 0.2, 0.55] },
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tinh-nang" className="feature-story">
      <div className="story-heading">
        <span>FOne hoạt động như thế nào</span>
        <h2>Mở. Linh hoạt.<br />Có thể mở rộng.</h2>
      </div>

      <div className="feature-story-layout">
        <aside className="feature-preview">
          <span className="preview-number">{FEATURES[active].number}</span>
          <div className="preview-orbit orbit-a" />
          <div className="preview-orbit orbit-b" />
          <div className="preview-core">
            <span>F</span>
            <strong>{FEATURES[active].eyebrow}</strong>
          </div>
          <p>{FEATURES[active].sample}</p>
        </aside>

        <div className="feature-copy-stack">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.number}
              data-index={index}
              ref={(node) => { cardsRef.current[index] = node; }}
              className={`feature-story-card ${active === index ? "is-active" : ""}`}
            >
              <span>{feature.eyebrow}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <div><b>{feature.number}</b><i /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialPanels() {
  return (
    <section className="editorial-stack">
      <article className="editorial-card editorial-blue">
        <div>
          <span>Nền tảng của trải nghiệm tìm dịch vụ</span>
          <h2>Đúng dữ liệu.<br />Đúng ngữ cảnh.<br />Đúng điểm đến.</h2>
          <p>
            FOne kết hợp khả năng hiểu ngôn ngữ của AI với danh mục dịch vụ được kiểm duyệt,
            để sự linh hoạt không đánh đổi độ tin cậy.
          </p>
          <a href="#oa-noi-bat">Xem OA nổi bật <b>→</b></a>
        </div>
        <div className="editorial-visual catalog-visual" aria-hidden>
          <div className="catalog-layer layer-one" />
          <div className="catalog-layer layer-two" />
          <div className="catalog-card">
            <span>Service Catalog</span>
            <strong>Verified</strong>
            <i>✓</i>
          </div>
        </div>
      </article>

      <article className="editorial-card editorial-white">
        <div>
          <span>Thiết kế mở từ đầu</span>
          <h2>Không dừng lại<br />ở riêng Zalo OA.</h2>
          <p>
            Kiến trúc registry và retrieval cho phép bổ sung Mini App hoặc nguồn dịch vụ mới
            mà không cần viết lại toàn bộ flow hội thoại.
          </p>
          <a href="#hanh-trinh">Xem hành trình xây dựng <b>→</b></a>
        </div>
        <div className="editorial-visual network-visual" aria-hidden>
          <div className="network-node node-center">F</div>
          <div className="network-node node-oa">OA</div>
          <div className="network-node node-mini">Mini</div>
          <div className="network-node node-api">API</div>
          <i className="network-line line-one" />
          <i className="network-line line-two" />
          <i className="network-line line-three" />
        </div>
      </article>
    </section>
  );
}

export function OATrustWall() {
  return (
    <section id="oa-noi-bat" className="oa-trust-section">
      <div className="oa-trust-heading">
        <span>Điểm đến đã kiểm chứng</span>
        <h2>Những OA quen thuộc.<br />Mở bằng một chạm.</h2>
        <p>Chọn một thẻ để mở đúng Official Account ngay trên Zalo.</p>
      </div>

      <div className="oa-trust-grid">
        {OAS.map((oa, index) => (
          <OaShowcaseCard
            key={oa.name}
            {...oa}
            size="directory"
            className={`oa-directory-card card-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export function ProjectJourney() {
  return (
    <section id="hanh-trinh" className="journey-section">
      <div className="journey-sticky">
        <span>Quá trình làm dự án</span>
        <h2>Học nhanh.<br />Mở rộng thông minh.<br />Luôn linh hoạt.</h2>
        <p>Bốn chặng biến một ý tưởng hackathon thành một luồng OA có thể chạy thật.</p>
      </div>

      <div className="journey-cards">
        {JOURNEY.map((item, index) => (
          <article className={`journey-card journey-${index + 1}`} key={item.step}>
            <div><span>{item.step}</span><small>{item.label}</small></div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <i aria-hidden>↗</i>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HackathonStory({ oaUrl }: { oaUrl: string | null }) {
  return (
    <section className="hackathon-section">
      <div className="hackathon-copy">
        <span>Từ setup đến demo hoàn chỉnh</span>
        <h2>Xem FOne<br />hoạt động tại<br />ZA Hackathon.</h2>
        <p>
          Một đội 4 thành viên, một Service Catalog thật, một AI retrieval flow và một Zalo OA
          được kết nối từ webhook đến câu trả lời cuối cùng.
        </p>
        <div className="team-row" aria-label="Đội dự án gồm 4 thành viên">
          {["01", "02", "03", "04"].map((member) => <b key={member}>{member}</b>)}
          <span>4 thành viên<br />1 trải nghiệm liền mạch</span>
        </div>
      </div>

      <div className="hackathon-demo">
        <div className="hackathon-screen">
          <div className="hackathon-screen-head"><span>FOne / LIVE DEMO</span><i>● ONLINE</i></div>
          <div className="hackathon-flow">
            <div><b>01</b><span>Tin nhắn Zalo</span></div>
            <i>→</i>
            <div><b>02</b><span>AI hiểu nhu cầu</span></div>
            <i>→</i>
            <div><b>03</b><span>Search & rank</span></div>
            <i>→</i>
            <div><b>04</b><span>Mở đúng OA</span></div>
          </div>
          <div className="hackathon-message">
            <span>“Tìm giúp mình nhà thuốc Long Châu”</span>
            <div><OaLogoImage src="/oa/longchau.jpg" size={42} /><b>Nhà thuốc Long Châu</b><small>Top result · verified</small></div>
          </div>
        </div>
        <div className="hackathon-mini-card"><strong>4</strong><span>thành viên</span></div>
        <div className="hackathon-mini-card second"><strong>1</strong><span>flow thật</span></div>
      </div>

      <div className="final-hook">
        <span>AI Service Navigator cho mọi người</span>
        <h2>Một câu hỏi.<br />Đúng nơi cần đến.</h2>
        <div>
          {oaUrl ? (
            <a href={oaUrl} target="_blank" rel="noreferrer noopener">Mở OA FOne</a>
          ) : null}
          <Link href="/chat">Trải nghiệm Chat Web <b>→</b></Link>
        </div>
      </div>
    </section>
  );
}
