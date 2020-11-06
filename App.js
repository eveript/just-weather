import React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import useCachedResources from './hooks/useCachedResources'
import WeatherApp from './WeatherApp'

dayjs.locale('ko')

const App = () => {
    // 마운트시 불러올 리소스나 데이터는 여기에서
    const { isLoadingComplete, ...weatherResource } = useCachedResources()

    return isLoadingComplete ? (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppearanceProvider>
                <WeatherApp {...weatherResource} />
            </AppearanceProvider>
        </SafeAreaProvider>
    ) : null
}

export default App
