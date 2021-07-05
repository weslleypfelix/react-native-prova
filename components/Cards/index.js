import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function rectangle(props) {
    
    return (
    <>  
        <View style={styles.rectangle}>
        <Image
        style={styles.img}
        source={require('../../assets/img/desk.jpg')}
        />
        <Text style={{paddingLeft: 40, fontSize: 16}}>Card title</Text>
        <Text >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
   rectangle: {
       top: 10,
       width: '100%',
       height: 320,
       backgroundColor: '#fff',
       borderStyle: 'solid'
   },
   img: {
   
    width: 400,
    height: 150,
    alignContent: 'center',
    justifyContent: 'center'
}
})