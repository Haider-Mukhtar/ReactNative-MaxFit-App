import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const CompleteSignup = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* header image */}
            <View style={{}}>
                <Image
                    style={{ alignSelf: 'center' }}
                    source={require('../assets/images/CompleteSignupImage.png')}
                />
            </View>
            {/* header */}
            <View style={{ marginTop: 30 }}>
                <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                    Let's complete your profile
                </Text>
                <Text style={{ color: '#7B6F72', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                    It will help us to know more about you!
                </Text>
            </View>
            {/* gender selection */}
            <View style={{ marginHorizontal: 25, marginTop: 30, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, paddingVertical: 14, }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/2User.png')}
                    />
                    <TouchableOpacity
                        style={{ flex: 1, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 12, }}>
                            <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                                Chose Gender
                            </Text>
                            <Image
                                source={require('../assets/icons/ArrowDown.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* DOB selection */}
            <View style={{ marginHorizontal: 25, marginTop: 10, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, paddingVertical: 14, }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/DOBLogo.png')}
                    />
                    <TouchableOpacity
                        style={{ flex: 1, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 12, }}>
                            <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                                Date of Birth
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/*  Weight selection */}
            <View style={{ marginHorizontal: 25, marginTop: 10, flexDirection: 'row', gap: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, flex: 1 }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/WeightLogo.png')}
                    />
                    <TextInput
                        placeholder='Your Weight'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                <View style={{ backgroundColor: '#C58BF2', alignSelf: 'flex-end', padding: 14, borderRadius: 12, }}>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        KG
                    </Text>
                </View>
            </View>
            {/*   Height selection */}
            <View style={{ marginHorizontal: 25, marginTop: 10, flexDirection: 'row', gap: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, flex: 1 }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/HeightLogo.png')}
                    />
                    <TextInput
                        placeholder='Your Height'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                <View style={{ backgroundColor: '#C58BF2', alignSelf: 'flex-end', paddingVertical: 14, borderRadius: 12, paddingHorizontal: 12, }}>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        CM
                    </Text>
                </View>
            </View>
            {/*   Next btn */}
            <View style={{ marginHorizontal: 25, marginVertical: 30, }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ImproveShape")}
                    style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                        <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                            Next
                        </Text>
                        <Image
                            source={require('../assets/icons/ArrowRight.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CompleteSignup

const styles = StyleSheet.create({})