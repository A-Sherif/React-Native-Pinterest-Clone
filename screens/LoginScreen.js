import React from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function LoginScreen({navigation}){
const [data, setData] = React.useState({
    email: '',
    password:'',
    check_textInputChange: false,
    secureTextEntry: true
});

const TextInputChange = (val) =>{
    if(val.length != 0){
        setData({
            ...data,
            email: val,
            check_textInputChange:true
        })
    }else {
        setData({
            ...data,
            email: val,
            check_textInputChange:false
        }) 
    }
}

const passwordChange = (val) => {
    setData({
        ...data,
        password: val,
    });
}

const updateSecureTextEntry= () =>{
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

    return(
        <View style={styles.Container}>
            <ScrollView style={{flex:1}}>
                <View style={[styles.Header, {flexDirection:'row',alignItems:'center'}]}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                    >
                        <Ionicons name='ios-close' size={35}/>
                    </TouchableOpacity>
                    <View>
                    <Text style={{textAlign:'center',marginHorizontal: 150, fontSize:15}}>Log in</Text>
                    </View>
                </View> 
                <View style={{marginBottom:5}}>
                <TouchableOpacity style={[styles.Button,{backgroundColor:'#4267b2',marginVertical: 10}]}
                    onPress={()=>navigation.navigate('')}>
                    <Text style={[styles.ButtonText,{color:'#fff'}]}>Continue with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Button,{backgroundColor:'#e2e2e2',marginVertical: 5}]}
                    onPress={()=>navigation.navigate('')}>
                    <Text style={[styles.ButtonText,{color:'#000'}]}>Continue with Google</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginVertical:10}}>
                    <Text style={{fontSize:15,marginVertical:5}}>Email</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:'center'}}>
                    <TextInput
                    placeholder='Enter your email address'
                    autoCapitalize='none'
                    onChangeText={(val)=>TextInputChange(val)}
                    style={{width:350,padding:10,flex:2}}
                    clearButtonMode= 'always'
                    />
                    <TouchableOpacity 
                    >
                    {data.check_textInputChange ?
                    <Ionicons name='md-close-circle' size={20} color='#bd081c'/>
                    : null}
                    </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:15,marginVertical:5}}>Password</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TextInput
                    placeholder='Enter your password'
                    autoCapitalize='none'
                    secureTextEntry= {data.secureTextEntry ? true : false}
                    onChangeText={(val)=> passwordChange(val)}
                    style={{width:350,padding:10,flex:2}}
                    />
                    
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <Ionicons name='md-eye' size={20}/>
                        :
                        <Ionicons name='ios-eye' size={20}/>
                        }
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={styles.Button}
                    onPress={()=>navigation.navigate('Home')}>
                    <Text style={{color:'#fff',textAlign: "center"}}>Log in</Text>
                </TouchableOpacity>
                <Text style={{textAlign: "center",marginVertical: 20,fontWeight:'bold'}} onPress={()=>navigation.navigate('Reset')}>Forgotten Password?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 10,
        marginTop: 25,
        display: "flex",
        flex: 1
    },
    Header: {
        marginHorizontal: 10,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    Button: {
        borderRadius: 50,
        backgroundColor: '#bd081c',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        textAlign: "center",
        fontWeight: 'bold'
    },
})