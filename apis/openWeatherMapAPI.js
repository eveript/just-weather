import axios from 'axios'
import { API_KEY, WEATHER_IMAGE_URL, WEATHER_URL } from '../constants/Weathers'
import {expoAPI} from "./expoAPI";

const makeRequest = (path, params) => {
    return axios.get(path, {
        params: {
            ...params,
            appid: API_KEY,
        },
    })
}

const getAnything = async (path, params = {}) => {
    try {
        const { data } = await makeRequest(path, params)
        return [data, null]
    } catch (e) {
        console.error(e)
        return [null, e]
    }
}

const performAPICalls = async () => {
    try {
        const locationData = await expoAPI.getLocation()

        const [weatherData, weatherDataError] = await weatherAPI.oneCall({
            lon: locationData?.location?.coords?.longitude,
            lat: locationData?.location?.coords?.latitude,
        })

        return [{locationData, weatherData}, null]
    } catch (e) {
        console.error(e)
        return [null, e]
    }
}

export const weatherAPI = {
    currentWeather: ({ lon, lat }) =>
        getAnything(`${WEATHER_URL}/weather`, { lon, lat, units: 'metric' }),
    oneCall: ({ lon, lat }) =>
        getAnything(`${WEATHER_URL}/onecall`, {
            lon,
            lat,
            units: 'metric',
            exclude: 'minutely',
        }),
    refetchOneCall: performAPICalls
}

export const getWeatherIcon = (icon) => `${WEATHER_IMAGE_URL}/${icon}@4x.png`
