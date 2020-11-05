import React, { useEffect, useState } from 'react'

import { weatherAPI } from '../../apis/openWeatherMapAPI'
import { useGeoLocation } from '../../hooks/useGeoLocation'
import WeatherPresenter from './WeatherPresenter'

const WeatherContainer = ({ navigation, route }) => {
    const location = useGeoLocation()
    const [weathers, setWeathers] = useState({
        loading: true,
        oneCall: null,
        oneCallError: null,
    })

    const getData = async ({ latitude, longitude }) => {
        if (!weathers.loading) {
            setWeathers({
                ...weathers,
                loading: true,
            })
        }

        const [oneCall, oneCallError] = await weatherAPI.oneCall({
            lon: longitude,
            lat: latitude,
        })
        setWeathers({
            oneCall,
            oneCallError,
            loading: false,
        })
        navigation.setOptions({
            title: `${longitude}, ${latitude}`,
        })
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
