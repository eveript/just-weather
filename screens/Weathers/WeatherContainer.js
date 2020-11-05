import React, { useEffect, useState } from 'react'

import { weatherAPI } from '../../apis/openWeatherMapAPI'
import { useGeoLocation } from '../../hooks/useGeoLocation'
import WeatherPresenter from './WeatherPresenter'
import {useSelector} from "react-redux";

const WeatherContainer = ({ navigation, route }) => {

    const { location, weather } = useSelector(state => ({
        location : state.location,
        weather: state.weather,
    }))
    useEffect(() => {
        if (location) {
            const { coords } = location
            navigation.setOptions({
                title: `${coords?.longitude}, ${coords?.latitude}`,
            })
        }
    }, [location])
    return <WeatherPresenter {...weather} />
}

export default WeatherContainer
