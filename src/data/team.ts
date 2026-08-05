// Đội ngũ nhân sự tinh hoa của VIA.

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Lương Gia Bảo",
    role: "Giám đốcphát triển",
    bio: "Phụ trách định hướng kỹ thuật và kiến trúc hệ thống.",
  },
  {
    name: "Trần Thị Bình",
    role: "Giám đốc Thiết kế giao diện",
    bio: "Phụ trách thiết kế trải nghiệm và giao diện người dùng.",
  },
  {
    name: "Đinh Thị Bích Thảo",
    role: "Giám Đốc công ty",
    bio: "Phụ trách hỗ trợ kỹ thuật và vận hành hệ thống.",
  },
  {
    name: "Đinh Thị Bích Phương",
    role: "Giám đốc khối kiểm thử",
    bio: "Phụ trách hỗ trợ kỹ thuật và vận hành hệ thống.",
  },
];
