import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar'; 
import glutebridge from '../assets/Workouts/glutebridge';

const GluteBridgeWorkout = () => {

    const navigation = useNavigation();

    const data = glutebridge[0];
    const name = data.name;
    const banner = data.banner;
    const time = data.time;
    const calories = data.calories;
    const level = data.level;
    const description = data.description;
    const howToDo1 = data.howToDo[0];
    const howToDo1heading = howToDo1.heading;
    const howToDo1description = howToDo1.description;
    const howToDo2 = data.howToDo[1];
    const howToDo2heading = howToDo2.heading;
    const howToDo2description = howToDo2.description;
    const howToDo3 = data.howToDo[2];
    const howToDo3heading = howToDo3.heading;
    const howToDo3description = howToDo3.description;
    const howToDo4 = data.howToDo[3];
    const howToDo4heading = howToDo4.heading;
    const howToDo4description = howToDo4.description;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
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
            <View style={{ marginHorizontal: 25, marginTop: 20, borderRadius: 22 }}>
                <Image
                    style={{ width: '100%', height: 200, borderRadius: 22 }}
                    source={banner}
                />
            </View>
            {/* name */}
            <View style={{ marginHorizontal: 25, marginVertical: 20, }}>
                <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                    {name}
                </Text>
                <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                    {level} | {calories} Calories Burn
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* description */}
                <View style={{ marginHorizontal: 25, }}>
                    <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                        Description
                    </Text>
                    <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                        {description}
                    </Text>
                </View>
                {/* How To Do It */}
                <View style={{ marginHorizontal: 25, marginVertical: 20, }}>
                    <Text style={{ color: '#1D1617', fontSize: 22, fontFamily: "Poppins-SemiBold", }}>
                        How To Do It
                    </Text>
                    {/* How To Do It 1*/}
                    <View style={{ flexDirection: 'row', marginRight: 25, gap: 10 }}>
                        <View style={{ borderRadius: 100, borderWidth: 2, borderColor: '#92A3FD', alignSelf: 'flex-start', padding: 2, marginTop: 7, }}>
                            <View style={{ width: 14, height: 14, backgroundColor: '#92A3FD', borderRadius: 100 }}></View>
                        </View>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                {howToDo1heading}
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                {howToDo1description}
                            </Text>
                        </View>
                    </View>
                    {/* How To Do It 2*/}
                    <View style={{ flexDirection: 'row', marginRight: 25, gap: 10 }}>
                        <View style={{ borderRadius: 100, borderWidth: 2, borderColor: '#92A3FD', alignSelf: 'flex-start', padding: 2, marginTop: 7, }}>
                            <View style={{ width: 14, height: 14, backgroundColor: '#92A3FD', borderRadius: 100 }}></View>
                        </View>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                {howToDo2heading}
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                {howToDo2description}
                            </Text>
                        </View>
                    </View>
                    {/* How To Do It 3*/}
                    <View style={{ flexDirection: 'row', marginRight: 25, gap: 10 }}>
                        <View style={{ borderRadius: 100, borderWidth: 2, borderColor: '#92A3FD', alignSelf: 'flex-start', padding: 2, marginTop: 7, }}>
                            <View style={{ width: 14, height: 14, backgroundColor: '#92A3FD', borderRadius: 100 }}></View>
                        </View>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                {howToDo3heading}
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                {howToDo3description}
                            </Text>
                        </View>
                    </View>
                    {/* How To Do It 4*/}
                    <View style={{ flexDirection: 'row', marginRight: 25, gap: 10 }}>
                        <View style={{ borderRadius: 100, borderWidth: 2, borderColor: '#92A3FD', alignSelf: 'flex-start', padding: 2, marginTop: 7, }}>
                            <View style={{ width: 14, height: 14, backgroundColor: '#92A3FD', borderRadius: 100 }}></View>
                        </View>
                        <View>
                            <Text style={{ color: '#1D1617', fontSize: 18, fontFamily: "Poppins-Medium", }}>
                                {howToDo4heading}
                            </Text>
                            <Text style={{ color: '#7B6F72', fontSize: 16, fontFamily: "Poppins-Medium", }}>
                                {howToDo4description}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
  )
}

export default GluteBridgeWorkout

const styles = StyleSheet.create({})