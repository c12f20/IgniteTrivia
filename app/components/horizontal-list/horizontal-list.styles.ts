import { ViewStyle, TextStyle } from "react-native"

export const horizontalListStyles = {
  WRAPPER: {
    flex: 1
  } as ViewStyle,

  TITLE_LINE: {
    flexDirection: 'row',
    height: 30,
    margin: 5,
    alignItems: 'baseline',
  } as ViewStyle,

  TITLE: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
  } as TextStyle,

  BTN_VIEW_ALL: {
    fontSize: 20,
  } as TextStyle,
}
