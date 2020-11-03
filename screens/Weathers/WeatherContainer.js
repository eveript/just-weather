import React, { useEffect, useState } from 'react'

import { weatherAPI } from '../../apis/openWeatherMapAPI'
import { useGeoLocation } from '../../hooks/useGeoLocation'
import WeatherPresenter from './WeatherPresenter'

const WeatherContainer = ({ navigation, route }) => {
    const location = useGeoLocation()
    const [weathers, setWeathers] = useState({
        loading: true,
        currentWeather: null,
        currentWeatherError: null,
    })

    const getData = async ({ latitude, longitude }) => {
        if (!weathers.loading) {
            setWeathers({
                ...weathers,
                loading: true,
            })
        }

        const [
            currentWeather,
            currentWeatherError,
        ] = await weatherAPI.currentWeather({
            lon: longitude,
            lat: latitude,
        })
        const [oneCall, oneCallError] = await weatherAPI.oneCall({
            lon: longitude,
            lat: latitude,
        })

        if (currentWeather) {
            const { name, weather, main } = currentWeather

            setWeathers({
                currentWeather: {
                    ...weather[0],
                    ...main,
                },
                currentWeatherError,
                oneCall,
                oneCallError,
                loading: false,
            })
            //"{"temp":285.62,"feels_like":283.53,"temp_min":284.15,"temp_max":288.15,"pressure":1022,"humidity":71}"
            navigation.setOptions({
                title: `${name}/${weather[0].main}`,
            })
        } else if (currentWeatherError) {
            setWeathers({
                currentWeather,
                currentWeatherError,
                oneCall,
                oneCallError,
                loading: false,
            })
        }
    }

    useEffect(() => {
        if (location) {
            const { coords } = location
            getData(coords)
        }
    }, [location])
    return <WeatherPresenter {...weathers} />
}

export default WeatherContainer
