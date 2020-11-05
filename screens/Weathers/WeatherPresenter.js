import React from 'react'
import CurrentWeather from '../../components/Weathers/organisms/CurrentWeather'
import { Layout, Spinner, useTheme } from '@ui-kitten/components'
import styled from 'styled-components/native'
import PredictWeather from '../../components/Weathers/organisms/PredictWeather'
import HashTags from '../../components/Weathers/organisms/HashTags'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Platform, ScrollView } from 'react-native'

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
const TagBox = styled(Layout)``
const PredictWeatherBox = styled(Layout)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`

const MobileView = ({ oneCall }) => (
    <ScrollView
        contentContainerStyle={{
            alignItems: 'center',
        }}
        horizontal={false}
    >
        <CurrentWeatherBox>
            <CurrentWeather {...oneCall} />
        </CurrentWeatherBox>
        <TagBox>
            <HashTags {...oneCall} />
        </TagBox>
        <PredictWeatherBox>
            <PredictWeather {...oneCall} />
        </PredictWeatherBox>
    </ScrollView>
)

const WebView = ({ oneCall }) => (
    <WeatherBox>
        <CurrentWeatherBox>
            <CurrentWeather {...oneCall} />
        </CurrentWeatherBox>
        <TagBox>
            <HashTags {...oneCall} />
        </TagBox>
        <PredictWeatherBox>
            <PredictWeather {...oneCall} />
        </PredictWeatherBox>
    </WeatherBox>
)

export default (props) => {
    const theme = useTheme()
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme['background-basic-color-1'],
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
        </SafeAreaView>
    )
}
