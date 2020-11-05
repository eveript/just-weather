import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {weatherAPI} from "../apis/openWeatherMapAPI";
import {useGeoLocation} from "./useGeoLocation";
import {expoAPI} from "../apis/expoAPI";
import {useAppState} from "./useAppState";

const useCachedResources = () => {
    const [status, setStatus] = useState({
        isLoadingComplete: false,
        locationData: null,
        weatherData: null,
        error: null,
    })

    const appState = useAppState()

    const [isLoadingComplete, setLoadingComplete] = useState(false)
    const performAPICalls = async () => {
        // await weatherAPI.oneCall()
        const locationData = await expoAPI.getLocation()
        const [oneCall, oneCallError] = await weatherAPI.oneCall({
            lon: locationData?.location?.coords?.longitude,
            lat: locationData?.location?.coords?.latitude,
        })
        return [locationData, oneCall]
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
                const [locationData, weatherData] = await performAPICalls()

                setStatus({
                    isLoadingComplete: true,
                    locationData,
                    weatherData,
                    error: null,
                })
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e)
                setStatus({
                    isLoadingComplete: true,
                    locationData: null,
                    weatherData: null,
                    error: e,
                })
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
                    const [locationData, weatherData] = await performAPICalls()

                    setStatus({
                        isLoadingComplete: true,
                        locationData,
                        weatherData,
                        error: null,
                    })
                } catch (e) {
                    setStatus({
                        isLoadingComplete: true,
                        locationData: null,
                        weatherData: null,
                        error: e,
                    })
                }
            }

            loadDataAsync()
        }
    }, [appState])

    return status
}

export default useCachedResources
