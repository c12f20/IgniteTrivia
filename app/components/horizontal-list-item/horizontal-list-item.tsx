import * as React from "react"
import {
  View,
  Image,
  TouchableOpacity } from "react-native"
import { Text } from "../"
import { horizontalListItemStyles as styles } from "./horizontal-list-item.styles"

import { Product } from "../../models/product"

export interface HorizontalListItemProps {
  data?: Product

  onPressItem?: (data: Product) => void
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function HorizontalListItem(props: HorizontalListItemProps) {
  // grab the props
  const { data, ...rest } = props

  const onPress = () => {
    props.onPressItem(data);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.WRAPPER} {...rest}>
        <View style={styles.IMAGE_CONTAINER}>
          <Image source={data.image} />
        </View>
        <Text style={styles.PRICE} tx={"$"+data.price.toFixed(2)} />
      </View>
    </TouchableOpacity>
  )
}
