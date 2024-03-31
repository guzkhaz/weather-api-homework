import React from 'react'

import s from './ThisDay.module.css'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import {Weather} from "../../../../store/types/types";

interface Props {
    weather: Weather
}

export const ThisDay = ({weather}: Props) => {
    return <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.tiop__block_wrapper}>
                    <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="sun" />
            </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>Время: <span>{new Date().getHours()} : {(new Date().getMinutes())}</span> </div>
            <div className={s.this__city}>Город: <span>{weather.name}</span></div>
        </div>
    </div>
}