import React from 'react'
import { Text,View, StyleSheet, Image } from 'react-native'
import { Foundation } from '@expo/vector-icons'; 
import Search from '../../components/Search'

function PricingTables( {navigation} ) {
    return (
        <>
    <View style={styles.size}>
        <Image
        style={styles.img}
        source={require('../../assets/img/profileimg.jpg')}
        />
        <Foundation style={styles.position} title="toggle" name="list" size={24} color="black" onPress={() => navigation.toggleDrawer('Dashboard')}/>
        <Search/>
    </View>

        </>
    )
}

export default PricingTables

const styles = StyleSheet.create({
    size: {
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        flexDirection: 'row'
    },
    img: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: 170,
        top: 40
    },
    position: {
        paddingTop: 50,
        right: 30
    }
})