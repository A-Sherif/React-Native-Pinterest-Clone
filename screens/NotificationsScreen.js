import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList ,RefreshControl } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const DATA=[
  {
    id:'1',
    image:{uri:'https://i.pravatar.cc/1000'},
    title:''
  },{
    id:'2',
    image:{uri:'https://i.pravatar.cc/200'},
    title:''
  },{
    id:'3',
    image:{uri:'https://i.pravatar.cc/300'},
    title:''
  },{
    id:'4',
    image:{uri:'https://i.pravatar.cc/400'},
    title:''
  },{
    id:'5',
    image:{uri:'https://i.pravatar.cc/500'},
    title:''
  },
]
  
function Pin({image}){
    return(
        <View style={styles.PinContainer}>
            <View>
                <Text style={{marginVertical:5}}>We think you might like these pins</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.ImageContainer}>
                        <Image source={image} height={250} width={180} style={[styles.Image,{borderTopLeftRadius: 20,borderBottomLeftRadius:20}]}/>
                    </View>
                    <View style={styles.ImageContainer}>
                    <Image source={image} height={250} width={180} style={styles.Image}/>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={image} height={250} width={180} style={[styles.Image,{borderTopRightRadius: 20,borderBottomRightRadius:20}]}/>
                    </View>
                </View>
            </View>
        </View>
    );
  }

  export default function NotificationScreen({navigation}) {
    // const [refreshing, setRefreshing] = React.useState(false);
  
    // const onRefresh = React.useCallback(() => {
    //   setRefreshing(true);
  
    //   wait(2000).then(() => setRefreshing(false));
    // }, [refreshing]);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Header}>
        <View style={{flexDirection: 'row', padding:10}}>
          <TouchableOpacity style={styles.Selected}>
            <Text style={styles.SelectedText}>Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:10, marginHorizontal: 10}}>
            <Text style={{textAlign:'center',fontWeight:'bold'}}>Inbox</Text>
          </TouchableOpacity></View>
        </ScrollView>

        <FlatList
        horizontal={false}
        numColumns={1}
        data={DATA}
        renderItem={({ item }) => (
          <Pin
            image={item.image}
          />
        )}
        keyExtractor={item=>item.id}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    justifyContent:'center', 
    flexDirection: 'row',
    padding: 20
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
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  ImageContainer: {
    height: 225,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    flexDirection:"row",
    marginHorizontal:1,
  },
  Image: {
    height: 225,
    width: 125,
    resizeMode: 'cover',
    backgroundColor: '#e2e2e2'
  },
  PinTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
})
