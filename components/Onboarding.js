import { FlatList, StyleSheet, Text, View, Animated, useWindowDimensions, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import slides from '../assets/onboardingData/slides'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppIntroSlider from 'react-native-app-intro-slider'
import Login from './Login'

const Onboarding = () => {

    const { width, height } = useWindowDimensions();

    const [showLoginPage, setShowLoginPage] = useState(false)

    const buttonLable = (lable) => {
        return (
            <View style={{ padding: 10,}}>
                <Text style={{ color: "#1D1617", fontSize: 20, fontFamily: "Poppins-Bold", }}>
                    {lable}
                </Text>
            </View>
        )
    }

    if (!showLoginPage) {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={[{ backgroundColor: '#fff', flex: 1 }]}>
                            <Image
                                style={[{ height: 400 }, { width, resizeMode: 'stretch' }]}
                                source={item.image}
                            />
                            <View style={{ marginTop: 80, marginHorizontal: 25 }}>
                                <Text style={{ color: '#1D1617', fontSize: 28, lineHeight: 36, fontFamily: "Poppins-Bold", marginBottom: 14 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ color: '#7B6F72', fontSize: 20, lineHeight: 23, fontFamily: "Poppins-Light" }}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )
                }}
                activeDotStyle={{
                    backgroundColor: "#1D1617",
                    width: 16,
                }}
                showSkipButton
                renderNextButton={() => buttonLable("Next")}
                renderSkipButton={() => buttonLable("Skip")}
                renderDoneButton={() => buttonLable("Finish")}
                onDone={() => {
                    setShowLoginPage(true);
                }}
            />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Login />
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})