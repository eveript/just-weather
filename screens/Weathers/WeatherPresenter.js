import React from 'react'
import CurrentWeather from '../../components/Weathers/organisms/CurrentWeather'
import { Layout, Spinner } from '@ui-kitten/components'
import styled from 'styled-components/native'
import PredictWeather from '../../components/Weathers/organisms/PredictWeather'

const WeatherBox = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const CurrentWeatherBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const PredictWeatherBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export default ({ currentWeather, oneCall, loading }) => (
    <WeatherBox>
        {loading ? (
            <Spinner />
        ) : (
            <>
                <CurrentWeatherBox>
                    <CurrentWeather {...currentWeather} />
                </CurrentWeatherBox>
                <PredictWeatherBox>
                    <PredictWeather {...oneCall} />
                </PredictWeatherBox>
            </>
        )}
    </WeatherBox>
)
