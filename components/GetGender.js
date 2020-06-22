import React from 'react'
import Constants from 'expo-constants'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const statusBar_Height = Constants.statusBarHeight
export default function GetGender({ route,navigation }) {
    return (
        <View 
        style={{
            display: "flex",
            flex: 1,
            marginTop:statusBar_Height,
            marginHorizontal: 10
        }}>
            <View>
                <Text 
                style={{ 
                textAlign: "center",
                fontSize: 20,
                marginVertical: 15,
                fontWeight: 'bold' 
                }}>What gender do you identify as?</Text>
                <Text 
                style={{
                textAlign: "center",
                fontSize: 20,
                marginVertical: 15}}>This helps us find you more relevant content</Text>
                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity 
                    style={{
                        backgroundColor: '#e2e2e2',
                        borderRadius: 50,
                        padding: 20,
                        justifyContent: "center",
                        marginVertical: 5,
                        marginHorizontal: 15
                    }}
                        onPress={() => navigation.navigate('Country', { gender: 'Female',name:route.params.name })}
                    >
                        <Text 
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlign: "center"
                        }}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{
                        backgroundColor: '#e2e2e2',
                        borderRadius: 50,
                        padding: 20,
                        justifyContent: "center",
                        marginVertical: 5,
                        marginHorizontal: 15
                    }}
                        onPress={() => navigation.navigate('Country', { gender: 'Male',name:route.params.name })}
                    >
                        <Text 
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlign: "center"
                        }}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{
                        backgroundColor: '#e2e2e2',
                        borderRadius: 50,
                        padding: 20,
                        justifyContent: "center",
                        marginVertical: 5,
                        marginHorizontal: 15
                    }}
                        onPress={() => navigation.navigate('Country', { gender: 'Other',name:route.params.name })}
                    >
                        <Text 
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlign: "center"
                        }}>Specify another</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
