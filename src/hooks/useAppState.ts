import React, { useEffect, useState } from 'react'
import { AppState, AppStateStatus } from 'react-native'

export const useAppState = () => {
    const [appStatus, setAppStatus] = useState<AppStateStatus>()
    useEffect(() => {
        AppState.addEventListener('change', (appState) => {
            // inactive, background, active
            setAppStatus(appState)
        })
    }, [])

    return appStatus
}
