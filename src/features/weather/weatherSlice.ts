import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {WeatherInfo} from "../../utils/types";

const initialState: WeatherInfo = {
    city: '',
        country: '',
        temp: 0,
        pressure: 0,
        sunset: 0
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
    },
})

export default weatherSlice.reducer;