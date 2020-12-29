import React from 'react'
import CurrentWeather from '../../components/weathers/organisms/CurrentWeather'
import { Layout, Spinner } from '@ui-kitten/components'
import styled from 'styled-components/native'
import ForecastWeather from '../../components/weathers/organisms/ForecastWeather'
import HashTags from '../../components/weathers/atoms/HashTags'
import { Platform, ScrollView } from 'react-native'
import { WeatherState } from '../../redux/slices/weatherSlice'

const StyledWeatherOuterWrapper = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const StyledWeatherInnerWrapper = styled(Layout)`
    align-self: stretch;
    flex: 1;
`
const StyledWeatherBox = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`
const StyledTagBox = styled(Layout)``
const StyledCurrentWeatherBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const StyledPredictWeatherBox = styled(Layout)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`

const WeatherContents = (props: WeatherState) => (
    <StyledWeatherInnerWrapper>
        <StyledCurrentWeatherBox>
            <CurrentWeather {...props} />
        </StyledCurrentWeatherBox>
        <StyledTagBox>
            <HashTags />
        </StyledTagBox>
        <StyledPredictWeatherBox>
            <ForecastWeather {...props} />
        </StyledPredictWeatherBox>
    </StyledWeatherInnerWrapper>
)

const MobileView = (props: WeatherState) => (
    <ScrollView
        style={{ alignSelf: 'stretch' }}
        contentContainerStyle={{
            alignItems: 'center',
            flex: 1,
        }}
        horizontal={false}
    >
        <WeatherContents {...props} />
    </ScrollView>
)

const WebView = (props: WeatherState) => (
    <StyledWeatherBox>
        <WeatherContents {...props} />
    </StyledWeatherBox>
)

export default (props: WeatherState) => {
    return (
        <StyledWeatherOuterWrapper>
            {props.loading ? (
                <Spinner />
            ) : (
                Platform.select({
                    ios: <MobileView {...props} />,
                    android: <MobileView {...props} />,
                    default: <WebView {...props} />,
                })
            )}
        </StyledWeatherOuterWrapper>
    )
}
