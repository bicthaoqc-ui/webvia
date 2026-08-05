// Dữ liệu dịch vụ — dữ liệu tĩnh, giả lập, phục vụ demo giao diện.
// Không phải dữ liệu thật lấy từ hệ thống/CMS nào.

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: "code" | "design" | "cloud" | "support" | "consulting" | "mobile";
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "phat-trien-website",
    title: "Phát triển website",
    summary:
      "Xây dựng website doanh nghiệp, landing page, ứng dụng web theo yêu cầu.",
    icon: "code",
    featured: true,
  },
  {
    slug: "thiet-ke-giao-dien",
    title: "Thiết kế giao diện (UI/UX)",
    summary:
      "Thiết kế giao diện trực quan, thân thiện người dùng, chuẩn responsive.",
    icon: "design",
    featured: true,
  },
  {
    slug: "giai-phap-dien-toan-dam-may",
    title: "Giải pháp điện toán đám mây",
    summary:
      "Tư vấn triển khai hạ tầng, tối ưu chi phí vận hành trên nền tảng cloud.",
    icon: "cloud",
    featured: true,
  },
  {
    slug: "ho-tro-ky-thuat",
    title: "Hỗ trợ kỹ thuật",
    summary: "Hỗ trợ vận hành, bảo trì hệ thống sau khi bàn giao sản phẩm.",
    icon: "support",
    featured: false,
  },
  {
    slug: "tu-van-chuyen-doi-so",
    title: "Tư vấn chuyển đổi số",
    summary:
      "Đồng hành cùng doanh nghiệp trong quá trình số hóa quy trình nội bộ.",
    icon: "consulting",
    featured: false,
  },
  {
    slug: "phat-trien-ung-dung-di-dong",
    title: "Phát triển ứng dụng di động",
    summary: "Xây dựng ứng dụng di động đa nền tảng cho iOS và Android.",
    icon: "mobile",
    featured: false,
  },
];
