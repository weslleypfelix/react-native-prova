import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { Foundation } from '@expo/vector-icons'; 
import Cards from '../../components/Cards'
import Search from '../../components/Search'

function DefaultCards( {navigation} ) {
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
    <View style={{flexDirection: 'row'}}>
        <Text style={styles.small,{color: 'blue'}}>  Home/ </Text>
        <Text style={styles.small,{color: 'blue'}}> Elements </Text>
        <Text style={[styles.small]}>/Cards</Text>
    </View>
    <Text style={{fontSize: 20, textAlign: 'center', color:'purple'}}>Card Columns</Text>
    <ScrollView>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </ScrollView>

        </>
    )
}

export default DefaultCards

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
    },
    small: {
        color: 'grey',
        fontSize: 14,
        paddingLeft: 10
    }
})