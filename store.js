import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slicers/locationSlice'
import weatherReducer from './slicers/weatherSlice'
import errorReducer from './slicers/errorSlice'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'

export default function configureAppStore(preloadedState) {
    return configureStore({
        preloadedState,
        reducer: {
            location: locationReducer,
            weather: weatherReducer,
            error: errorReducer,
        },
        // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        // enhancers: [monitorReducersEnhancer]
    })
}
