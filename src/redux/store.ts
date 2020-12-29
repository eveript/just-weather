import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/locationSlice'
import weatherReducer from './slices/weatherSlice'
import errorReducer from './slices/errorSlice'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'

export default function configureAppStore(preloadedState: any) {
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
