import React, {useEffect, useState} from 'react'
import * as Location from "expo-location";

export const useGeoLocation = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
            }

            let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})
            setLocation(location)
        })()
    }, [])

    return location
}
