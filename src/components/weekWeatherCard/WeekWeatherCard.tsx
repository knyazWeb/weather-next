import { RootInterface } from "@/lib/types";
import Image from "next/image";

export default function WeekDayWeatherCard({ weatherData }: { weatherData: RootInterface }) {
  return (
    <div className="bg-gradient-to-br from-[#8d81c4] to-[#E6C3E3] h-full pt-3 px-3 pb-3 rounded-lg border border-white text-black overflow-hidden flex justify-between gap-3 flex-wrap">
      <div className="w-fit h-fit flex flex-1 flex-col items-center justify-start py-5 border border-white rounded-3xl px-1 text-white bg-black bg-opacity-10">
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
      {weatherData.forecast.forecastday.slice(1).map((day) => {
        return (
          <div
            key={day.date}
            className="w-fit h-fit flex flex-col flex-1 items-center px-1 justify-start py-5 border border-white rounded-3xl text-white  bg-black bg-opacity-10"
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
            <div className="font-sans">{day.day.avgtemp_c.toFixed(0)}°C</div>
          </div>
        );
      })}
      {/*<Image src={} alt=""  />*/}
    </div>
  );
}
