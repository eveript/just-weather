import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/locationSlice'
import weatherReducer from './slices/weatherSlice'
import errorReducer from './slices/errorSlice'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'

const store = configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherReducer,
        error: errorReducer,
    },
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    // enhancers: [monitorReducersEnhancer]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
