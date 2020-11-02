import axios from 'axios'

const API_BASE_URL = 'http://api.openweathermap.org'
const API_VERSION = 2.5
const API_KEY = '8beebccf2cdfcb055098ca91c3c05742'
const WEATHER_URL = `${API_BASE_URL}/data/${API_VERSION}`

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
