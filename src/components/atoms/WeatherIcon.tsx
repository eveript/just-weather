import React from 'react'
import { Icon } from '@ui-kitten/components'
import styled from 'styled-components/native'

const WeatherIcon = styled(Icon)<{ scale: number }>`
    width: ${(props) => (props.scale || 1) * 100}px;
    height: ${(props) => (props.scale || 1) * 100}px;
`

export default WeatherIcon
