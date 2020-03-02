import * as React from "react"
import { createDrawerNavigator } from "react-navigation-drawer"
import { Icon } from "react-native-elements"

import {
  DrawerContainer
} from "../components"

import { HomeStackNavigator, ProductStackNavigator } from "./stacks-navigator"

export const DrawerNavigator = createDrawerNavigator(
  {
    home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: (
          <Icon name='home' size={20} color='gray'/>
        )
      }
    },
    products: {
      screen: ProductStackNavigator,
      navigationOptions: {
        drawerLabel: 'Products List',
        drawerIcon: (
          <Icon name='local-mall' size={20} color='gray'/>
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
