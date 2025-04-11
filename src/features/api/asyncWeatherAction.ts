import {createAsyncThunk} from "@reduxjs/toolkit";
import {api_key, base_url} from "../../utils/constans.js";

export const fetchWeather = createAsyncThunk(
    'weather/fetch',
    async (city) => {
        const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await res.json();
        return{
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        }
    }
)