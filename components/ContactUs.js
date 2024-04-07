import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import call from 'react-native-phone-call'
import { openComposer } from "react-native-email-link";

const ContactUs = () => {

    const navigation = useNavigation();

    //onPress phone btn
    const phoneCallBtn = () => {
        const args = {
            number: '+92 301 1234567',
            prompt: false,
            skipCanOpen: true
        }
        call(args).catch(console.error)
    }
    //onPress email btn
    const emailBtn = () => {
        openComposer({
            to: "customersupport@maxfit.com",
            cc: "maxfit@gmail.com",
            subject: "MaxFit: I have a question.",
            body: "Assalam-O-Alaikum...",
        });
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
                        Contact Us
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/Dots3.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* logo */}
            <View style={{ justifyContent:'center', alignItems:'center', marginTop:10,}}>
                <Image 
                    style={{width:210, height:200}}
                    source={require('../assets/mainAssets/MaxFitLogo.png')}
                />
            </View>
            {/* body */}
            <View style={{ marginHorizontal: 25 }}>
                <View style={{ alignItems: 'center', marginTop: 20, }}>
                    <Text style={{ color: '#1D1617', fontSize: 30, marginVertical: 10, fontFamily: 'Poppins-SemiBold' }}>
                        Get in Touch
                    </Text>
                    <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: 'Poppins-Medium' }}>
                        If you have any inquiries get in touch with us. {"\n"}
                        We'll be happy to help you.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={{ borderRadius: 16, marginTop: 20, alignItems: 'center', backgroundColor: '#92A3FD', elevation: 5, shadowColor: '#92A3FD', shadowRadius: 5, }}
                        onPress={phoneCallBtn}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20, alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins-SemiBold' }}>
                                +92 301 1234567
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 16, marginTop: 20, alignItems: 'center', backgroundColor: '#92A3FD', elevation: 5, shadowColor: '#92A3FD', shadowRadius: 5, }}
                        onPress={emailBtn}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20, alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins-SemiBold' }}>
                                customersupport@maxfit.com
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({})