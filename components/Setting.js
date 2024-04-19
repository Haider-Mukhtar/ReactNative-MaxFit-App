import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const Setting = () => {

    const navigation = useNavigation();

    //remove login data from async storage on Sign out
    const removeLoginData = async () => {
        await AsyncStorage.clear()
        navigation.navigate("Onboarding")
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            {/* header */}
            <View style={{ marginHorizontal: 25, marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/ArrowLeft.png')}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                        Setting
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/Dots3.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* body */}
            <View style={{ marginHorizontal: 25, flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <View>
                    {/* logo */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                        <Image
                            style={{ width: 210, height: 200 }}
                            source={require('../assets/mainAssets/MaxFitLogo.png')}
                        />
                    </View>
                    {/* app version */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                            Max Fit
                        </Text>
                    </View>
                    {/* log out btn */}
                    <TouchableOpacity
                        onPress={removeLoginData}
                        style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, alignItems: 'center', justifyContent: 'center', paddingVertical: 16, shadowColor: 'red', marginTop: 10, borderWidth: 1, borderColor: 'red' }}>
                        <Text style={{ color: 'red', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginBottom: 10, }}>
                <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                    MaxFit v 0.1.5
                </Text>
                <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                    Made in Pakistan
                </Text>
            </View>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})