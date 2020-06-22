import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,TouchableWithoutFeedback,Modal,Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';

const statusBar_Height = Constants.statusBarHeight
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Settings({ navigation,route }) {

    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={styles.Conatainer}>
            <View style={[styles.Group, { flexDirection: "row" }]}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='ios-arrow-back' size={30} />
                </TouchableOpacity>
                <Text style={{ flex: 1, alignSelf: 'center', textAlign: "center" }}>Account Settings</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.Group}>
                    <View>
                        <TouchableOpacity style={[styles.Card, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                            onPress={() => navigation.navigate('Change Email')}
                        >
                            <Text style={[styles.Text, { flex: 4}]}>Email</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>Email</Text>
                                <Ionicons name='ios-arrow-forward' size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.Card, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                            onPress={() => navigation.navigate('Change Password')}
                        >
                            <Text style={[styles.Text, { flex: 1.5 }]}>Password</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>Change password</Text>
                                <Ionicons name='ios-arrow-forward' size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.Card, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                            onPress={() => navigation.navigate('Change Country')}
                        >
                            <Text style={[styles.Text, { flex: 4}]}>Country/region</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>Ghana</Text>
                                <Ionicons name='ios-arrow-forward' size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.Card, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                            onPress={() => navigation.navigate('Change Gender')}
                        >
                            <Text style={[styles.Text, { flex: 2 }]}>Gender</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>Change gender</Text>
                                <Ionicons name='ios-arrow-forward' size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.Card, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                            onPress={() => navigation.navigate('Login options')}
                        >
                            <Text style={[styles.Text, { flex: 4}]}>Login options</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.Card, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                            onPress={() => navigation.navigate('Claimed accounts')}
                        >
                            <Text style={[styles.Text, { flex: 4}]}>Claimed accounts</Text>
                            <Ionicons name='ios-arrow-forward' size={30} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.Card, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={[styles.Text, { flex: 1.5 }]}>App theme</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                                <Text>Set by battery saver</Text>
                                <Ionicons name='ios-arrow-forward' size={30} />
                            </View>
                        </TouchableOpacity>
                        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
          <TouchableWithoutFeedback onPress={() => {
            setModalVisible(!modalVisible);
          }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                      <TouchableOpacity
                  onPress={()=>setModalVisible(!modalVisible)}
                >
                    <Ionicons name='md-close' size={30}/>
                    </TouchableOpacity>
                    <Text style={styles.modalText}>Choose app theme</Text>
                </View>
                <TouchableOpacity
                  onPress={()=>setModalVisible(!modalVisible)}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Set by battery saver</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>setModalVisible(!modalVisible)}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold',marginVertical:10}}>Light</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>setModalVisible(!modalVisible)}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Dark</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableWithoutFeedback>
          </Modal>
                    </View>
                </View>
                <View style={{ marginVertical: 15 }}>
                    <Text style={styles.Text}>Home feed</Text>
                    <Text style={{ marginHorizontal: 15 }}>Change the boards,activity and topics that are used for recommendations</Text>
                </View>
                <View style={{ marginVertical: 15 }}>
                    <Text style={styles.Text}>Deactivate account</Text>
                    <Text style={{ marginHorizontal: 15 }}>Hide your Pins and profile</Text>
                </View>
                <View style={{ marginVertical: 15, marginBottom: 150 }}>
                    <Text style={styles.Text}>Close account</Text>
                    <Text style={{ marginHorizontal: 15 }}>Delete your account and account data</Text>
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
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      modalView: {
        width: width,
        backgroundColor: "white",
        padding: 35,
      },
      textStyle: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 15
      },
      modalText: {
        fontSize: 15,
        marginHorizontal:10
      }
})