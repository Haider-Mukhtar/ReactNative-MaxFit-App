import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';

const Workout = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#92A3FD', }}>
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
                    <Text style={{ color: '#fff', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                        Workout Tracker
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/Dots3.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* header image */}
            <View style={{ marginHorizontal: 25, marginBottom: 20, }}>
                <Image
                    style={{ resizeMode: 'stretch', width: '100%' }}
                    source={require('../assets/images/WorkProgressGraph2.png')}
                />
            </View>
            {/* body */}
            <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} style={{ backgroundColor: '#fff', flex: 1, borderTopLeftRadius: 36, borderTopRightRadius: 36, }}>
                {/* Workout */}
                <View style={{ marginHorizontal: 25, marginTop: 20, marginBottom: 100, }}>
                    <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                        What Do You Want to Train
                    </Text>
                    {/* Fullbody Workout */}
                    <View style={{ backgroundColor: '#d6deea', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 20, marginVertical: 10, }}>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-Medium", }}>
                                Fullbody Workout
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                11 Exercises | 32mins
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("FullBodyWorkout")}
                                style={{ backgroundColor: '#fff', alignSelf: 'flex-start', borderRadius: 100, paddingVertical: 10, paddingHorizontal: 20, marginTop: 10, }}>
                                <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                    View More
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <Image
                                style={{ resizeMode: 'contain' }}
                                source={require('../assets/images/FullbodyCard.png')}
                            />
                        </View>
                    </View>
                    {/* Lowebody Workout */}
                    <View style={{ backgroundColor: '#d6deea', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 20, marginVertical: 10, }}>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-Medium", }}>
                                Lowebody Workout
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                12 Exercises | 40mins
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("LowerBodyWorkout")}
                                style={{ backgroundColor: '#fff', alignSelf: 'flex-start', borderRadius: 100, paddingVertical: 10, paddingHorizontal: 20, marginTop: 10, }}>
                                <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                    View More
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <Image
                                style={{ resizeMode: 'contain' }}
                                source={require('../assets/images/LowerbodyCard.png')}
                            />
                        </View>
                    </View>
                    {/* AB Workout */}
                    <View style={{ backgroundColor: '#d6deea', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 20, marginVertical: 10, }}>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-Medium", }}>
                                AB Workout
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                14 Exercises | 20mins
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ABWorkout")}
                                style={{ backgroundColor: '#fff', alignSelf: 'flex-start', borderRadius: 100, paddingVertical: 10, paddingHorizontal: 20, marginTop: 10, }}>
                                <Text style={{ color: '#92A3FD', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                    View More
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <Image
                                style={{ resizeMode: 'contain' }}
                                source={require('../assets/images/ABWorkoutCard.png')}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* bottom nav bar */}
            <View style={{ position: 'absolute', bottom: 0, width: '100%', }}>
                <BottomNavBar />
            </View>
        </View>
    )
}

export default Workout

const styles = StyleSheet.create({})