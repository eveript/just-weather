import React from 'react'
import { Provider } from 'react-redux'
import { useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar'
import * as eva from '@eva-design/eva'
import {
    ApplicationProvider,
    IconRegistry,
    Layout,
} from '@ui-kitten/components'
import styled from 'styled-components/native'

import 'dayjs/locale/ko'

import Navigation from './navigation'
import configureAppStore from './store'
import { useValidScheme } from './hooks/useValidScheme'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

const SafeAreaView = styled(Layout)`
    flex: 1;
    padding-top: 10px;
    padding-bottom: 20px;
`

const WeatherApp = ({ locationData, weatherData, error }) => {
    const colorScheme = useValidScheme(useColorScheme())

    return (
        <>
            <IconRegistry icons={[EvaIconsPack]} />
            <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                <Provider
                    store={configureAppStore({
                        location: locationData?.location,
                        weather: weatherData,
                        error,
                    })}
                >
                    <SafeAreaView>
                        <Navigation colorScheme={colorScheme} />
                    </SafeAreaView>
                </Provider>
                <StatusBar style="auto" />
            </ApplicationProvider>
        </>
    )
}

export default WeatherApp
