import React from 'react'
import cloud from '../../../../assets/images/cloud.png'
import s from './ThisDayInfo.module.css'
import {ThisDayItem} from "./ThisDayItem";
import {Weather} from "../../../../store/types/types";

interface Props {
    weather: Weather
}
export interface Item{
    icon_id: string,
    name: string,
    value: string
}
export const ThisDayInfo = ({weather}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${weather.main.pressure} гПа над уровнем моря`,
        },
        {
            icon_id: 'precipitation',
            name: 'Процент облачности',
            value: `${weather.clouds.all}%`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.floor(weather.wind.speed)} м/с. Направление на ${weather.wind.deg} градусов`,
        }
    ];
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.icon_id} item={item} />
                ))}
            </div>
            <img className={s.cloud__img} src={cloud} alt="облкако" />
        </div>
    )
}