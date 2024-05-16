import { RootInterface } from "@/lib/types";
import Image from "next/image";
import LocationCard from "../ui/locationCard/LocationCard";
import StatsCard from "../ui/statsCard/StatsCard";
import css from "./CurrentWeatherCard.module.scss";


export default async function CurrentWeatherCard({ weatherData }: { weatherData: RootInterface }) {
 
  return (
    <div
      className={`${css.bgGradient} rounded-lg border border-white bg-opacity-30 text-black bg-gray-600 backdrop-blur-lg flex pt-8 px-6 pb-6 gap-7`}
    >
      <div className="basis-1/2">
        <div className="mb-9">
          <LocationCard>
            {/*FIXME: PLACEHOLDER LOCATION*/}
            {weatherData.location.name}, {weatherData.location.country}
          </LocationCard>
        </div>

        <div className="mb-14">
          <h3 className="text-3xl">Weather</h3>
          <p className="text-sm">Now</p>
        </div>
        <div>
          <div className="text-6xl font-sans mb-4 font-medium">{weatherData.current.temp_c}°C</div>
          <div className="text-sm">Feels like {weatherData.current.feelslike_c}°C</div>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-between">
        <div className="mx-auto">
          <Image
            src={`https:${weatherData.current.condition.icon}`}
            quality={100}
            priority={true}
            width={120}
            height={120}
            alt=""
          />
        </div>
        <div className="flex gap-3">
          <StatsCard
            header="Visability"
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
  );
}
