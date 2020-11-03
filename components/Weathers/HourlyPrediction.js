import React from 'react'
import {ScrollView} from "react-native";

import {Avatar, Card, Layout, Text} from '@ui-kitten/components'
import styled from 'styled-components/native'

const HourlyPrediction = ({
    hourly
}) => {
    return (
        <ScrollView horizontal={true}>
            {hourly.map(hourPredict => (<Card><Text>hello</Text></Card>))}
        </ScrollView>
    )
}

export default HourlyPrediction
