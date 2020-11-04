import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import HourlyPrediction from '../molecules/HourlyPrediction'
import DailyPrediction from '../molecules/DailyPrediction'
import RowLayout from '../../Eva/RowLayout'

const HourlyLabel = styled(Layout)`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
`
const HourlyScrollView = styled(Layout)`
    height: 150px;
    align-items: stretch;
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

export default ({ current, hourly, daily, ...rest }) => (
    <Layout>
        <HourlyLabel level="2">
            <Text category="s2">시간별 예보</Text>
        </HourlyLabel>
        <HourlyScrollView>
            <HourlyPrediction hourly={hourly} />
        </HourlyScrollView>
        <DailyLabel level="2">
            <Text category="s2">요일별 예보</Text>
            <MinMaxWrapper level="2">
                <Text category="s2">최고</Text>
                <Text category="s2">최저</Text>
            </MinMaxWrapper>
        </DailyLabel>
        <DailyPrediction daily={daily} />
    </Layout>
)
