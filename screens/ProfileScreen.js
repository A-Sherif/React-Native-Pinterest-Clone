import React from 'react'
import Constants from 'expo-constants'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Dimensions, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const statusBar_Height = Constants.statusBarHeight
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
function Pin({ id, image, title, pinNo, date }) {
  return (
    <View style={styles.pinContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} height={250} width={180} style={styles.Board} />
      </View>
      <View>
        <Text style={{ marginRight: 10, fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 5 }}>{pinNo} pin</Text>
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  );
}

export default function Profile({ route,navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [switchModalVisible, setSwitchModalVisible] = React.useState(false);
  return (
    <View style={styles.Container}>
      <View>
        {/* <TouchableOpacity>
                  <Ionicons name='md-contact' size={50}/>
              </TouchableOpacity> */}
        <View style={{ marginVertical: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Ionicons name='ios-arrow-up' size={30} />
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Ionicons name='md-settings' size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignSelf: 'center' }}><Ionicons name='md-contact' size={100} /></View>
          <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: "center" }}>User</Text>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
            <Text style={{ marginHorizontal: 10 }}>0 followers &bull; 0 following</Text>
          </View>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.Selected}>
            <Text style={{ color: '#fff' }}>Boards</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Pins</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Controls}>
        <TextInput style={styles.SearchBar}
          placeholder={'Search your pins'}
        >
          <Ionicons name='md-search' size={25} />
        </TextInput>
        <TouchableOpacity style={{marginHorizontal:10}}
        onPress={()=>{setSwitchModalVisible(true)}}
        >
          <Ionicons name='md-switch' size={35} />
        </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={switchModalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
          <TouchableWithoutFeedback onPress={() => {
            setSwitchModalVisible(!switchModalVisible);
          }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Sort by</Text>
                <TouchableOpacity
                  onPress={()=>setModalVisible(!ModalVisible)}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold'}}>A to Z</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Drag and drop</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 30 }}>Last saved to</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.closeButton, backgroundColor: "#e2e2e2" }}
                  onPress={() => {
                    setSwitchModalVisible(!switchModalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableWithoutFeedback>
          </Modal>

        <TouchableOpacity>
          <Ionicons name='md-add' size={35}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </TouchableOpacity>
        <View style={styles.centeredView}>
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
                <Text style={styles.modalText}>Create</Text>
                <TouchableOpacity
                  onPress={()=>[navigation.navigate('Create Pin'),setModalVisible(!modalVisible)]}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Pins</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 30 }}>Board</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.closeButton, backgroundColor: "#e2e2e2" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </View>
      <Text style={{color:'#8a8888',textAlign:'center',fontSize:19,marginVertical:20}}>You haven't saved any ideas yet</Text>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Search')}
      style={{alignSelf:'center',backgroundColor:'#e2e2e2',padding:20,borderRadius:50}}>
        <Text style={{fontWeight:'bold'}}>Find Ideas</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  Container: {
    paddingTop: statusBar_Height,
    marginHorizontal: 10,
    display: 'flex',
    flex: 1
  },
  nav: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },
  Selected: {
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 10
  },
  Controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  SearchBar: {
    backgroundColor: '#e2e2e2',
    borderRadius: 50,
    padding: 10,
    width: 0.75 * width
  },
  pinContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: "space-around",
  },
  imageContainer: {
    height: 0.2 * height,
    width: 0.45 * width,
    borderRadius: 20,
    backgroundColor: '#e2e2e2'
  },
  Board: {
    height: 0.2 * height,
    width: 0.45 * width,
    borderRadius: 20,
    resizeMode: 'cover'
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#e2e2e2",
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 0.25 * width
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 15
  },
  modalText: {
    fontSize: 15,
    marginBottom: 15,
  }
})