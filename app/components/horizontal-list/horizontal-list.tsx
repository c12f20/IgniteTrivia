import * as React from "react"
import { View, ViewStyle, FlatList } from "react-native"
import { Text, Button, HorizontalListItem } from "../"
import { horizontalListStyles as styles } from "./horizontal-list.styles"

import { Product } from "../../models/product"

export interface HorizontalListProps {
  title?: string

  data?: Product[]

  onItemPressed?: (item: Product) => void

  onViewAllPressed?: () => void
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

  const keyExtractor = (index: number) => index.toString();

  const onPressItem = (item: Product) => {
    if (props.onItemPressed != undefined) {
      props.onItemPressed(item);
    }
  }

  const onPressViewAll = () => {
    if (props.onViewAllPressed != undefined) {
      props.onViewAllPressed();
    }
  }

  const renderItem = ({item}) => {
    return (
      <HorizontalListItem
        data = {item}
        onPressItem = {onPressItem} />
    )
  }

  return (
    <View style={styles.WRAPPER} {...rest}>
      <View style={styles.TITLE_LINE}>
        <Text style={styles.TITLE}>{props.title}</Text>
        <Button preset='link' textStyle={styles.BTN_VIEW_ALL} onPress={onPressViewAll} tx='View all &gt' />
      </View>
      <FlatList
        data = {props.data}
        horizontal = {true}
        keyExtractor = {keyExtractor}
        renderItem = {renderItem} />
    </View>
  )
}
