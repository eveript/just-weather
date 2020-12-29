import React, { useEffect } from 'react'
import WeatherPresenter from './WeatherPresenter'
import { useDispatch, useSelector } from 'react-redux'
import { useAppState } from '../../hooks/useAppState'
import { refetchOneCall } from '../../redux/slices/weatherSlice'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation'
import { RouteProp } from '@react-navigation/native'
import { RootState } from '../../redux/store'

const WeatherContainer = ({
    navigation,
    route,
}: {
    navigation: StackNavigationProp<RootStackParamList, 'Root'>
    route?: RouteProp<RootStackParamList, 'Root'>
}) => {
    const appState = useAppState()
    const dispatch = useDispatch()

    const { location, weather } = useSelector((state: RootState) => state)
    useEffect(() => {
        if (location) {
            const { coords, address }: { coords: any; address: any } = location
            if (coords && address) {
                navigation.setOptions({
                    title: address.level4A,
                })
            }
        }
    }, [location?.coords])

    useEffect(() => {
        if (appState === 'active') {
            dispatch(refetchOneCall())
        }
    }, [appState])
    return <WeatherPresenter {...weather} />
}

export default WeatherContainer
