import React from 'react'
import { isNumber } from 'lodash'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import RowLayout from '../../Eva/RowLayout'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherAvatar from '../atoms/WeatherAvatar'

const SummaryBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TempText = styled(Text)`
    margin-right: 10px;
`

const CurrentWeather = ({ current, daily }) => {
    return (
        current &&
        daily && (
            <SummaryBox>
                <Layout>
                    <WeatherAvatar
                        source={{
                            uri: getWeatherIcon(current.weather[0].icon),
                        }}
                        scale={2}
                    />
                </Layout>
                <RowLayout>
                    <TempText category="h1">
                        {isNumber(current.temp)
                            ? `${parseInt(current.temp, 10)}°`
                            : ''}
                    </TempText>
                    <Layout>
                        <Text category="s2">{`최고:${parseInt(
                            daily[0].temp.max,
                            10,
                        )}°`}</Text>
                        <Text category="s2">{`최저:${parseInt(
                            daily[0].temp.min,
                            10,
                        )}°`}</Text>
                        <Text category="s2">{`오전:${parseInt(
                            daily[0].temp.morn,
                            10,
                        )}°`}</Text>
                        <Text category="s2">{`오후:${parseInt(
                            daily[0].temp.eve,
                            10,
                        )}°`}</Text>
                    </Layout>
                </RowLayout>
                <Layout>
                    <Text category="h6">어제보다 1도 낮아요[아직 미구현]</Text>
                </Layout>
                <Layout>
                    <Text category="p1">{current.weather[0].description}</Text>
                </Layout>
            </SummaryBox>
        )
    )
}

export default CurrentWeather
