import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import BottomNavBar from './BottomNavBar';
import Loading from './Loading';
import axios from 'axios';

const ChatAI = () => {

    const navigation = useNavigation();

    const [data, setData] = useState([]);
    
    const [textInput, setTextInput] = useState('');

    const handleSend = async () => {
        const prompt = textInput;
        const responce = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.5,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        })
        const text = responce.data.choices[0].text;
        setData([...data, { type: 'user', 'text': textInput }, { type: 'bot', 'text': text }]);
        setTextInput('')
    }

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
                        AI Chat Bot
                    </Text>
                </View>
                <TouchableOpacity
                    // onPress={getUserDataByUserId}
                    style={{ backgroundColor: '#fff', borderRadius: 6, elevation: 5, height: 36, width: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 26, height: 26, resizeMode: 'contain' }}
                        source={require('../assets/icons/refresh.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* body */}
            <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    style={{}}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={{ color: item.type === 'user' ? 'green' : 'red' }}>
                                {item.type === 'user' ? 'Me' : 'Bot'}
                            </Text>
                            <Text style={{ fontSize: 16 }}>
                                {item.text}
                            </Text>
                        </View>
                    )}
                />
                <View style={{ flexDirection: 'row', marginHorizontal: 25, marginBottom: 20, gap:10 }}>
                    {/*  input field */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F8F8', borderRadius: 12, flex: 8 }}>
                        <TextInput
                            value={textInput}
                            onChangeText={txt => setTextInput(txt)}
                            placeholder='Ask me anything'
                            placeholderTextColor='#ADA4A5'
                            style={{ backgroundColor: "#F7F8F8", color: '#1D1617', fontSize: 16, paddingLeft: 12, flex: 1, borderRadius: 12, }}
                        />
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: 'blue', padding: 10, flex: 1, borderRadius: 12, }}
                        onPress={handleSend}>
                        <Text>
                            OK
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ChatAI

const styles = StyleSheet.create({})