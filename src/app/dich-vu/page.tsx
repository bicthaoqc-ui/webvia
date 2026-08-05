import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Danh sách nhóm dịch vụ minh họa của VIA (dữ liệu tĩnh, demo).",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Dịch vụ</h1>
        <p className="mt-3 text-slate-600">
          Danh sách dịch vụ dưới đây là dữ liệu tĩnh phục vụ demo giao diện,
          chưa gắn với hệ thống đặt dịch vụ hay thanh toán thật.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug}>
            <Card.Title>{service.title}</Card.Title>
            <Card.Description>{service.summary}</Card.Description>
          </Card>
        ))}
      </div>
    </div>
  );
}
