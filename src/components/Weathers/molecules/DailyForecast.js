import React from 'react'
import { Layout, List, ListItem, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import dayjs from 'dayjs'
import { getOpenWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherAvatar from '../atoms/WeatherAvatar'
import RowLayout from '../../Eva/RowLayout'

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
const DailyForecast = ({ daily }) => {
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
