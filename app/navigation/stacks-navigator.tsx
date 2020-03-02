import * as React from "react"
import { createStackNavigator } from "react-navigation-stack"
import {
  HomeScreen,
  ProductsScreen,
} from "../screens"

import {
  View,
  TouchableOpacity,
} from "react-native"

import { Icon } from 'react-native-elements';

const defaultDrawerStackOpt = ({navigation}) => {
  return {
    headerLeft: () => (
      <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => {navigation.openDrawer();}}>
        <Icon name='menu' size={28} color='black' />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => {console.log("menu search");}}>
          <Icon name='search' size={28} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => {console.log("menu cart");}}>
          <Icon name='shopping-cart' size={28} color='black' />
        </TouchableOpacity>
      </View>
    )
  };
};

export const HomeStackNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen }
  },
  {
    initialRouteName: "home",
    defaultNavigationOptions: defaultDrawerStackOpt
  }
)

export const ProductStackNavigator = createStackNavigator(
  {
    products: { screen: ProductsScreen }
  },
  {
    initialRouteName: "products",
    defaultNavigationOptions: defaultDrawerStackOpt
  }
)
