import axios from 'axios'

const API_BASE_URL = 'http://api.openweathermap.org'
const API_VERSION = 2.5
const API_SERVICE_NAME = 'weather'
const API_KEY = '8beebccf2cdfcb055098ca91c3c05742'

const WEATHER_URL = `${API_BASE_URL}/${API_VERSION}/${API_SERVICE_NAME}?appid=${API_KEY}`

export const getWeather = ({ lon, lat }) => {
    return axios.get(`${WEATHER_URL}&lat=${lat}&lon=${lon}`)
}
