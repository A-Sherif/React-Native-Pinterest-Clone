import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Switch } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Constants from 'expo-constants'

export default function ClaimedAccounts({ navigation }) {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [_isEnabled, _setIsEnabled] = React.useState(false);
    const _toggleSwitch = () => _setIsEnabled(previousState => !previousState);

    const [__isEnabled, __setIsEnabled] = React.useState(false);
    const __toggleSwitch = () => __setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.Container}>
            <View style={{flexDirection:'row',marginVertical:5,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name='ios-arrow-back' size={30}/>
            </TouchableOpacity>
            <Text style={styles.HeaderText}>Claimed Accounts</Text>
            </View>
            <View>
            <View style={styles.SwitchContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Instagram</Text>
                <Switch
                    trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                    thumbColor={isEnabled ? "#043f61" : "#a3a3a3"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.SwitchContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Etsy</Text>
                <Switch
                    trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                    thumbColor={_isEnabled ? "#043f61" : "#a3a3a3"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={_toggleSwitch}
                    value={_isEnabled}
                />
            </View>
            <View style={styles.SwitchContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Youtube</Text>
                <Switch
                    trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                    thumbColor={__isEnabled ? "#043f61" : "#a3a3a3"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={__toggleSwitch}
                    value={__isEnabled}
                />
            </View>
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
        marginVertical:10
    }
})