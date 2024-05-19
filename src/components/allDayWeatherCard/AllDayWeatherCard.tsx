import { RootInterface } from "@/lib/types";
import css from "./AllDayWeatherCard.module.scss";
import DayTimeCard from "../ui/dayTimeCard/DayTimeCard";
import morning from "@/gifs/morning.gif";
import afternoon from "@/gifs/afternoon.gif";
import evening from "@/gifs/evening.gif";
import night from "@/gifs/night.gif";

export default function AllDayWeatherCard({ weatherData, queryDay }: { weatherData: RootInterface; queryDay: string }) {
  return (
    <div className={`flex h-full text-white max-h-[200px] justify-between items-center `}>
      <div className={`${css.elem}`}>
        <DayTimeCard
          dayTimeGif={morning}
          imgStyles="max-h-[26px] mt-2 overflow-hidden"
        />
        <div className="not-italic mt-6">{weatherData.forecast.forecastday[+queryDay].hour[8].temp_c.toFixed(0)}°C</div>
        <div>Morning</div>
      </div>
      <div className={`${css.elem}`}>
        <DayTimeCard dayTimeGif={afternoon} />
        <div className="not-italic mt-14">
          {weatherData.forecast.forecastday[+queryDay].hour[14].temp_c.toFixed(0)}°C
        </div>
        <div>Afternoon</div>
      </div>
      <div className={`${css.elem}`}>
        <DayTimeCard
          dayTimeGif={evening}
          imgStyles="p-1"
        />
        <div className="not-italic mt-9">
          {weatherData.forecast.forecastday[+queryDay].hour[20].temp_c.toFixed(0)}°C
        </div>
        <div>Evening</div>
      </div>
      <div className={`${css.elem}`}>
        <DayTimeCard
          dayTimeGif={night}
          imgStyles="p-1"
        />
        <div className="not-italic mt-3">{weatherData.forecast.forecastday[+queryDay].hour[2].temp_c.toFixed(0)}°C</div>
        <div>Night</div>
      </div>
    </div>
  );
}
