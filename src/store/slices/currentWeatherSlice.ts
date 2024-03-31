import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/types";
import {AxiosResponse} from "axios";

type CurrentWeatherSlice = {
    weather: Weather,
    isLoading: boolean,
    response: Responce
}

type Responce = {
    status: number,
    message: string
}

const initialState: CurrentWeatherSlice = {
    weather: {
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0
        },
        clouds: {
            all: 0
        },
        wind: {
            speed: 0,
            deg: 0
        },
        name: ''
    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}


export const currentWeatherSlice = createSlice({
    name: "current_weather",
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true
        },
        fetchCurrentWeatherSuccess(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ) {
            state.isLoading = false;
            state.weather = action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            };
        },
        fetchCurrentWeatherError(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            };
        }
    }
});

export default currentWeatherSlice.reducer;