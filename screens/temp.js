import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function AccountSettings({navigation}){
    return(
        <View style={styles.Conatainer}>
            <View style={[styles.Group,{flexDirection:"row"}]}>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                >
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <Text style={{flex:1,alignSelf:'center',textAlign:"center"}}>Account Settings</Text>
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{padding:5}}
            > 
            <View style={styles.Group}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={styles.Text}>Email</Text>
                    <Text>Email</Text>
                    <Ionicons name='ios-arrow-forward' size={30} />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={styles.Text}>Password</Text>
                <Text>Change password</Text>
                    <Ionicons name='ios-arrow-forward' size={30} />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={styles.Text}>Country/region</Text>
                <Text>Ghana</Text>
                    <Ionicons name='ios-arrow-forward' size={30} />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={styles.Text}>Gender</Text>
                <Text>Male</Text>
                    <Ionicons name='ios-arrow-forward' size={30} />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={styles.Text}>Login options</Text>
                <Ionicons name='ios-arrow-forward' size={30} />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={styles.Text}>Claimed accounts</Text>
                    <Ionicons name='ios-arrow-forward' size={30} />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={styles.Text}>App theme</Text>
                <Text>Set by battery saver</Text>
                    <Ionicons name='ios-arrow-forward' size={30} />
                </View>
                <View>
                <Text style={styles.Text}>Home feed</Text>
                <Text>Change the boards,activity and topics that are used for recommendations</Text>
                </View>
            </View>
            <View>
              <Text style={styles.Text}>Deactivate account</Text>
              <Text>Hide your Pins and profile</Text>
            </View>
            <View>
              <Text style={styles.Text}>Close account</Text>
              <Text>Delete your account and account data</Text>
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
        flex:2,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    Forward: {
        flex: 12,
        justifyContent: "space-between",
        flexDirection: "row"
    }
})