import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASSES: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-700",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:outline-slate-500",
  outline:
    "border border-brand-600 text-brand-600 hover:bg-brand-50 focus-visible:outline-brand-600",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

/**
 * Button dùng chung cho toàn site.
 * Nếu truyền `href` sẽ render dưới dạng thẻ Link (next/link),
 * ngược lại render dưới dạng <button>.
 */
export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _variant, className: _className, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
