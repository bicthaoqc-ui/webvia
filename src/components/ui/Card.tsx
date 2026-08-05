import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

/** Khung Card dùng chung (bo góc, viền, đổ bóng nhẹ khi hover). */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-150 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

Card.Title = function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold text-slate-900 ${className}`}>
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({
  children,
  className = "",
}: CardTitleProps) {
  return <p className={`mt-2 text-sm text-slate-600 ${className}`}>{children}</p>;
};
