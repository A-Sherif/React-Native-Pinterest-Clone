import React from 'react';
import Constants from 'expo-constants'
import { View, Text, TouchableOpacity, TextInput, Image, Dimensions,KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const statusBar_Height = Constants.statusBarHeight
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function EditPins({ route, navigation }) {
    const [data, setData] = React.useState({
        title: '',
        about: '',
        image: route.params.image,
        check_textInputChange: true
    })

    const titleTextInputChange = (titleVal) => {
        if (titleVal.length != 0) {
            setData({
                ...data,
                title: titleVal,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                pinTitle: titleVal,
                check_textInputChange: false
            })
        }
    }

    const aboutTextInputChange = (aboutVal) => {
            setData({
                ...data,
                about: aboutVal,
                check_textInputChange: true
            })
    }
    

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20}
            style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='ios-arrow-back' size={30} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Create Pin</Text>
                <TouchableOpacity style={styles.HeaderButton}
                    onPress={() => navigation.navigate('Choose Board',{
                        pinTitle: data.pinTitle,
                        about: data.about,
                        image: data.image
                    })}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Next</Text>
                </TouchableOpacity>
            </View>
                <Image source={{ uri: route.params.image }} style={styles.thumbnail} />
            <Text>Title</Text>
            <TextInput style={{ fontSize: 20, fontWeight: "bold", padding: 10, marginBottom: 10 }}
                placeholder='Give your Pin a title'
                placeholderTextColor='#a3a3a3'
                onChangeText={(titleVal) => titleTextInputChange(titleVal)}
            />
            <Text>Description</Text>
            <TextInput style={{ fontSize: 20, fontWeight: "bold", padding: 10, marginBottom: 10 }}
                placeholder='Say more about your Pin'
                placeholderTextColor='#a3a3a3'
                multiline={true}
                onChangeText={(aboutVal) => titleTextInputChange(aboutVal)}
            />
            <Text style={{ marginVertical: 10 }}>Destination website</Text>
            <TouchableOpacity style={{ backgroundColor: '#e2e2e2',padding:10,borderRadius:10 }}>
                <Text style={{ textAlign: "center" }}>Add</Text>
            </TouchableOpacity>
            <View style={{ flex : 1 }} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        justifyContent:'flex-end',
        marginTop: statusBar_Height,
        marginHorizontal: 20
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
        width: 0.9*width,
        height: 0.5 * height,
        marginBottom: 10,
        borderRadius: 10,
        resizeMode: 'contain',
    },
})