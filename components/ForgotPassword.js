import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore, { firebase } from '@react-native-firebase/firestore';
import BottomNavBar from './BottomNavBar';
import Loading from './Loading';

const ForgotPassword = () => {

    const navigation = useNavigation();

    //activity loader
    const [visible, setVisible] = useState(false);

    //get input data 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //clear data
    const clearData = () => {
        setEmail(''), setPassword('')
    }

    //error
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    //show / hide password
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    //validarion & save
    const saveBtn = async () => {
        { !email ? setEmailError(true) : setEmailError(false) }
        { !password ? setPasswordError(true) : setPasswordError(false) }
        if (!email || !password) { return; }
        setVisible(true)
        //firebase
        try {
            // Check if email exists in Firebase Authentication (recommended for security)
            const user = await firebase.auth().fetchSignInMethodsForEmail(email);
        
            if (user.length === 0) {
              // Email not found in Authentication, handle as appropriate
              setVisible(false);
              Alert.alert('404 Not Found', 'Sorry! The email address is not associated with an existing account.', [
                { text: 'OK', onPress: () => { } },
              ]);
              return;
            }
        
            // If email exists, update password using a secure method (see below)
            const auth = firebase.auth();
            const credential = firebase.auth.EmailAuthProvider.credential(email, password);
        
            await auth.currentUser.reauthenticateWithCredential(credential);
            await auth.currentUser.updatePassword(password);
        
            setVisible(false);
            clearData();
            Alert.alert('Success!', 'Password updated successfully.', [
              { text: 'OK', onPress: () => navigation.navigate("Login") },
            ]);
          } catch (error) {
            setVisible(false);
            console.error('Error updating password:', error); // Log for debugging
            // Handle other potential errors (e.g., network issues, invalid password)
            Alert.alert('Error', 'An error occurred while updating the password. Please try again.', [
              { text: 'OK', onPress: () => { } },
            ]);
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
                        Forgot Password
                    </Text>
                </View>
                <TouchableOpacity
                    // onPress={getUserDataByUserId}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 26, height: 26, resizeMode: 'contain' }}
                        source={require('../assets/icons/refresh.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* body */}
            <View>
                {/* email input field */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 50 }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/EmainLogo.png')}
                    />
                    <TextInput
                        value={email}
                        onChangeText={txt => setEmail(txt)}
                        placeholder='Email'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                {emailError ? <Text style={styles.error}>Please enter email.</Text> : null}
                {/* password input field */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 10 }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/PasswordLogo.png')}
                    />
                    <TextInput
                        value={password}
                        onChangeText={txt => setPassword(txt)}
                        placeholder='Password'
                        placeholderTextColor='#ADA4A5'
                        secureTextEntry={!showPassword}
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                    <TouchableOpacity onPress={toggleShowPassword}>
                        <View>
                            {
                                showPassword ?
                                    <Image
                                        style={{ marginHorizontal: 10, width: 18, height: 18, opacity: 0.6 }}
                                        source={require('../assets/icons/ShowPassword.png')}
                                    />
                                    :
                                    <Image
                                        style={{ marginHorizontal: 10, width: 18, height: 18, opacity: 0.6 }}
                                        source={require('../assets/icons/HidePassword.png')}
                                    />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                {passwordError ? <Text style={styles.error}>Please enter password.</Text> : null}
                {/* save button */}
                <View style={{ marginHorizontal: 25, marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={saveBtn}
                        // onPress={() => navigation.navigate("Home")}
                        style={{ backgroundColor: '#92A3FD', paddingVertical: 14, borderRadius: 100 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <Image
                                source={require('../assets/icons/LoginButtonIcon.png')}
                            />
                            <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                                Save
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginLeft: 25,
        marginTop: 1,
        fontFamily: 'Poppins-Light'
    },
})