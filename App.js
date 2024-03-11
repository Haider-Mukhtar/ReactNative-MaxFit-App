import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Onboarding from './components/Onboarding'


const App = () => {

  //splash screen
  useEffect(() => {
    setTimeout(() => {
      // go to Home page
      SplashScreen.hide();
    }, 2000)
  }, [])

  return (
    <View style={{ flex: 1,}}>
      <Onboarding />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})