import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import * as Location from 'expo-location'
import { getWeather } from '../apis/openWeatherMapAPI'

const useGeoLocation = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    }, [])

    return location
}

const TabOneScreen = () => {
    const location = useGeoLocation()

    const getData = async ({ latitude, longitude }) => {
        const res = await getWeather({
            lon: longitude,
            lat: latitude,
        })
        console.log(res.data)
    }

    useEffect(() => {
        if (location) {
            const {
                coords,
            } = location
            getData(coords)
        }
    }, [location])
    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})

export default TabOneScreen
