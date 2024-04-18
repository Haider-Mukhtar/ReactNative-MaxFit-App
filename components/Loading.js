import { ActivityIndicator, Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({ visible }) => {
    return (
        <Modal visible={visible} transparent={true}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' }}>
                {/* logo */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 120, height: 130 }}>
                    <Image
                        style={{ width: 120, height: 110, resizeMode: 'contain' }}
                        source={require('../assets/mainAssets/MaxFitLogo.png')}
                    />
                    <Text style={{ color: '#fff', fontSize: 24, fontFamily: "Poppins-Bold", textAlign: 'center' }}>
                        Max Fit
                    </Text>
                </View>
                <ActivityIndicator size={'large'} color="#92A3FD" />
            </View>
        </Modal>
    )
}

export default Loading

const styles = StyleSheet.create({})