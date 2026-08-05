// Dữ liệu dịch vụ — dữ liệu tĩnh, giả lập, phục vụ demo giao diện.
// Không phải dữ liệu thật lấy từ hệ thống/CMS nào.

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  icon: "code" | "design" | "cloud" | "support" | "consulting" | "mobile";
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "phat-trien-website",
    title: "Phát triển website",
    summary:
      "Xây dựng website doanh nghiệp, landing page, ứng dụng web theo yêu cầu.",
    description:
      "Chúng tôi cung cấp dịch vụ phát triển website chuyên nghiệp, từ landing page đơn giản đến hệ thống web phức tạp. Đội ngũ sử dụng các công nghệ hiện đại như Next.js, React, TypeScript để đảm bảo hiệu suất cao và trải nghiệm người dùng tốt nhất.",
    features: [
      "Thiết kế responsive, tương thích mọi thiết bị",
      "Tối ưu SEO và tốc độ tải trang",
      "Tích hợp hệ thống quản trị nội dung (CMS)",
      "Bảo mật SSL và chuẩn bảo mật web",
    ],
    icon: "code",
    featured: true,
  },
  {
    slug: "thiet-ke-giao-dien",
    title: "Thiết kế giao diện (UI/UX)",
    summary:
      "Thiết kế giao diện trực quan, thân thiện người dùng, chuẩn responsive.",
    description:
      "Dịch vụ thiết kế UI/UX chuyên sâu giúp sản phẩm của bạn nổi bật với giao diện đẹp mắt và trải nghiệm người dùng mượt mà. Chúng tôi nghiên cứu hành vi người dùng, xây dựng wireframe, prototype trước khi thiết kế hoàn chỉnh.",
    features: [
      "Nghiên cứu người dùng và phân tích UX",
      "Wireframe và Prototype tương tác",
      "Thiết kế hệ thống Design System",
      "Kiểm thử A/B và tối ưu chuyển đổi",
    ],
    icon: "design",
    featured: true,
  },
  {
    slug: "giai-phap-dien-toan-dam-may",
    title: "Giải pháp điện toán đám mây",
    summary:
      "Tư vấn triển khai hạ tầng, tối ưu chi phí vận hành trên nền tảng cloud.",
    description:
      "Chúng tôi giúp doanh nghiệp chuyển đổi lên nền tảng cloud một cách an toàn và hiệu quả. Từ tư vấn kiến trúc, di chuyển dữ liệu đến quản lý và tối ưu hóa chi phí hạ tầng đám mây trên AWS, Azure, GCP.",
    features: [
      "Tư vấn kiến trúc hạ tầng cloud",
      "Di chuyển hệ thống lên cloud (Migration)",
      "Tối ưu chi phí vận hành hàng tháng",
      "Giám sát và bảo mật hệ thống 24/7",
    ],
    icon: "cloud",
    featured: true,
  },
  {
    slug: "ho-tro-ky-thuat",
    title: "Hỗ trợ kỹ thuật",
    summary: "Hỗ trợ vận hành, bảo trì hệ thống sau khi bàn giao sản phẩm.",
    description:
      "Đội ngũ kỹ thuật của VIA luôn sẵn sàng hỗ trợ bạn sau khi sản phẩm được bàn giao. Chúng tôi cung cấp dịch vụ bảo trì định kỳ, xử lý sự cố khẩn cấp, cập nhật bảo mật và nâng cấp tính năng theo yêu cầu.",
    features: [
      "Hỗ trợ kỹ thuật qua hotline & email",
      "Bảo trì và cập nhật định kỳ",
      "Xử lý sự cố khẩn cấp trong 2 giờ",
      "Báo cáo tình trạng hệ thống hàng tháng",
    ],
    icon: "support",
    featured: false,
  },
  {
    slug: "tu-van-chuyen-doi-so",
    title: "Tư vấn chuyển đổi số",
    summary:
      "Đồng hành cùng doanh nghiệp trong quá trình số hóa quy trình nội bộ.",
    description:
      "Dịch vụ tư vấn chuyển đổi số toàn diện, giúp doanh nghiệp hiểu rõ hiện trạng, xây dựng lộ trình số hóa phù hợp và triển khai từng bước một cách bền vững. Chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp vừa và nhỏ.",
    features: [
      "Đánh giá mức độ sẵn sàng chuyển đổi số",
      "Xây dựng lộ trình chuyển đổi số 3-5 năm",
      "Đào tạo nhân sự vận hành hệ thống mới",
      "Tư vấn lựa chọn công nghệ phù hợp",
    ],
    icon: "consulting",
    featured: false,
  },
  {
    slug: "phat-trien-ung-dung-di-dong",
    title: "Phát triển ứng dụng di động",
    summary: "Xây dựng ứng dụng di động đa nền tảng cho iOS và Android.",
    description:
      "Phát triển ứng dụng di động chất lượng cao cho cả iOS và Android bằng React Native hoặc Flutter. Từ ý tưởng đến sản phẩm hoàn chỉnh trên App Store và Google Play, chúng tôi đảm bảo ứng dụng mượt mà và dễ sử dụng.",
    features: [
      "Phát triển đa nền tảng (iOS & Android)",
      "Tích hợp thanh toán & thông báo đẩy",
      "Đăng tải lên App Store & Google Play",
      "Hỗ trợ bảo trì và cập nhật sau ra mắt",
    ],
    icon: "mobile",
    featured: false,
  },
];
