import axios from 'axios'
import * as Weathers from '../constants/Weathers'
import * as Geo from '../constants/Geo'

const makeWeatherRequest = (path, params) => {
    return axios.get(path, {
        params: {
            ...params,
            appid: Weathers.API_KEY,
        },
    })
}
const makeGeoRequest = (path, params) => {
    return axios.get(path, {
        params: {
            ...params,
            key: Geo.API_KEY,
        },
    })
}

export const getWeather = async (path, params = {}) => {
    try {
        const { data } = await makeWeatherRequest(path, params)
        return data
    } catch (e) {
        console.error(e)
        return e
    }
}

export const getGeo = async (path, params = {}) => {
    try {
        const { data } = await makeGeoRequest(path, params)
        return data
    } catch (e) {
        console.error(e)
        return e
    }
}
