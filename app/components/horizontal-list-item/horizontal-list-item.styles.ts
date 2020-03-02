import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../theme"

export const horizontalListItemStyles = {
  WRAPPER: {
    alignItems: 'center'
  } as ViewStyle,

  IMAGE_CONTAINER: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: color.background,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  PRICE: {
    fontSize: 24,
    color: 'orange',
  } as TextStyle

}
