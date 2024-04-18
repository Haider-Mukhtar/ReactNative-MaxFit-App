import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import firestore from '@react-native-firebase/firestore';
import Loading from './Loading';

const CompleteSignup = ({ route }) => {

    const navigation = useNavigation();

    //activity loader
    const [visible, setVisible] = useState(false);

    //user id
    const { userId } = route.params;
    // console.log(userId)

    //get data from user
    const [selectedGender, setSelectedGender] = useState(null);
    const [dOB, setDOB] = useState('')
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    //clear data
    const clearData = () => {
        setSelectedGender(''), setDOB(''), setWeight(''), setHeight('')
    }

    //data validation errors
    const [selectedGenderError, setSelectedGenderError] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState(false);
    const [weightError, setWeightError] = useState(false);
    const [heightError, setHeightError] = useState(false);

    //data validation & move to next page
    const nextBtn = async () => {
        //data validation
        { !selectedGender ? setSelectedGenderError(true) : setSelectedGenderError(false) }
        { !dOB ? setDateOfBirthError(true) : setDateOfBirthError(false) }
        { !weight ? setWeightError(true) : setWeightError(false) }
        { !height ? setHeightError(true) : setHeightError(false) }
        if (!selectedGender || !dateOfBirth || !weight || !height) { return; }
        //move to next page 
        // navigation.navigate("ImproveShape")
        setVisible(true)
        firestore().collection('users').doc(userId).update({
            gender: selectedGender,
            dateOfBirth: dOB,
            weight: weight,
            height: height,
        })
            .then(
                res => {
                    setVisible(false)
                    clearData()
                    Alert.alert('User Info.', 'User information added successfully.', [
                        { text: 'OK', onPress: () => navigation.navigate("ImproveShape", { userId }) },
                    ]);
                }
            )
            .catch(err => {
                alert(err)
            });
    }

    //gender selection
    const handleGenderPress = (gender) => {
        setSelectedGender(gender);
    };
    // console.log(selectedGender)

    //DOF picker
    const [dateOfBirth, setDateOfBirth] = useState('Date of Birth');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        // console.log(x1[2] + '/' + x1[1] + '/' + x1[0])
        setDateOfBirth(x1[2] + '/' + x1[1] + '/' + x1[0])
        setDOB(x1[2] + '/' + x1[1] + '/' + x1[0])
        hideDatePicker();
    };

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
            <View style={{ marginTop: 30 }}>
                <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                    Let's complete your profile
                </Text>
                <Text style={{ color: '#7B6F72', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                    It will help us to know more about you!
                </Text>
            </View>

            {/* gender selection */}
            <View style={{ marginHorizontal: 25, marginTop: 30, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20, }}>
                    <TouchableOpacity
                        onPress={() => handleGenderPress('Male')}
                        style={{ backgroundColor: selectedGender === 'Male' ? '#C58BF2' : '#F7F8F8', justifyContent: 'center', alignItems: 'center', paddingVertical: 14, borderRadius: 12, flex: 1 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={{ marginHorizontal: 10, tintColor: selectedGender === 'Male' ? '#fff' : '#7B6F72' }}
                                source={require('../assets/icons/2User.png')}
                            />
                            <Text style={{ color: selectedGender === 'Male' ? '#fff' : '#ADA4A5', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                                Male
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleGenderPress('Female')}
                        style={{ backgroundColor: selectedGender === 'Female' ? '#C58BF2' : '#F7F8F8', justifyContent: 'center', alignItems: 'center', paddingVertical: 14, borderRadius: 12, flex: 1 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={{ marginHorizontal: 10, tintColor: selectedGender === 'Female' ? '#fff' : '#7B6F72' }}
                                source={require('../assets/icons/2User.png')}
                            />
                            <Text style={{ color: selectedGender === 'Female' ? '#fff' : '#ADA4A5', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                                Female
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {selectedGenderError ? <Text style={styles.error}>Please select your gender.</Text> : null}
            {/* DOB selection */}
            <View style={{ marginHorizontal: 25, marginTop: 10, }}>
                <TouchableOpacity
                    onPress={showDatePicker}
                    style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, paddingVertical: 14, }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/DOBLogo.png')}
                    />
                    <View
                        style={{ flex: 1, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 12, }}>
                            <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                                {dateOfBirth}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            {dateOfBirthError ? <Text style={styles.error}>Please select your date of birth.</Text> : null}
            {/*  Weight selection */}
            <View style={{ marginHorizontal: 25, marginTop: 10, flexDirection: 'row', gap: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, flex: 1 }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/WeightLogo.png')}
                    />
                    <TextInput
                        value={weight}
                        onChangeText={txt => setWeight(txt)}
                        keyboardType='numeric'
                        placeholder='Your Weight'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                <View style={{ backgroundColor: '#C58BF2', alignSelf: 'flex-end', padding: 14, borderRadius: 12, }}>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        KG
                    </Text>
                </View>
            </View>
            {weightError ? <Text style={styles.error}>Please enter your weight.</Text> : null}
            {/*   Height selection */}
            <View style={{ marginHorizontal: 25, marginTop: 10, flexDirection: 'row', gap: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, flex: 1 }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/HeightLogo.png')}
                    />
                    <TextInput
                        value={height}
                        onChangeText={txt => setHeight(txt)}
                        keyboardType='numeric'
                        placeholder='Your Height'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingRight: 10, flex: 1, borderRadius: 12, }}
                    />
                </View>
                <View style={{ backgroundColor: '#C58BF2', alignSelf: 'flex-end', paddingVertical: 14, borderRadius: 12, paddingHorizontal: 12, }}>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
                        CM
                    </Text>
                </View>
            </View>
            {heightError ? <Text style={styles.error}>Please enter your height.</Text> : null}
            {/*   Next btn */}
            <View style={{ marginHorizontal: 25, marginTop: 10, }}>
                <TouchableOpacity
                    onPress={nextBtn}
                    style={{ backgroundColor: '#92A3FD', paddingVertical: 16, borderRadius: 100 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                        <Text style={{ color: '#fff', fontSize: 20, lineHeight: 24, fontFamily: "Poppins-Bold", }}>
                            Next
                        </Text>
                        <Image
                            source={require('../assets/icons/ArrowRight.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            {/*   DOB Modal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            {/* activity loader */}
            <Loading visible={visible} />
        </View>
    )
}

export default CompleteSignup

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginLeft: 25,
        marginTop: 1,
        fontFamily: 'Poppins-Light'
    },
})