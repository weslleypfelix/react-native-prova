import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color : props.color}]}>{props.children}</Text>
            <Text style={styles.small}>Updated just now</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        paddingRight: 30,
        fontWeight: '600'
    },
    small: {
        color: 'grey',
        fontSize: 14,
        paddingLeft: 10,
        textAlign:'center',
        paddingTop: 180
    }
})