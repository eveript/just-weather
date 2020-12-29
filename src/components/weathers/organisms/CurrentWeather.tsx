import React from 'react'
import { isNumber } from 'lodash'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import RowLayout from '../../common/atoms/RowLayout'
import { getOpenWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherAvatar from '../atoms/WeatherAvatar'

const SummaryBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
SummaryBox.displayName = 'SummaryBox'

const RowLayoutWrapper = styled(RowLayout)`
    flex: 1;
`
RowLayoutWrapper.displayName = 'RowLayoutWrapper'

const TempText = styled(Text)`
    margin-right: 10px;
`
TempText.displayName = 'TempText'

const SubTempLayout = styled(Layout)`
    padding: 10px;
`
SubTempLayout.displayName = 'SubTempLayout'

const SubTempText = styled(Text)`
    padding: 2px 0;
`
SubTempText.displayName = 'SubTempText'

const CurrentWeather = ({ current, daily }: { current: any; daily: any }) => {
    return (
        current &&
        daily && (
            <SummaryBox>
                <Layout>
                    <WeatherAvatar
                        source={{
                            uri: getOpenWeatherIcon(current.weather[0].icon),
                        }}
                        scale={2}
                    />
                </Layout>
                <RowLayoutWrapper>
                    <TempText category="h1">
                        {isNumber(current.temp)
                            ? `${parseInt(current.temp, 10)}°`
                            : ''}
                    </TempText>
                    <SubTempLayout>
                        <SubTempText category="s2">{`최고:${parseInt(
                            daily[0].temp.max,
                            10,
                        )}°`}</SubTempText>
                        <SubTempText category="s2">{`최저:${parseInt(
                            daily[0].temp.min,
                            10,
                        )}°`}</SubTempText>
                        <SubTempText category="s2">{`오전:${parseInt(
                            daily[0].temp.morn,
                            10,
                        )}°`}</SubTempText>
                        <SubTempText category="s2">{`오후:${parseInt(
                            daily[0].temp.eve,
                            10,
                        )}°`}</SubTempText>
                    </SubTempLayout>
                </RowLayoutWrapper>
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
