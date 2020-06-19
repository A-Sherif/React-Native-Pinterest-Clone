import React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Header from './SignUpHeader'

export default function GetAge({route,navigation}){

    const {nameVal} = route.params;

    const [data, setData] = React.useState({
        age:'',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const ageChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                age: val,
                check_age:true
            })
        }else {
            setData({
                ...data,
                age: val,
                check_age:false
            }) 
    }
}

    return(
        <View style={styles.Container}>
            <Header headerText="Sign up"/>
            <View style={{flex:4}}>
                <Text style={{fontWeight:"bold",fontSize:40}}>Hi {JSON.stringify(nameVal)}! How old are you?</Text>
                <TextInput style={styles.TextInput}
                placeholder="Age"
                placeholderTextColor='#8a8888'
                maxLength={2}
                keyboardType='numeric'
                onChangeText={(val)=> ageChange(val)}
                />
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={{textAlign:'right',fontWeight:'bold',marginBottom:5}}>4 of 4</Text>
                <View style={{backgroundColor:'#000',height:10,borderRadius:10,marginBottom:20}}></View>
                {data.check_age ?
                <TouchableOpacity style={styles.Button}
                onPress={()=>navigation.navigate('age')}
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
            paddingTop: 20,
            marginHorizontal: 15
        },
        Header: {
            flex: 1,
            alignSelf: 'center',
            textAlign: "center",
            fontWeight: 'bold'
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