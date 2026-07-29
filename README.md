# FOne Landing Page

Trang giới thiệu công khai cho FOne — trợ lý tìm dịch vụ chạy dưới dạng Zalo Official
Account. Mục tiêu duy nhất của trang: giải thích FOne làm gì, nói rõ nó **không** làm
gì, và dẫn người dùng sang OA.

Stack: Next.js 16 (App Router) + TypeScript + Tailwind v4. Toàn bộ trang được
prerender tĩnh và không phụ thuộc backend.

## Chạy local

```bash
cp .env.example .env.local
npm install
npm run dev
```

| Biến | Ý nghĩa |
| --- | --- |
| `NEXT_PUBLIC_ZALO_OA_URL` | Deeplink OA dạng `https://zalo.me/<oa_id_số>` |

Biến này chưa được đặt sẵn. Khi để trống, nút CTA và mã QR hiển thị trạng thái “chưa
cấu hình” thay vì trỏ đi đâu đó — một OA ID sai nhưng trông hợp lý sẽ đẩy người dùng
tới Official Account của người khác, nên trang từ chối đoán. Giá trị không đúng dạng
deeplink số cũng bị từ chối với thông báo riêng.

`NEXT_PUBLIC_*` được Next nội suy lúc **build**, nên đổi giá trị cần build lại
(`npm run build`), không chỉ restart.

## Mã QR không gọi ra ngoài

QR được sinh ở server bằng `qrcode` và nhúng dưới dạng data URI SVG, nên trang không
phát sinh request tới bất kỳ host bên ngoài nào — kiểm tra được bằng cách grep HTML đã
render, sẽ không có `src="http…"` nào.

## Nội dung phải khớp năng lực thật

Mục “FOne làm gì / không làm gì” cố tình bám theo bảng phạm vi MVP trong README của
backend, và **không** quảng cáo thứ chưa chạy được:

- tin nhắn thoại chưa được hỗ trợ (`STT_PROVIDER=disabled` ở backend) nên trang ghi
  đây là điều FOne *không* làm, dù roadmap có;
- hội thoại minh họa ở hero dùng tên dịch vụ ghi rõ “ví dụ minh họa”, không mượn tên
  thương hiệu thật để tránh ngụ ý đối tác;
- trang nói rõ FOne là OA do nhóm phát triển vận hành trên nền tảng Zalo, không phải
  sản phẩm của Zalo.

Khi năng lực backend thay đổi, sửa hai mảng `DOES` / `DOES_NOT` trong
`src/app/page.tsx`.

## Giai đoạn tiếp theo

- **Danh mục động:** lấy `GET /api/v1/services` bằng server-side fetch để hiện số dịch
  vụ và nhóm thật (giữ `NAVIGATOR_API_KEY` ở phía server, không lộ ra client).
- **Widget chat thử:** gọi `/api/v1/navigate` ngay trên web. Cần thêm một endpoint
  public có giới hạn rate riêng ở backend — không dùng chung `NAVIGATOR_API_KEY`.
