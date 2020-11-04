import React from 'react'
import { isNumber } from 'lodash'
import { Avatar, Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

import { WEATHER_IMAGE_URL } from '../../../constants/Weathers'
import RowLayout from "../../Eva/RowLayout";
import {getWeatherIcon} from "../../../apis/openWeatherMapAPI";


const WeatherIcon = styled(Avatar)`
    width: ${props => props.scale * 100}px;
    height: ${props => props.scale * 100}px;
`

WeatherIcon.propTypes = {
    scale: PropTypes.number,
}
WeatherIcon.defaultProps = {
    scale: 1,
}

export default WeatherIcon