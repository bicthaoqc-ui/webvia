import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Tầm nhìn, sứ mệnh và đội ngũ của VIA (thông tin minh họa trong bản demo).",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Giới thiệu</h1>
        <p className="mt-3 text-slate-600">
          Nội dung dưới đây là dữ liệu minh họa cho bản demo giao diện, chưa
          phải thông tin chính thức của một doanh nghiệp cụ thể.
        </p>
      </header>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card>
          <Card.Title>Tầm nhìn</Card.Title>
          <Card.Description>
            Hướng tới trở thành đơn vị đồng hành tin cậy trong quá trình xây
            dựng và phát triển các sản phẩm công nghệ cho doanh nghiệp.
          </Card.Description>
        </Card>
        <Card>
          <Card.Title>Sứ mệnh</Card.Title>
          <Card.Description>
            Mang đến giải pháp giao diện, sản phẩm số dễ sử dụng, chú trọng
            trải nghiệm người dùng và khả năng truy cập.
          </Card.Description>
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Đội ngũ</h2>
        <p className="mt-1 text-sm text-slate-600">
          Danh sách nhân sự minh họa dưới đây là dữ liệu giả lập, không phải
          thông tin nhân sự thật.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <Card.Title>{member.name}</Card.Title>
              <p className="mt-1 text-sm font-medium text-brand-600">
                {member.role}
              </p>
              <Card.Description>{member.bio}</Card.Description>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
