import { combineReducers } from 'redux'
import locationReducer from './slicers/locationSlicer'
import weatherReducer from './slicers/weatherSlicer'
import errorReducer from './slicers/errorSlicer'

const reducers = combineReducers({
    location: locationReducer,
    weather: weatherReducer,
    error: errorReducer,
})

export default reducers
