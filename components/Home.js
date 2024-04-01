import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={{flex:1,}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#fff' }}>
        {/* header */}
        <View style={{ marginTop: 20, marginHorizontal: 25, }}>
          <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 24, fontFamily: "Poppins-Medium", }}>
            Welcome Back,
          </Text>
          <Text style={{ color: '#1D1617', fontSize: 24, lineHeight: 36, fontFamily: "Poppins-Bold", }}>
            Stefani Wong
          </Text>
        </View>
        {/* BMI (Body Mass Index) */}
        <View style={{ marginTop: 20, marginHorizontal: 25, }}>
          <Image
            style={{ width: '100%', resizeMode: 'stretch' }}
            source={require('../assets/images/BMIBanner.png')}
          />
          <View style={{ position: 'absolute', top: 22, left: 20 }}>
            <Text style={{ color: '#fff', fontSize: 19, lineHeight: 30, fontFamily: "Poppins-Bold", }}>
              BMI (Body Mass Index)
            </Text>
            <Text style={{ color: '#fff', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-Medium", }}>
              You have a normal weight
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: '#C58BF2', alignSelf: 'flex-start', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 100, marginTop: 10, }}
            >
              <Text style={{ color: '#fff', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Today Target */}
        <View style={{ marginVertical: 30, marginHorizontal: 25, }}>
          <View style={{ backgroundColor: '#d6deea', paddingVertical: 16, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 16, elevation: 3 }}>
            <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
              Today Target
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: '#92A3FD', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 100, }}
            >
              <Text style={{ color: '#fff', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-Medium", }}>
                Check
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Activity Status */}
        <View style={{ marginHorizontal: 25, }}>
          <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 30, fontFamily: "Poppins-Bold", }}>
            Activity Status
          </Text>
        </View>
        {/* Heart Rate */}
        <View style={{ marginTop: 10, marginHorizontal: 25, }}>
          <Image
            style={{ width: '100%', resizeMode: 'stretch', backgroundColor: '#d6deea', borderRadius: 16, }}
            source={require('../assets/images/HeartRateImage.png')}
          />
          <View style={{ position: 'absolute', top: 18, left: 20 }}>
            <Text style={{ color: '#1D1617', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
              Heart Rate
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={{ color: '#92A3FD', fontSize: 22, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
                78
              </Text>
              <Text style={{ color: '#92A3FD', fontSize: 22, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
                BPM
              </Text>
            </View>
          </View>
          <View style={{ position: 'absolute', top: 35, left: 180 }}>
            <Text style={{ color: '#fff', fontSize: 14, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
              3Mins ago
            </Text>
          </View>
        </View>
        {/* water, sleep, calories */}
        <View style={{ marginHorizontal: 25, marginVertical: 20, }}>
          <View style={{ flexDirection: 'row', }}>
            {/* water */}
            <View style={{ backgroundColor: '#fff', shadowOffset: 5, shadowColor: '#000', shadowRadius: 16, elevation: 5, flex: 1, marginRight: 10, borderRadius: 16,paddingBottom:10,}}>
              <Text style={{ color: '#000', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", marginTop: 20, marginLeft: 20, }}>
                Water Intake
              </Text>
              <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 30, fontFamily: "Poppins-SemiBold", marginLeft: 20, }}>
                4 Liters
              </Text>
              <View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                  <View style={{ width: 10, height: 10, backgroundColor: '#92A3FD', borderRadius: 100, marginTop: 4, }}></View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#ADA4A5', fontSize: 14, fontFamily: "Poppins-Medium", }}>
                      6am - 8am
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 14, fontFamily: "Poppins-Light", }}>
                      600ml
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                  <View style={{ width: 10, height: 10, backgroundColor: '#92A3FD', borderRadius: 100, marginTop: 4, }}></View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#ADA4A5', fontSize: 14, fontFamily: "Poppins-Medium", }}>
                      9am - 11am
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 14, fontFamily: "Poppins-Light", }}>
                      500ml
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                  <View style={{ width: 10, height: 10, backgroundColor: '#92A3FD', borderRadius: 100, marginTop: 4, }}></View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#ADA4A5', fontSize: 14, fontFamily: "Poppins-Medium", }}>
                      11am - 2pm
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 14, fontFamily: "Poppins-Light", }}>
                      1000ml
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                  <View style={{ width: 10, height: 10, backgroundColor: '#92A3FD', borderRadius: 100, marginTop: 4, }}></View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#ADA4A5', fontSize: 14, fontFamily: "Poppins-Medium", }}>
                      2pm - 4pm
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 14, fontFamily: "Poppins-Light", }}>
                      700ml
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                  <View style={{ width: 10, height: 10, backgroundColor: '#92A3FD', borderRadius: 100, marginTop: 4, }}></View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#ADA4A5', fontSize: 14, fontFamily: "Poppins-Medium", }}>
                      4pm - 10pm
                    </Text>
                    <Text style={{ color: '#92A3FD', fontSize: 14, fontFamily: "Poppins-Light", }}>
                      900ml
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* sleep, calories */}
            <View style={{ flex: 1, marginLeft: 10, gap: 20, flexDirection: 'column', }}>
              <View style={{ backgroundColor: '#fff', shadowOffset: 5, shadowColor: '#000', shadowRadius: 16, elevation: 5, flex: 1, borderRadius: 16, }}>
                <Text style={{ color: '#000', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", marginTop: 20, marginLeft: 20, }}>
                  Sleep
                </Text>
                <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 30, fontFamily: "Poppins-SemiBold", marginLeft: 20, }}>
                  8h 20m
                </Text>
                <Image
                  style={{ alignSelf: 'center' }}
                  source={require('../assets/images/SleepGraph.png')}
                />
              </View>
              <View style={{ backgroundColor: '#fff', shadowOffset: 5, shadowColor: '#000', shadowRadius: 16, elevation: 5, flex: 1, borderRadius: 16, }}>
                <Text style={{ color: '#000', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", marginTop: 20, marginLeft: 20, }}>
                  Calories
                </Text>
                <Text style={{ color: '#92A3FD', fontSize: 20, lineHeight: 30, fontFamily: "Poppins-SemiBold", marginLeft: 20, }}>
                  760 kCal
                </Text>
                <View>
                  <Image
                    style={{ alignSelf: 'center' }}
                    source={require('../assets/images/CaloriesPie.png')}
                  />
                  <View style={{ position: 'absolute', width: 50, top: 23, left: 56, }}>
                    <Text style={{ color: '#fff', fontSize: 11, fontFamily: "Poppins-Medium", textAlign: 'center' }}>
                      230kCal left
                    </Text>
                  </View>
                </View>
              </View>
            </View>


          </View>
        </View>
        {/* Workout Progress */}
        <View style={{ marginHorizontal: 25, marginBottom: 20, }}>
          <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 30, fontFamily: "Poppins-Bold", }}>
            Workout Progress
          </Text>
        </View>
        {/* Workout Progress chart */}
        <View style={{ marginHorizontal: 25, marginBottom: 20, }}>
          <Image
            style={{ width: '100%', resizeMode: 'stretch' }}
            source={require('../assets/images/WorkoutProgressGraph.png')}
          />
        </View>
        {/* Latest Workout */}
        <View style={{ marginHorizontal: 25, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Text style={{ color: '#1D1617', fontSize: 20, lineHeight: 30, fontFamily: "Poppins-Bold", }}>
            Latest Workout
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#ADA4A5', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-Medium", }}>
              See more
            </Text>
          </TouchableOpacity>
        </View>
        {/* Latest Workout cards */}
        <View style={{ marginHorizontal: 25, marginBottom:80, }}>
          {/* Fullbody Workout cards */}
          <TouchableOpacity
          onPress={() => navigation.navigate("FullBodyWorkout")}
            style={{ backgroundColor: '#fff', shadowOffset: 5, shadowColor: '#000', shadowRadius: 16, elevation: 5, borderRadius: 16, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 50, width: 50, backgroundColor: '#e8f0fd', borderRadius: 100, margin: 15, }}
                source={require('../assets/images/Workout1.png')}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <View>
                  <Text style={{ color: '#000', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
                    Fullbody Workout
                  </Text>
                  <Text style={{ color: '#A4A9AD', fontSize: 14, lineHeight: 20, fontFamily: "Poppins-Medium", }}>
                    180 Calories Burn | 20minutes
                  </Text>
                </View>
                <View style={{ borderWidth: 1.5, borderColor: '#C58BF2', padding: 6, borderRadius: 100, marginRight: 15, }}>
                  <Image
                    source={require('../assets/icons/ArrowRight2.png')}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Lowerbody Workout cards */}
          <TouchableOpacity
            style={{ backgroundColor: '#fff', shadowOffset: 5, shadowColor: '#000', shadowRadius: 16, elevation: 5, borderRadius: 16, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 50, width: 50, backgroundColor: '#e8f0fd', borderRadius: 100, margin: 15, }}
                source={require('../assets/images/Workout2.png')}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <View>
                  <Text style={{ color: '#000', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
                    Lowerbody Workout
                  </Text>
                  <Text style={{ color: '#A4A9AD', fontSize: 14, lineHeight: 20, fontFamily: "Poppins-Medium", }}>
                    200 Calories Burn | 30minutes
                  </Text>
                </View>
                <View style={{ borderWidth: 1.5, borderColor: '#C58BF2', padding: 6, borderRadius: 100, marginRight: 15, }}>
                  <Image
                    source={require('../assets/icons/ArrowRight2.png')}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Ab Workout cards */}
          <TouchableOpacity
            style={{ backgroundColor: '#fff', shadowOffset: 5, shadowColor: '#000', shadowRadius: 16, elevation: 5, borderRadius: 16, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 50, width: 50, backgroundColor: '#e8f0fd', borderRadius: 100, margin: 15, }}
                source={require('../assets/images/Workout3.png')}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <View>
                  <Text style={{ color: '#000', fontSize: 16, lineHeight: 30, fontFamily: "Poppins-SemiBold", }}>
                    Ab Workout
                  </Text>
                  <Text style={{ color: '#A4A9AD', fontSize: 14, lineHeight: 20, fontFamily: "Poppins-Medium", }}>
                    180 Calories Burn | 20minutes
                  </Text>
                </View>
                <View style={{ borderWidth: 1.5, borderColor: '#C58BF2', padding: 6, borderRadius: 100, marginRight: 15, }}>
                  <Image
                    source={require('../assets/icons/ArrowRight2.png')}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* bottom nav bar */}
      <View style={{ position: 'absolute', bottom: 0, width:'100%' ,}}>
        <BottomNavBar />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})