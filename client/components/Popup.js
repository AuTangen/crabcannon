import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

const Popup = ({ children }) => (
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
        backgroundColor: 'black',
        overflow: 'none',
        color: 'white',
        opacity: '50%',
        zIndex: 1,
        padding: '5%',
        textAlign: "center"
    },
    scroller: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Popup