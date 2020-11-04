import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import HourlyPrediction from '../molecules/HourlyPrediction'
import DailyPrediction from "../molecules/DailyPrediction";

const LabelBox = styled(Layout)`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
`
export default ({ current, hourly, daily, ...rest }) => (
    <Layout>
        <LabelBox level="2">
            <Text category="s2">시간별 예보</Text>
        </LabelBox>
        <HourlyPrediction hourly={hourly} />
        <LabelBox level="2">
            <Text category="s2">일별 예보 테이블</Text>
        </LabelBox>
        <DailyPrediction daily={daily} />
    </Layout>
)
