import { getWeather } from "@/lib/data";
import AllDayWeatherCard from "../allDayWeatherCard/AllDayWeatherCard";
import CurrentWeatherCard from "../currentWeatherCard/CurrentWeatherCard";
import TomorrowWeatherCard from "../tomorrowWeatherCard/TomorrowWeatherCard";
import WeekDayWeatherCard from "../weekWeatherCard/WeekWeatherCard";

export default async function WeatherMainContent({ query }: { query: string }) {
  const weatherData = await getWeather(query);

  return weatherData ? (
    <div className="flex flex-wrap justify-between gap-7">
      <div className="w-full max-w-[480px] ">
        <CurrentWeatherCard weatherData={weatherData} />
      </div>
      <div className="w-full max-w-[480px]">
        <WeekDayWeatherCard weatherData={weatherData} />
      </div>
      <div className="grow">
        <AllDayWeatherCard weatherData={weatherData} />
      </div>
      <div className="w-full max-w-[340px] ">
        <TomorrowWeatherCard weatherData={weatherData} />
      </div>
    </div>
  ) : (
    <div className="text-white">No data</div>
  );
}
