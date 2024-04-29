import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import BottomNavBar from './BottomNavBar';
import Loading from './Loading';

const PhotoDetails = ({ route }) => {

    const navigation = useNavigation();
    const { item } = route.params;
    // console.log(item.photoTitle)
    // console.log(item.photoOwnerId)

    //activity loader
    const [visible, setVisible] = useState(false);

    //get user data from firebase on the base of userId saved in Async Storage
    const [userWeight, setUserWeight] = useState('');
    const [userHeight, setUserHeight] = useState('');
    const [userDOB, setUserDOB] = useState('');
    const [profileImage, setProfileImage] = useState('')
    useEffect(() => {
        getUserDataByUserId()
    }, [])
    const getUserDataByUserId = async () => {
        try {
            setVisible(true)
            const userData = await firestore().collection('users').doc(item.photoOwnerId).get();
            // console.log(userData._data.firstName)
            // console.log(userData._data.weight)
            setUserWeight(userData._data.weight)
            setUserHeight(userData._data.height)
            setUserDOB(userData._data.dateOfBirth)
            setProfileImage(userData._data.profileImage)
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
                        Photo Details
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={getUserDataByUserId}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 26, height: 26, resizeMode: 'contain' }}
                        source={require('../assets/icons/refresh.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* body */}
            <View style={{ marginHorizontal: 25, }}>
                <View style={{ backgroundColor: '#d6deea', borderRadius: 12 }}>
                    <Image
                        style={{ resizeMode: 'contain', height: 300, width: '100%', }}
                        source={{ uri: item.photo }}
                    />
                </View>
                <View style={{ marginTop: 10, backgroundColor: '#d6deea', padding: 10, borderRadius: 12, }}>
                    <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", }}>
                        Title:
                    </Text>
                    <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-SemiBold", }}>
                        {item.photoTitle}
                    </Text>
                </View>
                <View style={{ marginTop: 10, backgroundColor: '#d6deea', padding: 10, borderRadius: 12, }}>
                    <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", }}>
                        Owner Details:
                    </Text>
                    {/* profile */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            {
                                profileImage == '' ?
                                    <Image
                                        style={{ height: 70, width: 70, borderRadius: 50, }}
                                        source={require('../assets/images/UserProfilePic.png')}
                                    />
                                    :
                                    <Image
                                        style={{ height: 70, width: 70, borderRadius: 50, }}
                                        source={{ uri: profileImage }}
                                    />
                            }
                        </View>
                        <View style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                            <View>
                                <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-SemiBold", }}>
                                    {item.photoOwnerName}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* height, weight, age */}
                    <View style={{ flexDirection: 'row', gap: 15, marginTop: 10, }}>
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
                            <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>
                                {userDOB}
                            </Text>
                            <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                                DOB
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

export default PhotoDetails

const styles = StyleSheet.create({})