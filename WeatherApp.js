import React, {useRef} from 'react'
import {Provider} from 'react-redux'
import {useColorScheme} from 'react-native-appearance'
import {StatusBar} from 'expo-status-bar'
import * as eva from '@eva-design/eva'
import {ApplicationProvider} from '@ui-kitten/components'
import {useReduxDevToolsExtension} from '@react-navigation/devtools'
import 'dayjs/locale/ko'

import Navigation from './navigation'
import configureAppStore from './store'
import {useValidScheme} from "./hooks/useValidScheme";

const WeatherApp = ({ locationData, weatherData, error }) => {
    const colorScheme = useValidScheme(useColorScheme())

    const navigationRef = useRef()
    useReduxDevToolsExtension(navigationRef)

    return (
        <>
            {/*<IconRegistry
                    icons={[MaterialCommunityIconsPack, EvaIconsPack]}
                />*/}
            <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                <Provider
                    store={configureAppStore({
                        location: locationData?.location,
                        weather: weatherData,
                        error,
                    })}
                >
                    <Navigation ref={navigationRef} colorScheme={colorScheme} />
                </Provider>
                <StatusBar style="auto" />
            </ApplicationProvider>
        </>
    )
}

export default WeatherApp
