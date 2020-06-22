import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'

const width = Dimensions.get('window').width
export default function CreatePassword({ navigation }) {

    const [data, setData] = React.useState({
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const passwordChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                password: val,
                check_Password: true
            })
        } else {
            setData({
                ...data,
                password: val,
                check_Password: false
            })
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: "row", alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#e2e2e2', paddingVertical: 5 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='ios-arrow-back' size={30} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Sign up</Text>
            </View>
            <View style={{ flex: 4 }}>
                <Text style={{ fontWeight: "bold", fontSize: 40 }}>Create a password</Text>
                <TextInput style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor='#8a8888'
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val) => passwordChange(val)}
                />
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Ionicons name='md-square-outline' size={20} />
                            :
                            <Ionicons name='md-checkbox' size={20} />
                        }
                        <Text style={{ color: '#8a8888', marginHorizontal: 5, fontWeight: 'bold' }}>Show password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ textAlign: 'right', fontWeight: 'bold', marginBottom: 5 }}>2 of 4</Text>
                <View style={{ backgroundColor: '#e2e2e2', height: 10, borderRadius: 10, marginBottom: 20 }}>
                    <View style={{ backgroundColor: '#000', height: 10, width: 0.5*width, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}></View>
                </View>
                {data.check_Password ?
                    <TouchableOpacity style={styles.Button}
                        onPress={() => navigation.navigate('Set Name')}
                    >
                        <Text style={styles.ButtonText}>Next</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>Next</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        marginHorizontal: 15
    },
    HeaderText: {
        flex: 1,
        alignSelf: 'center',
        textAlign: "center",
    },
    TextInput: {
        padding: 10,
        fontSize: 25
    },
    Button: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#bd081c',
        justifyContent: "center"
    },
    ButtonText: {
        color: '#fff',
        alignSelf: "center",
        fontWeight: 'bold',
        fontSize: 20
    }
})