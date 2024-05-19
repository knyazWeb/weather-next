"use client";
import { RootInterface } from "@/lib/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function WeekDayWeatherCard({ weatherData }: { weatherData: RootInterface }) {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const handleSearch = useCallback((value: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "0") {
      params.set("day", value);
    } else {
      params.delete("day");
    }
    push(`${"/"}?${params.toString()}`);
  }, []);

  return (
    <div className="bg-gradient-to-bl from-[#A6DDE0] to-[#F4D0C0] h-full pt-3 px-3 pb-3 rounded-lg border border-white text-black overflow-hidden flex justify-between gap-3 flex-wrap">
      <div
        onClick={() => handleSearch((0).toString())}
        className="w-fit h-fit flex flex-1 flex-col items-center justify-start py-5 border border-white rounded-3xl px-1 text-white bg-black bg-opacity-20 cursor-pointer hover:bg-opacity-15 transition-all duration-200 ease-in-out"
      >
        <div className="font-bold">Today</div>
        <Image
          className="mb-2"
          src={`https:${weatherData.forecast.forecastday[0].day.condition.icon}`}
          quality={100}
          priority={true}
          width={48}
          height={48}
          alt=""
        />
        <div className="font-sans text-xs text-gray-100">{weatherData.forecast.forecastday[0].day.avghumidity}%</div>
        <div className="font-sans">{weatherData.forecast.forecastday[0].day.avgtemp_c.toFixed(0)}°C</div>
      </div>
      {weatherData.forecast.forecastday.slice(1).map((day, index) => {
        return (
          <div
            onClick={() => handleSearch((index + 1).toString())}
            key={day.date}
            className={`w-fit h-fit flex flex-col flex-1 items-center px-1 justify-start py-5 border border-white rounded-3xl text-white  bg-black bg-opacity-20 cursor-pointer  transition-all duration-200 ease-in-out ${
              searchParams.toString().includes((index + 1).toString())
                ? "bg-opacity-45"
                : "bg-opacity-20 hover:bg-opacity-15"
            }`}
          >
            <div className="font-bold">{new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</div>
            <Image
              className="mb-2"
              src={`https:${day.day.condition.icon}`}
              quality={100}
              priority={true}
              width={48}
              height={48}
              alt=""
            />
            <div className="font-sans text-xs text-gray-100">{day.day.avghumidity}%</div>
            <div className="font-sans">{day.day.maxtemp_c.toFixed(0)}°C</div>
          </div>
        );
      })}
      {/*<Image src={} alt=""  />*/}
    </div>
  );
}
