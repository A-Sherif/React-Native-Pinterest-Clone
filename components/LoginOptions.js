import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

export default function LoginOptions({ navigation }) {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [_isEnabled, _setIsEnabled] = React.useState(false);
    const _toggleSwitch = () => _setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='ios-arrow-back' size={30} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Login Options</Text>
            </View>
            <View style={styles.SwitchContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Facebook</Text>
                <Switch
                    trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                    thumbColor={isEnabled ? "#043f61" : "#a3a3a3"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.SwitchContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Google</Text>
                <Switch
                    trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                    thumbColor={_isEnabled ? "#043f61" : "#a3a3a3"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={_toggleSwitch}
                    value={_isEnabled}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        paddingTop: 20,
        marginHorizontal: 20
    },
    HeaderText: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    SwitchContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10
    }
})