import React from 'react'
import { Avatar } from '@ui-kitten/components'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const WeatherAvatar = styled(Avatar)`
    width: ${(props) => props.scale * 100}px;
    height: ${(props) => props.scale * 100}px;
`

WeatherAvatar.propTypes = {
    scale: PropTypes.number,
}
WeatherAvatar.defaultProps = {
    scale: 1,
}

export default WeatherAvatar
