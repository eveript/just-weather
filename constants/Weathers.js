export const API_BASE_URL = 'http://api.openweathermap.org'
export const API_IMAGE_URL = 'http://openweathermap.org'
export const API_VERSION = '2.5'
export const API_KEY = '8beebccf2cdfcb055098ca91c3c05742'
export const WEATHER_URL = `${API_BASE_URL}/data/${API_VERSION}`
export const WEATHER_IMAGE_URL = `${API_IMAGE_URL}/img/wn`

const ICONS_PREFIX = 'weather'

/*
    open weather map 날씨 조건 참고
    https://openweathermap.org/weather-conditions
 */
export const Icons = {
    CLOUDY: `${ICONS_PREFIX}-cloudy`,
    CLOUDY_ALERT: `${ICONS_PREFIX}-cloudy-alert`,
    FOG: `${ICONS_PREFIX}-fog`,
    HAIL: `${ICONS_PREFIX}-hail`,
    HAZY: `${ICONS_PREFIX}-hazy`,
    HURRICANE: `${ICONS_PREFIX}-hurricane`,
    LIGHTNING: `${ICONS_PREFIX}-lightning`,
    LIGHTNING_RAINY: `${ICONS_PREFIX}-lightning-rainy`,
    NIGHT: `${ICONS_PREFIX}-night`,
    NIGHT_PARTLY_CLOUDY: `${ICONS_PREFIX}-night-partly-cloudy`,
    PARTLY_CLOUDY: `${ICONS_PREFIX}-partly-cloudy`,
    PARTLY_LIGHTNING: `${ICONS_PREFIX}-partly-lightning`,
    PARTLY_RAINY: `${ICONS_PREFIX}-partly-rainy`,
    PARTLY_SNOWY: `${ICONS_PREFIX}-partly-snowy`,
    PARTLY_SNOWY_RAINY: `${ICONS_PREFIX}-partly-snowy-rainy`,
    POURING: `${ICONS_PREFIX}-pouring`,
    RAINY: `${ICONS_PREFIX}-rainy`,
    SNOWY: `${ICONS_PREFIX}-snowy`,
    SNOWY_HEAVY: `${ICONS_PREFIX}-snowy-heavy`,
    SNOWY_RAINY: `${ICONS_PREFIX}-snowy-rainy`,
    SUNNY: `${ICONS_PREFIX}-sunny`,
    SUNNY_ALERT: `${ICONS_PREFIX}-sunny-alert`,
    SUNSET: `${ICONS_PREFIX}-sunset`,
    SUNSET_DOWN: `${ICONS_PREFIX}-sunset-down`,
    SUNSET_UP: `${ICONS_PREFIX}-sunset-up`,
    TORNADO: `${ICONS_PREFIX}-tornado`,
    WINDY: `${ICONS_PREFIX}-windy`,
    WINDY_VARIANT: `${ICONS_PREFIX}-windy-variant`,
}
