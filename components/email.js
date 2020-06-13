import React from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'

export default function Email({navigation}){
    return(
        <View>
            <View style={[styles.Group,{flexDirection:"row"}]}>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={styles.Icon}
                >
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <Text style={{flex:3,alignSelf:'center',textAlign:"center"}}>Email</Text>
                <TouchableOpacity style={{backgroundColor:'#e2e2e2',borderRadius:10,flex:1,alignContent:'center'}}>
                  <Text style={{fontWeight:"bold", textAlign:"center"}}>Done</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{marginVertical:5}}> Email</Text>
                <TextInput
                textContentType="emailAddress"
                placeholder='email'
                style={{borderBottomColor:'#e2e2e2',borderBottomWidth:1,fontWeight:'bold'}}
                ></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Conatainer: {
        display: 'flex',
        flex: 1,
    },
    Group: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
})