import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from "./reducers";

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'

export default function configureAppStore(preloadedState) {

    return configureStore({
        preloadedState,
        reducer: rootReducer,
        // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        // enhancers: [monitorReducersEnhancer]
    })
}
