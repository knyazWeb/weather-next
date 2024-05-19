import { RootInterface } from "@/lib/types";
import Image from "next/image";
import LocationCard from "../ui/locationCard/LocationCard";
import StatsCard from "../ui/statsCard/StatsCard";

export default async function CurrentWeatherCard({ weatherData }: { weatherData: RootInterface}) {
  return (
    <div
      className={`relative bg-gradient-to-br from-[#A6DDE0] to-[#F4D0C0] rounded-lg border border-white w-full text-black flex pt-8 px-6 pb-6 gap-4`}
    >
      <div className="basis-1/2">
        <div className="mb-9">
          <LocationCard>
            {weatherData.location.name}, {weatherData.location.country}
          </LocationCard>
        </div>

        <div className="mb-14">
          <h3 className="text-3xl">Weather</h3>
          <p className="text-sm text-gray-500">Now</p>
        </div>
        <div>
          <div className="text-6xl font-sans mb-4 font-medium">{weatherData.current.temp_c.toFixed(0)}°C</div>
          <div className="text-sm text-gray-500 font-sans">Feels like {weatherData.current.feelslike_c}°C</div>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-between">
        <div className="mx-auto mt-4">
          <Image
            src={`https:${weatherData.current.condition.icon}`}
            quality={100}
            priority={true}
            width={80}
            height={80}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <StatsCard
              header="Wind"
              bgColor="bg-white"
            >
              {weatherData.current.wind_mph}m/s
            </StatsCard>
            <StatsCard
              header="Pressure"
              bgColor="bg-lime-300"
            >
              {weatherData.current.pressure_mb}mb
            </StatsCard>
          </div>
          <div className="flex gap-3">
            <StatsCard
              header="Visibility"
              bgColor="bg-lime-300"
            >
              {weatherData.current.vis_km}km
            </StatsCard>
            <StatsCard
              header="humidity "
              bgColor="bg-white"
            >
              {weatherData.current.humidity}%
            </StatsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
