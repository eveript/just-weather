import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import {Layout, Text, List, ListItem} from '@ui-kitten/components'
import styled from 'styled-components/native'
import dayjs from 'dayjs'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherIcon from '../atoms/WeatherIcon'

const UnGrowScrollView = styled(ScrollView)`
    flex-grow: 0;
    width: ${Dimensions.get('window').width}px;
`
const DayList = styled(Layout)`
  max-height: 100px;
`
const HourWeatherHeader = styled(Layout)`
    align-items: center;
`
const HourWeatherFooter = styled(Layout)`
    align-items: center;
`
const DailyPrediction = ({ daily }) => {
    // dayjs.tz.setDefault(timezone)

    console.log(daily)
    const dateFormat = (date) => {
        const [a, time] = dayjs(date).format('A h').split(' ')
        const prefix = a === 'AM' ? '오전' : '오후'
        return `${prefix} ${time}시`
    }
    const renderItem = ({ item, index }) => (
        <ListItem
            title={index.toString()}
        />
    )
    return (
        <DayList
            data={daily}
            renderItem={renderItem}
        />
    )
}

export default DailyPrediction
