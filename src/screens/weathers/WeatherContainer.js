import React, { useEffect } from 'react'
import WeatherPresenter from './WeatherPresenter'
import { useDispatch, useSelector } from 'react-redux'
import { useAppState } from '../../hooks/useAppState'
import { refetchOneCall } from '../../redux/slices/weatherSlice'

const WeatherContainer = ({ navigation, route }) => {
    const appState = useAppState()
    const dispatch = useDispatch()

    const { location, weather } = useSelector((state) => state)
    useEffect(() => {
        if (location) {
            const { coords, address } = location
            if (coords) {
                navigation.setOptions({
                    title: address?.level4A,
                })
            }
        }
    }, [location])

    useEffect(() => {
        if (appState === 'active') {
            dispatch(refetchOneCall())
        }
    }, [appState])
    return <WeatherPresenter {...weather} />
}

export default WeatherContainer
