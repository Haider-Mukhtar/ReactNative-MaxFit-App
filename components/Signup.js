import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const Signup = () => {

    const navigation = useNavigation();

    //show / hide password
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* header */}
            <View style={{ marginTop: 50 }}>
                <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                    Hey there,
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                    Create an Account
                </Text>
            </View>
            {/* First Name input field */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 50 }}>
                <Image
                    style={{ marginHorizontal: 10 }}
                    source={require('../assets/icons/ProfileLogo.png')}
                />
                <TextInput
                    placeholder='First Name'
                    placeholderTextColor='#ADA4A5'
                    style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                />
            </View>
            {/* Last Name input field */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 10 }}>
                <Image
                    style={{ marginHorizontal: 10 }}
                    source={require('../assets/icons/ProfileLogo.png')}
                />
                <TextInput
                    placeholder='Last Name'
                    placeholderTextColor='#ADA4A5'
                    style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                />
            </View>
            {/* Email input field */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 10 }}>
                <Image
                    style={{ marginHorizontal: 10 }}
                    source={require('../assets/icons/EmainLogo.png')}
                />
                <TextInput
                    placeholder='Email'
                    placeholderTextColor='#ADA4A5'
                    style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                />
            </View>
            {/* password input field */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 10 }}>
                <Image
                    style={{ marginHorizontal: 10 }}
                    source={require('../assets/icons/PasswordLogo.png')}
                />
                <TextInput
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
            {/* forgot password */}
            <View style={{ marginTop: 16, flexDirection: 'row', gap: 8, marginHorizontal: 25 }}>
                <TouchableOpacity
                    style={{ width: 18, height: 18, marginTop: 5, borderWidth: 1, borderColor: '#ADA4A5', borderRadius: 4, }}>

                </TouchableOpacity>
                <View>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 36, fontFamily: "Poppins-Medium", }}>
                            By continuing you accept our
                        </Text>
                        <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 36, fontFamily: "Poppins-Medium", textDecorationLine: 'underline' }}>
                            Privacy Policy
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 36, fontFamily: "Poppins-Medium", }}>
                            and
                        </Text>
                        <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 36, fontFamily: "Poppins-Medium", textDecorationLine: 'underline' }}>
                            Term of Use
                        </Text>
                    </View>
                </View>
            </View>
            {/* Register btn , facebook / google btns , login */}
            <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                {/* Register button */}
                <View style={{ marginHorizontal: 25 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => navigation.navigate("CompleteSignup")}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* or */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 25, marginVertical: 40, }}>
                    <View style={{ flex: 1, height: 2, backgroundColor: '#DDDADA' }} />
                    <Text style={{ marginHorizontal: 10, color: '#1D1617', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                        OR
                    </Text>
                    <View style={{ flex: 1, height: 2, backgroundColor: '#DDDADA' }} />
                </View>
                {/* facebook , google btns */}
                <View style={{ flexDirection: 'row', gap: 40, justifyContent: 'center', }}>
                    <TouchableOpacity
                        style={{ width: 50, height: 50, borderRadius: 12, borderWidth: 1, borderColor: '#DDDADA', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Image
                            style={{}}
                            source={require("../assets/icons/GoogleLogo.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 50, height: 50, borderRadius: 12, borderWidth: 1, borderColor: '#DDDADA', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Image
                            style={{}}
                            source={require("../assets/icons/FacebookLogo.png")}
                        />
                    </TouchableOpacity>
                </View>
                {/* Already have an account? */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 30, gap: 8 }}>
                    <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Onboarding")}
                    >
                        <Text style={{ color: '#C58BF2', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({})