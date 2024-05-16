import { RootInterface } from "@/lib/types";
import AllDayWeatherCard from "../allDayWeatherCard/AllDayWeatherCard";
import CustomInputSearch from "../ui/customInputSearch/CustomInputSearch";
import CurrentWeatherCard from "../weatherCard/CurrentWeatherCard";

export default async function WeatherPanel({ weatherData }: { weatherData: RootInterface | null }) {

  return (
    <div className="h-full w-full p-4">
      <div className="flex justify-between mb-4 items-center">
        <div className="font-bold text-3xl text-white italic leading-none">Weather</div>
        <div>
          <CustomInputSearch />
        </div>
      </div>
      
      {weatherData ? 
      <>
      <div className="w-fit text-white">
        <CurrentWeatherCard weatherData={weatherData} />
      </div>
      <div>
        <AllDayWeatherCard />
      </div>
      </>
      //FIXME: PLACEHOLDER NO DATA
       : <div className="text-white">No data</div>}
    </div>
  );
}
