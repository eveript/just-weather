import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { weatherAPI } from '../apis/openWeatherMapAPI'
import { expoAPI } from '../apis/expoAPI'
import { useAppState } from './useAppState'

const useCachedResources = () => {
    const [status, setStatus] = useState({
        locationData: null,
        weatherData: null,
        error: null,
    })

    const appState = useAppState()

    const performAPICalls = async () => {
        try {
            setStatus({
                ...status,
                weatherData: {
                    ...status.weatherData,
                    isLoadingComplete: false,
                },
            })

            const locationData = await expoAPI.getLocation()

            const [weatherData, weatherDataError] = await weatherAPI.oneCall({
                lon: locationData?.location?.coords?.longitude,
                lat: locationData?.location?.coords?.latitude,
            })
            setStatus({
                ...status,
                locationData,
                weatherData: {
                    ...weatherData,
                    isLoadingComplete: true,
                },
                error: null,
            })
        } catch (e) {
            console.error(e)
            setStatus({
                ...status,
                locationData: null,
                weatherData: {
                    ...weatherData,
                    isLoadingComplete: true,
                },
                error: e,
            })
        }
    }
    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        const loadResourcesAndDataAsync = async () => {
            try {
                SplashScreen.preventAutoHideAsync()

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                })
                performAPICalls()
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.error(e)
            } finally {
                SplashScreen.hideAsync()
            }
        }

        loadResourcesAndDataAsync()
    }, [])

    useEffect(() => {
        if (appState === 'active') {
            const loadDataAsync = async () => {
                try {
                    performAPICalls()
                } catch (e) {
                    console.error(e)
                }
            }

            loadDataAsync()
        }
    }, [appState])

    return status
}

export default useCachedResources
