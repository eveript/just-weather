import React, { useRef } from 'react'
import { Provider } from 'react-redux'

import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar'
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { useReduxDevToolsExtension } from '@react-navigation/devtools'

import Navigation from './navigation'
import useCachedResources from './hooks/useCachedResources'
import { MaterialCommunityIconsPack } from './eva/material-community-icons'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import configureAppStore from './store'

dayjs.locale('ko')

const App = () => {
    // 마운트시 불러올 리소스나 데이터는 여기에서
    const { locationData, weatherData, error, isLoadingComplete } = useCachedResources()

    const colorScheme = useColorScheme()

    const navigationRef = useRef()
    useReduxDevToolsExtension(navigationRef)

    return isLoadingComplete ? (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppearanceProvider>
                <IconRegistry
                    icons={[MaterialCommunityIconsPack, EvaIconsPack]}
                />
                <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                    <Provider store={configureAppStore({
                        location: locationData?.location,
                        weather: weatherData,
                        error,
                    })}>
                        <Navigation
                            ref={navigationRef}
                            colorScheme={colorScheme}
                        />
                    </Provider>
                    <StatusBar style="auto" />
                </ApplicationProvider>
            </AppearanceProvider>
        </SafeAreaProvider>
    ) : null
}

export default App
