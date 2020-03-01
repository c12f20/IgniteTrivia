import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Screen, Text, Button } from "../components"
// import { useStores } from "../models/root-store"
import { color, spacing } from "../theme"
import { NavigationInjectedProps } from "react-navigation"

export interface LoginScreenProps extends NavigationInjectedProps<{}> {
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.white,
  alignItems: 'center',
  justifyContent: 'center',
}

const TITLE: TextStyle = {
  height: 200,
  color: color.palette.black,
  fontSize: 32,
  textAlign: 'center',
  textAlignVertical: 'center',
}

const BUTTON: ViewStyle = {
  width: 200,
  height: 50,
  margin: spacing[2]
}

const BUTTON_TEXT: TextStyle = {
  color: color.palette.black,
  fontSize: 20,
}

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = observer((props) => {
  // const { someStore } = useStores()

  const onSignIn = React.useMemo(() => () => {
    console.tron.log("Sign In Pressed");
    props.navigation.navigate("drawer");
  }, [props.navigation])

  const onSignUp = React.useMemo(() => () => {
    console.tron.log("Sign Up Pressed");
  }, [])

  return (
    <Screen style={CONTAINER} preset="fixed">
      <Text style={TITLE} tx="loginScreen.title" />
      <Button style={BUTTON} textStyle={BUTTON_TEXT} tx="loginScreen.signin" onPress={onSignIn}/>
      <Button style={BUTTON} textStyle={BUTTON_TEXT} tx="loginScreen.signup" onPress={onSignUp}/>
    </Screen>
  )
})
