import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

const DefaultPage = ({ children }) => (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
            {children}
        </ScrollView>
    </View>
)


const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightskyblue',
        overflow: 'none'
    },
    scroller: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default DefaultPage