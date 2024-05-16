import { RootInterface } from "@/lib/types";

export async function getWeather(query: string): Promise<RootInterface | null> {
  try {
    // TODO: по возможности указать cache: no-store
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${query}&days=3&aqi=no&alerts=no`, {cache: "no-store"}
    );
    if (!data.ok) {
      return null;
    }
    return data.json();
  } catch (error) {
    throw new Error("Request rejected with status " + (error as Error).message);
  }
}
