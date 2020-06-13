import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Settings({navigation}){
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
            >
            <View style={styles.Group}> 
                <View>
                    <TouchableOpacity style={[styles.Card,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}
                        onPress={()=>navigation.navigate('Change Email')}
                    >
                        <Text style={[styles.Text,{flex:4}]}>Email</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text>Email</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.Card,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}
                        onPress={()=>navigation.navigate('Change Password')}
                    >
                        <Text style={[styles.Text,{flex:1.5}]}>Password</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text>Change password</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.Card,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}
                        onPress={()=>navigation.navigate('Change Country')}
                    >
                        <Text style={[styles.Text,{flex:4}]}>Country/region</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text>Ghana</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.Card,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}
                        onPress={()=>navigation.navigate('Change Gender')}
                    >
                        <Text style={[styles.Text,{flex:2}]}>Gender</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text>Change gender</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.Card,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}
                        onPress={()=>navigation.navigate('Login options')}
                    >
                        <Text style={[styles.Text,{flex:4}]}>Login options</Text>
                        <Ionicons name='ios-arrow-forward' size={30} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.Card,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}
                        onPress={()=>navigation.navigate('Claimed accounts')}
                    >
                        <Text style={[styles.Text,{flex:4}]}>Claimed accounts</Text>
                        <Ionicons name='ios-arrow-forward' size={30} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.Card,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}
                        onPress={()=>navigation.navigate('Edit Profile')}
                    >
                        <Text style={[styles.Text,{flex:1.5}]}>App theme</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
                            <Text>Set by battery saver</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginVertical:15}}>
                <Text style={styles.Text}>Home feed</Text>
                <Text style={{marginHorizontal:15}}>Change the boards,activity and topics that are used for recommendations</Text>
            </View>
            <View style={{marginVertical:15}}>
              <Text style={styles.Text}>Deactivate account</Text>
              <Text style={{marginHorizontal:15}}>Hide your Pins and profile</Text>
            </View>
            <View style={{marginVertical:15,marginBottom:150}}>
              <Text style={styles.Text}>Close account</Text>
              <Text style={{marginHorizontal:15}}>Delete your account and account data</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
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