import { getMessages } from "@/messages";
import React from "react";
import { Reveal } from "../ui/Reveal";

const VALUES = [
  {
    id: 1,
    title: "مورد اول",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 2,
    title: "مورد دوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 3,
    title: "مورد سوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
];

function WhyKga({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <div className="pb-16">
      <Reveal>
        <h1 className="mx-auto my-5 text-center font-peyda-bold lg:text-2xl">
          {t.whyKgaTitle}
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mx-5 text-center font-peyda-regular md:mx-auto md:w-[50%]">
          {t.whyKgaDescription}
        </p>
      </Reveal>

      <div className="mx-5 mt-12 grid max-w-[1000px] gap-6 md:mx-auto md:grid-cols-3">
        {VALUES.map((value, index) => (
          <Reveal key={value.id} delay={index * 130} className="h-full">
            <div className="why-card h-full bg-popover rounded-2xl border border-primary px-8 py-5 md:py-10 md:text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_16px_40px_-12px_rgba(215,165,57,0.4)]">
              <h3 className="mb-4 font-peyda-medium text-2xl text-foreground">
                {value.title}
              </h3>
              <p className="font-peyda-thin text-sm text-foreground md:leading-[2]">
                {value.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default WhyKga;
