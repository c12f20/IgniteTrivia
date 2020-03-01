import * as React from "react"
import { View, ViewStyle, FlatList } from "react-native"
import { Text, Button, HorizonListItem } from "../"
import { horizontalListStyles as styles } from "./horizontal-list.styles"

import { Product } from "../../models/product"

export interface HorizontalListProps {
  title?: string

  data?: Product[]

  onItemPressed?: (item: Product):void

  onViewAllPressed?: ():void
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function HorizontalList(props: HorizontalListProps) {
  // grab the props
  const { style, title, data, ...rest } = props

  _keyExtractor = (item, index) => index.toString();

  _onPressItem = (item) => {
    if (this.props.onItemPressed != undefined) {
      this.props.onItemPressed(item);
    }
  }

  _onPressViewAll = () => {
    if (this.props.onViewAllPressed != undefined) {
      this.props.onViewAllPressed();
    }
  }

  _renderItem = ({item, index}) => {
    return (
      <HorizonListItem
        index = {index}
        data = {item}
        onPressItem = {this._onPressItem} />
    )
  }

  return (
    <View style={styles.WRAPPER}>
      <View style={styles.TITLE_LINE}>
        <Text style={styles.TITLE}>{this.props.title}</Text>
        <Button preset='link' textStyle={styles.BTN_VIEW_ALL} onPress={this.onPressViewAll}>View all &gt;</Text>
      </View>
      <FlatList
        data = {this.props.data}
        horizontal = {true}
        keyExtractor = {this._keyExtractor}
        renderItem = {this._renderItem} />
    </View>
  )
}
