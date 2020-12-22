import React, { useEffect } from 'react'
import { enableScreens } from 'react-native-screens'

import { AppearanceProvider } from 'react-native-appearance'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import useCachedResources from './src/hooks/useCachedResources'
import WeatherApp from './src/WeatherApp'
import configureAppStore from './src/redux/store'
import { Provider } from 'react-redux'
import { refetchOneCall } from './src/redux/slices/weatherSlice'

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
        <Provider store={store}>
            <AppearanceProvider>
                <WeatherApp />
            </AppearanceProvider>
        </Provider>
    ) : null
}

export default App
