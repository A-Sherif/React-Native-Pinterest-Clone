import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
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
                <Text style={styles.Text}>Settings</Text>
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
            <View style={styles.Group}> 
                <View>
                    <TouchableOpacity style={styles.Card}
                        onPress={()=>navigation.navigate('Edit Profile')}
                    >
                        <Ionicons name='md-create' size={30} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>Edit Profile</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.Card}
                        onPress={()=>navigation.navigate('Account Settings')}
                    >
                        <Ionicons name='md-person' size={30} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>Account Settings</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='md-trending-up' size={30} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>Get a free business acccount</Text>
                            <Ionicons name='ios-arrow-forward' size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='md-notifications' size={30} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>Notifications</Text>
                            <Ionicons name='ios-arrow-forward' size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='md-lock' size={30} style={styles.Icon} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>Privacy & data</Text>
                            <Ionicons name='ios-arrow-forward' size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Group}>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='md-help' size={30} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>Get help</Text>
                            <Ionicons name='ios-arrow-forward' size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='ios-list' size={30} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>See Terms & Privacy</Text>
                            <Ionicons name='ios-arrow-forward' size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='md-information' size={50} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>About</Text>
                            <Ionicons name='ios-arrow-forward' size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='md-swap' size={30} style={styles.Icon}/>
                        <View style={styles.Forward}>
                            <Text style={styles.Text}>Add account</Text>
                            <Ionicons name='ios-arrow-forward' size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Ionicons name='md-power' size={30} color='gray' style={styles.Icon}/>
                        <Text style={[styles.Text,{color:'gray',flex:12}]}>Log out</Text>
                    </TouchableOpacity>
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
        flex:2,
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