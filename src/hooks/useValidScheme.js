import { useAppState } from './useAppState'
import { useEffect, useState } from 'react'

export const useValidScheme = (colorScheme) => {
    const appState = useAppState()
    const [scheme, setScheme] = useState(colorScheme)

    useEffect(() => {
        if (appState === 'active') {
            setScheme(colorScheme)
        }
    }, [appState, colorScheme])

    return scheme
}
