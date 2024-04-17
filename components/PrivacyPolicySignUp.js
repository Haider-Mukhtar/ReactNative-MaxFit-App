import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicySignUp = () => {

    const navigation = useNavigation();

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
                        Privacy Policy
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
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff', flex: 1, marginHorizontal: 25, marginBottom: 20, }}>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Medium', textAlign: 'justify', }}>
                    This Privacy Policy describes how Max Fit collects, uses, and discloses your information when you use our mobile application.
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Medium', textAlign: 'justify', }}>
                    We collect the following types of information:
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Bold', textAlign: 'justify', }}>
                    Personal Information
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Medium', textAlign: 'justify', }}>
                    When you create an account with Max Fit, you may provide us with certain personal information, such as your name, email address, and date of birth.
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Bold', textAlign: 'justify', }}>
                    Usage Data
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Medium', textAlign: 'justify', }}>
                    We may also collect information about how you use the App, such as the workouts you complete, your progress, and the features you access. This information may be collected automatically by the App or through third-party analytics tools.
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Bold', textAlign: 'justify', }}>
                    Sharing Your Information
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Medium', textAlign: 'justify', }}>
                    We may share your information with third-party vendors who help us operate the App, such as data storage providers and analytics providers. We will only share your information with these vendors to the extent necessary to provide the services.
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Bold', textAlign: 'justify', }}>
                    Security
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Medium', textAlign: 'justify', }}>
                    We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is 100% secure.
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Bold', textAlign: 'justify', }}>
                    Changes to This Privacy Policy
                </Text>
                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: 'Poppins-Medium', textAlign: 'justify', }}>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the App.
                </Text>
            </ScrollView>
        </View>
    )
}

export default PrivacyPolicySignUp

const styles = StyleSheet.create({})