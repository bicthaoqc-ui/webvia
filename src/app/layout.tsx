import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VIA — Website giới thiệu công ty (demo)",
    template: "%s | VIA",
  },
  description:
    "Website demo giới thiệu công ty VIA: dịch vụ, tin tức, thông tin liên hệ. Dữ liệu trên trang là dữ liệu tĩnh, phục vụ mục đích minh họa/học tập.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
