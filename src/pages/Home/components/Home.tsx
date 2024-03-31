import React, {useEffect} from 'react'

import s from './Home.module.css'
import {ThisDay} from "./ThisDay/ThisDay";
import {ThisDayInfo} from "./ThisDayInfo/ThisDayInfo";
import {useCustomDispatch, useCustomSelector} from "../../../hooks/store";
import {fetchCurrentWeather} from "../../../store/thunks/fetchCurrentWeather";

interface Props {

}

export const Home = (props: Props) => {
    const { weather } = useCustomSelector((state) => state.currentWeatherSliceReducer)
    return (
        <div className={s.wrapper}>
        <ThisDay weather={weather}/>
            <ThisDayInfo weather={weather}/>
        </div>
    )
}