import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loading from './Loading';
import BottomNavBar from './BottomNavBar';

const ProgressPhoto = () => {
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
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/Dots3.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* body */}
            <View style={{ flex: 1 }}>
                {/* camera btn */}
                <TouchableOpacity
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
        </View>
    )
}

export default ProgressPhoto

const styles = StyleSheet.create({})