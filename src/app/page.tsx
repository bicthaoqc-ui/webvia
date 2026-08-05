import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

export default function HomePage() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Website demo — VIA
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Giải pháp công nghệ đồng hành cùng doanh nghiệp
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              VIA là trang giới thiệu demo, trình bày các nhóm dịch vụ và
              thông tin công ty dưới dạng frontend tĩnh, phục vụ mục đích học
              tập và minh họa giao diện.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/dich-vu">Xem dịch vụ</Button>
              <Button href="/lien-he" variant="outline">
                Liên hệ ngay
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dịch vụ nổi bật */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Dịch vụ nổi bật
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Một số nhóm dịch vụ tiêu biểu được trình bày trong bản demo.
            </p>
          </div>
          <Button href="/dich-vu" variant="secondary" className="w-fit">
            Xem tất cả dịch vụ
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Card key={service.slug}>
              <Card.Title>{service.title}</Card.Title>
              <Card.Description>{service.summary}</Card.Description>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
