import React from 'react';
import { Text, TextInput, TouchableOpacity, View,StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'

export default function Password({ navigation }) {
    const [data, setData] = React.useState({
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const passwordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const [newData, setNewData] = React.useState({
        newPassword: '',
        check_newTextInputChange: false,
        _secureTextEntry: true
    });

    const newPasswordChange = (_val) => {
        setNewData({
            ...newData,
            newPassword: _val,
        });
    }

    const updateNewSecureTextEntry = () => {
        setNewData({
            ...newData,
            secureTextEntry: !newData.secureTextEntry
        });
    }
    const [_newData, _setNewData] = React.useState({
        _newPassword: '',
        _check_newTextInputChange: false,
        _secureTextEntry: true
    });

    const _newPasswordChange = (__val) => {
        _setNewData({
            ..._newData,
            newPassword: _val,
        });
    }

    const _updateNewSecureTextEntry = () => {
        _setNewData({
            ..._newData,
            secureTextEntry: !_newData.secureTextEntry
        });
    }
    return (
            <View style={styles.Conatainer}>
                <View style={styles.Header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.Icon}
                    >
                        <Ionicons name='ios-arrow-back' size={30} />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>Password</Text>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{ backgroundColor: '#e2e2e2', padding:10 ,borderRadius: 10, alignContent: 'center' }}>
                        <Text style={{ fontWeight: "bold", textAlign: "center" }}>Done</Text>
                    </TouchableOpacity>
                </View>
            <View>
                <Text style={{ fontSize: 15,}}>Current Password</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                    <TextInput
                        placeholder='Add'
                        autoCapitalize='none'
                        maxLength={30}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => passwordChange(val)}
                        style={{padding: 10,fontWeight:'bold',fontSize:20}}
                    />
                    <View style={{justifyContent:"flex-end",alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Ionicons name='md-eye' size={30} />
                                :
                                <Ionicons name='md-eye-off' size={30} />
                            }
                        </TouchableOpacity>
                        <Text style={{ color: '#8a8888', marginTop: 2 }}>Forgotten Password?</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 15, marginVertical: 5 }}>New Password</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TextInput
                        placeholder='Add'
                        autoCapitalize='none'
                        maxLength={30}
                        secureTextEntry={newData.secureTextEntry ? true : false}
                        onChangeText={(_val) => newPasswordChange(_val)}
                        style={{padding:10 ,fontWeight:'bold',fontSize:20}}
                    />
                    <TouchableOpacity onPress={updateNewSecureTextEntry}>
                        {newData.secureTextEntry ?
                            <Ionicons name='md-eye' size={30} />
                            :
                            <Ionicons name='md-eye-off' size={30} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            <Text style={{ fontSize: 15, marginVertical: 5 }}>Confirm Password</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TextInput
                        placeholder='Add'
                        autoCapitalize='none'
                        maxLength={30}
                        secureTextEntry={_newData.secureTextEntry ? true : false}
                        onChangeText={(__val) => _newPasswordChange(__val)}
                        style={{padding:10 ,fontWeight:'bold',fontSize:20}}
                    />
                    <TouchableOpacity onPress={_updateNewSecureTextEntry}>
                        {_newData.secureTextEntry ?
                            <Ionicons name='md-eye' size={30} />
                            :
                            <Ionicons name='md-eye-off' size={30} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Conatainer: {
        display: 'flex',
        flex: 1,
        marginTop:Constants.statusBarHeight,
        paddingHorizontal:15
    },
    Header: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        alignItems:'center',
        flexDirection: "row",
        justifyContent:"space-between" 
    },
})