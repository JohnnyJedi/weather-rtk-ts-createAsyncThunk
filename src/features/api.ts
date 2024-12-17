import {api_key, base_url} from "../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";







export const fetchWeather = createAsyncThunk('fetch/weather',
    async (city:string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return ({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        })
 })

// export const fetchWeather = (city:string) =>{
//     return (dispatch:AppDispatch)  => {
//         fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//             .then(result => result.json())
//             .then(data => {
//                 dispatch(changeWeather({
//                     country: data.sys.country,
//                     city: data.name,
//                     temp: data.main.temp,
//                     pressure: data.main.pressure,
//                     sunset: data.sys.sunset,
//                 }));
//                 dispatch(changeMessage(''));
//             })
//             .catch(error => {
//                 console.error(error);
//                 dispatch(changeMessage("Enter correct city name"));
//             });
//     }
// }