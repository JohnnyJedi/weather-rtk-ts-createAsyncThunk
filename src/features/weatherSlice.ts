import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "./api.ts";



const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather:{
            country: '',
            city: '',
            temp: '',
            pressure: '',
            sunset: '',
        },
        message:'Enter city name'

    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, (state) => {state.message = 'Pending'})
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.message = '';
                state.weather = action.payload
            })
            .addCase(fetchWeather.rejected, (state) => {state.message = "Enter correct city name"})
    }
})

export default weatherSlice.reducer;