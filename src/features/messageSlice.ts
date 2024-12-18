import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "./api.ts";


const messageSlice = createSlice({
    name: "message",
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () =>  'Pending')
            .addCase(fetchWeather.fulfilled,() =>  '' )
            .addCase(fetchWeather.rejected,() => "Enter correct city name")
    }
})


export default messageSlice.reducer;