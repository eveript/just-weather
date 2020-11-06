import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherIcon from '../atoms/WeatherIcon'

const UnGrowScrollView = styled(ScrollView)`
    flex: 1;
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
const HourlyForecast = ({ hourly, iconScale = 1 }) => {

    return (
        <UnGrowScrollView horizontal={true}>
            {hourly
                .map(({ dt, temp, displayDate, highlight, weather: [weather] }, index) => {
                    return (
                        <HourCard
                            key={dt}
                            highlight={highlight}
                        >
                            <HourWeatherHeader>
                                <Text category="s1">
                                    {displayDate}
                                </Text>
                            </HourWeatherHeader>
                            <WeatherIcon
                                source={{ uri: getWeatherIcon(weather.icon) }}
                                scale={iconScale}
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
