import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import CountryPicker from 'react-native-country-picker-modal';


export default function changeCountry({ route,navigation }) {
    const [country, setCountry] = React.useState('Ghana')
    const onSelect = (country) => {
        setCountry(country)
    }
    return (
        <View style={styles.Container}>
            <View style={{flexDirection:'row',marginVertical:5,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name='ios-arrow-back' size={30}/>
            </TouchableOpacity>
            <Text style={styles.HeaderText}>Country/region</Text>
            </View>
            <View style={{ flex: 1 }}>
                <CountryPicker
                    {...{
                        onSelect,
                    }}
                    visible
                />
                {country !== null && (
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginHorizontal: 5 }}>{(country.name)}</Text>
                )}
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
        flex:1,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    Button: {
        marginBottom: 10,
        padding: 15,
        borderRadius: 50,
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