import React, {useRef} from 'react'

import {isNumber} from 'lodash'

import {Avatar, Layout, Text} from '@ui-kitten/components'
import styled from 'styled-components/native'
import {useColorScheme} from "react-native-appearance";
import {WEATHER_IMAGE_URL} from "../../constants/Weathers";

const SummaryBox = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const TempText = styled(Text)`
    font-size: 48px;
    font-weight: bold;
`

// const WeatherIcon = styled(Icon)`
const WeatherIcon = styled(Avatar)`
width: 128px;
height: 128px;
/* color: ${props => props.scheme === 'dark' ? '#fff' : '#000'} */
`
const WeatherSummary = ({ temp, icon }) => {
    const tempIconRef = useRef()
    const colorScheme = useColorScheme()

    // const TempIcon = (props) => (
    //     <Icon
    //         {...props}
    //         // ref={tempIconRef}
    //         // animationConfig={{ cycles: Infinity }}
    //         animation="pulse"
    //         name="weather-windy"
    //     />
    // )

    // useEffect(() => {
    //     tempIconRef.current.startAnimation()
    // }, [])

    return (
        <SummaryBox>
            <Layout>
                {/*<Button appearance="ghost" accessoryLeft={TempIcon} size="giant" />*/}
                {/*<WeatherIcon*/}
                {/*    ref={tempIconRef}*/}
                {/*    animationConfig={{ cycles: Infinity }}*/}
                {/*    animation="pulse"*/}
                {/*    name="weather-windy"*/}
                {/*    scheme={colorScheme}*/}
                {/*/>*/}
                <WeatherIcon source={{uri: `${WEATHER_IMAGE_URL}/${icon}@2x.png`}}/>
            </Layout>
            <Layout>
                <TempText>{isNumber(temp) ? `${parseInt(temp, 10)}°` : ''}</TempText>
            </Layout>
            <Layout>
                <Text>어제보다 1도 낮아요</Text>
            </Layout>
            <Layout>
                <Text>맑음/ 강수량 %</Text>
            </Layout>
        </SummaryBox>
    )
}



export default WeatherSummary
