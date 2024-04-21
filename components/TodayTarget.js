import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const TodayTarget = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            {/* header */}
            <View style={{ marginHorizontal: 25, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/ArrowLeft.png')}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                        Today Target
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
            <View style={{ backgroundColor: '#d6deea', margin: 25, borderRadius: 22, paddingHorizontal: 25, paddingVertical: 20, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", }}>
                        Your Target
                    </Text>
                    <TouchableOpacity
                        style={{ backgroundColor: '#92A3FD', padding: 10, borderRadius: 11, }}>
                        <Image
                            source={require('../assets/icons/plus.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 14, gap: 10, }}>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 11, flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 }}>
                        <Image
                            style={{ height: 40, width: 30, }}
                            source={require('../assets/icons/glass.png')}
                        />
                        <View>
                            <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                                0L
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Water Intake
                            </Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 11, flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 }}>
                        <Image
                            style={{ height: 40, width: 40, }}
                            source={require('../assets/icons/steps.png')}
                        />
                        <View>
                            <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                                0
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Foot Steps
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 14, gap: 10, }}>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 11, flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 }}>
                        <Image
                            style={{ height: 40, width: 40, }}
                            source={require('../assets/icons/heartrate.png')}
                        />
                        <View>
                            <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                                0 BPM
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Heart Rate
                            </Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 11, flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 }}>
                        <Image
                            style={{ height: 40, width: 40, }}
                            source={require('../assets/icons/calories.png')}
                        />
                        <View>
                            <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                                0 kCal
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Calories
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TodayTarget

const styles = StyleSheet.create({})