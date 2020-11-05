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
        isLoadingComplete: false,
    })

    const appState = useAppState()

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        const loadResourcesAndDataAsync = async () => {
            let responses
            try {
                SplashScreen.preventAutoHideAsync()

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                })
                responses = await weatherAPI.refetchOneCall()
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.error(e)
            } finally {
                SplashScreen.hideAsync()
                const [data, error] = responses
                setStatus({
                    locationData: data?.locationData,
                    weatherData: data?.weatherData,
                    error,
                    isLoadingComplete: true,
                })
            }
        }

        loadResourcesAndDataAsync()
    }, [])

    return status
}

export default useCachedResources
