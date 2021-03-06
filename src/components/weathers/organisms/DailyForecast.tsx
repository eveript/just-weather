import React from 'react'
import { Layout, List, ListItem, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import dayjs from 'dayjs'
import { getOpenWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherAvatar from '../atoms/WeatherAvatar'
import RowLayout from '../../common/atoms/RowLayout'
import { WeatherState } from '../../../redux/slices/weatherSlice'

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
const DailyForecast = ({ daily }: { daily: any }) => {
    // dayjs.tz.setDefault(timezone)

    const dateFormat = (date: number) => {
        return dayjs(date).format('dddd')
    }
    const renderItem = ({
        item,
        item: {
            weather: [weather],
        },
    }: {
        item: any
    }) => (
        <DayItemWrapper>
            <DayItem>
                <Text>{dateFormat(item.dt * 1000)}</Text>
                <WeatherIconWrapper>
                    <WeatherAvatar
                        source={{ uri: getOpenWeatherIcon(weather.icon) }}
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
    return (
        <List
            data={daily}
            renderItem={renderItem}
            // style={{
            //     borderColor: 'blue',
            //     borderWidth: 3,
            // }}
        />
    )
}

export default DailyForecast
