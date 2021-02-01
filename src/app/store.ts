import { configureStore } from '@reduxjs/toolkit'
import locationReducer from '../screens/weathers/locationSlice'
import weatherReducer from '../screens/weathers/weatherSlice'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'

const store = configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherReducer,
    },
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    // enhancers: [monitorReducersEnhancer]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
