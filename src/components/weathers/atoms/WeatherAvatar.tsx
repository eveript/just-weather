import React from 'react'
import { Avatar } from '@ui-kitten/components'
import styled from 'styled-components/native'

const WeatherAvatar = styled(Avatar)<{ scale: number }>`
    width: ${(props) => (props.scale || 1) * 100}px;
    height: ${(props) => (props.scale || 1) * 100}px;
`

export default WeatherAvatar
