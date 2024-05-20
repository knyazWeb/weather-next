import CustomInputSearch from "../ui/customInputSearch/CustomInputSearch";
import WeatherMainContent from "../weatherMainContent/WeatherMainContent";
import { Suspense } from "react";
import Loader from "../loader/Loader";

export default async function WeatherPanel({ query, queryDay }: { query: string; queryDay:string }) {
  return (
    <div className="h-full w-full p-4 ">
      <div className="flex justify-between mb-4 items-center max-[560px]:flex-col">
        <div className="font-bold text-3xl text-white italic leading-none">Weather</div>
        <div>
          <CustomInputSearch />
        </div>
      </div>
      <Suspense
        key={`${query}-${queryDay}`}
        fallback={<Loader />}
      >
        <WeatherMainContent
          query={query}
          queryDay={queryDay}
        />
      </Suspense>
    </div>
  );
}
