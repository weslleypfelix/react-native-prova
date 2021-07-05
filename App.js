import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import DefaultCards from './components/DefaultCards';
import Dashboard from './components/Dashboard';
import { createDrawerNavigator } from '@react-navigation/drawer'
import PricingTables from './components/PricingTables';
import ContentBlocks from './components/ContentBlocks';
import Forms from './components/Forms';
import Header from './components/Header'



const Drawer = createDrawerNavigator()


export default function App() {
  return (
    <>
    
    <NavigationContainer>
    
      <Drawer.Navigator 
      initialRouteName="Dashboard"
      >
        <Drawer.Screen name="Dashboard" component={Header} />
        <Drawer.Screen name="DefaultCards" component={DefaultCards} />
        <Drawer.Screen name="PricingTables" component={PricingTables} />
        <Drawer.Screen name="ContentBlocks" component={ContentBlocks} />
        <Drawer.Screen name="Forms" component={Forms} />
      </Drawer.Navigator>
     

    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});