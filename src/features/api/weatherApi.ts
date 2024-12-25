import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherInfo, WeatherResponse} from "../../utils/types";


export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            transformResponse: (response:WeatherResponse) => {
                return {
                    cityName: response.name,
                    country: response.sys.country,
                    temp: response.main.temp,
                    pressure: response.main.pressure,
                    sunset: response.sys.sunset,
                };
            },
            keepUnusedDataFor: 3600,
        }),
    })
})

export const {useGetWeatherByCityQuery} = weatherApi