import { createStackNavigator } from "react-navigation-stack"
import { MainNavigator } from "./main-navigator"
import {} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    main: { screen: MainNavigator }
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
