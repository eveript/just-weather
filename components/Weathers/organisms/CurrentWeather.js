import React from 'react'
import { isNumber } from 'lodash'
import { Avatar, Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'

import { WEATHER_IMAGE_URL } from '../../../constants/Weathers'
import RowLayout from "../../Eva/RowLayout";
import {getWeatherIcon} from "../../../apis/openWeatherMapAPI";
import WeatherIcon from "../atoms/WeatherIcon";

const SummaryBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TempText = styled(Text)`
    margin-right: 10px;
`

const CurrentWeather = ({
    description,
    temp,
    temp_min,
    temp_max,
    humidity,
    icon,
}) => {
    return (
        <SummaryBox>
            <Layout>
                <WeatherIcon
                    source={{ uri: getWeatherIcon(icon) }}
                    scale={2}
                />
            </Layout>
            <RowLayout>
                <TempText category="h1">
                    {isNumber(temp) ? `${parseInt(temp, 10)}°` : ''}
                </TempText>
                <Layout>
                    <Text category="c2">{`최고:${temp_max}°`}</Text>
                    <Text category="c2">{`최저:${temp_min}°`}</Text>
                </Layout>
            </RowLayout>
            <Layout>
                <Text>어제보다 1도 낮아요</Text>
            </Layout>
            <Layout>
                <Text>{description}</Text>
                <Text>{`습도 ${humidity}%`}</Text>
            </Layout>
        </SummaryBox>
    )
}

export default CurrentWeather
