import React from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const TabTwoScreen = () => {
    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
        </Layout>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default TabTwoScreen