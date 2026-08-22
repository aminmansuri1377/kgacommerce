"use client";

import { cn } from "@/lib/cn";
import React from "react";
import { useInView } from "@/hooks/useInView";

const SectionTitle = ({ children, sticky = true, className }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full items-center gap-4",
        sticky
          ? "sticky top-14 lg:top-20 z-30 bg-background/85 backdrop-blur-md py-4 md:py-6 transition-shadow duration-300"
          : "md:my-20 my-5",
        className,
      )}
    >
      <div
        className={cn(
          "section-title-line section-title-line-start h-px flex-1 bg-black/70",
          inView && "is-in",
        )}
      />

      <h2
        className={cn(
          "section-title-heading text-outline whitespace-nowrap text-4xl md:text-6xl",
          inView && "is-in",
        )}
      >
        {children}
      </h2>

      <div
        className={cn(
          "section-title-line section-title-line-end h-px flex-1 bg-black/70",
          inView && "is-in",
        )}
      />
    </div>
  );
};

export default SectionTitle;
