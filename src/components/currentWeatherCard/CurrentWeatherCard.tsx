import { RootInterface } from "@/lib/types";
import Image from "next/image";
import LocationCard from "../ui/locationCard/LocationCard";
import StatsCard from "../ui/statsCard/StatsCard";

export default async function CurrentWeatherCard({
  weatherData,
  queryDay,
}: {
  weatherData: RootInterface;
  queryDay: string;
}) {
  return (
    <div
      className={`flex relative bg-gradient-to-br from-[#A6DDE0] to-[#F4D0C0] rounded-lg border border-white w-full text-black max-[560px]:flex-col pt-8 px-6 pb-6 gap-4`}
    >
      <div className="basis-1/2 max-[560px]:flex max-[560px]:flex-wrap max-[560px]:justify-between max-[560px]:items-center">
        <div className="mb-9 max-[560px]:w-full max-[560px]:mb-4 ">
          <LocationCard>
            {weatherData.location.name}, {weatherData.location.country}
          </LocationCard>
        </div>

        <div className="mb-14 max-[560px]:mb-0">
          <h3 className="text-3xl">Weather</h3>
          <p className="text-sm text-gray-500">
            {queryDay === "0"
              ? "Now"
              : new Date(weatherData.forecast.forecastday[+queryDay].date).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
          </p>
        </div>
        <div>
          <div className="text-6xl font-sans mb-4 font-medium">
            {queryDay === "0"
              ? weatherData.current.temp_c.toFixed(0)
              : weatherData.forecast.forecastday[+queryDay].day.maxtemp_c.toFixed(0)}
            °C
          </div>
          <div className="text-sm text-gray-500 font-sans">
            Feels like{" "}
            {queryDay === "0"
              ? weatherData.current.feelslike_c.toFixed(0)
              : weatherData.forecast.forecastday[+queryDay].hour
                  .reduce((max, item) => (item.feelslike_c > max.feelslike_c ? item : max))
                  .feelslike_c.toFixed(0)}
            °C
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-between">
        <div className="mx-auto mt-4 max-[560px]:mt-0">
          <Image
            src={`https:${
              queryDay === "0"
                ? weatherData.current.condition.icon
                : weatherData.forecast.forecastday[+queryDay].day.condition.icon
            }`}
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
              {queryDay === "0"
                ? weatherData.current.wind_mph
                : weatherData.forecast.forecastday[+queryDay].day.maxwind_mph}
              mph
            </StatsCard>
            <StatsCard
              header="Pressure"
              bgColor="bg-lime-300"
            >
              {queryDay === "0"
                ? weatherData.current.pressure_mb
                : weatherData.forecast.forecastday[+queryDay].hour
                    .reduce((max, item) => (item.pressure_mb > max.pressure_mb ? item : max))
                    .pressure_mb.toFixed(0)}
              mb
            </StatsCard>
          </div>
          <div className="flex gap-3">
            <StatsCard
              header="Visibility"
              bgColor="bg-lime-300"
            >
              {queryDay === "0"
                ? weatherData.current.vis_km
                : weatherData.forecast.forecastday[+queryDay].day.avgvis_km}
              km
            </StatsCard>
            <StatsCard
              header="humidity"
              bgColor="bg-white"
            >
              {queryDay === "0"
                ? weatherData.current.humidity
                : weatherData.forecast.forecastday[+queryDay].day.avghumidity}
              %
            </StatsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
