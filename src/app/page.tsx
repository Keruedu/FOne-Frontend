import { OaButton, OaQrPanel } from "@/components/oa-cta";
import {
  BubbleIn,
  BubbleOut,
  Card,
  CheckItem,
  CrossItem,
  PhoneFrame,
  ResultCard,
  Section,
  SectionHeading,
  Tile,
} from "@/components/sections";

const STEPS = [
  "Nhắn nhu cầu bằng tiếng Việt",
  "FOne hỏi lại nếu còn thiếu",
  "Nhận tối đa 5 gợi ý mở được ngay",
];

const CATEGORIES = [
  { icon: "🍜", label: "Ăn uống", tint: "bg-orange-50" },
  { icon: "🎓", label: "Giáo dục", tint: "bg-zalo-50" },
  { icon: "🛒", label: "Mua sắm", tint: "bg-emerald-50" },
  { icon: "🏦", label: "Tài chính", tint: "bg-indigo-50" },
  { icon: "💡", label: "Tiện ích", tint: "bg-amber-50" },
  { icon: "🏥", label: "Y tế", tint: "bg-rose-50" },
  { icon: "🏛️", label: "Hành chính công", tint: "bg-slate-100" },
  { icon: "✨", label: "Khác", tint: "bg-violet-50" },
];

const DOES = [
  "Hiểu tiếng Việt tự nhiên",
  "Hỏi lại khi thiếu thông tin",
  "Tối đa 5 gợi ý đã kiểm chứng",
  "Chỉ liên kết OA chính chủ",
  "Nói thật khi không tìm được",
];

const DOES_NOT = [
  "Không tự tạo liên kết",
  "Không quét toàn bộ Zalo",
  "Không đặt lịch, không thanh toán",
  "Chưa hỗ trợ tin nhắn thoại",
  "Không nhắn quảng bá",
];

const TRUST = [
  {
    title: "Danh mục có người rà soát",
    body: "Mỗi dịch vụ được kiểm chứng nguồn chính chủ trước khi xuất hiện.",
  },
  {
    title: "AI không tự tạo link",
    body: "Mô hình chỉ hiểu câu hỏi; liên kết luôn lấy từ danh mục.",
  },
  {
    title: "Chỉ trả lời khi bạn nhắn",
    body: "Không có tin quảng bá hay nhắn chủ động hàng loạt.",
  },
];

export default function LandingPage() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-surface/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-3">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-zalo-500 text-xs font-bold text-white">
              F1
            </span>
            <span className="font-semibold text-ink">FOne</span>
          </span>
          <div className="ml-auto">
            <OaButton />
          </div>
        </div>
      </header>

      <Section wash>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-[2rem] leading-tight font-semibold text-ink sm:text-4xl">
              Nhắn một câu,
              <br />
              nhận đúng dịch vụ
            </h1>
            <p className="mx-auto mt-4 max-w-md text-ink-muted lg:mx-0">
              Trợ lý trên Zalo tìm giúp bạn Official Account chính chủ cho việc cần
              làm.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <OaButton size="large" />
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Miễn phí · Không cần cài thêm ứng dụng
            </p>
          </div>

          <PhoneFrame>
            <BubbleOut>Tôi muốn đóng tiền điện ở TP.HCM</BubbleOut>
            <BubbleIn>Mình có 2 kênh chính chủ phù hợp:</BubbleIn>
            <ResultCard label="Dịch vụ điện lực · ví dụ minh họa" />
            <ResultCard label="Ví điện tử · ví dụ minh họa" />
            <BubbleOut>Cảm ơn!</BubbleOut>
          </PhoneFrame>
        </div>
      </Section>

      <Section muted>
        <SectionHeading title="Ba bước" />
        <ol className="grid gap-4 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step}>
              <Card className="flex h-full items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zalo-500 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-ink">{step}</span>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading title="Nhóm dịch vụ đang bao phủ" />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CATEGORIES.map((category) => (
            <li key={category.label}>
              <Tile icon={category.icon} label={category.label} tint={category.tint} />
            </li>
          ))}
        </ul>
      </Section>

      <Section muted>
        <SectionHeading title="Phạm vi rõ ràng" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="mb-3 text-sm font-semibold text-emerald-700">Làm được</h3>
            <ul className="space-y-2">
              {DOES.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="mb-3 text-sm font-semibold text-ink-muted">Không làm</h3>
            <ul className="space-y-2">
              {DOES_NOT.map((item) => (
                <CrossItem key={item}>{item}</CrossItem>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Vì sao đáng tin" />
        <div className="grid gap-4 sm:grid-cols-3">
          {TRUST.map((item) => (
            <Card key={item.title}>
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold text-ink">Bắt đầu trên Zalo</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Quét mã hoặc bấm nút để mở Official Account.
          </p>
          <div className="mt-6">
            <OaQrPanel />
          </div>
          <div className="mt-4">
            <OaButton size="large" />
          </div>
        </div>
      </Section>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-7 text-xs text-ink-muted sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-zalo-500 text-[10px] font-bold text-white">
              F1
            </span>
            <span className="font-medium text-ink">FOne</span>
          </span>
          <span className="sm:ml-auto">
            OA do nhóm phát triển vận hành trên nền tảng Zalo, không phải sản phẩm của
            Zalo.
          </span>
        </div>
      </footer>
    </>
  );
}
