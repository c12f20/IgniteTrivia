import * as React from "react"
import { createDrawerNavigator } from "react-navigation-drawer"
import { Icon } from "react-native-elements"

import {
  DrawerContainer
} from "../components"

import {
  HomeScreen,
  ProductsScreen,
} from "../screens"

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
          <Icon name='local-mall' size={20} color='gray' type="material"/>
        )
      }
    }
  },
  {
    contentComponent: DrawerContainer,
    contentOptions: {
      onAvatarPressed: () => {
        console.log('Avatar Pressed');
      },
    }
  }
)
