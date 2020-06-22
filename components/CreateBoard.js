import React from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'

const statusBar_Height = Constants.statusBarHeight
export default function CreateBoard({route,navigation}){
    const {image} = route.params
    const [data,setData] = React.useState({
        title:'',
        check_textInput:false
    })
    const changeText =(val)=>{
        setData({
            ...data,
            title:val
        })
    }

    return(
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='md-close' size={30} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Create board</Text>
                <TouchableOpacity style={styles.HeaderButton} 
                onPress={()=>navigation.navigate('Board',{
                    title:data.title,
                    pinTitle: route.params.pinTitle,
                    about: route.params.about,
                    image: route.params.image
                })}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Next</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize:15}}>
                    Boards are where you save your Pins
                </Text>
                <TextInput 
                style={{fontSize:30,fontWeight:"bold"}}
                placeholder='Name your first board'
                placeholderTextColor='#a3a3a3'
                >{data.title}</TextInput>
                <Text style={{marginVertical:10}}>Can't think of a name? Tap one of these:</Text>
                <ScrollView horizontal={true}> 
                    <TouchableOpacity 
                    onPress={(val)=>{setData({title:"Stuff to buy"})
                    }}
                    style={{backgroundColor:'#e2e2e2',padding:10,}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Stuff to buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={(val)=>{setData({title:"Places to visit"})
                    }}
                     style={{backgroundColor:'#e2e2e2',padding:10,marginHorizontal:5}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Places to visit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={(val)=>{setData({title:"Projects to try"})
                    }}
                     style={{backgroundColor:'#e2e2e2',padding:10,marginHorizontal:2.5}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Projects to try</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={(val)=>{setData({title:"Things to wear"})
                    }}
                     style={{backgroundColor:'#e2e2e2',padding:10,marginHorizontal:2.5}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Things to wear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={(val)=>{setData({title:"Recipes to cook"})
                    }}
                     style={{backgroundColor:'#e2e2e2',padding:10,marginHorizontal:2.5}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Recipes to cook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={(val)=>{setData({title:"Ideas for the house"})
                    }}
                     style={{backgroundColor:'#e2e2e2',padding:10,marginHorizontal:2.5}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Ideas for the house</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Text>Add collaborators</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flex:3}}>
                    <Ionicons name='md-contact' size={40}  color='#808888'/>
                    </View>
                    <View style={{backgroundColor:'#e2e2e2',borderRadius:50,padding:10}}>
                    <Ionicons name='md-person-add' size={30} color='#808888'/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        marginTop: statusBar_Height,
        marginHorizontal: 20
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    HeaderText: {
        flex: 1,
        fontWeight: 'bold',
        marginHorizontal:20
    },
    HeaderButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bd081c',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
})