import React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Header from './SignUpHeader'

export default function SetName({navigation}){

    const [data, setData] = React.useState({
        name:'',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const nameChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                name: val,
                check_name:true
            })
        }else {
            setData({
                ...data,
                name: val,
                check_name:false
            }) 
    }
}

    return(
        <View style={styles.Container}>
            <Header headerText="Sign up"/>
            <View style={{flex:4}}>
                <Text style={{fontWeight:"bold",fontSize:40}}>What's your name?</Text>
                <TextInput style={styles.TextInput}
                placeholder="Full name"
                placeholderTextColor='#8a8888'
                onChangeText={(val)=> nameChange(val)}
                />
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={{textAlign:'right',fontWeight:'bold',marginBottom:5}}>3 of 4</Text>
                <View style={{backgroundColor:'#e2e2e2',height:10,borderRadius:10,marginBottom:20}}>
                    <View style={{backgroundColor:'#000',height:10,width:300,borderTopLeftRadius:5,borderBottomLeftRadius:5}}></View>
                </View>
                {data.check_name ?
                <TouchableOpacity style={styles.Button}
                onPress={()=>{
                    navigation.navigate('Get Age',{
                    nameVal: data.name,
                })}}
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