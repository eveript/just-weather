import React from 'react'
import { isNumber } from 'lodash'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import RowLayout from '../../Eva/RowLayout'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherIcon from '../atoms/WeatherIcon'

const SummaryBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TempText = styled(Text)`
    margin-right: 10px;
`

const CurrentWeather = ({ description, temp, temp_min, temp_max, icon }) => {
    return (
        <SummaryBox>
            <Layout>
                <WeatherIcon source={{ uri: getWeatherIcon(icon) }} scale={2} />
            </Layout>
            <RowLayout>
                <TempText category="h1">
                    {isNumber(temp) ? `${parseInt(temp, 10)}°` : ''}
                </TempText>
                <Layout>
                    <Text category="s2">{`최고:${temp_max}°`}</Text>
                    <Text category="s2">{`최저:${temp_min}°`}</Text>
                </Layout>
            </RowLayout>
            <Layout>
                <Text category="h6">어제보다 1도 낮아요</Text>
            </Layout>
            <Layout>
                <Text category="p1">{description}</Text>
            </Layout>
        </SummaryBox>
    )
}

export default CurrentWeather
