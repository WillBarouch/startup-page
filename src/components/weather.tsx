'use client';
import { useEffect, useState } from "react";

const WeatherWidget = () => {
    const [apiData, setApiData] = useState({});
    const [latLong, setLatLong] = useState({ lat: 0, long: 0 });
    const apiKey = process.env.WEATHER_KEY;

    const kelvinToFahrenheit = (k) => (k - 273.15).toFixed(2);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatLong({ lat: position.coords.latitude, long: position.coords.longitude });
        });
    }, []);

    useEffect(() => {
        if (latLong.lat !== 0 && latLong.long !== 0) {
            const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latLong.lat}&lon=${latLong.long}&appid=${apiKey}`;

            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    setApiData(data);
                })
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [latLong, apiKey]);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl text-nord-4 font-extrabold tracking-tight mt-5">
                {kelvinToFahrenheit(apiData.current?.temp)}
            </h1>
        </div>
    );
};

export default WeatherWidget;
