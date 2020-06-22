import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import CountryPicker from 'react-native-country-picker-modal';


export default function GetCountry({ route,navigation }) {
    const [country, setCountry] = React.useState('Ghana')
    const onSelect = (country) => {
        setCountry(country)
    }
    return (
        <View style={styles.Container}>
            <Text style={styles.HeaderText}>What's your country or region?</Text>
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
            <TouchableOpacity style={styles.Button}
                onPress={() => navigation.navigate('Interests', { 
                    countryName: country.name,
                    name:route.params.name,
                    gender:route.params.gender 
                }
                )}
            >
                <Text style={styles.ButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        marginHorizontal: 20
    },
    HeaderText: {
        marginVertical: 25,
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