import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './components/Onboarding'
import Signup from './components/Signup';
import CompleteSignup from './components/CompleteSignup';
import ImproveShape from './components/ImproveShape';
import LeanTone from './components/LeanTone';
import LoseFat from './components/LoseFat';
import SuccessSignup from './components/SuccessSignup';
import Home from './components/Home';
import MyProfile from './components/MyProfile';


const App = () => {

  //splash screen
  useEffect(() => {
    setTimeout(() => {
      // go to Home page
      SplashScreen.hide();
    }, 2000)
  }, [])

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="CompleteSignup" component={CompleteSignup} options={{ headerShown: false }} />
        <Stack.Screen name="ImproveShape" component={ImproveShape} options={{ headerShown: false }} />
        <Stack.Screen name="LeanTone" component={LeanTone} options={{ headerShown: false }} />
        <Stack.Screen name="LoseFat" component={LoseFat} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessSignup" component={SuccessSignup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})