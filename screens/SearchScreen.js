import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const posts = [
  {
    id: '1',
    image: { uri: 'https://i.pravatar.cc/1000' },
    title: 'Home decor'
  }, {
    id: '2',
    image: { uri: 'https://i.pravatar.cc/200' },
    title: "Men's fitness"
  }, {
    id: '3',
    image: { uri: 'https://i.pravatar.cc/300' },
    title: "Tattos"
  }, {
    id: '4',
    image: { uri: 'https://i.pravatar.cc/400' },
    title: 'Anime'
  }, {
    id: '5',
    image: { uri: 'https://i.pravatar.cc/500' },
    title: 'Coding'
  }, {
    id: '6',
    image: { uri: 'https://i.pravatar.cc/600' },
    title: 'Inspirational Quotes'
  },
]

export default function SearchScreen() {

  function Recommended({ image, title }) {
    return (
      <View style={styles.RecommendedContainer}>
        <View style={styles.innerRecommendedContainer} >
          <ImageBackground source={image} borderRadius={20} style={styles.backgroundImage}>
            <View style={styles.innerbackgroundImage}>
              <Text style={{ fontSize: 20, color: '#fff', textAlign: "center" }}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <TextInput style={styles.textInput}
          placeholder={'Search your pins'}
        >
          <Ionicons name='md-search' size={25} />
        </TextInput>
        <TouchableOpacity>
          <Ionicons name='md-camera' size={30} />
        </TouchableOpacity>
      </View>
      <Text style={{marginHorizontal:15,fontWeight:'bold',fontSize:15}}>Ideas for you</Text>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={posts}
        renderItem={({ item }) => (
          <Recommended
            id={item.id}
            image={item.image}
            title={item.title}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 25,
  },
  innercontainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 5
  },
  textInput: {
    backgroundColor: '#e2e2e2',
    borderRadius: 50,
    padding: 10,
    width: 350,
    justifyContent: "space-between"
  },
  RecommendedContainer: {
    marginVertical: 5,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  innerRecommendedContainer: {
    backgroundColor: '#e2e2e2',
    height: 100,
    width: 190,
    borderRadius: 20,
    marginHorizontal: 5
  },
  backgroundImage: {
    height: 100,
    width: 190,
    borderRadius: 20,
    resizeMode: "cover",
    justifyContent: "center"
  },
  innerbackgroundImage: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});
