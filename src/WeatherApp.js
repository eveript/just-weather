import React from 'react'
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
import { useValidScheme } from './hooks/useValidScheme'
// import { EvaIconsPack } from '@ui-kitten/eva-icons'

const SafeAreaView = styled(Layout)`
    flex: 1;
    padding-top: 10px;
    padding-bottom: 20px;
`

const WeatherApp = () => {
    const colorScheme = useValidScheme(useColorScheme())
    return (
        <>
            {/*<IconRegistry icons={[EvaIconsPack]} />*/}
            <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                <SafeAreaView>
                    <Navigation colorScheme={colorScheme} />
                </SafeAreaView>
                <StatusBar style="auto" />
            </ApplicationProvider>
        </>
    )
}

export default WeatherApp
