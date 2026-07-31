"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-ivory hover:bg-navy-800 shadow-[0_1px_0_0_rgba(198,161,91,0.35)_inset]",
  secondary: "bg-gold-500 text-navy-950 hover:bg-gold-400",
  outline:
    "bg-transparent text-navy-900 border border-navy-900/25 hover:border-navy-900 hover:bg-navy-900 hover:text-ivory",
  ghost: "bg-transparent text-navy-900 hover:bg-navy-900/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
  } = props;

  const classes = cn(
    "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(10,20,40,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="size-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
