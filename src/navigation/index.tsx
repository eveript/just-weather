import React from 'react'
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LinkingConfiguration from './LinkingConfiguration'
import NotFoundScreen from '../screens/NotFoundScreen'
import { TopNavigation, useTheme } from '@ui-kitten/components'
import WeatherContainer from '../screens/weathers'
import styled from 'styled-components/native'

export type RootStackParamList = {
    Root: undefined
    NotFound: undefined
}

const StyledTopNavigation = styled(TopNavigation)`
    width: 100%;
`
const Stack = createStackNavigator<RootStackParamList>()

const Navigation = ({ colorScheme }: { colorScheme: string }) => {
    const theme = useTheme()
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            {/* react에서 Switch 및 Route에 해당 */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={WeatherContainer}
                    options={{
                        headerTitle: (props) => (
                            <StyledTopNavigation
                                alignment="center"
                                title={
                                    props?.children === 'Root'
                                        ? 'Title...'
                                        : props?.children
                                }
                                // accessoryLeft={renderBackAction}
                                // accessoryRight={renderRightActions}
                            />
                        ),
                        headerStyle: {
                            backgroundColor: theme['background-basic-color-1'],
                        },
                    }}
                />
                <Stack.Screen
                    name="NotFound"
                    component={NotFoundScreen}
                    options={{ title: 'Oops!' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
