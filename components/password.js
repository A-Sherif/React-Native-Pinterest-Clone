import React from 'react'
import {View,Text,TextInput,TouchableOpacity} from 'react-native'

export default function Password({navigation}){
    const [data, setData] = React.useState({
        password:'',
        check_textInputChange: false,
        secureTextEntry: true
    });
    
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
        <View>
            <View style={[styles.Group,{flexDirection:"row"}]}>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={styles.Icon}
                >
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <Text style={{flex:3,alignSelf:'center',textAlign:"center"}}>Password</Text>
                <TouchableOpacity style={{backgroundColor:'#e2e2e2',borderRadius:10,flex:1,alignContent:'center'}}>
                  <Text style={{fontWeight:"bold", textAlign:"center"}}>Done</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize:15,marginVertical:5}}>Current Password</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TextInput
                    placeholder='Add'
                    autoCapitalize='none'
                    secureTextEntry= {data.secureTextEntry}
                    onChangeText={(val)=> passwordChange(val)}
                    style={{width:350,padding:10,flex:2}}
                    />
                    <View>
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.passwordChange ?
                            <Ionicons name='md-eye' size={20}/>
                            :
                            <Ionicons name='ios-eye' size={20}/>
                            }
                        </TouchableOpacity>
                        <Text style={{color:'#e2e2e2',marginTop:2}}>Forgotten Password?</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{fontSize:15,marginVertical:5}}>New Password</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TextInput
                    placeholder='Add'
                    autoCapitalize='none'
                    secureTextEntry= {data.secureTextEntry}
                    onChangeText={(val)=> passwordChange(val)}
                    style={{width:350,padding:10,flex:2}}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.passwordChange ?
                        <Ionicons name='md-eye' size={20}/>
                        :
                        <Ionicons name='ios-eye' size={20}/>
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{fontSize:15,marginVertical:5}}>New Password</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TextInput
                    placeholder='Add'
                    autoCapitalize='none'
                    secureTextEntry= {data.secureTextEntry}
                    onChangeText={(val)=> passwordChange(val)}
                    style={{width:350,padding:10,flex:2}}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.passwordChange ?
                        <Ionicons name='md-eye' size={20}/>
                        :
                        <Ionicons name='ios-eye' size={20}/>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}