import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

export default function DayTimeCard({ dayTimeGif, imgStyles }: { dayTimeGif: StaticImport; imgStyles?: string }) {
  return (
    <div className={`${imgStyles ? "bg-[#FBFBFB]" : "bg-white "} rounded-full p-2 w-[64px] h-[64px] `}>
      <div className={`${imgStyles}`}>
        <Image
          className={"rounded-lg"}
          src={dayTimeGif}
          width={48}
          height={48}
          alt=""
        />
      </div>
    </div>
  );
}
