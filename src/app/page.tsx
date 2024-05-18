import WeatherPanel from "@/components/weatherPanel/WeatherPanel";
import { getWeather } from "@/lib/data";
import css from "./page.module.scss";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

export const dynamic = "force-dynamic";
export default function Main({
  searchParams,
}: {
  searchParams?: {
    q: string;
  };
}) {
  const query = searchParams?.q || "";

  return (
    <main className={`${css.bgImg} min-h-screen w-full flex justify-center items-center `}>
      <div className="max-w-[1024px] w-full h-fit rounded-lg border border-white bg-opacity-30 bg-gray-600 backdrop-blur-lg">
        <Suspense key={query} fallback={<Loader />}>
          <WeatherPanel query={query} />
        </Suspense>
      </div>
    </main>
  );
}
