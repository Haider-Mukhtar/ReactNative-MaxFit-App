import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loading from './Loading';

const TodayTarget = () => {

    const navigation = useNavigation();

    //activity loader
    const [visible, setVisible] = useState(false);

    //get user data from firebase on the base of userId saved in Async Storage
    const [waterIntake, setWaterIntake] = useState('0')
    const [footSteps, setFootSteps] = useState('0')
    const [heartRate, setHeartRate] = useState('0')
    const [calories, setCalories] = useState('0')
    const [sleep, setSleep] = useState('0')
    useEffect(() => {
        getUserDataByUserId()
    }, [])
    const getUserDataByUserId = async () => {
        try {
            setVisible(true)
            const myId = await AsyncStorage.getItem('USERID')
            // console.log(myId)
            const userData = await firestore().collection('users').doc(myId).get();
            // console.log(userData._data.firstName)
            setWaterIntake(userData._data.waterIntake)
            setFootSteps(userData._data.footSteps)
            setHeartRate(userData._data.heartRate)
            setCalories(userData._data.calories)
            setSleep(userData._data.sleep)
            setVisible(false)
        } catch (error) {
            console.log(error)
        }
    }

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
                    onPress={getUserDataByUserId}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center', }}>
                    <Image
                        style={{ width: 26, height: 26, resizeMode: 'contain' }}
                        source={require('../assets/icons/refresh.png')}
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
                        onPress={() => navigation.navigate("AddTodayTarget")}
                        style={{ backgroundColor: '#92A3FD', padding: 10, borderRadius: 11, }}>
                        <Image
                            style={{ width: 20, height: 20, }}
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
                                {waterIntake}L
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
                                {footSteps}
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
                                {heartRate} BPM
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
                                {calories} kCal
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Calories
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 14, gap: 10, }}>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 11, flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 }}>
                        <Image
                            style={{ height: 40, width: 40, }}
                            source={require('../assets/icons/sleep.png')}
                        />
                        <View>
                            <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                                {sleep} h
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Sleep
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* activity loader */}
            <Loading visible={visible} />
        </View>
    )
}

export default TodayTarget

const styles = StyleSheet.create({})