import WeatherPanel from "@/components/weatherPanel/WeatherPanel";
import css from "./page.module.scss";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

export const dynamic = "force-dynamic";
export default function Main({
  searchParams,
}: {
  searchParams?: {
    q: string;
    day: string;
  };
}) {
  const query = searchParams?.q || "";
  const queryDay = searchParams?.day || "0";
  
  return (
    <main className={`${css.bgImg} min-h-screen w-full flex justify-center items-center `}>
      <div className="max-w-[1024px] w-full h-fit rounded-lg border border-white bg-opacity-30 bg-gray-600 backdrop-blur-lg">
        <Suspense
          key={query}
          fallback={<Loader />}
        >
          <WeatherPanel
            query={query}
            queryDay={queryDay}
          />
        </Suspense>
      </div>
    </main>
  );
}
