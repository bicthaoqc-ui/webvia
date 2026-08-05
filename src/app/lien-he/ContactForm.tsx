"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

type FormState = {
  hoTen: string;
  email: string;
  noiDung: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  hoTen: "",
  email: "",
  noiDung: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validate(data: FormState): FormErrors {
    const nextErrors: FormErrors = {};
    if (!data.hoTen.trim()) {
      nextErrors.hoTen = "Vui lòng nhập họ tên.";
    }
    if (!data.email.trim()) {
      nextErrors.email = "Vui lòng nhập email.";
    } else if (!isValidEmail(data.email.trim())) {
      nextErrors.email = "Email không đúng định dạng.";
    }
    if (!data.noiDung.trim()) {
      nextErrors.noiDung = "Vui lòng nhập nội dung.";
    }
    return nextErrors;
  }

  function handleChange(field: keyof FormState, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    // demo — chưa kết nối dịch vụ thật (không có backend/API gửi email).
    // Dữ liệu chỉ được log ra console để minh họa luồng xử lý phía client.
    console.log("[Liên hệ - demo] Dữ liệu gửi đi:", formData);

    setIsSubmitted(true);
    setFormData(INITIAL_STATE);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="hoTen"
          className="block text-sm font-medium text-slate-900"
        >
          Họ tên
        </label>
        <input
          id="hoTen"
          name="hoTen"
          type="text"
          autoComplete="name"
          value={formData.hoTen}
          onChange={(event) => handleChange("hoTen", event.target.value)}
          aria-invalid={Boolean(errors.hoTen)}
          aria-describedby={errors.hoTen ? "hoTen-error" : undefined}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        />
        {errors.hoTen && (
          <p id="hoTen-error" className="mt-1 text-sm text-red-600">
            {errors.hoTen}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-900"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="noiDung"
          className="block text-sm font-medium text-slate-900"
        >
          Nội dung
        </label>
        <textarea
          id="noiDung"
          name="noiDung"
          rows={5}
          value={formData.noiDung}
          onChange={(event) => handleChange("noiDung", event.target.value)}
          aria-invalid={Boolean(errors.noiDung)}
          aria-describedby={errors.noiDung ? "noiDung-error" : undefined}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        />
        {errors.noiDung && (
          <p id="noiDung-error" className="mt-1 text-sm text-red-600">
            {errors.noiDung}
          </p>
        )}
      </div>

      <Button type="submit">Gửi liên hệ</Button>

      <div role="status" aria-live="polite">
        {isSubmitted && (
          <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            Đã ghi nhận nội dung (demo). Dữ liệu chưa được gửi tới hệ thống
            thật nào, chỉ được log ra console trình duyệt.
          </p>
        )}
      </div>
    </form>
  );
}
