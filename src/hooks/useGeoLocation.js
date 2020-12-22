import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { expoAPI } from '../apis/expoAPI'

export const useGeoLocation = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const getLocation = async () => {
        const { location, status, error } = await expoAPI.getLocation()
        setLocation(location)
    }

    useEffect(() => {
        getLocation()
    }, [])

    return location
}
