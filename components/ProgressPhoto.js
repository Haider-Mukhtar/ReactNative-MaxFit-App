import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Modal, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useTheme } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Loading from './Loading';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import uuid from 'react-native-uuid'
import BottomNavBar from './BottomNavBar';

const ProgressPhoto = () => {

    const navigation = useNavigation();

    //clear data
    const clearData = () => {
        setPhotoTitle('')
    }

    //activity loader
    const [visible, setVisible] = useState(false);
    const [show1, setShow1] = useState(false)

    // upload photo
    const [photoData, setPhotoData] = useState(null);
    const openCamera = async () => {
        const result = await launchCamera({ mediaType: 'photo' });
        setPhotoData(result)
        // console.log(result)
    }
    const pickFromGallery = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        setPhotoData(result)
        // console.log(result)
    }
    //uupload & get image to firebase
    const [photoTitle, setPhotoTitle] = useState('')
    const [photoTitleError, setPhotoTitleError] = useState('')
    const [photoDataError, setphotoDataError] = useState('')
    const [photoOwnerName, setPhotoOwnerName] = useState('')
    const [photoUrl, setPhotoUrl] = useState('');
    const uploadPhoto = async () => {
        //data validation
        { !photoTitle ? setPhotoTitleError(true) : setPhotoTitleError(false) }
        { !photoData ? setphotoDataError(true) : setphotoDataError(false) }
        if (!photoTitle, !photoData) { return; }
        setVisible(true)
        const photoId = uuid.v4()
        const reference = storage().ref(photoData.assets[0].fileName);
        const pathToFile = photoData.assets[0].uri;
        await reference.putFile(pathToFile);
        const url = await storage().ref(photoData.assets[0].fileName).getDownloadURL();
        //add it in firestore
        try {
            if (url !== '') {
                const userId = await AsyncStorage.getItem('USERID');
                const userData = await firestore().collection('users').doc(userId).get();
                if (userData.exists && userData.data().firstName && userData.data().lastName) {
                    const photoOwnerName = `${userData.data().firstName} ${userData.data().lastName}`;
                    setPhotoOwnerName(photoOwnerName);
                    firestore().collection('photos').doc(photoId).set({
                        photoId,
                        photo: url,
                        photoOwnerId: userId,
                        photoOwnerName,
                        photoTitle,
                    });
                } else {
                    console.warn('Failed to retrieve owner name. Uploading photo without name.');
                    firestore().collection('photos').doc(photoId).set({
                        photoId,
                        photo: url,
                        photoOwnerId: userId,
                        photoTitle,
                    });
                }
            }
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
        setPhotoData(null)
        clearData()
        setVisible(false)
        setShow1(false)
        Alert.alert("Upload User Profile Image", "Your profile image uploaded.",
            [{ text: "Ok", onPress: async () => { } },]);
    }

    //get photo data from firebase on the base of userId saved in Async Storage
    const [allPhoto, setAllPhoto] = useState('')
    useEffect(() => {
        getPhotos()
    }, [])
    const getPhotos = async () => {
        try {
            setVisible(true)
            let tempAllPhotosData = [];
            // const myEmail = await AsyncStorage.getItem('EMAIL');
            firestore().collection('photos').get()
                .then(
                    res => {
                        if (res.docs != []) {
                            res.docs.map(item => {
                                tempAllPhotosData.push(item.data())
                            })
                        }
                        setAllPhoto(tempAllPhotosData);
                        setVisible(false)
                        // console.log(allPhoto);
                        // console.log(JSON.stringify(res.docs[0].data()));
                    });
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
                        Progress Photos
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={getPhotos}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 26, height: 26, resizeMode: 'contain' }}
                        source={require('../assets/icons/refresh.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* body */}
            <View style={{ flex: 1 }}>
                {/* body */}
                <FlatList
                    data={allPhoto}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, marginHorizontal: 25, }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("PhotoDetails", { item: item })}
                                style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#d6deea', padding: 10, marginBottom: 10, borderRadius: 12, elevation: 5 }}>
                                <View>
                                    <Image
                                        style={{ height: 120, width: 120, borderRadius: 12, }}
                                        source={{ uri: item.photo }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                                        {item.photoTitle}
                                    </Text>
                                    <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-Medium", }}>
                                        From: {item.photoOwnerName}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
                {/* camera btn */}
                <TouchableOpacity
                    onPress={() => setShow1(true)}
                    style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C58BF2', borderRadius: 100, bottom: 100, right: 25, position: 'absolute', }}>
                    <Image
                        style={{ tintColor: '#fff' }}
                        source={require('../assets/icons/Camera.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* bottom nav bar */}
            <View style={{ position: 'absolute', bottom: 0, width: '100%', }}>
                <BottomNavBar />
            </View>
            {/* activity loader */}
            <Loading visible={visible} />
            {/* photo modal  */}
            <Modal transparent={true} visible={show1} animationType='slide'>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1 }}>
                    <View style={{ backgroundColor: '#fff', marginHorizontal: 30, marginVertical: 50, borderRadius: 20, elevation: 3, padding: 14, }}>
                        <Text style={{ color: '#1D1617', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                            Upload Photo
                        </Text>
                        {/* email input field */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, marginVertical: 10 }}>
                            <Image
                                style={{ marginHorizontal: 10 }}
                                source={require('../assets/icons/Achievement.png')}
                            />
                            <TextInput
                                value={photoTitle}
                                onChangeText={txt => setPhotoTitle(txt)}
                                placeholder='Photo Title'
                                placeholderTextColor='#ADA4A5'
                                style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 18, paddingRight: 10, flex: 1, borderRadius: 12, }}
                            />
                        </View>
                        {photoTitleError ? <Text style={styles.error}>Please enter photo title.</Text> : null}
                        {
                            photoData != null ?
                                <Image
                                    style={{ width: '100%', height: 200, resizeMode: 'center' }}
                                    source={{ uri: photoData.assets[0].uri }}
                                />
                                : null
                        }
                        <View style={{ marginTop: 10, }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#55efc4', padding: 12, borderRadius: 14, elevation: 2 }}
                                onPress={() => openCamera()}>
                                <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Open Camera</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#55efc4', padding: 12, borderRadius: 14, elevation: 2 }}
                                onPress={() => pickFromGallery()}>
                                <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Pick from Gallery</Text>
                            </TouchableOpacity>
                        </View>
                        {photoDataError ? <Text style={styles.error1}>Please upload photo.</Text> : null}
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10, }}>
                            <TouchableOpacity style={{ backgroundColor: '#fab1a0', flex: 1, padding: 12, borderRadius: 14, elevation: 2 }}
                                onPress={() => { setShow1(false), setPhotoData(null) }}>
                                <Text style={{ color: '#fff', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#92A3FD', flex: 1, padding: 12, borderRadius: 14, elevation: 2 }}
                                onPress={uploadPhoto}>
                                <Text style={{ color: '#fff', fontSize: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    )
}

export default ProgressPhoto

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginTop: 1,
        fontFamily: 'Poppins-Light'
    },
    error1: {
        color: 'red',
        textAlign: 'center',
        marginTop: 1,
        fontFamily: 'Poppins-Light'
    },
})