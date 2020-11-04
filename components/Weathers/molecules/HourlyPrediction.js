import React from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { Avatar, Card, Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import dayjs from "dayjs";

import GhostCard from '../../Eva/GhostCard'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherIcon from '../atoms/WeatherIcon'

const UnGrowScrollView = styled(ScrollView)`
    flex-grow: 0;
    width: ${Dimensions.get('window').width}px;
`
const HourWeatherHeader = styled(Layout)`
    align-items: center;
`
const HourWeatherFooter = styled(Layout)`
    align-items: center;
`
const HourlyPrediction = ({ hourly }) => {
    // dayjs.tz.setDefault(timezone)

    const dateFormat = date => {
        const [a, time] = dayjs(date).format('A h').split(' ')
        const prefix = a === 'AM' ? '오전' : '오후'
        return `${prefix} ${time}시`
    }
    return (
        <UnGrowScrollView horizontal={true}>
            {hourly.filter((h, i) => i < 24).map(({ dt, temp, weather: [weather] }, index) => {
                return (
                    <GhostCard key={dt}>
                        <HourWeatherHeader>
                            <Text category="c2">{index !== 0 ? dateFormat(dt * 1000) : '지금'}</Text>
                        </HourWeatherHeader>
                        <WeatherIcon
                            source={{uri: getWeatherIcon(weather.icon)}}
                            scale={1}
                        />
                        <HourWeatherFooter>
                            <Text category="s2">{`${parseInt(temp, 10)}°`}</Text>
                        </HourWeatherFooter>
                    </GhostCard>
                )
            })}
        </UnGrowScrollView>
    )
}

export default HourlyPrediction
