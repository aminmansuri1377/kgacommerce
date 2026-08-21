// components/ui/ScrollReveal.tsx
"use client";

import { cn } from "@/lib/cn"; // یا مسیر درست فایل cn در پروژه شما
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  direction?: "up" | "in" | "scale";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal({
    threshold: 0.15,
    triggerOnce: true,
  });

  const animationClass = {
    up: "animate-reveal-up",
    in: "animate-reveal-in",
    scale: "animate-reveal-scale",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0", // حالت پیش‌فرض: نامرئی تا زمانی که انیمیشن شروع شود
        isRevealed && animationClass,
        className,
      )}
      style={{
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
