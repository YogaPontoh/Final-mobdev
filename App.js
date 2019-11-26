import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import home from './screens/home';

const menu = createStackNavigator({
  home: home,
},{
  initialRouteName: 'home',
  defaultNavigationOptions: {
    headerTitle: 'UK Magz Catalog'
  }
});

export default createAppContainer(menu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#bfe3fe',
    alignItems: 'center',
    justifyContent: 'center'
  },
});