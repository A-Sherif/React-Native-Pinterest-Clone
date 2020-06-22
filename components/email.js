import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'

export default function Email({ navigation }) {
    return (
        <View style={styles.Conatainer}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.Icon}
                >
                    <Ionicons name='ios-arrow-back' size={30} />
                </TouchableOpacity>
                <Text style={{ textAlign: "center" }}>Email</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: '#e2e2e2', padding: 10, borderRadius: 10, alignContent: 'center' }}>
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>Done</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ marginVertical: 5, fontSize: 20, color: '#8a8888' }}> Email</Text>
                <TextInput
                    textContentType="emailAddress"
                    placeholder='Email'
                    style={{ borderBottomColor: '#e2e2e2', borderBottomWidth: 1, fontWeight: 'bold', fontSize: 30 }}
                ></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Conatainer: {
        display: 'flex',
        flex: 1,
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 15
    },
    Header: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
})