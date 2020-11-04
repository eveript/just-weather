import React from 'react'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import {StatusBar} from 'expo-status-bar'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import * as eva from '@eva-design/eva'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import Navigation from './navigation'
import useCachedResources from './hooks/useCachedResources'
import {MaterialCommunityIconsPack} from "./eva/material-community-icons";

const App = () => {
    const isLoadingComplete = useCachedResources()

    const colorScheme = useColorScheme()

    return isLoadingComplete ? (
        <SafeAreaProvider>
            <AppearanceProvider>
                <IconRegistry icons={[MaterialCommunityIconsPack, EvaIconsPack]} />
                <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar style="auto" />
                </ApplicationProvider>
            </AppearanceProvider>
        </SafeAreaProvider>
    ) : null
}

export default App
