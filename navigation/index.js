import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LinkingConfiguration from './LinkingConfiguration'
import NotFoundScreen from '../screens/NotFoundScreen'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator()

const Navigation = ({ colorScheme }) => (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* react에서 Switch 및 Route에 해당 */}
        <Stack.Navigator screenOptions={{ headerShown: false,
            // headerShown: true,
            // headerStyle: {
            //     backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation
