import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

export default function Gender({navigation}){
    return(
        <View>
            <View style={[styles.Group,{flexDirection:"row"}]}>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={styles.Icon}
                >
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <Text style={{flex:3,alignSelf:'center',textAlign:"center"}}>Gender</Text>
                <TouchableOpacity style={{backgroundColor:'#e2e2e2',borderRadius:10,flex:1,alignContent:'center'}}>
                  <Text style={{fontWeight:"bold", textAlign:"center"}}>Done</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Text>Male</Text>
                </View>
                <View>
                    <Text>Female</Text>
                </View>
                <View>
                    <Text>Non-binary</Text>
                </View>
            </View>
        </View>
    )
}