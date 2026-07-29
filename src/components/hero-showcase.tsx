"use client";

import Image from "next/image";
import { useState } from "react";

import { OaShowcaseCard } from "@/components/oa-showcase-card";

const PHONE_CLUSTER = [
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
    variant: "blue",
    layout: "compact",
  },
  {
    className: "float-two",
    name: "Hocmaivn",
    category: "Giáo dục",
    image: "/oa/hocmai.jpg",
    href: "https://zalo.me/4473983057669494536",
    variant: "white",
    layout: "reverse",
  },
  {
    className: "float-three",
    name: "GoGi House",
    category: "Ăn uống",
    image: "/oa/gogi.jpg",
    href: "https://zalo.me/4065039816957305114",
    variant: "blue",
    layout: "standard",
  },
  {
    className: "float-four",
    name: "VUS Anh văn",
    category: "Giáo dục",
    image: "/oa/vus.jpg",
    href: "https://zalo.me/2470779593552436062",
    variant: "white",
    layout: "compact",
  },
  {
    className: "float-five",
    name: "Morico",
    category: "Ăn uống",
    image: "/oa/morico.jpg",
    href: "https://zalo.me/933370737442378632",
    variant: "blue",
    layout: "reverse",
  },
] as const;

export function HeroShowcase() {
  // The three screens sit stacked until asked for, so the hero stays readable.
  const [fanned, setFanned] = useState(false);
  return (
    <div className="showcase-stage">
      <div className="showcase-orbit orbit-one" aria-hidden />
      <div className="showcase-orbit orbit-two" aria-hidden />
      <div className="stage-sticker sticker-purple" aria-hidden>
        <span>OA</span>
        <strong>gợi ý phù hợp</strong>
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

      <div
        className={`phone-cluster${fanned ? " is-fanned" : ""}`}
        aria-label="Ba màn hình trải nghiệm FOne"
      >
        {PHONE_CLUSTER.map((phone, index) => (
          <button
            type="button"
            aria-expanded={fanned}
            aria-label={fanned ? "Thu gọn ba màn hình" : `Xòe ba màn hình — ${phone.label}`}
            onClick={() => setFanned((open) => !open)}
            className={`phone-shell reference-phone-shell phone-cluster-phone phone-cluster-${index + 1}`}
            key={phone.screen}
          >
            <div className="phone-speaker" />
            <div className="phone-screen phone-screen-reference">
              <Image
                src={phone.screen}
                alt={phone.label}
                fill
                sizes="(max-width: 760px) 270px, 292px"
                quality={100}
                priority={index === 1}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
