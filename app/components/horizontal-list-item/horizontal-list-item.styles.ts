import { ViewStyle, TextStyle } from "react-native"

export const horizontalListItemStyles = {
  WRAPPER: {
    alignItems: 'center'
  },

  IMAGE_CONTAINER: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  PRICE: {
    fontSize: 24,
    color: 'orange',
  } as TextStyle

}
