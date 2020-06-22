import React from 'react';
import { View,Text,TouchableOpacity,ScrollView,Image,Dimensions } from 'react-native';
import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'

export default function BoardScreen({route,navigation}){
    return(
        <View style={{flex:1,marginTop:Constants.statusBarHeight,paddingHorizontal:15,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='ios-more' size={30}/>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',marginVertical:10}}>{route.params.title}</Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Ionicons name='md-contact' size={50} color='#e2e2e2'/>
                    <View style={{backgroundColor:'#e2e2e2',borderRadius:100,height:50,width:50,alignItems:'center',justifyContent:"center",borderColor:'#fff',padding:10,borderWidth:2,right:10}}>
                        <Ionicons name='ios-add'size={40}/>
                    </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:"center",marginHorizontal:10}}>
                <TouchableOpacity style={{borderRadius:50,backgroundColor:'#000',padding:10}}>
                    <Text style={{color:'#fff',fontWeight:"bold"}}>Pins</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal:10}}>
                    <Text style={{fontWeight:'bold'}}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontWeight:'bold'}}>More ideas</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                    <Ionicons name='md-add' size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal:10}}>
                    <Ionicons name='md-switch' size={30}/>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={{borderRadius:50,backgroundColor:'#e2e2e2',padding:10}}>
                    <Text style={{fontWeight:"bold"}}>Select</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                <Image source={{uri: route.params.image}} style={{height:350,width:180,borderRadius:10}}/>
                <Text>{route.params.pinTitle}</Text>
                </View>
            </ScrollView>
        </View>
    )
}