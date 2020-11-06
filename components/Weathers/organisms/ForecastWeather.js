import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import HourlyForecast from '../molecules/HourlyForecast'
import DailyForecast from '../molecules/DailyForecast'
import RowLayout from '../../Eva/RowLayout'
import dayjs from 'dayjs'

const HourlyLabel = styled(Layout)`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
`
const PeakForecastWrapper = styled(Layout)`
    height: 150px;
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

const peakFilter = (formattedDate) => {
    return (
        formattedDate === '지금' ||
        formattedDate === '오전 9시' ||
        formattedDate === '오후 12시' ||
        formattedDate === '오후 3시' ||
        formattedDate === '오후 6시' ||
        formattedDate === '오후 9시'
    )
}

export default ({ current, hourly, daily, ...rest }) => {

    return current && hourly && daily && (
        <Layout>
            <HourlyLabel level="2">
                <Text category="s2">피크타임 예보</Text>
            </HourlyLabel>
            <PeakForecastWrapper>
                <HourlyForecast
                    iconScale={1}
                    hourly={hourly
                        .filter((h, i) => i < 24)
                        .filter((h, i) => peakFilter(dateFormat(h.dt * 1000, i)))
                        .map((h, i) => ({
                            ...h,
                            displayDate: dateFormat(h.dt * 1000, i),
                            highlight: peakFilter(dateFormat(h.dt * 1000, i)),
                        }))}
                />
            </PeakForecastWrapper>
            <HourlyLabel level="2">
                <Text category="s2">시간별 예보</Text>
            </HourlyLabel>
            <HourlyForecastWrapper>
                <HourlyForecast
                    hourly={hourly
                        .filter((h, i) => i < 24)
                        .map((h, i) => ({
                            ...h,
                            displayDate: dateFormat(h.dt * 1000, i),
                            highlight: peakFilter(dateFormat(h.dt * 1000, i)),
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

}