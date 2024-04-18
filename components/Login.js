import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loading from './Loading';

const Login = () => {

  const navigation = useNavigation();

  //activity loader
  const [visible, setVisible] = useState(false);

  //show / hide password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //get input data 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //error
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //validarion & login
  const loginBtn = async () => {
    { !email ? setEmailError(true) : setEmailError(false) }
    { !password ? setPasswordError(true) : setPasswordError(false) }
    if (!email || !password) { return; }
    setVisible(true)
    //firebase
    firestore().collection('users').where('email', '==', email).get()
      .then(
        res => {
          // console.log(JSON.stringify(res.docs[0].data()));
          if (res.docs[0].data().password == password) {
            loginData(res.docs[0].data().name, res.docs[0].data().email, res.docs[0].data().userId);
          } else {
            setVisible(false)
            Alert.alert('Login Fail', 'Password not match with entered Email. Try Again', [
              { text: 'OK', onPress: () => { } },
            ]);
          }
        })
      .catch(err => {
        setVisible(false)
        Alert.alert('404 Not Found', 'Sorry! User not found. Try Again', [
          { text: 'OK', onPress: () => { } },
        ]);
      })
  }
  //save login data in Async storage
  const loginData = async (name, email, userId) => {
    await AsyncStorage.setItem('USERID', userId);
    setVisible(false)
    setEmail('')
    setPassword('')
    navigation.navigate("Home")
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
            onPress={loginBtn}
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
      {/* activity loader */}
      <Loading visible={visible} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 25,
    marginTop: 1,
    fontFamily: 'Poppins-Light'
  },
})