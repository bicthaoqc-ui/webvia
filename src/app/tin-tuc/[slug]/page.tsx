import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";

type PageProps = {
  params: { slug: string };
};

function getArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticle(params.slug);
  if (!article) {
    return { title: "Không tìm thấy bài viết" };
  }
  return {
    title: article.title,
    description: article.summary,
  };
}

function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function NewsDetailPage({ params }: PageProps) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/tin-tuc"
        className="rounded text-sm font-medium text-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        ← Quay lại danh sách tin tức
      </Link>

      <header className="mt-6">
        <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {article.category}
        </span>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          {article.title}
        </h1>
        <time dateTime={article.date} className="mt-2 block text-sm text-slate-500">
          {formatDate(article.date)}
        </time>
      </header>

      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
