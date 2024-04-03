import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';

const LowerBodyWorkout = () => {

    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#92A3FD', }}>
            {/* header */}
            <View style={{ marginHorizontal: 25, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/ArrowLeft.png')}
                    />
                </TouchableOpacity>
                <View>

                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/icons/Dots3.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* header image */}
            <View style={{ justifyContent: 'center', alignItems: 'center' , marginHorizontal:25, }}>
                <Image
                    style={{width:'100%', height:300, resizeMode:'contain'}}
                    source={require('../assets/Workouts/LowerbodyCard.png')}
                />
            </View>
            {/* body */}
            <ScrollView style={{ backgroundColor: '#fff', flex: 1, marginTop: -50, borderTopLeftRadius: 36, borderTopRightRadius: 36, }}>
                {/* Fullbody Workout */}
                <View style={{ marginHorizontal: 25, marginTop: 20, marginBottom: 20, }}>
                    <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                        Lowerbody Workout
                    </Text>
                    <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                        6 Exercises | 32mins | 320 Calories Burn
                    </Text>
                    {/* you need */}
                    <View style={{ marginTop: 16 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                                You'll Need
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                1 items
                            </Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
                            {/* itm 1 */}
                            <View style={{ marginRight: 20, }}>
                                <View style={{ backgroundColor: '#F7F8F8', alignSelf: 'flex-start', borderRadius: 12, height: 120, width: 130, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require('../assets/Workouts/waterbottle.png')}
                                    />
                                </View>
                                <Text style={{ color: '#1D1617', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                    Bottle 1 Liters
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    {/* Exercises */}
                    <View style={{ marginTop: 16 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                                Exercises
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                3 sets
                            </Text>
                        </View>
                        {/* Exercises list */}
                        <View style={{}}>
                            {/* Exercises 1 */}
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("WarmUpWorkout")}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                                <View style={{}}>
                                    <Image
                                        style={{ height: 75, width: 75, borderRadius: 12, }}
                                        source={require('../assets/Workouts/WarmUp.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <View>
                                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", }}>
                                            Warm Up
                                        </Text>
                                        <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                            5 mints
                                        </Text>
                                    </View>
                                    <View style={{ borderWidth: 1.5, borderColor: '#ADA4A5', padding: 6, borderRadius: 100, marginRight: 15, }}>
                                        <Image
                                            style={{ tintColor: '#ADA4A5' }}
                                            source={require('../assets/icons/ArrowRight2.png')}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Exercises 2 */}
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("SquatsWorkout")}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, }}>
                                <View style={{}}>
                                    <Image
                                        style={{ height: 75, width: 75, borderRadius: 12, }}
                                        source={require('../assets/Workouts/Squats.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <View>
                                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", }}>
                                            Squats
                                        </Text>
                                        <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                            12 x
                                        </Text>
                                    </View>
                                    <View style={{ borderWidth: 1.5, borderColor: '#ADA4A5', padding: 6, borderRadius: 100, marginRight: 15, }}>
                                        <Image
                                            style={{ tintColor: '#ADA4A5' }}
                                            source={require('../assets/icons/ArrowRight2.png')}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Exercises 3 */}
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("LungesWorkout")}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, }}>
                                <View style={{}}>
                                    <Image
                                        style={{ height: 75, width: 75, borderRadius: 12, }}
                                        source={require('../assets/Workouts/Lunges.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <View>
                                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", }}>
                                            Lunges
                                        </Text>
                                        <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                            15 x
                                        </Text>
                                    </View>
                                    <View style={{ borderWidth: 1.5, borderColor: '#ADA4A5', padding: 6, borderRadius: 100, marginRight: 15, }}>
                                        <Image
                                            style={{ tintColor: '#ADA4A5' }}
                                            source={require('../assets/icons/ArrowRight2.png')}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Exercises 4 */}
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("GluteBridgeWorkout")}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, }}>
                                <View style={{}}>
                                    <Image
                                        style={{ height: 75, width: 75, borderRadius: 12, }}
                                        source={require('../assets/Workouts/GluteBridge.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <View>
                                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", }}>
                                        Glute Bridge
                                        </Text>
                                        <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                            15 x
                                        </Text>
                                    </View>
                                    <View style={{ borderWidth: 1.5, borderColor: '#ADA4A5', padding: 6, borderRadius: 100, marginRight: 15, }}>
                                        <Image
                                            style={{ tintColor: '#ADA4A5' }}
                                            source={require('../assets/icons/ArrowRight2.png')}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Exercises 5 */}
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("CalfRaisesWorkout")}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, }}>
                                <View style={{}}>
                                    <Image
                                        style={{ height: 75, width: 75, borderRadius: 12, }}
                                        source={require('../assets/Workouts/Calfraises.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <View>
                                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", }}>
                                        Calf raises
                                        </Text>
                                        <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                            2 mints
                                        </Text>
                                    </View>
                                    <View style={{ borderWidth: 1.5, borderColor: '#ADA4A5', padding: 6, borderRadius: 100, marginRight: 15, }}>
                                        <Image
                                            style={{ tintColor: '#ADA4A5' }}
                                            source={require('../assets/icons/ArrowRight2.png')}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Exercises 6 */}
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("RestAndDrinkWorkout")}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, }}>
                                <View style={{}}>
                                    <Image
                                        style={{ height: 75, width: 75, borderRadius: 12, }}
                                        source={require('../assets/Workouts/RestAndDrink.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <View>
                                        <Text style={{ color: '#1D1617', fontSize: 20, fontFamily: "Poppins-SemiBold", }}>
                                            Rest and Drink
                                        </Text>
                                        <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                            5 mints
                                        </Text>
                                    </View>
                                    <View style={{ borderWidth: 1.5, borderColor: '#ADA4A5', padding: 6, borderRadius: 100, marginRight: 15, }}>
                                        <Image
                                            style={{ tintColor: '#ADA4A5' }}
                                            source={require('../assets/icons/ArrowRight2.png')}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
  )
}

export default LowerBodyWorkout

const styles = StyleSheet.create({})