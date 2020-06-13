import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Settings({navigation}){
    return(
        <View style={styles.Conatainer}>
            <View style={[styles.Group,{flexDirection:"row"}]}>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={styles.Icon}
                >
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <Text style={{flex:3,alignSelf:'center',textAlign:"center"}}>Edit profile</Text>
                <TouchableOpacity style={{backgroundColor:'#e2e2e2',borderRadius:10,flex:1,alignContent:'center'}}>
                  <Text style={{fontWeight:"bold", textAlign:"center"}}>Done</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{padding:5}}
            >
            <View style={styles.Group}> 
              <View>
                  <Text style={[styles.Text,{marginBottom:15}]}>Profile picture</Text>
                  <View style={{backgroundColor:'gray', borderRadius:100,height:200,width:200}}>
                    <View style={{backgroundColor:'#b5b5b5', borderRadius:25,height:50,width:50,alignSelf:"flex-end",alignItems:"center",justifyContent:"center",justifySelf:'flex-end'}}>
                      <Ionicons name='md-create' size={20}/>
                    </View>
                  </View>
              </View>
            </View>  
            <View style={styles.Group}>
              <Text style={styles.Text}>First Name</Text>
              <TextInput
                placeholder='First name'
                placeholderTextColor='#8a8a8a'
                style={[styles.Text,{fontSize:20,fontWeight:'bold'}]}
              ></TextInput>
            </View>
            <View style={styles.Group}>
              <Text style={styles.Text}>Surname</Text>
              <TextInput
                placeholder='Surname'
                placeholderTextColor='#8a8a8a'
                style={[styles.Text,{fontSize:20,fontWeight:'bold'}]}
              ></TextInput>
            </View>
            <View style={styles.Group}>
              <Text style={styles.Text}>Username</Text>
              <TextInput
                placeholder='Username'
                placeholderTextColor='#8a8a8a'
                style={[styles.Text,{fontSize:20,fontWeight:'bold'}]}
              ></TextInput>
            </View>
            <View style={styles.Group}>
              <Text style={styles.Text}>About you</Text>
              <TextInput
                placeholder='Add'
                placeholderTextColor='#8a8a8a'
                multiline={true}
                style={[styles.Text,{fontSize:20,fontWeight:'bold'}]}
              ></TextInput>
            </View>
            <View style={styles.Group}>
              <Text style={styles.Text}>Location</Text>
              <TextInput
                placeholder='Add'
                placeholderTextColor='#8a8a8a'
                multiline={true}
                style={[styles.Text,{fontSize:20,fontWeight:'bold'}]}
              ></TextInput>
            </View>
            <View style={styles.Group}>
              <Text style={styles.Text}>Website</Text>
              <TextInput
                placeholder='Add'
                placeholderTextColor='#8a8a8a'
                multiline={true}
                style={[styles.Text,{fontSize:20,fontWeight:'bold'}]}
              ></TextInput>
            </View>
            <View>
              <Text>Organise</Text>
              <View style={{marginVertical:5}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Auto-sort boards</Text>
                <Text>Choose how you want Pinterest to display your boards</Text>
              </View>
              <View style={{marginVertical:5,marginBottom:150}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Reorder boards</Text>
                <Text>Drag and drop to create a custom board order</Text>
              </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Conatainer: {
        display: 'flex',
        flex: 1,
        marginTop: 20,
        marginHorizontal: 10
    },
    Group: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    Card: {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 15,
    },
    Text: {
        flex:4,
        fontSize: 20,
        marginLeft: 15,
    },
    Forward: {
        flex: 12,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    Icon:{
        flex:1,
    }
})