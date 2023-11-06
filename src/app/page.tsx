import Header from "@/components/header";
import WeatherWidget from "@/components/weather";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 sm:px-24 bg-nord-0 text-white text-left">
        <Header/>
        <WeatherWidget/>
    </main>
  )
}
