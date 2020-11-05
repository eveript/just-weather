import React, {useEffect, useCallback, useRef} from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar'
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import Navigation from './navigation'
import useCachedResources from './hooks/useCachedResources'
import { MaterialCommunityIconsPack } from './eva/material-community-icons'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

const App = () => {
    // 마운트시 불러올 리소스나 데이터는 여기에서
    const status = useCachedResources()

    const colorScheme = useColorScheme()

    const navigationRef = useRef()
    useReduxDevToolsExtension(navigationRef)

    useEffect(() => {
        // 앱 재진입 처리는 어디서 해야할까? 여기서는 안 된다.

        return () => {
            // 홈 화면으로 나갈 때 할 일이 있으면 여기서
            console.log('모든 상태 변하기 전에 타는그')
        }
    })
    return status?.isLoadingComplete ? (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppearanceProvider>
                <IconRegistry
                    icons={[MaterialCommunityIconsPack, EvaIconsPack]}
                />
                <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                    <Navigation ref={navigationRef} colorScheme={colorScheme} />
                    <StatusBar style="auto" />
                </ApplicationProvider>
            </AppearanceProvider>
        </SafeAreaProvider>
    ) : null
}

export default App
