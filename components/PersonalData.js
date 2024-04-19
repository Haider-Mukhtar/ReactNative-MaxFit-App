import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loading from './Loading';

const PersonalData = () => {

    const navigation = useNavigation();

    //activity loader
    const [visible, setVisible] = useState(false);

    //get user data from firebase on the base of userId saved in Async Storage
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [userWeight, setUserWeight] = useState('');
    const [userHeight, setUserHeight] = useState('');
    const [userDOB, setUserDOB] = useState('');
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
            // console.log(userData._data.weight)
            setUserFirstName(userData._data.firstName)
            setUserLastName(userData._data.lastName)
            setUserWeight(userData._data.weight)
            setUserHeight(userData._data.height)
            setUserDOB(userData._data.dateOfBirth)
            setUserEmail(userData._data.email)
            setUserId(userData._data.userId)
            setVisible(false)
        } catch (error) {
            console.log(error)
        }
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
                        Personal Data
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
            <View style={{ marginHorizontal: 25, }}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-SemiBold", }}>
                        First Name:
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        {userFirstName}
                    </Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-SemiBold", }}>
                        Last Name:
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        {userLastName}
                    </Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-SemiBold", }}>
                        Email:
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        {userEmail}
                    </Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-SemiBold", }}>
                        ID:
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        {userId}
                    </Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-SemiBold", }}>
                        Weight:
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        {userWeight}
                    </Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-SemiBold", }}>
                        Height:
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        {userHeight}
                    </Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-SemiBold", }}>
                        DOB:
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        {userDOB}
                    </Text>
                </View>
            </View>
            {/* activity loader */}
            <Loading visible={visible} />
        </View>
    )
}

export default PersonalData

const styles = StyleSheet.create({})