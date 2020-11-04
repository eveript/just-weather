import React from 'react'
import { Avatar } from '@ui-kitten/components'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const WeatherIcon = styled(Avatar)`
    width: ${(props) => props.scale * 100}px;
    height: ${(props) => props.scale * 100}px;
`

WeatherIcon.propTypes = {
    scale: PropTypes.number,
}
WeatherIcon.defaultProps = {
    scale: 1,
}

export default WeatherIcon
