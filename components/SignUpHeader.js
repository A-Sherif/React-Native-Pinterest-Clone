import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Header(props,{navigation}){
    return(
        <View style={{flexDirection:"row", borderBottomWidth:1,borderBottomColor:'#e2e2e2',paddingVertical:5}}>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                >
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <Text style={styles.HeaderText}>{props.headerText}</Text>
            </View>
    )
}

styles = StyleSheet.create({
    HeaderText: {
        flex: 1,
        alignSelf: 'center',
        textAlign: "center",
        fontWeight: 'bold'
    },
})