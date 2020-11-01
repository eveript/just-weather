import React, {useEffect, useState} from 'react'
import {StyleSheet} from 'react-native'
import {Layout, Text} from '@ui-kitten/components'

import * as openWeatherMapAPI from '../apis/openWeatherMapAPI'
import {useGeoLocation} from '../hooks/useGeoLocation'
import WeatherSummary from "../components/WeatherSummary";

const WeatherScreen = ({ navigation, route }) => {
    const location = useGeoLocation()
    const [weather, setWeather] = useState({})

    const getData = async ({ latitude, longitude }) => {
        try {
            const res = await openWeatherMapAPI.getWeather({
                lon: longitude,
                lat: latitude,
            })

            const { name, weather, main } = res.data

            setWeather({
                ...weather[0],
                ...main,
            })
            //"{"temp":285.62,"feels_like":283.53,"temp_min":284.15,"temp_max":288.15,"pressure":1022,"humidity":71}"
            navigation.setOptions({
                title: `${name}/${weather[0].main}`,
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (location) {
            const { coords } = location
            getData(coords)
        }
    }, [location])
    return (
        <Layout style={styles.container}>
            <WeatherSummary {...weather}/>
            <Layout><Text>{`#해시태그`}</Text></Layout>
            <Layout style={styles.predictWeatherContainer}>
                <Layout><Text>시간별 예보 horizontal scrollview</Text></Layout>
                <Layout><Text>일별 예보 테이블</Text></Layout>
            </Layout>
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
    predictWeatherContainer: {
        flex: 1
    }
})

export default WeatherScreen
