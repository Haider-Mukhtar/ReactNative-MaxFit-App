import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BMICalculator = () => {

    const navigation = useNavigation();

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [bmiCategory, setBmiCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleWeightChange = (text) => {
        const weightValue = parseFloat(text);
        if (isNaN(weightValue)) {
            setErrorMessage('Please enter a valid weight (numbers only).');
        } else {
            setWeight(weightValue);
            setErrorMessage('');
        }
    };

    const handleHeightChange = (text) => {
        const heightValue = parseFloat(text);
        if (isNaN(heightValue)) {
            setErrorMessage('Please enter a valid height (numbers only).');
        } else {
            setHeight(heightValue);
            setErrorMessage('');
        }
    };

    const calculateBmi = () => {
        const heightInMeters = height / 100; // Convert height from cm to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        setBmi(bmi.toFixed(2)); // Round to two decimal places

        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        setBmiCategory(category);
    };

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
                        BMI Calculator
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
            <View style={{ marginHorizontal: 25, }}>
                <View>
                    <Text style={{ color: '#92A3FD', fontSize: 24, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>
                        Body Mass Index
                    </Text>
                </View>
                {/* weight input field */}
                <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-Medium", marginTop: 10, }}>
                    Enter youe Weight in KG:
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/WeightLogo.png')}
                    />
                    <TextInput
                        placeholder='Weight (kg)'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 20, paddingRight: 10, flex: 1, borderRadius: 12, }}
                        keyboardType="numeric"
                        onChangeText={handleWeightChange}
                        value={weight.toString()}
                    />
                </View>
                {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
                {/* height input field */}
                <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-Medium", marginTop: 10, }}>
                    Enter youe Height in CM:
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, }}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../assets/icons/HeightLogo.png')}
                    />
                    <TextInput
                        placeholder='Height (cm)'
                        placeholderTextColor='#ADA4A5'
                        style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 20, paddingRight: 10, flex: 1, borderRadius: 12, }}
                        keyboardType="numeric"
                        onChangeText={handleHeightChange}
                        value={height.toString()}
                    />
                </View>
                {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
                {/* bmi btn */}
                <TouchableOpacity
                    onPress={calculateBmi}
                    style={{ backgroundColor: '#92A3FD', borderRadius: 6, elevation: 5, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, marginTop: 30 }}>
                    <Text style={{ color: '#fff', fontSize: 24, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>
                        Calculate BMI
                    </Text>
                </TouchableOpacity>

                {bmi > 0 && (
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, }}>
                            <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", marginTop: 10, }}>
                                Your BMI:
                            </Text>
                            <Text style={{ color: '#92A3FD', fontSize: 22, fontFamily: "Poppins-Bold", marginTop: 10, }}>
                                {bmi}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, }}>
                            <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", marginTop: 10, }}>
                                Category:
                            </Text>
                            <Text style={{ color: '#92A3FD', fontSize: 22, fontFamily: "Poppins-Bold", marginTop: 10, }}>
                                {bmiCategory}
                            </Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default BMICalculator;