import { OaButton, OaQrPanel } from "@/components/oa-cta";
import {
  BubbleIn,
  BubbleOut,
  Card,
  Section,
  SectionHeading,
  ServiceCardMock,
} from "@/components/sections";

const STEPS = [
  {
    title: "Nhắn nhu cầu bằng tiếng Việt",
    body: "Không cần từ khóa hay cú pháp đặc biệt. “Tôi muốn đóng tiền điện ở TP.HCM” là đủ.",
  },
  {
    title: "FOne hiểu và hỏi lại nếu thiếu",
    body: "Nếu chưa rõ khu vực hoặc loại dịch vụ, trợ lý hỏi thêm đúng một câu thay vì đoán.",
  },
  {
    title: "Nhận tối đa 5 gợi ý mở được ngay",
    body: "Mỗi gợi ý là một dịch vụ đã được rà soát, kèm liên kết mở trực tiếp trong Zalo.",
  },
];

const CATEGORIES = [
  { label: "Ăn uống", note: "nhà hàng, đồ ăn, đồ uống" },
  { label: "Giáo dục", note: "học trực tuyến, tuyển sinh, thư viện" },
  { label: "Mua sắm", note: "siêu thị, bán lẻ" },
  { label: "Tài chính", note: "ngân hàng, bảo hiểm" },
  { label: "Tiện ích", note: "điện, nước, viễn thông" },
  { label: "Y tế", note: "bệnh viện, nhà thuốc" },
  { label: "Hành chính công", note: "UBND, BHXH, dịch vụ công" },
  { label: "Khác", note: "giải trí, vận tải và nhóm còn lại" },
];

const DOES = [
  "Hiểu nhu cầu viết bằng tiếng Việt tự nhiên trong tin nhắn Zalo.",
  "Hỏi lại đúng một câu khi thiếu thông tin quan trọng.",
  "Gợi ý tối đa 5 dịch vụ, chỉ lấy từ danh mục đã được người thật rà soát.",
  "Chỉ đưa liên kết Official Account hoặc Mini App chính chủ, đã qua danh sách cho phép.",
  "Nói rõ khi không tìm được gì phù hợp, thay vì gợi ý cho đủ số lượng.",
];

const DOES_NOT = [
  "Không tự tạo tên dịch vụ hay đường dẫn — mô hình ngôn ngữ không được phép sinh URL.",
  "Không quét toàn bộ OA và Mini App công khai trên Zalo.",
  "Không đặt lịch, không thanh toán và không giao dịch thay bạn.",
  "Không gọi thoại thời gian thực và chưa hỗ trợ tin nhắn thoại.",
  "Không gửi tin quảng bá hay nhắn chủ động hàng loạt.",
];

export default function LandingPage() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3">
          <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zalo-500 text-sm font-bold text-white">
              F1
            </span>
            <span className="font-semibold text-ink">FOne</span>
          </span>
          <nav className="ml-auto hidden gap-1 sm:flex">
            <a
              href="#cach-hoat-dong"
              className="rounded-full px-3 py-1.5 text-sm text-ink-muted hover:bg-zalo-50 hover:text-zalo-700"
            >
              Cách hoạt động
            </a>
            <a
              href="#pham-vi"
              className="rounded-full px-3 py-1.5 text-sm text-ink-muted hover:bg-zalo-50 hover:text-zalo-700"
            >
              Phạm vi
            </a>
            <a
              href="#quyen-rieng-tu"
              className="rounded-full px-3 py-1.5 text-sm text-ink-muted hover:bg-zalo-50 hover:text-zalo-700"
            >
              Quyền riêng tư
            </a>
          </nav>
          <div className="ml-auto sm:ml-0">
            <OaButton />
          </div>
        </div>
      </header>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-zalo-50 px-3 py-1 text-xs font-semibold tracking-wide text-zalo-700 uppercase">
              Official Account trên Zalo
            </p>
            <h1 className="text-3xl leading-tight font-semibold text-ink sm:text-4xl">
              Nhắn một câu, nhận đúng dịch vụ bạn cần
            </h1>
            <p className="mt-4 text-lg text-ink-muted">
              FOne là trợ lý trong Zalo giúp bạn tìm Official Account và Mini App
              chính chủ cho việc cần làm — đóng tiền điện, tìm nhà thuốc, hỏi tuyển
              sinh — mà không phải tự dò tìm.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <OaButton size="large" />
              <a
                href="#cach-hoat-dong"
                className="rounded-full px-5 py-3.5 text-base font-semibold text-zalo-700 hover:bg-zalo-50"
              >
                Xem cách hoạt động
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Mọi gợi ý đều lấy từ danh mục dịch vụ do đội ngũ rà soát thủ công.
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface-muted p-5">
            <div className="mb-3 flex items-center gap-2.5 border-b border-line pb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zalo-500 text-xs font-bold text-white">
                F1
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">FOne</p>
                <p className="text-xs text-ink-muted">Official Account</p>
              </div>
            </div>
            <div className="space-y-2.5">
              <BubbleOut>Tôi muốn đóng tiền điện ở TP.HCM</BubbleOut>
              <BubbleIn>
                Bạn muốn thanh toán qua kênh nào? Mình có vài Official Account chính
                chủ phù hợp:
              </BubbleIn>
              <div className="space-y-2 pl-2">
                <ServiceCardMock
                  name="Ví dụ minh họa — dịch vụ điện lực"
                  reason="khớp nhu cầu, phù hợp khu vực TP.HCM"
                />
                <ServiceCardMock
                  name="Ví dụ minh họa — ví điện tử"
                  reason="hỗ trợ thanh toán hóa đơn điện"
                />
              </div>
              <BubbleOut>Cảm ơn!</BubbleOut>
            </div>
            <p className="mt-4 text-center text-xs text-ink-muted">
              Hội thoại minh họa. Tên dịch vụ thật lấy từ danh mục đã kiểm chứng.
            </p>
          </div>
        </div>
      </Section>

      <Section id="cach-hoat-dong" muted>
        <SectionHeading
          eyebrow="Cách hoạt động"
          title="Ba bước, không cần học cú pháp"
          lead="Bạn nhắn như nói chuyện bình thường. Phần khó là của trợ lý."
        />
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zalo-100 text-sm font-bold text-zalo-700">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Danh mục"
          title="Những nhóm dịch vụ FOne đang bao phủ"
          lead="Danh mục được mở rộng dần và chỉ thêm sau khi có người rà soát nguồn chính chủ."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <li
              key={category.label}
              className="rounded-card border border-line bg-surface px-4 py-3.5"
            >
              <p className="font-medium text-ink">{category.label}</p>
              <p className="mt-0.5 text-xs text-ink-muted">{category.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="pham-vi" muted>
        <SectionHeading
          eyebrow="Phạm vi"
          title="FOne làm gì và không làm gì"
          lead="Nói rõ giới hạn ngay từ đầu để bạn không kỳ vọng sai."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-emerald-700">FOne làm được</h3>
            <ul className="mt-3 space-y-2.5">
              {DOES.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-ink">
                  <span aria-hidden className="mt-0.5 text-emerald-600">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-ink-muted">FOne không làm</h3>
            <ul className="mt-3 space-y-2.5">
              {DOES_NOT.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-ink">
                  <span aria-hidden className="mt-0.5 text-ink-muted">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="quyen-rieng-tu">
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading title="Quyền riêng tư và độ tin cậy" />
            <div className="space-y-4 text-sm text-ink-muted">
              <p>
                <strong className="text-ink">Nguồn dữ liệu có kiểm soát.</strong> Tên
                dịch vụ và đường dẫn chỉ đến từ danh mục nội bộ đã được người thật rà
                soát và ghi lại nguồn xác minh. Mô hình ngôn ngữ dùng để hiểu câu hỏi
                và soạn lời giải thích, nhưng không được phép tự tạo tên dịch vụ hay
                đường dẫn.
              </p>
              <p>
                <strong className="text-ink">Chỉ liên kết chính chủ.</strong> Liên kết
                Official Account phải là deeplink số chuẩn và nằm trong danh sách host
                được phép. Dịch vụ ngừng hoạt động sẽ bị rút khỏi danh mục.
              </p>
              <p>
                <strong className="text-ink">Không nhắn chủ động.</strong> FOne chỉ trả
                lời khi bạn nhắn trước. Không có tin quảng bá hàng loạt.
              </p>
              <p>
                FOne là Official Account do nhóm phát triển vận hành trên nền tảng
                Zalo, không phải sản phẩm của Zalo.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <OaQrPanel />
            <div className="text-center">
              <OaButton size="large" />
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-line bg-surface-muted">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-5 py-8 text-sm text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zalo-500 text-xs font-bold text-white">
              F1
            </span>
            <span className="font-medium text-ink">FOne</span>
          </span>
          <span className="ml-auto">
            Trợ lý tìm dịch vụ trên Zalo Official Account.
          </span>
        </div>
      </footer>
    </>
  );
}
