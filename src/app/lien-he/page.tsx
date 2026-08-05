import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Form liên hệ demo — dữ liệu chỉ được xử lý phía trình duyệt, chưa kết nối dịch vụ gửi email/API thật.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Liên hệ</h1>
        <p className="mt-3 text-slate-600">
          Đây là form liên hệ demo: dữ liệu chỉ được xử lý tạm thời phía
          trình duyệt (client-side), chưa gửi tới email hay API thật nào.
        </p>
      </header>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
