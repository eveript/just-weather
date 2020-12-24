import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import { getOpenWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherAvatar from '../atoms/WeatherAvatar'

const UnGrowScrollView = styled(ScrollView)`
    flex: 1;
    width: ${Dimensions.get('window').width}px;
`
const HourCard = styled(Layout)`
    /*opacity: ${(props) => (props.highlight ? 1 : 0.7)};*/
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
            {hourly.map(({ dt, temp, displayDate, weather: [weather] }) => {
                return (
                    <HourCard key={dt}>
                        <HourWeatherHeader>
                            <Text category="s1">{displayDate}</Text>
                        </HourWeatherHeader>
                        <WeatherAvatar
                            source={{ uri: getOpenWeatherIcon(weather.icon) }}
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
