import React from 'react'
import {StyleSheet} from "react-native";

import {Layout, Text} from "@ui-kitten/components";

const WeatherSummary = (weather) => {

    console.log(weather)

    return (
        <Layout style={styles.container}>
            <Layout><Text>Icon</Text></Layout>
            <Text style={styles.title}>{weather.temp ? `${weather.temp}°` : ''}</Text>
            <Layout><Text>어제보다 1도 낮아요</Text></Layout>
            <Layout><Text>맑음/ 강수량 %</Text></Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default WeatherSummary
