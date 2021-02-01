import axios from 'axios'
import * as Weathers from './constants/Weathers'
import * as Geo from './constants/Geo'
import { GeoParams, WeatherParams } from './types'

const makeWeatherRequest = (path: string, params: WeatherParams) => {
    return axios.get(path, {
        params: {
            ...params,
            appid: Weathers.API_KEY,
        },
    })
}
const makeGeoRequest = (path: string, params: GeoParams) => {
    return axios.get(path, {
        params: {
            ...params,
            key: Geo.API_KEY,
        },
    })
}

export const getWeather = async (path: string, params: WeatherParams) => {
    try {
        const { data } = await makeWeatherRequest(path, params)
        return data
    } catch (e) {
        console.error(e)
        return e
    }
}

export const getGeo = async (path: string, params: GeoParams) => {
    try {
        const { data } = await makeGeoRequest(path, params)
        return data
    } catch (e) {
        console.error(e)
        return e
    }
}
