import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
          Hey there,
        </Text>
        <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
          Welcome Back
        </Text>
      </View>
      {/* email input field */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', marginHorizontal: 25, borderRadius: 12, marginTop: 50 }}>
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
          secureTextEntry
          style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
        />
        <TouchableOpacity>
          <Image
            style={{ marginHorizontal: 10, width: 18, height: 18, opacity: 0.6 }}
            source={require('../assets/icons/HidePassword.png')}
          />
        </TouchableOpacity>
      </View>
      {/* forgot password */}
      <View style={{ marginTop: 16 }}>
        <TouchableOpacity>
          <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 36, fontFamily: "Poppins-Medium", textAlign: 'center', textDecorationLine: 'underline' }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
      {/* login btn , facebook / google btns , signup */}
      <View style={{ flex: 1, justifyContent: 'flex-end', }}>
        {/* login button */}
        <View style={{ marginHorizontal: 25 }}>
          <TouchableOpacity
            style={{ backgroundColor: '#92A3FD', paddingVertical: 14, borderRadius: 100 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <Image
                source={require('../assets/icons/LoginButtonIcon.png')}
              />
              <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                Login
              </Text>
            </View>
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
        {/* Don't have an account yet? */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 30, gap: 8 }}>
          <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: "Poppins-Medium", }}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: '#C58BF2', fontSize: 16, fontFamily: "Poppins-Medium", }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})