import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const SuccessSignup = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View>
                {/* image */}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100, }}>
                    <Image
                        style={{}}
                        source={require('../assets/images/SuccessSignUp.png')}
                    />
                </View>
                {/* text */}
                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                        Welcome, Stefani
                    </Text>
                    <Text style={{ color: '#7B6F72', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", textAlign: 'center', marginHorizontal: 60, }}>
                        You are all set now, let's reach your goals together with us.
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                {/* go to home btn */}
                <View style={{ marginHorizontal: 25, marginVertical: 50, }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Onboarding")}
                        style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                                Go To Login
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SuccessSignup

const styles = StyleSheet.create({})