import { useAppState } from './useAppState'
import { useEffect, useState } from 'react'
import { ColorSchemeName } from 'react-native-appearance/src/Appearance.types'

export const useValidScheme = (
    colorScheme: ColorSchemeName,
): ColorSchemeName => {
    const appState = useAppState()
    const [scheme, setScheme] = useState<ColorSchemeName>(colorScheme)

    useEffect(() => {
        if (appState === 'active') {
            setScheme(colorScheme)
        }
    }, [appState, colorScheme])

    return scheme
}
