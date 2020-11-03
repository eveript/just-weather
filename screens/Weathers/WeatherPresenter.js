import React from 'react'
import WeatherSummary from './WeatherSummary'
import {Layout, Spinner, Text} from '@ui-kitten/components'
import { ActivityIndicator, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const WeatherBox = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const PredictBox = styled(Layout)`
    flex: 1;
`

export default ({ weatherData, loading }) => (
    <WeatherBox>
        {loading ? (
            <Spinner/>
        ) : (
            <>
                <WeatherSummary {...weatherData} />
                <Layout>
                    <Text>{`#해시태그`}</Text>
                </Layout>
                <PredictBox>
                    <Layout>
                        <Text>시간별 예보 horizontal scrollview</Text>
                    </Layout>
                    <Layout>
                        <Text>일별 예보 테이블</Text>
                    </Layout>
                </PredictBox>
            </>
        )}
    </WeatherBox>
)
