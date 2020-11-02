import React from 'react'
import {isNumber} from "lodash";


import {Layout, Text} from "@ui-kitten/components";
import styled from "styled-components/native/dist/styled-components.native.esm";

const SummaryBox = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const TempText = styled(Text)`
    font-size: 48px;
    font-weight: bold;
`

const WeatherSummary = ({ temp }) => {

    return (
        <SummaryBox>
            <Layout><Text>Icon</Text></Layout>
            <TempText>{isNumber(temp) ? `${temp}°` : ''}</TempText>
            <Layout><Text>어제보다 1도 낮아요</Text></Layout>
            <Layout><Text>맑음/ 강수량 %</Text></Layout>
        </SummaryBox>
    )
}

export default WeatherSummary
