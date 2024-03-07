import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Cart from './Cart';
import ThongBao from './ThongBao';

const Tab = createBottomTabNavigator();

const tabScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused }) => {
      if (route.name == 'Home') {
        if (focused) {
          return <Image source={require('../../img/home.png')}
            style={{ width: 25, height: 25 }} />
        }
        return <Image source={require('../../img/home_X.png')}
          style={{ width: 20, height: 20 }} />
      } else if (route.name == 'Cart') {
        if (focused) {
          return <Image source={require('../../img/cart.png')}
            style={{ width: 25, height: 25 }} />
        }
        return <Image source={require('../../img/cart_X.png')}
          style={{ width: 25, height: 25 }} />
      } else if (route.name == 'ThongBao') {
        if (focused) {
          return <Image source={require('../../img/bell.png')}
            style={{ width: 20, height: 25 }} />
        }
        return <Image source={require('../../img/bell_X.png')}
          style={{ width: 20, height: 25 }} />
      }
    },
    tabBarLabel: ({ focused }) => null,
  }
}

const ManHinh = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="ThongBao" component={ThongBao} />
    </Tab.Navigator>
  )
}

export default ManHinh

const styles = StyleSheet.create({})
