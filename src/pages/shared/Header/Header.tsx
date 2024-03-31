import React, {useEffect} from 'react'
import s from './Header.module.css'
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {fetchCurrentWeather} from "../../../store/thunks/fetchCurrentWeather";
import {useCustomDispatch, useCustomSelector} from "../../../hooks/store";
import {useSelector} from "react-redux";

interface Props {

}
export const Header = (props: Props) => {
    const dispatch = useCustomDispatch();
    const send = (e: any) => {
        e.preventDefault();
        dispatch(fetchCurrentWeather(e.target[0].value))
    }
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>Погода</div>
            </div>

                <form className={s.wrapper} onSubmit={send}>
                    <input className={s.city__input} placeholder={"Введите город"}/>
                    <button className={s.search__button}>Поиск</button>
                </form>
        </header>
    )
}