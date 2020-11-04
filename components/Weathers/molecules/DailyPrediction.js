import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { Layout, Text, List, ListItem } from '@ui-kitten/components'
import styled from 'styled-components/native'
import dayjs from 'dayjs'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherIcon from '../atoms/WeatherIcon'
import RowLayout from "../../Eva/RowLayout";

const DayList = styled(List)`
    /*max-height: 100px;*/
`
const DayItemWrapper = styled(Layout)`
    padding-left: 10px;
    padding-right: 10px;
`
const DayItem = styled(ListItem)``
const WeatherIconWrapper = styled(Layout)`
    flex: 1;
    align-items: center;
`
const MinMaxWrapper = styled(RowLayout)`
  width: 70px;
  justify-content: space-between;
`
const DailyPrediction = ({ daily }) => {
    // dayjs.tz.setDefault(timezone)

    const dateFormat = (date) => {
        return dayjs(date).format('dddd')
    }
    const renderItem = ({
        item,
        item: {
            weather: [weather],
        },
    }) => (
        <DayItemWrapper>
            <DayItem>
                <Text>{dateFormat(item.dt * 1000)}</Text>
                <WeatherIconWrapper>
                    <WeatherIcon
                        source={{ uri: getWeatherIcon(weather.icon) }}
                        scale={0.5}
                    />
                </WeatherIconWrapper>
                <MinMaxWrapper>
                    <Text>{`${parseInt(item.temp.max, 10)}°`}</Text>
                    <Text>{`${parseInt(item.temp.min, 10)}°`}</Text>
                </MinMaxWrapper>
            </DayItem>
        </DayItemWrapper>
    )
    return <DayList data={daily} renderItem={renderItem} />
}

export default DailyPrediction
