import { getWeather } from "@/lib/data";
import AllDayWeatherCard from "../allDayWeatherCard/AllDayWeatherCard";
import CurrentWeatherCard from "../currentWeatherCard/CurrentWeatherCard";
import TomorrowWeatherCard from "../tomorrowWeatherCard/TomorrowWeatherCard";
import WeekDayWeatherCard from "../weekWeatherCard/WeekWeatherCard";
import Image from "next/image";
import css from "styled-jsx/css";
import loaderImg from '/public/loaderImg.png';
export default async function WeatherMainContent({ query, queryDay }: { query: string, queryDay: string }) {
  const weatherData = await getWeather(query);
  return weatherData ? (
    <div className="flex flex-wrap justify-between gap-7 max-[1100px]:flex-col">
      <div className="w-full max-w-[480px] ">
        <CurrentWeatherCard
          weatherData={weatherData}
          queryDay={queryDay}
        />
      </div>
      <div className="w-full max-w-[480px]">
        <WeekDayWeatherCard weatherData={weatherData} />
      </div>
      <div className="grow">
        <AllDayWeatherCard
          weatherData={weatherData}
          queryDay={queryDay}
        />
      </div>
      <div className="w-full max-w-[340px] max-[1100px]:max-w-full ">
        <TomorrowWeatherCard weatherData={weatherData} />
      </div>
    </div>
  ) : (
    <div className="text-white flex flex-col justify-center items-center mt-5">
      <div className="font-medium text-xl italic tracking-wider font-sans">Write your city correctly</div>
      <Image
        src={loaderImg}
        priority
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
}
