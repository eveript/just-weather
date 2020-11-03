import axios from 'axios'
import {API_KEY, WEATHER_URL} from "../constants/Weathers";

const makeRequest = (path, params) => {
    return axios.get(path, {
        params: {
            ...params,
            appid: API_KEY
        }
    })
}

const getAnything = async (path, params = {}) => {
    try {
        const {data} = await makeRequest(path, params)
        return [data, null]
    } catch (e) {
        console.error(e)
        return [null, e]
    }
}

export const weatherAPI = {
    currentWeather: ({ lon, lat }) => getAnything(`${WEATHER_URL}/weather`, {lon, lat, units: 'metric'})
}
