import React, {useEffect, useState} from 'react'

import * as openWeatherMapAPI from '../../apis/openWeatherMapAPI'
import {useGeoLocation} from '../../hooks/useGeoLocation'
import WeatherPresenter from "./WeatherPresenter";

const WeatherContainer = ({ navigation, route }) => {
    const location = useGeoLocation()
    const [weather, setWeather] = useState({})

    const getData = async ({ latitude, longitude }) => {
        try {
            const res = await openWeatherMapAPI.getWeather({
                lon: longitude,
                lat: latitude,
            })

            const { name, weather, main } = res.data

            setWeather({
                ...weather[0],
                ...main,
            })
            //"{"temp":285.62,"feels_like":283.53,"temp_min":284.15,"temp_max":288.15,"pressure":1022,"humidity":71}"
            navigation.setOptions({
                title: `${name}/${weather[0].main}`,
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (location) {
            const { coords } = location
            getData(coords)
        }
    }, [location])
    return (
        <WeatherPresenter {...weather} />
    )
}

export default WeatherContainer
