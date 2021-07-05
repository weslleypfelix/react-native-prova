import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function rectangle(props) {
    
    
    return (
    <>
    <View style={{borderBottomColor: props.borderBottomColor,
        borderBottomWidth: 2}}></View>
    <TouchableOpacity>
        <Text style={[styles.rectangle, styles.text, {color : props.color}]}>{props.children}</Text>
        <Text style={styles.small}>Total users</Text>
    </TouchableOpacity>
    </>
    )
}

const styles = StyleSheet.create({
   rectangle: {
       width: '100%',
       height: 120,
       backgroundColor: '#fff',
   },
   text: {
    fontSize: 30,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 30,
    fontWeight: 'bold'
   },
   small: {
       fontSize: 13,
       color: 'grey',
       bottom: 60,
       fontWeight: 'bold',
       textAlign: 'right',
       paddingRight: 30
   }
})