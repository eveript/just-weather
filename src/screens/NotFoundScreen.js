import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import styled from 'styled-components/native'

const StyledWrapper = styled(Layout)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const StyledTitle = styled(Text)`
    font-size: 20px;
    font-weight: bold;
`

const StyledLinkText = styled(Text)`
    font-size: 14px;
    color: #2e78b7;
`

const NotFoundScreen = ({ navigation }) => (
    <StyledWrapper>
        <StyledTitle>This screen doesn't exist.</StyledTitle>
        <TouchableOpacity onPress={() => navigation.replace('Root')}>
            <StyledLinkText>Go to home screen!</StyledLinkText>
        </TouchableOpacity>
    </StyledWrapper>
)

export default NotFoundScreen
