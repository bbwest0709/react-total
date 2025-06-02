import { useEffect, useState } from "react";
import axios from "axios";
import WeatherContext from "./WeatherContext";

// 선택할 국가
const countries = {
    Korea: "Seoul",
    USA: "New York",
    Japan: "Tokyo",
    France: "Paris",
    Germany: "Berlin"
}

// 날씨 API 키
const API_KEY = "7df899419b16834b84d751661116c4c5";

const WeatherProvider = ({children}) => {
    // 나라 선택
    const [selectCountry, setSelectCountry] = useState("Korea");
    // 날씨
    const [weatherData, setWeatherData] = useState("");

    useEffect(() => {
        const axiosWeather = async() => {
            const city = countries[selectCountry];
            try {
                const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                    params : {
                        q: city,
                        appid: API_KEY,
                        units: "metric",
                        lang: "kr"
                    }
                })
                setWeatherData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        axiosWeather();
    }, [selectCountry])
    return (
        <div>
            <WeatherContext.Provider value={{selectCountry, setSelectCountry, weatherData, setWeatherData, countries }}>
                {children}
            </WeatherContext.Provider>
        </div>
    )
}

export default WeatherProvider;