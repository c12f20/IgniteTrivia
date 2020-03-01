import * as React from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar } from 'react-native-elements';

import { useObserver } from "mobx-react-lite"
import { useStores } from "../../models/root-store"
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
    <ScrollView>
      <SafeAreaView
        style={styles.CONTAINER}
        forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.TOPVIEW} >
          <Text style={styles.GREETING} adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={2}>
            {props.userName == undefined ? "Please sign in" : "Hello, "+props.userName}
          </Text>
          <Avatar
            size='medium'
            rounded
            icon={{ name:'user',  type: 'font-awesome' }}
            onPress={props.onAvatarPressed}
            activeOpacity={0.7}
            containerStyle={styles.AVATAR} />
        </View>
        <View style={styles.DIVIDE_LINE} />
        <DrawerItems {...props} />
        <View style={styles.DIVIDE_LINE} />
      </SafeAreaView>
    </ScrollView>
  ))
}
