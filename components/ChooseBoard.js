import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'

const statusBar_Height = Constants.statusBarHeight
export default function ChooseBoard({route,navigation}){
    return(
        <View style={{flex:1,marginTop:statusBar_Height,marginHorizontal:15}}>
            <View style={{flex:2}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='md-close' size={30}/>
                </TouchableOpacity>
                <Text style={{marginHorizontal:10}}>Choose board</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginBottom:10,alignItems:"center"}}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('Create Board',{
                    pinTitle: route.params.pinTitle,
                    about: route.params.about,
                    image: route.params.image
                })}
                style={{backgroundColor:'#bd081c',borderRadius:50,height:50,width:50,justifyContent:"center",alignItems:'center'}}>
                    <Ionicons name='md-add' size={40} color='#fff'/>
                </TouchableOpacity>
                <Text style={{marginHorizontal:10,fontSize:20,fontWeight:'bold'}}>Create board</Text>
            </View>
        </View>
    )
}