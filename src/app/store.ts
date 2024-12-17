import message from '../features/messageSlice.ts'
import weather from '../features/weatherSlice.ts'
import {configureStore} from "@reduxjs/toolkit";

// const initialState = {
//     message: 'Enter city name',
//     weather:{
//         country: "",
//         city: "",
//         temp: "",
//         pressure: "",
//         sunset: "",
//     }
// }


export const store = configureStore({
    reducer:{
        message,weather
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch