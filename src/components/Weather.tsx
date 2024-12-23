
import {useEffect, useState} from "react";
import {WeatherInfo} from "../utils/types";
import {api_key, base_url} from "../utils/constants.ts";

interface Props {
    city: string;
}

const Weather = ({city}: Props) => {
    const [message, setMessage] = useState<string>('Enter city name');
    const [weather, setWeather] = useState<WeatherInfo>({});

    const getWeather = async (city: string) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);

            if (!response.ok) {
                throw new Error('Enter correct city name')
            }
            const data = await response.json();
            setWeather({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
            });
            setMessage('')
        }catch (e) {
            if (e instanceof Error) {
                setMessage('Error enter correct city name')
            }
        }
    }

    const formatSunset = new Date(+weather.sunset! * 1000);
    const sunsetTime = formatSunset.toLocaleString();

    useEffect(() => {
        if(city){
            getWeather(city);
        }
    }, [city]);

    if (message) {
        return (
            <div className={'infoWeath'}>{message}</div>
        )
    } else {
        return (
            <div className={'infoWeath'}>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp} </p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {sunsetTime}</p>
            </div>
        );
    }
};

export default Weather;