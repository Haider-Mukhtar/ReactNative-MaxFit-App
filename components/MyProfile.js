import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import BottomNavBar from './BottomNavBar';
import Loading from './Loading';

const MyProfile = () => {

    const navigation = useNavigation();

    //activity loader
    const [visible, setVisible] = useState(false);

    //get user data from firebase on the base of userId saved in Async Storage
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
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
                    onPress={() => navigation.navigate("Home")}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/ArrowLeft.png')}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                        Profile
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/Dots3.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#fff', }}>
                {/* profile */}
                <View style={{ marginHorizontal: 25, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image
                            source={require('../assets/images/UserProfilePic.png')}
                        />
                    </View>
                    <View style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                                {userFirstName} {userLastName}
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Lose a Fat Program
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{ backgroundColor: '#92A3FD', paddingHorizontal: 30, paddingVertical: 6, borderRadius: 100, }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* height, weight, age */}
                <View style={{ flexDirection: 'row', marginHorizontal: 25, gap: 15, marginTop: 20, }}>
                    <View style={{ backgroundColor: '#fff', flex: 1, paddingVertical: 10, borderRadius: 16, elevation: 5, }}>
                        <Text style={{ color: '#92A3FD', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>
                            {userWeight} KG
                        </Text>
                        <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                            Weight
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', flex: 1, paddingVertical: 10, borderRadius: 16, elevation: 5, }}>
                        <Text style={{ color: '#92A3FD', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>
                            {userHeight} CM
                        </Text>
                        <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                            Height
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', flex: 1, paddingVertical: 10, borderRadius: 16, elevation: 5, }}>
                        <Text style={{ color: '#92A3FD', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>
                            {userDOB}
                        </Text>
                        <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                            DOB
                        </Text>
                    </View>
                </View>
                {/* account options */}
                <View style={{ backgroundColor: '#fff', marginHorizontal: 25, elevation: 5, borderRadius: 16, marginTop: 25 }}>
                    <View style={{ padding: 20, gap: 14 }}>
                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-Bold", }}>
                            Accounts
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("PersonalData")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                <Image
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    source={require('../assets/icons/PersonalData.png')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                        Personal Data
                                    </Text>
                                    <Image
                                        style={{ tintColor: '#7B6F72' }}
                                        source={require('../assets/icons/ArrowRight.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Achievement")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                <Image
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    source={require('../assets/icons/Achievement.png')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                        Achievement
                                    </Text>
                                    <Image
                                        style={{ tintColor: '#7B6F72' }}
                                        source={require('../assets/icons/ArrowRight.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ProgressPhoto")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                <Image
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    source={require('../assets/icons/ActivityHistory.png')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                        Activity History
                                    </Text>
                                    <Image
                                        style={{ tintColor: '#7B6F72' }}
                                        source={require('../assets/icons/ArrowRight.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Workout")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                <Image
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    source={require('../assets/icons/WorkoutProgress.png')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                        Workout Progress
                                    </Text>
                                    <Image
                                        style={{ tintColor: '#7B6F72' }}
                                        source={require('../assets/icons/ArrowRight.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* other */}
                <View style={{ backgroundColor: '#fff', marginHorizontal: 25, elevation: 5, borderRadius: 16, marginTop: 25, marginBottom: 110 }}>
                    <View style={{ padding: 20, gap: 14 }}>
                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-Bold", }}>
                            Other
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ContactUs")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                <Image
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    source={require('../assets/icons/ContactUs.png')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                        Contact Us
                                    </Text>
                                    <Image
                                        style={{ tintColor: '#7B6F72' }}
                                        source={require('../assets/icons/ArrowRight.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("PrivacyPolicy")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                <Image
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    source={require('../assets/icons/PrivacyPolicy.png')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                        Privacy Policy
                                    </Text>
                                    <Image
                                        style={{ tintColor: '#7B6F72' }}
                                        source={require('../assets/icons/ArrowRight.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Setting")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                <Image
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    source={require('../assets/icons/Setting.png')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                        Settings
                                    </Text>
                                    <Image
                                        style={{ tintColor: '#7B6F72' }}
                                        source={require('../assets/icons/ArrowRight.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* bottom nav bar */}
            <View style={{ position: 'absolute', bottom: 0, width: '100%', }}>
                <BottomNavBar />
            </View>
            {/* activity loader */}
            <Loading visible={visible} />
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({})