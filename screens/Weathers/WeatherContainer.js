import React, {useCallback, useEffect, useState} from 'react'

import { weatherAPI } from '../../apis/openWeatherMapAPI'
import { useGeoLocation } from '../../hooks/useGeoLocation'
import WeatherPresenter from './WeatherPresenter'
import {useFocusEffect} from "@react-navigation/native";

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

    useFocusEffect(
        useCallback(() => {
            // Do something when the screen is focused
            console.log('스크린 포커스??')
            return () => {
                console.log('다른 스크린으로 갈 때')
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    );

    useEffect(() => {
        if (location) {
            const { coords } = location
            getData(coords)
        }
    }, [location])
    return <WeatherPresenter {...weathers} />
}

export default WeatherContainer
