import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { Foundation } from '@expo/vector-icons'; 
import Rectangle from '../../components/rectangle';
import Charts from '../../components/Charts';
import Search from '../../components/Search'

export default function Tab({ navigation }) {
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
        <Text style={styles.small,{color: 'blue'}}>  Home </Text>
        <Text style={[styles.small]}>/ Dashboard</Text>
    </View>
    <View>
        <Text style={styles.greetings}>
            Hi <Text style={{color: 'blue'}}>John</Text>, Welcome back
        </Text>
    </View>
    <View>
        <Text style={styles.small}>Very Detailed & featured admin.</Text>
    </View>
    <ScrollView>
    <View>
        <Rectangle color="blue" borderBottomColor="#212529">29.75M</Rectangle>
        <Rectangle color="grey" borderBottomColor="red">51.25K</Rectangle>
        <Rectangle color="green" borderBottomColor="blue">166.89M</Rectangle>
        <Rectangle color="red" borderBottomColor="red">1,250k</Rectangle>
    </View>
    <Charts color="purple">Bar Chart</Charts>
    <Charts color="blue">Bar Chart</Charts>
    </ScrollView>
    </>
    )
}

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
    },
    greetings: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10
    }
})