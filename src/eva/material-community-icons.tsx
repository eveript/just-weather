import React from 'react'
import { StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const MaterialCommunityIconsPack = {
    name: 'material-community',
    icons: createIconsMap(),
}

function createIconsMap() {
    return new Proxy(
        {},
        {
            get(target, name) {
                return IconProvider(name)
            },
        },
    )
}

const IconProvider = (name: string | any) => ({
    toReactElement: (props: any) => MaterialCommunityIcon({ name, ...props }),
})

function MaterialCommunityIcon({
    name,
    style,
}: {
    name: string | any
    style: any
}) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style)
    return (
        <MaterialCommunityIcons
            name={name}
            size={height}
            color={tintColor}
            style={iconStyle}
        />
    )
}
