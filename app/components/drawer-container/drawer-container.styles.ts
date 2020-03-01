import {
  ViewStyle,
  TextStyle,
} from "react-native"

export const drawerContainerStyles = {
  CONTAINER: {
    flex: 1
  } as ViewStyle,

  TOPVIEW: {
    flexDirection: 'row',
    height: 100,
    padding: 5,
    alignItems: 'center'
  } as ViewStyle,

  GREETING: {
    flex: 1,
    color: 'gray',
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center'
  } as TextStyle,

  DIVIDE_LINE: {
    height: 2,
    backgroundColor: 'lightgray'
  } as ViewStyle,

  AVATAR: {
    margin: 10
  } as ViewStyle,
}
