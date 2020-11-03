import React from 'react'
import WeatherSummary from '../../components/Weathers/WeatherSummary'
import {Layout, Spinner, Text} from '@ui-kitten/components'
import styled from 'styled-components/native'
import HourlyPrediction from "../../components/Weathers/HourlyPrediction";

const WeatherBox = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export default ({ currentWeather, oneCall, loading }) => (
    <WeatherBox>
        {loading ? (
            <Spinner/>
        ) : (
            <>
                <WeatherSummary {...currentWeather} />
                <Layout>
                    <Text>{`#해시태그`}</Text>
                </Layout>
                <HourlyPrediction {...oneCall} />
                <Layout>
                    <Text>일별 예보 테이블</Text>
                </Layout>
            </>
        )}
    </WeatherBox>
)
