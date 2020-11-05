import { combineReducers } from 'redux'
import locationReducer from './slicers/locationSlice'
import weatherReducer from './slicers/weatherSlice'
import errorReducer from './slicers/errorSlice'

const reducers = combineReducers({
    location: locationReducer,
    weather: weatherReducer,
    error: errorReducer,
})

export default reducers
