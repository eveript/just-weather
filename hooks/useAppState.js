import React, {useEffect, useState} from "react";
import {AppState} from "react-native";

export const useAppState = () => {
    const [appStatus, setAppStatus] = useState()
    useEffect(() => {
        AppState.addEventListener('change', (appState) => {
            // inactive, background, active
            setAppStatus(appState)
        })
    }, [])

    return appStatus
}
