// Dữ liệu tin tức — dữ liệu tĩnh (mock data), phục vụ demo giao diện.
// KHÔNG lấy từ CMS/API/database thật. Nội dung bài viết chỉ mang tính
// minh họa, không phải tin tức đã xuất bản chính thức.

export type NewsArticle = {
  title: string;
  slug: string;
  summary: string;
  content: string[];
  date: string; // ISO format YYYY-MM-DD
  category: string;
};

export const newsArticles: NewsArticle[] = [
  {
    title: "VIA ra mắt giao diện website mới",
    slug: "via-ra-mat-giao-dien-website-moi",
    summary:
      "Bản demo giao diện website mới của VIA tập trung vào trải nghiệm người dùng và tốc độ tải trang.",
    content: [
      "Bản demo giao diện website mới được xây dựng trên nền tảng Next.js, hướng tới trải nghiệm mượt mà trên cả desktop và thiết bị di động.",
      "Giao diện được thiết kế lại theo hướng tối giản, tập trung vào nội dung và khả năng truy cập (accessibility) cho người dùng.",
      "Đây là bản demo tĩnh phục vụ mục đích minh họa, chưa kết nối với hệ thống quản trị nội dung hay cơ sở dữ liệu thật.",
    ],
    date: "2026-06-02",
    category: "Sản phẩm",
  },
  {
    title: "Xu hướng thiết kế web năm 2026",
    slug: "xu-huong-thiet-ke-web-nam-2026",
    summary:
      "Tổng hợp một số xu hướng thiết kế giao diện web đáng chú ý trong năm 2026.",
    content: [
      "Thiết kế tối giản, tập trung vào nội dung tiếp tục là lựa chọn phổ biến của nhiều website doanh nghiệp.",
      "Khả năng truy cập (accessibility) và tốc độ tải trang ngày càng được chú trọng hơn trong quá trình phát triển.",
      "Bài viết mang tính chất minh họa cho mục demo, không phải báo cáo nghiên cứu thị trường chính thức.",
    ],
    date: "2026-05-20",
    category: "Xu hướng",
  },
  {
    title: "Giới thiệu quy trình phát triển website tại VIA",
    slug: "gioi-thieu-quy-trinh-phat-trien-website-tai-via",
    summary:
      "Tóm tắt các bước cơ bản trong quy trình phát triển một website demo tại VIA.",
    content: [
      "Bước 1: Thu thập yêu cầu và phác thảo cấu trúc trang (sitemap).",
      "Bước 2: Thiết kế giao diện và xây dựng các component dùng chung.",
      "Bước 3: Phát triển các trang chức năng, kiểm thử và hoàn thiện giao diện responsive.",
      "Quy trình trên áp dụng cho dự án demo frontend, không bao gồm giai đoạn xây dựng backend/CMS thật.",
    ],
    date: "2026-05-05",
    category: "Quy trình",
  },
  {
    title: "Vì sao nên tối ưu website cho thiết bị di động",
    slug: "vi-sao-nen-toi-uu-website-cho-thiet-bi-di-dong",
    summary:
      "Một số lý do cơ bản cho thấy tầm quan trọng của thiết kế responsive.",
    content: [
      "Ngày càng nhiều người dùng truy cập internet chủ yếu qua điện thoại di động.",
      "Giao diện responsive giúp nội dung hiển thị phù hợp trên nhiều kích thước màn hình khác nhau.",
      "Bài viết chỉ mang tính chia sẻ kiến thức chung, phục vụ nội dung demo cho website.",
    ],
    date: "2026-04-18",
    category: "Kiến thức",
  },
  {
    title: "Checklist khả năng truy cập (accessibility) cơ bản cho website",
    slug: "checklist-kha-nang-truy-cap-co-ban-cho-website",
    summary:
      "Một số hạng mục cơ bản nên kiểm tra để cải thiện khả năng truy cập của website.",
    content: [
      "Đảm bảo hình ảnh có thuộc tính alt mô tả nội dung.",
      "Đảm bảo các trường trong form có label rõ ràng, liên kết đúng với input.",
      "Đảm bảo trạng thái focus hiển thị rõ khi điều hướng bằng bàn phím.",
      "Đảm bảo độ tương phản màu chữ/nền đủ để dễ đọc.",
      "Checklist mang tính tham khảo, chưa phải kết quả kiểm thử accessibility chính thức.",
    ],
    date: "2026-03-30",
    category: "Kiến thức",
  },
];
