import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Alert, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Loading from './Loading';

const EditProfile = () => {

    const navigation = useNavigation();

    //activity loader
    const [visible, setVisible] = useState(false);
    const [show1, setShow1] = useState(false)

    //DOF picker
    const [dateOfBirth, setDateOfBirth] = useState('Date of Birth');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        // console.log(x1[2] + '/' + x1[1] + '/' + x1[0])
        setDateOfBirth(x1[2] + '/' + x1[1] + '/' + x1[0])
        setDOB(x1[2] + '/' + x1[1] + '/' + x1[0])
        hideDatePicker();
    };

    //get data from user
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dOB, setDOB] = useState('')
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    //clear data
    const clearData = () => {
        setFirstName(''), setLastName(''), setDOB(''), setHeight(''), setWeight('')
    }

    // save Edit Btn
    const saveEditBtn = async () => {
        try {
            setVisible(true)
            const userId = await AsyncStorage.getItem('USERID')
            if (firstName != '') {
                firestore().collection('users').doc(userId).update({
                    firstName: firstName,
                })
            }
            if (lastName != '') {
                firestore().collection('users').doc(userId).update({
                    lastName: lastName,
                })
            }
            if (dOB != '') {
                firestore().collection('users').doc(userId).update({
                    dateOfBirth: dOB,
                })
            }
            if (weight != '') {
                firestore().collection('users').doc(userId).update({
                    weight: weight,
                })
            }
            if (height != '') {
                firestore().collection('users').doc(userId).update({
                    height: height,
                })
            }
            setVisible(false)
            clearData()
            Alert.alert("Update User Profile", "Your profile updated.",
                [{ text: "Ok", onPress: async () => { } },]);
        } catch (error) {
            console.log(error)
        }
    }

    //profile image
    const [profileImageData, setProfileImageData] = useState(null);
    const openCamera = async () => {
        const result = await launchCamera({ mediaType: 'photo' });
        setProfileImageData(result)
        // console.log(result)
    }
    const pickFromGallery = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        setProfileImageData(result)
        // console.log(result)
    }
    //uupload & get image to firebase
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const uploadProfileImage = async () => {
        setVisible(true)
        const reference = storage().ref(profileImageData.assets[0].fileName);
        const pathToFile = profileImageData.assets[0].uri;
        await reference.putFile(pathToFile);
        const url = await storage().ref(profileImageData.assets[0].fileName).getDownloadURL();
        //add it in firestore
        try {
            const userId = await AsyncStorage.getItem('USERID')
            if (url != '') {
                firestore().collection('users').doc(userId).update({
                    profileImage: url,
                })
            }
        } catch (error) {
            console.log(error)
        }
        setProfileImageData(null)
        setVisible(false)
        setShow1(false)
        Alert.alert("Upload User Profile Image", "Your profile image uploaded.",
            [{ text: "Ok", onPress: async () => { } },]);
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
                        Edit Profile
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
                {/* dp  */}
                <View style={{ marginHorizontal: 25, marginTop: 30, }}>
                    <TouchableOpacity
                        onPress={() => setShow1(true)}
                        style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                                Upload Profile Image
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* First Name */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 30 }}>
                    <Image
                        style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                        source={require('../assets/icons/ProfileLogo.png')}
                    />
                    <TextInput
                        value={firstName}
                        onChangeText={txt => setFirstName(txt)}
                        placeholder='First Name'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {/* lasst Name */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 10 }}>
                    <Image
                        style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain', width: 25, height: 25, resizeMode: 'contain' }}
                        source={require('../assets/icons/ProfileLogo.png')}
                    />
                    <TextInput
                        value={lastName}
                        onChangeText={txt => setLastName(txt)}
                        placeholder='Last Name'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {/* DOB selection */}
                <View style={{ marginHorizontal: 25, marginTop: 10, }}>
                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, paddingVertical: 14, }}>
                        <Image
                            style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                            source={require('../assets/icons/DOBLogo.png')}
                        />
                        <View
                            style={{ flex: 1, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 12, }}>
                                <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                                    {dateOfBirth}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/*  Weight selection */}
                <View style={{ marginHorizontal: 25, marginTop: 10, flexDirection: 'row', gap: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, flex: 1 }}>
                        <Image
                            style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                            source={require('../assets/icons/WeightLogo.png')}
                        />
                        <TextInput
                            value={weight}
                            onChangeText={txt => setWeight(txt)}
                            keyboardType='numeric'
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
                            style={{ marginHorizontal: 10, width: 25, height: 25, resizeMode: 'contain' }}
                            source={require('../assets/icons/HeightLogo.png')}
                        />
                        <TextInput
                            value={height}
                            onChangeText={txt => setHeight(txt)}
                            keyboardType='numeric'
                            placeholder='Height'
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
                {/*   save edit btn */}
                <View style={{ marginHorizontal: 25, marginTop: 20, }}>
                    <TouchableOpacity
                        onPress={saveEditBtn}
                        style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                                Save Edit
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* activity loader */}
            <Loading visible={visible} />
            {/*   DOB Modal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            {/* dp modal  */}
            <Modal transparent={true} visible={show1} animationType='slide'>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1 }}>
                    <View style={{ backgroundColor: '#fff', marginHorizontal: 30, marginVertical: 50, borderRadius: 20, elevation: 3, padding: 14, }}>
                        <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                            Profile Image
                        </Text>
                        {
                            profileImageData != null ?
                                <Image
                                    style={{ width: '100%', height: 200, resizeMode: 'center' }}
                                    source={{ uri: profileImageData.assets[0].uri }}
                                />
                                : null
                        }
                        <View style={{ marginTop: 10, }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#55efc4', padding: 16, borderRadius: 14, elevation: 2 }}
                                onPress={() => openCamera()}>
                                <Text style={{  color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center'  }}>Open Camera</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#55efc4', padding: 16, borderRadius: 14, elevation: 2 }}
                                onPress={() => pickFromGallery()}>
                                <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center'  }}>Pick from Gallery</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10, }}>
                            <TouchableOpacity style={{ backgroundColor: '#fab1a0', flex: 1, padding: 16, borderRadius: 14, elevation: 2 }}
                                onPress={() => { setShow1(false), setProfileImageData(null) }}>
                                <Text style={{  color: '#fff', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center'  }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#92A3FD', flex: 1, padding: 16, borderRadius: 14, elevation: 2 }}
                                onPress={uploadProfileImage}>
                                <Text style={{  color: '#fff', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({})