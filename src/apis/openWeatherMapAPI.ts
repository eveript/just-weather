import { WEATHER_IMAGE_URL, WEATHER_URL } from '../constants/Weathers'
import { getWeather } from './apiUtils'
import { GeoPoint } from './types'

export const currentWeather = ({ lon, lat }: GeoPoint) =>
    getWeather(`${WEATHER_URL}/weather`, { lon, lat, units: 'metric' })

export const oneCall = ({ lon, lat }: GeoPoint) =>
    getWeather(`${WEATHER_URL}/onecall`, {
        lon,
        lat,
        units: 'metric',
        exclude: 'minutely',
    })

export const getOpenWeatherIcon = (icon: string): string =>
    `${WEATHER_IMAGE_URL}/${icon}@4x.png`
