# via-website

Website demo giới thiệu công ty VIA — **chỉ là frontend tĩnh**, phục vụ mục
đích học tập/minh họa giao diện. Không có backend, không có CMS, không có
database thật. Toàn bộ dữ liệu (dịch vụ, tin tức, đội ngũ) là dữ liệu tĩnh
được khai báo trực tiếp trong mã nguồn (`src/data/*.ts`).

## Công nghệ sử dụng (đúng theo package.json)

- Next.js `14.2.5` (App Router)
- React `18.3.1` / React DOM `18.3.1`
- TypeScript `5.5.4`
- Tailwind CSS `3.4.7`

Không cài đặt bất kỳ ORM, CMS SDK, hay client database nào (không có
Prisma, Sanity, Contentful, SQL/NoSQL driver...).

## Cấu trúc thư mục chính

```
via-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Layout dùng chung: Header + Footer
│   │   ├── page.tsx              # / — Trang chủ
│   │   ├── not-found.tsx         # Trang 404 tùy biến
│   │   ├── globals.css
│   │   ├── gioi-thieu/page.tsx   # /gioi-thieu
│   │   ├── dich-vu/page.tsx      # /dich-vu
│   │   ├── tin-tuc/
│   │   │   ├── page.tsx          # /tin-tuc — danh sách bài viết
│   │   │   └── [slug]/page.tsx   # /tin-tuc/[slug] — chi tiết bài viết (route động)
│   │   └── lien-he/
│   │       ├── page.tsx          # /lien-he
│   │       └── ContactForm.tsx   # Form liên hệ (client component, useState)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx        # Button dùng lại toàn site
│   │       └── Card.tsx          # Card dùng lại toàn site
│   └── data/
│       ├── news.ts               # Dữ liệu tĩnh tin tức (4-6 bài mẫu)
│       ├── services.ts           # Dữ liệu tĩnh dịch vụ
│       └── team.ts               # Dữ liệu tĩnh đội ngũ
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Danh sách route thực tế đã tạo

| Route | Mô tả |
| --- | --- |
| `/` | Trang chủ — hero + tóm tắt dịch vụ nổi bật |
| `/gioi-thieu` | Tầm nhìn, sứ mệnh, đội ngũ |
| `/dich-vu` | Danh sách dịch vụ dạng card |
| `/tin-tuc` | Danh sách bài viết (đọc từ `src/data/news.ts`) |
| `/tin-tuc/[slug]` | Trang chi tiết bài viết (route động, `generateStaticParams`) |
| `/lien-he` | Form liên hệ (Họ tên / Email / Nội dung), xử lý client-side |
| *(404)* | `not-found.tsx` — trang lỗi 404 tùy biến |

Không có route/API nào khác ngoài danh sách trên (không có `/api/*` gọi
dịch vụ thật).

## Xác nhận về backend/CMS/database

- **Không có backend thật**: không có server xử lý nghiệp vụ, không có
  route handler API kết nối dịch vụ ngoài.
- **Không có CMS**: nội dung không được quản trị qua CMS nào (không
  Sanity/Strapi/WordPress...), chỉ là file TypeScript tĩnh trong
  `src/data/`.
- **Không có database thật**: không kết nối SQL/NoSQL, không ORM.
- Form liên hệ tại `/lien-he` chỉ xử lý phía trình duyệt bằng
  `useState`, khi submit sẽ `console.log` dữ liệu kèm chú thích
  `// demo — chưa kết nối dịch vụ thật`, không gửi request tới bất kỳ
  API nào.

## Chạy dự án

```bash
npm install
npm run dev
```

Mặc định chạy tại `http://localhost:3000`.

```bash
npm run build   # build production, kiểm tra lỗi biên dịch/type
npm run start   # chạy bản build production
```

## Đã xác minh chạy được (rà soát kỹ thuật)

`npm install`, `npm run build` và `npm run dev` đã được chạy thử; kết quả:

- `npm run build`: biên dịch thành công, sinh đủ 13 trang tĩnh (bao gồm 5
  bài `/tin-tuc/[slug]` từ `news.ts`), không lỗi biên dịch/type.
- `npm run dev`: khởi động thành công ("Ready" sau ~1.4s). Kiểm tra HTTP
  status từng route: `/` 200, `/gioi-thieu` 200, `/dich-vu` 200,
  `/tin-tuc` 200, `/tin-tuc/[slug]` 200, `/lien-he` 200, route không tồn
  tại trả về 404 (dùng `not-found.tsx`).

Đây là kết quả rà soát bằng cách chạy thử trực tiếp, không phải suy diễn.
