"use client";

import { getMessages } from "@/messages";
import React from "react";
import { Button } from "../ui";
import { Reveal } from "../ui/Reveal";
import Image from "next/image";
import CollaborationImage from "../../public/images/collabration.png";
import { useRouter } from "next/navigation";
function Collaboration({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const router = useRouter();

  return (
    <Reveal direction="scale" className="my-10 lg:mx-40 mx-10">
      <div className="bg-white shadow-2xl rounded-3xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.35)]">
        <div className=" lg:flex justify-between px-8 ">
          <div className=" lg:w-[50%] py-10">
            <p className="lg:text-3xl font-peyda-bold mt-5 md:mb-16 mb-5 text-justify md:leading-12">
              {t.collaborationDescription}
            </p>
            <Button
              onClick={() => router.push(`/${locale}/contact`)}
              size="lg"
              className="px-16"
            >
              {t.startBusiness}
            </Button>
          </div>
          <Image src={CollaborationImage} alt="collaboration" width={400} />
        </div>
      </div>
    </Reveal>
  );
}

export default Collaboration;
