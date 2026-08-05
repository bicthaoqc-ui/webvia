// Dữ liệu đội ngũ — dữ liệu tĩnh, giả lập (tên/vai trò minh họa),
// KHÔNG phải thông tin nhân sự thật của bất kỳ tổ chức nào.

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Nguyễn Văn A",
    role: "Trưởng nhóm phát triển",
    bio: "Phụ trách định hướng kỹ thuật và kiến trúc hệ thống.",
  },
  {
    name: "Trần Thị B",
    role: "Thiết kế giao diện",
    bio: "Phụ trách thiết kế trải nghiệm và giao diện người dùng.",
  },
  {
    name: "Lê Văn C",
    role: "Chuyên viên vận hành",
    bio: "Phụ trách hỗ trợ kỹ thuật và vận hành hệ thống.",
  },
];
