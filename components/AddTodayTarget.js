import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loading from './Loading';

const AddTodayTarget = () => {

    const navigation = useNavigation();

    //activity loader
    const [visible, setVisible] = useState(false);

    //get data from user
    const [waterIntake, setWaterIntake] = useState('')
    const [footSteps, setFootSteps] = useState('')
    const [heartRate, setHeartRate] = useState('')
    const [calories, setCalories] = useState('')
    const [sleep, setSleep] = useState('')

    //clear data
    const clearData = () => {
        setWaterIntake(''), setFootSteps(''), setHeartRate(''), setCalories(''), setSleep('')
    }

    //add to firebase db
    const addBtn = async () => {
        setVisible(true)
        const userId = await AsyncStorage.getItem('USERID')
        firestore().collection('users').doc(userId).update({
            waterIntake: waterIntake,
            footSteps: footSteps,
            heartRate: heartRate,
            calories: calories,
            sleep: sleep,
        })
            .then(
                res => {
                    setVisible(false)
                    clearData()
                    Alert.alert('Add Target', 'Target added successfully.', [
                        { text: 'OK', onPress: () => { } },
                    ]);
                }
            )
            .catch(err => {
                alert(err)
            });
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
                        Add Today Target
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
            <View>
                {/* water Intake */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 50 }}>
                    <Image
                        style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                        source={require('../assets/icons/glass.png')}
                    />
                    <TextInput
                        value={waterIntake}
                        onChangeText={txt => setWaterIntake(txt)}
                        maxLength={1}
                        keyboardType='number-pad'
                        placeholder='Water Intake'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {/* foot steps */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 20 }}>
                    <Image
                        style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                        source={require('../assets/icons/steps.png')}
                    />
                    <TextInput
                        value={footSteps}
                        onChangeText={txt => setFootSteps(txt)}
                        maxLength={5}
                        keyboardType='number-pad'
                        placeholder='Foot Steps'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {/* heart Rate */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 20 }}>
                    <Image
                        style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                        source={require('../assets/icons/heartrate.png')}
                    />
                    <TextInput
                        value={heartRate}
                        onChangeText={txt => setHeartRate(txt)}
                        maxLength={3}
                        keyboardType='number-pad'
                        placeholder='Heart Rate'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {/* Calories */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 20 }}>
                    <Image
                        style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                        source={require('../assets/icons/calories.png')}
                    />
                    <TextInput
                        value={calories}
                        onChangeText={txt => setCalories(txt)}
                        maxLength={2}
                        keyboardType='number-pad'
                        placeholder='Calories'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {/* Sleep */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 20 }}>
                    <Image
                        style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                        source={require('../assets/icons/sleep.png')}
                    />
                    <TextInput
                        value={sleep}
                        onChangeText={txt => setSleep(txt)}
                        maxLength={2}
                        keyboardType='number-pad'
                        placeholder='Sleep'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {/*   add btn */}
                <View style={{ marginHorizontal: 25, marginTop: 20, }}>
                    <TouchableOpacity
                        onPress={addBtn}
                        style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                                Add Target
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/*   go back btn */}
                <View style={{ marginHorizontal: 25, marginTop: 20, }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("TodayTarget")}
                        style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                                Go Back
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* activity loader */}
            <Loading visible={visible} />
        </View>
    )
}

export default AddTodayTarget

const styles = StyleSheet.create({})