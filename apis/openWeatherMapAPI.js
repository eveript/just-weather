import { WEATHER_IMAGE_URL, WEATHER_URL } from '../constants/Weathers'
import { getWeather } from './apiUtils'

export const currentWeather = ({ lon, lat }) =>
    getWeather(`${WEATHER_URL}/weather`, { lon, lat, units: 'metric' })

export const oneCall = ({ lon, lat }) =>
    getWeather(`${WEATHER_URL}/onecall`, {
        lon,
        lat,
        units: 'metric',
        exclude: 'minutely',
    })

export const getWeatherIcon = (icon) => `${WEATHER_IMAGE_URL}/${icon}@4x.png`
