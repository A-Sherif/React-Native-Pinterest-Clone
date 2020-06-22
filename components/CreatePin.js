import React from "react";
import Constants from 'expo-constants'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker';

const statusBar_Height = Constants.statusBarHeight
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function CreatePin({ navigation }) {

    let [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='md-close' size={30} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>All photos</Text>
                <TouchableOpacity style={styles.HeaderButton} 
                onPress={()=>navigation.navigate('Edit Pin',{
                    image:selectedImage.localUri
                })}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {selectedImage !== null ?
                    <View style={styles.container}>
                        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                    </View>
                    :
                    <Ionicons name='md-image' size={height / 3} />
                }
            </View>
            <View style={{flexDirection:'row',marginVertical:10}}>
                <TouchableOpacity onPress={openImagePickerAsync} style={{ backgroundColor: '#e2e2e2', padding: 20,marginHorizontal:5,borderRadius:5}}>
                        <Ionicons name='md-photos' size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#e2e2e2', padding: 20,marginHorizontal:5,borderRadius:5}}>
                        <Ionicons name='md-camera' size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#e2e2e2', padding: 20,marginHorizontal:5,borderRadius:5 }}>
                        <Ionicons name='ios-globe' size={50} />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        marginTop: statusBar_Height,
        marginHorizontal: 10
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    HeaderText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    HeaderButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bd081c',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    thumbnail: {
        width: width,
        height: 0.7*height,
        resizeMode: 'contain',
    },
})