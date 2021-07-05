import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


export default function Tab({ navigation }) {
    return (
        <View style={styles.position}>
            <Text style={{paddingTop: 5, left: 15}}>Search here...</Text>
            <TouchableOpacity>
            <AntDesign style={{left: 250, bottom: 20}} name="search1" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    position: {
       backgroundColor: '#d3d3d3',
       width: 300,
       height: 30,
       marginTop: 100,
       borderRadius: 10
    }
})