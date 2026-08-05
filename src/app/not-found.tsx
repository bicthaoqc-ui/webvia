import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Không tìm thấy trang",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Lỗi 404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Không tìm thấy trang
      </h1>
      <p className="mt-3 text-slate-600">
        Trang bạn tìm không tồn tại hoặc đã được di chuyển. Vui lòng quay lại
        trang chủ hoặc kiểm tra lại đường dẫn.
      </p>
      <div className="mt-8">
        <Button href="/">Về trang chủ</Button>
      </div>
    </div>
  );
}
