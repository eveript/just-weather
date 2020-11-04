import React from 'react'
import {Layout, Text} from "@ui-kitten/components";
import HourlyPrediction from "../molecules/HourlyPrediction";

export default ({ current, hourly, daily, ...rest }) => (
    <>
        <Layout>
            <Text>{`#해시태그`}</Text>
        </Layout>
        <HourlyPrediction hourly={hourly} />
        <Layout>
            <Text>일별 예보 테이블</Text>
        </Layout>
    </>
)