import { createSwitchNavigator } from "react-navigation"
import {
  LoginScreen,
} from "../screens"

import { DrawerNavigator } from "./drawer-navigator"

export const MainNavigator = createSwitchNavigator(
  {
    auth: {screen: LoginScreen},
    drawer: {screen: DrawerNavigator }
  },
  {
    initialRouteName: 'drawer',
  }
);

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["home", "login"]
