import React from 'react';
import Constants from 'expo-constants'
import { Image, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';



export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Header}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity style={styles.Selected}>
            <Text style={styles.SelectedText}>Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, marginHorizontal: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Inbox</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>

      <View style={styles.PinContainer}>
        <Text style={{ marginVertical: 5 }}>We think you might like these pins</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.ImageContainer}>
            <Image source={{ uri: 'https://i.pravatar.cc/1100' }} height={250} width={180} style={[styles.Image, { borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }]} />
          </View>
          <View style={styles.ImageContainer}>
            <Image source={{ uri: 'https://i.pravatar.cc/1200' }} height={250} width={180} style={styles.Image} />
          </View>
          <View style={styles.ImageContainer}>
            <Image source={{ uri: 'https://i.pravatar.cc/1300' }} height={250} width={180} style={[styles.Image, { borderTopRightRadius: 20, borderBottomRightRadius: 20 }]} />
          </View>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

  Header: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight
  },
  Selected: {
    backgroundColor: '#000',
    borderRadius: 50,
    width: 100,
    padding: 10
  },
  SelectedText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  PinContainer: {
    flex:1,
    backgroundColor:'#e3a3c4',
    justifyContent:'flex-start',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ImageContainer: {
    height: 225,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    flexDirection: "row",
    marginHorizontal: 1,
  },
  Image: {
    height: 225,
    width: 125,
    resizeMode: 'cover',
    backgroundColor: '#e2e2e2'
  },
})
