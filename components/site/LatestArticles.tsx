import React from "react";
import Image from "next/image";
import Pic1 from "../../public/images/a3.jpg";
import Pic2 from "../../public/images/a2.jpg";
import Pic3 from "../../public/images/a1.jpg";
import { getMessages } from "@/messages";
import { Reveal } from "../ui/Reveal";

export interface Article {
  id: string | number;
  title: string;
  imageUrl: string;
  href?: string;
}

interface LatestArticlesProps {
  articles?: Article[];
  locale: string;
}

const items = [
  {
    id: 1,
    title: "آخرین اخبار در رابطه با نفت ایران و جهان",
    imageUrl: Pic1,
    href: "#",
  },
  { id: 2, title: "مراحل همکاری با کیان گستر", imageUrl: Pic2, href: "#" },
  {
    id: 3,
    title: "آخرین خبرهای بندرهای جنوب ایران",
    imageUrl: Pic3,
    href: "#",
  },
];

function LatestArticles({ articles = [], locale }: LatestArticlesProps) {
  const t = getMessages(locale);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="mb-8 text-center font-peyda-bold text-3xl text-foreground">
            {t.latestArticles}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl md:grid-cols-3">
          {items?.map((item, index) => (
            <Reveal key={item.id} delay={index * 140} className="h-full">
              <a
                href={item.href ?? "#"}
                className="group relative block h-full min-h-[320px] overflow-hidden"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,28,45,0.75)] via-[rgba(15,28,45,0.1)] to-transparent" />
                <span className="absolute inset-x-0 bottom-6 px-6 text-center font-peyda-medium text-xl leading-[1.5] text-white transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                  {item.title}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestArticles;
