import WeatherPanel from "@/components/weatherPanel/WeatherPanel";
import { getWeather } from "@/lib/data";
import css from "./page.module.scss";

export default async function Main({
  searchParams,
}: {
  searchParams?: {
    q: string;
  };
}) {
  
  const query = searchParams?.q || "";
  const weatherData = await getWeather(query);
 
  
  return (
    <main className={`h-screen w-screen ${css.bgImg} flex justify-center items-center`}>
      <div className="max-w-[1024px] max-h-[1024px] w-[90%] h-[90%] rounded-lg border border-white bg-opacity-30 bg-gray-600 backdrop-blur-lg">
        <WeatherPanel weatherData={weatherData} />
      </div>
    </main>
  );
}
