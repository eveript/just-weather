import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {weatherAPI} from "../apis/openWeatherMapAPI";
import {useGeoLocation} from "./useGeoLocation";
import {expoAPI} from "../apis/expoAPI";

const useCachedResources = () => {
    const [status, setStatus] = useState({
        isLoadingComplete: false,
        locationData: null,
        weatherData: null,
        error: null,
    })
    const [isLoadingComplete, setLoadingComplete] = useState(false)
    const performAPICalls = async () => {
        // await weatherAPI.oneCall()
        const locationData = await expoAPI.getLocation()
        console.log(locationData.location)
        const [oneCall, oneCallError] = await weatherAPI.oneCall({
            lon: locationData?.location?.coords?.longitude,
            lat: locationData?.location?.coords?.latitude,
        })
        return [locationData, oneCall]
    }
    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
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

    return status
}

export default useCachedResources
