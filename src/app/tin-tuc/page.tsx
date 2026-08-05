import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Tin tức",
  description:
    "Danh sách bài viết minh họa của VIA, lấy từ dữ liệu tĩnh /data/news.ts.",
};

function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function NewsListPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Tin tức</h1>
        <p className="mt-3 text-slate-600">
          Các bài viết dưới đây là dữ liệu tĩnh mẫu (mock data), phục vụ demo
          giao diện danh sách và trang chi tiết.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article) => (
          <Card key={article.slug} className="flex flex-col">
            <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {article.category}
            </span>
            <Link
              href={`/tin-tuc/${article.slug}`}
              className="mt-3 rounded text-lg font-semibold text-slate-900 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {article.title}
            </Link>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              {article.summary}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <time
                dateTime={article.date}
                className="text-xs text-slate-500"
              >
                {formatDate(article.date)}
              </time>
              <Link
                href={`/tin-tuc/${article.slug}`}
                className="rounded text-sm font-semibold text-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Đọc tiếp →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
