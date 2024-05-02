import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {

    const navigation = useNavigation();

    const [homeBtn, setHomeBtn] = useState(false)
    const [workoutBtn, setWorkoutBtn] = useState(false)
    const [cameraBtn, setCameraBtn] = useState(false)
    const [profileBtn, setProfileBtn] = useState(false)

    const HomeBtn = () => {
        setHomeBtn(true)
        setWorkoutBtn(false)
        setCameraBtn(false)
        setProfileBtn(false)
    }
    const WorkoutBtn = () => {
        setHomeBtn(false)
        setWorkoutBtn(true)
        setCameraBtn(false)
        setProfileBtn(false)
    }
    const CameraBtn = () => {
        setHomeBtn(false)
        setWorkoutBtn(false)
        setCameraBtn(true)
        setProfileBtn(false)
    }
    const ProfileBtn = () => {
        setHomeBtn(false)
        setWorkoutBtn(false)
        setCameraBtn(false)
        setProfileBtn(true)
    }

    return (
        <View style={{ marginTop: 20, borderTopColor: '#ADA4A5', borderTopWidth: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, backgroundColor: '#fff', }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={{ paddingVertical: 25, }}>
                    {
                        homeBtn ?
                            <Image
                                source={require('../assets/icons/Home2.png')}
                            /> :
                            <Image
                                source={require('../assets/icons/Home.png')}
                            />
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Workout")}
                    style={{ paddingVertical: 25, }}>
                    {
                        workoutBtn ?
                            <Image
                                source={require('../assets/icons/Activity2.png')}
                            /> :
                            <Image
                                source={require('../assets/icons/Activity.png')}
                            />
                    }

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ChatAI")}
                    style={{ backgroundColor: '#92A3FD', borderRadius: 100, padding: 20, alignSelf: 'center', marginTop: -50 }}>
                    <Image
                        source={require('../assets/icons/Search.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ProgressPhoto")}
                    style={{ paddingVertical: 25, }}>
                    {
                        cameraBtn ?
                            <Image
                                source={require('../assets/icons/Camera2.png')}
                            /> :
                            <Image
                                source={require('../assets/icons/Camera.png')}
                            />
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("MyProfile")}
                    style={{ paddingVertical: 25, }}>
                    {
                        profileBtn ?
                            <Image
                                source={require('../assets/icons/Profile2.png')}
                            /> :
                            <Image
                                source={require('../assets/icons/Profile.png')}
                            />
                    }
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default BottomNavBar

const styles = StyleSheet.create({})