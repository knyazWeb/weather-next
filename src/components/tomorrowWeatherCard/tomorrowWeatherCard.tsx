import { RootInterface } from "@/lib/types";
import Image from "next/image";
export default function TomorrowWeatherCard({ weatherData }: { weatherData: RootInterface }) {
  return (
    <div className="bg-gradient-to-br from-[#e3f891] to-[#fdde88] rounded-lg border border-white text-black w-full h-fit flex flex-col justify-between py-3 px-4 gap-7">
      <div>
        <div className="text-sm text-gray-500">Tomorrow</div>
        <div className="text-2xl font-medium">
          {weatherData.location.name}, {weatherData.location.country}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="self-center">
          <div className="text-2xl font-sans font-medium">
            {weatherData.forecast.forecastday[1].day.maxtemp_c.toFixed(0)}°C
          </div>
          <div className="text-sm text-gray-500">{weatherData.forecast.forecastday[1].day.condition.text}</div>
        </div>
        <div className="bg-gray-300 bg-opacity-10 rounded-lg">
          <Image
            src={`https:${weatherData.current.condition.icon}`}
            quality={100}
            priority={true}
            width={80}
            height={80}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
