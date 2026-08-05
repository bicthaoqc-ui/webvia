import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold text-brand-700">VIA</p>
          <p className="mt-2 max-w-xs text-sm text-slate-600">
            Website giới thiệu công ty VIA — bản demo giao diện, dữ liệu trên
            trang chỉ mang tính minh họa.
          </p>
        </div>

        <nav aria-label="Liên kết footer">
          <p className="text-sm font-semibold text-slate-900">Liên kết</p>
          <ul className="mt-3 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded text-sm text-slate-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-slate-900">Liên hệ (demo)</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Email: contact@via-demo.example</li>
            <li>Điện thoại: (0000) 000 000</li>
            <li>Địa chỉ: đang cập nhật</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        © {year} VIA. Đây là trang demo phục vụ mục đích học tập, không phải
        website chính thức.
      </div>
    </footer>
  );
}
