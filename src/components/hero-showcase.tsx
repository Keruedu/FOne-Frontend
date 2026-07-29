"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { OaShowcaseCard } from "@/components/oa-showcase-card";

const SLIDES = [
  {
    screen: "/phone/fone-profile.png",
    label: "Màn hình giới thiệu OA FOne",
  },
  {
    screen: "/phone/fone-food-chat.png",
    label: "FOne gợi ý danh sách OA ăn uống",
  },
  {
    screen: "/phone/fone-travel-chat.png",
    label: "FOne tìm OA dịch vụ du lịch",
  },
];

const FLOATING_OAS = [
  {
    className: "float-one",
    name: "Nhà thuốc Long Châu",
    category: "Sức khỏe",
    image: "/oa/longchau.jpg",
    href: "https://zalo.me/3822805105108870889",
    variant: "split",
  },
  {
    className: "float-two",
    name: "Hocmaivn",
    category: "Giáo dục",
    image: "/oa/hocmai.jpg",
    href: "https://zalo.me/4473983057669494536",
    variant: "white",
  },
  {
    className: "float-three",
    name: "GoGi House",
    category: "Ăn uống",
    image: "/oa/gogi.jpg",
    href: "https://zalo.me/4065039816957305114",
    variant: "blue",
  },
  {
    className: "float-four",
    name: "VUS Anh văn",
    category: "Giáo dục",
    image: "/oa/vus.jpg",
    href: "https://zalo.me/2470779593552436062",
    variant: "split",
  },
  {
    className: "float-five",
    name: "Morico",
    category: "Ăn uống",
    image: "/oa/morico.jpg",
    href: "https://zalo.me/933370737442378632",
    variant: "white",
  },
] as const;

export function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % SLIDES.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  function previous() {
    setActive((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  }

  function next() {
    setActive((current) => (current + 1) % SLIDES.length);
  }

  return (
    <div className="showcase-stage">
      <div className="showcase-orbit orbit-one" aria-hidden />
      <div className="showcase-orbit orbit-two" aria-hidden />
      <div className="stage-sticker sticker-purple" aria-hidden>
        <span>OA</span>
        <strong>đã xác minh</strong>
      </div>
      <div className="stage-sticker sticker-lime" aria-hidden>
        <span>5</span>
        <strong>kết quả phù hợp</strong>
      </div>
      <div className="stage-sticker sticker-cyan" aria-hidden>
        <span className="sticker-toggle"><i /></span>
        <strong>mở bằng 1 chạm</strong>
      </div>
      <div className="stage-sticker sticker-orange" aria-hidden>
        <span>F</span>
        <strong>FOne index</strong>
      </div>
      {FLOATING_OAS.map((oa) => (
        <OaShowcaseCard
          key={oa.name}
          {...oa}
          size="floating"
        />
      ))}

      <button className="slider-arrow slider-prev" onClick={previous} aria-label="Slide trước">
        ‹
      </button>
      <div className="phone-shell reference-phone-shell">
        <div className="phone-speaker" />
        <div className="phone-screen phone-screen-reference" key={active}>
          <Image
            src={slide.screen}
            alt={slide.label}
            fill
            sizes="(max-width: 760px) 270px, 292px"
            quality={100}
            priority={active === 0}
          />
        </div>
      </div>
      <button className="slider-arrow slider-next" onClick={next} aria-label="Slide tiếp theo">
        ›
      </button>
      <div className="slider-dots" aria-label="Chọn slide">
        {SLIDES.map((item, index) => (
          <button
            key={item.screen}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Xem slide ${index + 1}: ${item.label}`}
          />
        ))}
      </div>
    </div>
  );
}
