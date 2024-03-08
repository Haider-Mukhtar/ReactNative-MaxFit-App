import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'


const App = () => {

  //splash screen
  useEffect(() => {
    setTimeout(() => {
      // go to Home page
      SplashScreen.hide();
    }, 2500)
  }, [])

  return (
    <View>
      <Text style={{ fontSize: 40, }}>App</Text>
      <Text style={{ fontSize: 40, fontFamily: "Poppins-Thin" }}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})