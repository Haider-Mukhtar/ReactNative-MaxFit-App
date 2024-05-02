import { FlatList, StyleSheet, Text, View, Animated, useWindowDimensions, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import slides from '../assets/onboardingData/slides'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppIntroSlider from 'react-native-app-intro-slider'
import { useNavigation } from '@react-navigation/native';
import Login from './Login'
import Loading from './Loading'

const Onboarding = () => {

    const { width, height } = useWindowDimensions();

    const navigation = useNavigation();

    const [showLoginPage, setShowLoginPage] = useState(false)

    //activity loader
    const [visible, setVisible] = useState(false);

    //login info , check login or not
    useEffect(() => {
        setVisible(true)
        checkLogin();
    }, [])
    const checkLogin = async () => {
        const id = await AsyncStorage.getItem('USERID')
        if (id !== null) {
            navigation.navigate("Home")
            setVisible(false)
        } else {
            setVisible(false)
            navigation.navigate("Onboarding")
        }
    }

    const buttonLable = (lable) => {
        return (
            <View style={{ padding: 10, }}>
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
            {/* activity loader */}
            <Loading visible={visible} />
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})