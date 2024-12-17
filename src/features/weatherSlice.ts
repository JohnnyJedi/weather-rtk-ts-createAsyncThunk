import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "./api.ts";



const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        country: '',
        city: '',
        temp: '',
        pressure: '',
        sunset: '',
    },
    reducers: {
        // changeWeather: (_state, action) => {
        //     return ({
        //         country: action.payload.country,
        //         city: action.payload.city,
        //         temp: action.payload.temp,
        //         pressure: action.payload.pressure,
        //         sunset: action.payload.sunset,
        //     })
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => {})
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => {})
    }
})


export default weatherSlice.reducer;