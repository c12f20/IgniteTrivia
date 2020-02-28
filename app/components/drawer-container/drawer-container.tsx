import * as React from "react"
import { View } from "react-native"
import { useObserver } from "mobx-react-lite"
import { Text } from "../"
//import { useStores } from "../../models/root-store"
import { drawerContainerStyles as styles } from "./drawer-container.styles"

export interface DrawerContainerProps {}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const DrawerContainer: React.FunctionComponent<DrawerContainerProps> = props => {
  // const { someStore } = useStores()

  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <Text>Hi Func</Text>
    </View>
  ))
}
