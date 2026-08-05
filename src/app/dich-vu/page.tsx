"use client";

import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import BirdLoading from "@/components/ui/BirdLoading";
import ServicePopup from "@/components/ui/ServicePopup";
import { services, type Service } from "@/data/services";

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Hiệu ứng loading giả lập 1.5 giây
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BirdLoading />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Dịch vụ</h1>
        <p className="mt-3 text-slate-600">
          Click vào từng dịch vụ bên dưới để xem thông tin chi tiết.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.slug}
            className="service-card-interactive"
          >
            <div onClick={() => setSelectedService(service)}>
              <Card.Title>{service.title}</Card.Title>
              <Card.Description>{service.summary}</Card.Description>
              <span className="service-card-hint">
                Xem chi tiết →
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Popup chi tiết dịch vụ */}
      {selectedService && (
        <ServicePopup
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
