import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import dayjs from 'dayjs'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherIcon from '../atoms/WeatherIcon'

const UnGrowScrollView = styled(ScrollView)`
    flex-grow: 1;
    width: ${Dimensions.get('window').width}px;
`
const HourCard = styled(Layout)`
    opacity: ${(props) => (props.highlight ? 1 : 0.7)};
`
const HourWeatherHeader = styled(Layout)`
    align-items: center;
`
const HourWeatherFooter = styled(Layout)`
    align-items: center;
`
const HourlyForecast = ({ hourly }) => {
    // dayjs.tz.setDefault(timezone)

    const dateFormat = (date, index) => index === 0 ? '지금' : `${dayjs(date).format('A h')}시`

    const isHighlight = (formattedDate) => {
        return formattedDate === '지금' || formattedDate === '오전 8시' || formattedDate === '오후 6시'
    }

    return (
        <UnGrowScrollView horizontal={true}>
            {hourly
                .filter((h, i) => i < 24)
                .map(({ dt, temp, weather: [weather] }, index) => {
                    return (
                        <HourCard
                            key={dt}
                            highlight={isHighlight(dateFormat(dt * 1000, index))}
                        >
                            <HourWeatherHeader>
                                <Text category="s1">
                                    {dateFormat(dt * 1000, index)}
                                </Text>
                            </HourWeatherHeader>
                            <WeatherIcon
                                source={{ uri: getWeatherIcon(weather.icon) }}
                                scale={1}
                            />
                            <HourWeatherFooter>
                                <Text category="s1">{`${parseInt(
                                    temp,
                                    10,
                                )}°`}</Text>
                            </HourWeatherFooter>
                        </HourCard>
                    )
                })}
        </UnGrowScrollView>
    )
}

export default HourlyForecast
