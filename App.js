import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { enableScreens } from 'react-native-screens'

import { AppearanceProvider } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import useCachedResources from './hooks/useCachedResources'
import WeatherApp from './WeatherApp'
import configureAppStore from './store'
import { Provider } from 'react-redux'
import { refetchOneCall } from './slicers/weatherSlice'

enableScreens()

dayjs.locale('ko')

const store = configureAppStore()

const App = () => {
    // 마운트시 불러올 리소스나 데이터는 여기에서
    const isLoadingComplete = useCachedResources()

    useEffect(() => {
        // 초기 로딩
        store.dispatch(refetchOneCall())
    }, [])

    return isLoadingComplete ? (
        Platform.OS === 'web' ? (
            <Provider store={store}>
                <SafeAreaProvider>
                    <AppearanceProvider>
                        <WeatherApp />
                    </AppearanceProvider>
                </SafeAreaProvider>
            </Provider>
        ) : (
            <Provider store={store}>
                <AppearanceProvider>
                    <WeatherApp />
                </AppearanceProvider>
            </Provider>
        )
    ) : null
}

export default App
