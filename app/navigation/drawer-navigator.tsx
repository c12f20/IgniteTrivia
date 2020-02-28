import * as React from "react"
import { createDrawerNavigator } from "react-navigation-drawer"
import {
  HomeScreen,
  ProductsScreen,
} from "../screens"

import { Icon } from "react-native-elements"

export const DrawerNavigator = createDrawerNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: (
          <Icon name='home' size={20} color='gray' type="material"/>
        )
      }
    },
    products: {
      screen: ProductsScreen,
      navigationOptions: {
        drawerLabel: 'Products List',
        drawerIcon: (
          <Icon name='home' size={20} color='gray' type="material"/>
        )
      }
    }
  }
)
