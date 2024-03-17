import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoseFat = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* header */}
            <View style={{ marginTop: 50 }}>
                <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                    What is your goal ?
                </Text>
                <Text style={{ color: '#7B6F72', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", textAlign: 'center', marginHorizontal: 60, }}>
                    It will help us to choose a best program for you
                </Text>
            </View>
            {/* image */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <Image
                    style={{}}
                    source={require('../assets/images/LoseFat.png')}
                />
            </View>
            {/*   Confirm btn */}
            <View style={{ marginHorizontal: 25, marginVertical: 30, }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SuccessSignup")}
                    style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                        <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                            Confirm
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoseFat

const styles = StyleSheet.create({})