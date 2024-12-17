import {api_key, base_url} from "../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {changeMessage} from "./messageSlice.ts";






export const fetchWeather = createAsyncThunk('fetch/weather',
    async (city:string,{dispatch}) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        if(!response.ok){
            dispatch(changeMessage("Enter correct city name"))
            return
        }else  dispatch(changeMessage(''))
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