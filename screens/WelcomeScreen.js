import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function WelcomeScreen({navigation}){
const [value, onChangeText] = React.useState('');

    return(
        <View style={styles.Container}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='logo-pinterest' size={100} color='#bd081c'/>
          </View>
            <Text style={styles.Header}>Welcome to Pinterest</Text>
            <TextInput style={styles.Email}
                placeholder='Email address'
            ></TextInput>
            <TouchableOpacity style={[styles.Button,{backgroundColor:'#bd081c',marginBottom: 20,justifyContent: 'center',}]}
                onPress={()=>navigation.navigate('Login')}>
                <Text style={[styles.ButtonText,{color:'#fff'}]}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Button,{backgroundColor:'#4267b2', marginVertical: 10}]}
                onPress={()=>navigation.navigate('')}>
                <Ionicons name='logo-facebook' color='white' size={20}/>
                <Text style={[styles.ButtonText,{color:'#fff',marginLeft: 40}]}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Button,{backgroundColor:'#e2e2e2'}]}
                onPress={()=>navigation.navigate('')}>
                <Ionicons name='logo-google'  size={20}/>
                <Text style={[styles.ButtonText,{color:'#000',marginLeft: 40}]}>Continue with Google</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>By continuing, you agree to Pintrest's <Text style={{color:'blue'}}>Terms of Service</Text> and <Text  style={{color:'blue'}}>Privacy Policy</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        display:'flex', 
        flexDirection:'column',
        flex: 1 ,
        alignContent: "center", 
        justifyContent: 'center', 
        paddingHorizontal: 60, 
        backgroundColor: '#fff'
    },
    Header:{
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 25,
        marginVertical:10
    },
    Email:{
        borderRadius: 50, 
        backgroundColor:'#e2e2e2', 
        padding: 10,
        marginVertical:10
    },
    Button:{
        borderRadius: 50,
        padding: 15, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    ButtonText:{
        textAlign: "center",
        fontWeight: 'bold'
    }
})