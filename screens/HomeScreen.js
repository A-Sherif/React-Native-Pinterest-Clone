import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, RefreshControl } from 'react-native';
import Constants from 'expo-constants'

import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    image: { uri: 'https://i.pravatar.cc/1000' },
    title: ''
  }, {
    id: '2',
    image: { uri: 'https://i.pravatar.cc/2000' },
    title: ''
  }, {
    id: '3',
    image: { uri: 'https://i.pravatar.cc/300' },
    title: ''
  }, {
    id: '4',
    image: { uri: 'https://i.pravatar.cc/400' },
    title: ''
  }, {
    id: '5',
    image: { uri: 'https://i.pravatar.cc/500' },
    title: ''
  }, {
    id: '6',
    image: { uri: 'https://i.pravatar.cc/600' },
    title: ''
  }, {
    id: '7',
    image: { uri: 'https://i.pravatar.cc/700' },
    title: ''
  }, {
    id: '8',
    image: { uri: 'https://i.pravatar.cc/800' },
    title: ''
  }, {
    id: '9',
    image: { uri: 'https://i.pravatar.cc/900' },
    title: ''
  }, {
    id: '10',
    image: { uri: 'https://i.pravatar.cc/1010' },
    title: ''
  },
]

function Pin({ id, image, title }) {
  return (
    <View style={styles.PinContainer}>
      <View>
        <View style={styles.ImageContainer}>
          <Image source={image} height={250} width={180} style={styles.Image} />
        </View>
        <View style={styles.PinTitle}>
          <Text>{title}</Text>
          <Ionicons name={'ios-more'} size={15} />
        </View>
      </View>
    </View>
  );
}

export default function HomeScreen({ route,navigation }) {
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);

  //   wait(2000).then(() => setRefreshing(false));
  // }, [refreshing]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.Header}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity style={styles.Selected}>
            <Text style={styles.SelectedText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, marginHorizontal: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Following</Text>
          </TouchableOpacity></View>
      </ScrollView>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => (
          <Pin
            image={item.image}
            title={item.title}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  Header: {
    flexDirection: 'row',
    padding: 10
  },
  Selected: {
    backgroundColor: '#000',
    borderRadius: 50,
    width: 70,
    padding: 10
  },
  SelectedText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  PinContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  ImageContainer: {
    height: 250,
    width: 180,
    borderRadius: 20,
    backgroundColor: '#e2e2e2'
  },
  Image: {
    height: 250,
    width: 180,
    resizeMode: 'cover',
    borderRadius: 20,
    backgroundColor: '#e2e2e2'
  },
  PinTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
})
