import React from 'react'
import CurrentWeather from '../../components/Weathers/organisms/CurrentWeather'
import { Layout, Spinner } from '@ui-kitten/components'
import styled from 'styled-components/native'
import ForecastWeather from '../../components/Weathers/organisms/ForecastWeather'
import HashTags from '../../components/Weathers/organisms/HashTags'
import { Platform, ScrollView } from 'react-native'

const WeatherBox = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`
const CurrentWeatherBox = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TagBox = styled(Layout)``
const PredictWeatherBox = styled(Layout)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`

const WeatherContents = (props) => (
    <>
        <CurrentWeatherBox>
            <CurrentWeather {...props} />
        </CurrentWeatherBox>
        <TagBox>
            <HashTags {...props} />
        </TagBox>
        <PredictWeatherBox>
            <ForecastWeather {...props} />
        </PredictWeatherBox>
    </>
)

const MobileView = (props) => (
    <ScrollView
        contentContainerStyle={{
            alignItems: 'center',
        }}
        horizontal={false}
    >
        <WeatherContents {...props} />
    </ScrollView>
)

const WebView = (props) => (
    <WeatherBox>
        <WeatherContents {...props} />
    </WeatherBox>
)

export default (props) => {
    return (
        <Layout
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {props.loading ? (
                <Spinner />
            ) : (
                Platform.select({
                    ios: <MobileView {...props} />,
                    android: <MobileView {...props} />,
                    default: <WebView {...props} />,
                })
            )}
        </Layout>
    )
}
