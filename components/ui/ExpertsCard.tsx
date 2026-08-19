import React from "react";
import Image from "next/image";

interface ExpertsCardProps {
  image: string;
  title: string;
  description: string;
}

function ExpertsCard({ image, title, description }: ExpertsCardProps) {
  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        bg-popover
        p-4
        shadow-[0_4px_12px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        sm:p-5
        md:rounded-3xl
        md:p-6
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
        />
      </div>

      {/* Content */}
      <div className="px-1 pb-2 pt-8 text-center sm:pt-10">
        <h3
          className="
            font-peyda-semibold
            text-base
            text-foreground
            sm:text-lg
            md:text-xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            font-peyda-regular
            text-xs
            leading-7
            text-foreground/80
            sm:text-sm
            sm:leading-8
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default ExpertsCard;
