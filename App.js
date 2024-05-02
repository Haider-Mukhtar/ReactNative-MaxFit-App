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
import Workout from './components/Workout';
import FullBodyWorkout from './components/FullBodyWorkout';
import WarmUpWorkout from './components/WarmUpWorkout';
import JumpingJackWorkout from './components/JumpingJackWorkout';
import SkippingWorkout from './components/SkippingWorkout';
import SquatsWorkout from './components/SquatsWorkout';
import ArmRaisesWorkout from './components/ArmRaisesWorkout';
import RestAndDrinkWorkout from './components/RestAndDrinkWorkout';
import LowerBodyWorkout from './components/LowerBodyWorkout';
import LungesWorkout from './components/LungesWorkout';
import GluteBridgeWorkout from './components/GluteBridgeWorkout';
import CalfRaisesWorkout from './components/CalfRaisesWorkout';
import ABWorkout from './components/ABWorkout';
import CrunchesWorkout from './components/CrunchesWorkout';
import PlankWorkout from './components/PlankWorkout';
import RussianTwistsWorkout from './components/RussianTwistsWorkout';
import LegRaisesWorkout from './components/LegRaisesWorkout';
import BicycleCrunchesWorkout from './components/BicycleCrunchesWorkout';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Setting from './components/Setting';
import Achievement from './components/Achievement';
import BMICalculator from './components/BMICalculator';
import PrivacyPolicySignUp from './components/PrivacyPolicySignUp';
import PersonalData from './components/PersonalData';
import ProgressPhoto from './components/ProgressPhoto';
import TodayTarget from './components/TodayTarget';
import AddTodayTarget from './components/AddTodayTarget';
import EditProfile from './components/EditProfile';
import PhotoDetails from './components/PhotoDetails';
import ForgotPassword from './components/ForgotPassword';
import ChatAI from './components/ChatAI';


const App = () => {

  //splash screen
  useEffect(() => {
    setTimeout(() => {
      // go to Home page , splash screen close
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
        <Stack.Screen name="Workout" component={Workout} options={{ headerShown: false }} />
        <Stack.Screen name="FullBodyWorkout" component={FullBodyWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="WarmUpWorkout" component={WarmUpWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="JumpingJackWorkout" component={JumpingJackWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="SkippingWorkout" component={SkippingWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="SquatsWorkout" component={SquatsWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="ArmRaisesWorkout" component={ArmRaisesWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="RestAndDrinkWorkout" component={RestAndDrinkWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="LowerBodyWorkout" component={LowerBodyWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="LungesWorkout" component={LungesWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="GluteBridgeWorkout" component={GluteBridgeWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="CalfRaisesWorkout" component={CalfRaisesWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="ABWorkout" component={ABWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="CrunchesWorkout" component={CrunchesWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="PlankWorkout" component={PlankWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="RussianTwistsWorkout" component={RussianTwistsWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="LegRaisesWorkout" component={LegRaisesWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="BicycleCrunchesWorkout" component={BicycleCrunchesWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="Achievement" component={Achievement} options={{ headerShown: false }} />
        <Stack.Screen name="BMICalculator" component={BMICalculator} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyPolicySignUp" component={PrivacyPolicySignUp} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalData" component={PersonalData} options={{ headerShown: false }} />
        <Stack.Screen name="ProgressPhoto" component={ProgressPhoto} options={{ headerShown: false }} />
        <Stack.Screen name="TodayTarget" component={TodayTarget} options={{ headerShown: false }} />
        <Stack.Screen name="AddTodayTarget" component={AddTodayTarget} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="PhotoDetails" component={PhotoDetails} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="ChatAI" component={ChatAI} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})