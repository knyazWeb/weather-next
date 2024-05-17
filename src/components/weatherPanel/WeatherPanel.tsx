import { RootInterface } from "@/lib/types";
import AllDayWeatherCard from "../allDayWeatherCard/AllDayWeatherCard";
import CustomInputSearch from "../ui/customInputSearch/CustomInputSearch";
import CurrentWeatherCard from "../weatherCard/CurrentWeatherCard";
import TomorrowWeatherCard from "../tomorrowWeatherCard/TomorrowWeatherCard";

export default async function WeatherPanel({ weatherData }: { weatherData: RootInterface | null }) {

  return (
    <div className="h-full w-full p-4">
      <div className="flex justify-between mb-4 items-center">
        <div className="font-bold text-3xl text-white italic leading-none">Weather</div>
        <div>
          <CustomInputSearch />
        </div>
      </div>

      {weatherData ? (
        <div className="flex flex-wrap justify-between gap-7 m">
          <div className="w-full max-w-[480px] ">
            <CurrentWeatherCard weatherData={weatherData} />
          </div>
          <div className="w-full max-w-[480px] ">
            <CurrentWeatherCard weatherData={weatherData} />
          </div>
          <div className="grow">
            <AllDayWeatherCard weatherData={weatherData} />
          </div>
          <div className="w-full max-w-[340px] ">
            <TomorrowWeatherCard weatherData={weatherData} />
          </div>
        </div>
      ) : (
        //FIXME: PLACEHOLDER NO DATA
        <div className="text-white">No data</div>
      )}
    </div>
  );
}
