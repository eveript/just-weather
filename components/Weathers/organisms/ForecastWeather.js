import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import HourlyForecast from '../molecules/HourlyForecast'
import DailyForecast from '../molecules/DailyForecast'
import RowLayout from '../../Eva/RowLayout'
import dayjs from 'dayjs'
import { getWeatherIcon } from '../../../apis/openWeatherMapAPI'
import WeatherAvatar from '../atoms/WeatherAvatar'

const HourlyLabel = styled(Layout)`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
`
const AmPmForecastWrapper = styled(RowLayout)`
    height: 150px;
`
const AmPmCard = styled(Layout)`
    flex: 1;
    align-items: center;
`
const HourlyForecastWrapper = styled(Layout)`
    height: 150px;
`
const DailyLabel = styled(Layout)`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 18px;
    flex-direction: row;
    justify-content: space-between;
`
const MinMaxWrapper = styled(RowLayout)`
    width: 70px;
    justify-content: space-between;
`

const dateFormat = (date, index) =>
    index === 0 ? '지금' : `${dayjs(date).format('A h')}시`

const stepBy3Filter = (ts) => dayjs(ts).hour() % 3 === 0

export default ({ current, hourly, daily, ...rest }) => {
    return (
        current &&
        hourly &&
        daily && (
            <Layout>
                <HourlyLabel level="2">
                    <Text category="s2">오전/오후</Text>
                </HourlyLabel>
                <AmPmForecastWrapper>
                    <AmPmCard>
                        <Text>오전</Text>
                        <WeatherAvatar
                            source={{ uri: getWeatherIcon('01d') }}
                            scale={1}
                        />
                        <Text>{daily[0].temp.morn}</Text>
                    </AmPmCard>
                    <AmPmCard>
                        <Text>오후</Text>
                        <WeatherAvatar
                            source={{ uri: getWeatherIcon('01n') }}
                            scale={1}
                        />
                        <Text>{daily[0].temp.eve}</Text>
                    </AmPmCard>
                </AmPmForecastWrapper>
                <HourlyLabel level="2">
                    <Text category="s2">단기 예보</Text>
                </HourlyLabel>
                <HourlyForecastWrapper>
                    <HourlyForecast
                        hourly={hourly
                            .filter(
                                (h, i) => i < 24 && stepBy3Filter(h.dt * 1000),
                            )
                            .map((h, i) => ({
                                ...h,
                                displayDate: dateFormat(h.dt * 1000, i),
                            }))}
                    />
                </HourlyForecastWrapper>
                <DailyLabel level="2">
                    <Text category="s2">요일별 예보</Text>
                    <MinMaxWrapper level="2">
                        <Text category="s2">최고</Text>
                        <Text category="s2">최저</Text>
                    </MinMaxWrapper>
                </DailyLabel>
                <DailyForecast daily={daily} />
            </Layout>
        )
    )
}
