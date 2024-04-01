import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {

    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 20, borderTopColor: '#ADA4A5', borderTopWidth: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, backgroundColor: '#fff', }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={{ paddingVertical: 25, }}>
                    <Image
                        source={require('../assets/icons/Home.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Workout")}
                    style={{ paddingVertical: 25, }}>
                    <Image
                        source={require('../assets/icons/Activity.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#92A3FD', borderRadius: 100, padding: 20, alignSelf: 'center', marginTop: -50 }}>
                    <Image
                        source={require('../assets/icons/Search.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingVertical: 25, }}>
                    <Image
                        source={require('../assets/icons/Camera.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("MyProfile")}
                    style={{ paddingVertical: 25, }}>
                    <Image
                        source={require('../assets/icons/Profile.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default BottomNavBar

const styles = StyleSheet.create({})