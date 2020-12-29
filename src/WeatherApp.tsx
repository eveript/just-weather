import React from 'react'
import { useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import styled from 'styled-components/native'

import 'dayjs/locale/ko'

import Navigation from './navigation'
import { useValidScheme } from './hooks/useValidScheme'
// import { EvaIconsPack } from '@ui-kitten/eva-icons'
const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
`

const WeatherApp = () => {
    const colorScheme = useValidScheme(useColorScheme()) as 'dark' | 'light'
    return (
        <ApplicationProvider {...eva} theme={eva[colorScheme]}>
            <StyledSafeAreaView>
                <Navigation colorScheme={colorScheme} />
                <StatusBar style="auto" />
            </StyledSafeAreaView>
        </ApplicationProvider>
    )
}

export default WeatherApp
