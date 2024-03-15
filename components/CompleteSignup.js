import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const CompleteSignup = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* header image */}
            <View style={{}}>
                <Image
                    style={{ alignSelf: 'center' }}
                    source={require('../assets/images/CompleteSignupImage.png')}
                />
            </View>
            {/* header */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                    Let's complete your profile
                </Text>
                <Text style={{ color: '#7B6F72', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                    It will help us to know more about you!
                </Text>
            </View>
            
        </View>
    )
}

export default CompleteSignup

const styles = StyleSheet.create({})