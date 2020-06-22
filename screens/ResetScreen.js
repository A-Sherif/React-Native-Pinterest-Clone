import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ResetScreen({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='ios-arrow-back' size={30} />
                </TouchableOpacity>
                <Text style={{ textAlign: "center", marginHorizontal: 150 }}>Log in</Text>
            </View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 5 }}>Let's find your Pinterest account</Text>
            <Text style={{ marginHorizontal: 10, marginVertical: 5 }}>What's your email address,name or username?</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name='ios-search' size={30} />
                <TextInput style={styles.TextInput}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flex: 1,
        marginTop: 25,
        marginHorizontal: 10
    },
    Header: {
        marginHorizontal: 10,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Button: {
        borderRadius: 50,
        backgroundColor: 'red',
        padding: 20,
        flexDirection: 'row'
    },
    TextInput: {
        width: 350,
        borderRadius: 50,
        borderColor: '#e2e2e2',
        borderWidth: 5
    },
})