import React from 'react'
import { isNumber } from 'lodash'
import { Avatar, Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'

import { WEATHER_IMAGE_URL } from '../../constants/Weathers'

const SummaryBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const RowBox = styled(Layout)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TempBox = styled(RowBox)``
const TempText = styled(Text)`
    margin-right: 10px;
`

const WeatherIcon = styled(Avatar)`
    width: 200px;
    height: 200px;
`
const WeatherSummary = ({
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
                    source={{ uri: `${WEATHER_IMAGE_URL}/${icon}@4x.png` }}
                />
            </Layout>
            <TempBox>
                <TempText category="h1">
                    {isNumber(temp) ? `${parseInt(temp, 10)}°` : ''}
                </TempText>
                <Layout>
                    <Text category="c2">{`최고:${temp_max}°`}</Text>
                    <Text category="c2">{`최저:${temp_min}°`}</Text>
                </Layout>
            </TempBox>
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

export default WeatherSummary
