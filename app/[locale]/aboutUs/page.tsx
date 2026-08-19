"use client";

import React from "react";
import { formatLocaleNumber, useCountUp } from "@/hooks/useCountUp";
import { useParams } from "next/navigation";
import { getMessages } from "@/messages";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui";
import StickySection from "@/components/ui/StickySection";
import { GlassCard } from "@/components/ui/GlassCard";
import ExpertsCard from "@/components/ui/ExpertsCard";

const VALUES = [
  {
    title: "مورد اول",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    title: "مورد دوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    title: "مورد سوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
];

const STATS = [
  {
    value: 100,
    label: "معامله جاری",
  },
  {
    value: 200,
    label: "معامله به اتمام رسیده",
  },
  {
    value: 20,
    label: "سال تجربه",
  },
];

function StatItem({
  stat,
  locale = "fa",
  enabled,
}: {
  stat: {
    value: number;
    label: string;
  };
  locale?: string;
  enabled: boolean;
}) {
  const count = useCountUp(stat.value, 2400, 200, enabled);

  return (
    <div className="text-center">
      <div className="font-peyda-bold text-4xl leading-none text-popover sm:text-5xl lg:text-6xl">
        {formatLocaleNumber(count, locale)}+
      </div>

      <div className="mt-2 whitespace-nowrap font-peyda-medium text-xs text-popover sm:text-sm lg:mt-3 lg:text-lg">
        {stat.label}
      </div>
    </div>
  );
}

function AboutUs() {
  const params = useParams();

  const locale = params.locale as string;
  const t = getMessages(locale);

  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <main dir="rtl" className="overflow-hidden bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative isolate md:mb-10">
        {/* Hero background */}
        <div
          className="
            absolute inset-x-0 top-0 -z-10
            h-72
            bg-cover bg-center
            md:h-full
          "
          style={{
            backgroundImage: "url('/images/towman.jpg')",
          }}
        />

        {/* Hero overlay */}
        {/* <div
          className="
            absolute inset-x-0 top-0 -z-10
            h-72
            bg-slate-950/60
            md:inset-0
            md:h-full
          "
        /> */}

        {/* Hero content */}
        <div className="container mx-auto px-4 pb-8 pt-24 text-center sm:px-6 md:pb-16 md:pt-32 lg:px-8">
          <h1 className="font-peyda-bold text-2xl leading-relaxed text-white sm:text-3xl md:text-4xl">
            درباره ما :
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-peyda-regular text-xs leading-loose text-white sm:text-sm md:text-base lg:text-lg">
            {t.hero.description}
          </p>
        </div>

        {/* =======================================================
            COMPANY STORY
        ======================================================= */}

        <div className="container mx-auto px-4 pb-10 sm:px-6 md:pb-24 lg:px-8">
          <div
            className="
              mx-auto max-w-6xl
              mt-20
              md:rounded-3xl
              md:bg-white/15
              md:p-10
              md:backdrop-blur-md
              lg:p-14
          "
          >
            <h2 className="mb-5 text-center font-peyda-bold text-xl text-foreground md:mb-6 md:text-3xl md:text-white">
              داستان شرکت :
            </h2>

            <p className="text-justify font-peyda-regular text-xs leading-loose text-foreground md:text-base md:leading-9 md:text-white lg:text-lg">
              {t.hero.description}
              {t.hero.description}
              {t.hero.description}
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <StickySection title="OUR VISIONS" dir="rtl">
        <section className="container mx-auto px-4 pt-10 sm:px-6 md:pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
              <div
                className="
                aspect-[4/3]
                bg-cover
                bg-center
                sm:aspect-video
                md:h-[60vh]
                w-full
              "
                style={{
                  backgroundImage: "url('/images/select.jpg')",
                }}
              />

              {/* <div className="absolute inset-0 bg-slate-950/60" /> */}

              <div className="absolute inset-0 flex items-center justify-center px-6 pb-16 text-center md:items-start md:pt-16">
                <h2 className="font-peyda-bold text-xl leading-relaxed text-white md:text-3xl">
                  ماموریت و چشم انداز ما :
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 md:mx-auto mx-4 -mt-20 max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-8 md:-mt-64 md:rounded-3xl md:p-12">
              <p className="text-justify font-peyda-regular text-xs leading-loose text-foreground sm:text-sm md:text-base md:leading-8 lg:text-lg">
                {t.hero.description}
                {t.hero.description}
                {t.hero.description}
                {t.hero.description}
              </p>
            </div>
          </div>
        </section>
      </StickySection>
      {/* =========================================================
          ORGANIZATIONAL VALUES
      ========================================================= */}
      <StickySection title="OUR VALUES" dir="rtl">
        <section className="container mx-auto px-4 pt-12 text-center sm:px-6 md:pb-24 lg:px-8">
          <h2 className="font-peyda-bold text-xl text-foreground md:text-3xl">
            ارزش های سازمانی
          </h2>

          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3 sm:gap-5 md:mt-12 md:gap-6">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="
                rounded-2xl
                border
                border-primary/70
                p-5
                text-right
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                bg-popover

                sm:p-6
                md:rounded-3xl
                md:p-8
                md:text-center
              "
              >
                <h3 className="mb-2 font-peyda-semibold text-sm text-foreground md:mb-4 md:text-xl lg:text-2xl">
                  {value.title}
                </h3>

                <p className="font-peyda-regular text-xs leading-loose text-foreground md:text-sm">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </StickySection>

      {/* =========================================================
          STATS
      ========================================================= */}
      <StickySection title="WHAT WE ACHIVED" dir="rtl">
        <section
          className="
    relative
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat
    px-4
    py-12
    sm:px-6
    md:py-16
    md:mb-20
    lg:px-8
  "
          style={{
            backgroundImage: "url('/images/achived.jpg')",
          }}
        >
          {/* Overlay */}
          <div aria-hidden className="absolute inset-0 bg-black/25" />

          <div className="container relative mx-auto">
            <GlassCard
              variant="dark"
              radius="xl"
              blur="lg"
              withReflection
              className="
        mx-auto
        max-w-5xl
        px-6
        py-8
        sm:px-10
        sm:py-10
        md:px-14
        md:py-12
      "
            >
              {/* Title */}
              <h2
                className="
          text-center
          font-peyda-bold
          text-xl
          text-popover
          sm:text-2xl
          md:text-3xl
        "
              >
                آمار ها و دست آورد ها :
              </h2>

              {/* Description */}
              <p
                className="
                
          mx-auto
          mt-4
          max-w-3xl
          text-center
          font-peyda-regular
          text-xs
          leading-loose
          text-popover
          sm:text-sm
          md:text-base
        "
              >
                {t.hero.description}
              </p>

              {/* Counter */}
              <div
                ref={statsRef}
                className="
                text-popover
          mx-auto
          mt-8
          grid
          max-w-3xl
          grid-cols-3
          items-start
          gap-3
          sm:mt-10
          sm:gap-8
          md:mt-12
          md:gap-16
        "
              >
                {STATS.map((stat) => (
                  <StatItem
                    key={stat.label}
                    stat={stat}
                    locale="fa"
                    enabled={statsInView}
                  />
                ))}
              </div>
            </GlassCard>
          </div>
        </section>
      </StickySection>
      <StickySection title="OUR EXPERTS" dir="rtl">
        <div
          className="
    mx-auto
    grid
    max-w-6xl
    grid-cols-1
    gap-4
    sm:grid-cols-2
    md:gap-5
    lg:grid-cols-3
  "
        >
          <ExpertsCard
            image="/images/expert.jpg"
            title="منتظر همکاری با شما هستیم"
            description={t.hero.description}
          />

          <ExpertsCard
            image="/images/expert.jpg"
            title="منتظر همکاری با شما هستیم"
            description={t.hero.description}
          />

          <ExpertsCard
            image="/images/expert.jpg"
            title="منتظر همکاری با شما هستیم"
            description={t.hero.description}
          />
        </div>
      </StickySection>
      <section className=" px-4 pb-12 pt-12 sm:px-6 md:py-24">
        <div className="bg-popover mx-auto max-w-3xl rounded-2xl   p-6 text-center shadow-sm sm:p-8 md:rounded-3xl md:p-12">
          <h2 className="font-peyda-bold text-xl text-foreground md:text-3xl">
            منتظر همکاری با شما هستیم
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-peyda-regular text-xs leading-loose text-foreground sm:text-sm md:text-base lg:text-lg">
            {t.hero.description}
          </p>

          <Button className="mt-6 px-8 font-peyda-bold md:mt-8 md:px-10">
            {t.startBusiness}
          </Button>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
