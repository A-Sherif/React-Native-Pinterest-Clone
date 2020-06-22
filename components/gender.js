import React from 'react'
import Constants from 'expo-constants'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Gender({ navigation }) {
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
            <View style={{ marginVertical: 20 }}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.goBack()}
                >
                    <Text
                        style={styles.ButtonText}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.goBack()}
                >
                    <Text
                        style={styles.ButtonText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.goBack()}
                >
                    <Text
                        style={styles.ButtonText}>Specify another</Text>
                </TouchableOpacity>
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
    Button: {
        backgroundColor: '#e2e2e2',
        borderRadius: 50,
        padding: 20,
        justifyContent: "center",
        marginVertical: 5,
        marginHorizontal: 15
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: "center"
    }
})