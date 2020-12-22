import React from 'react'
import CurrentWeather from '../../components/Weathers/organisms/CurrentWeather'
import { Layout, Spinner } from '@ui-kitten/components'
import styled from 'styled-components/native'
import ForecastWeather from '../../components/Weathers/organisms/ForecastWeather'
import HashTags from '../../components/Weathers/organisms/HashTags'
import { Platform, ScrollView } from 'react-native'

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

const WeatherContents = (props) => (
    <StyledWeatherInnerWrapper>
        <StyledCurrentWeatherBox>
            <CurrentWeather {...props} />
        </StyledCurrentWeatherBox>
        <StyledTagBox>
            <HashTags {...props} />
        </StyledTagBox>
        <StyledPredictWeatherBox>
            <ForecastWeather {...props} />
        </StyledPredictWeatherBox>
    </StyledWeatherInnerWrapper>
)

const MobileView = (props) => (
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

const WebView = (props) => (
    <StyledWeatherBox>
        <WeatherContents {...props} />
    </StyledWeatherBox>
)

export default (props) => {
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
