import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const posts=[
  {
    image:require('../assets/images/1589556644438.jpg'),
    title:'Stay - le Youth'
  },{
    image:require('../assets/images/1589556669643.jpg'),
    title:'Baiana - Bakermat'
  },{
    image:require('../assets/images/1589556631103.jpg'),
    title:'death bed - powfuu'
  },
]

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row",alignItems:'center',marginVertical:5}}>
      <TextInput style={{backgroundColor:'#e2e2e2', borderRadius: 50, padding:10, width: 350,justifyContent:"space-between"}}
        placeholder={'Search your pins'}
      >
        <Ionicons name='md-search' size={25}/>
      </TextInput>
      <TouchableOpacity>
        <Ionicons name='md-camera' size={30}/>
      </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{marginTop:10}}>
          <Text>Ideas for you</Text>
          {posts.map(post=>{
              return(
                <View style={{marginVertical: 5, justifyContent:"space-evenly",flexDirection:"row"}}>
                  <View style={{backgroundColor:'#e2e2e2', height:100,width:200,borderRadius:20}} >
                    <ImageBackground source={post.image}  borderRadius={20} style={{height:100,width:200,borderRadius:20,resizeMode: "cover",justifyContent: "center" }}>
                    <Text style={{fontSize:30,color:'#fff',textAlign:"center"}}>{post.title}</Text>
                    </ImageBackground>
                  </View>
                  <View style={{backgroundColor:'#e2e2e2', height:100,width:200,borderRadius:20}} >
                    <ImageBackground source={post.image}   borderRadius={20}  style={{height:100, width:200,borderRadius:20,resizeMode: "cover",justifyContent: "center" }}>
                    <Text style={{fontSize:30,color:'#fff',textAlign:"center"}}>{post.title}</Text>
                    </ImageBackground>
                  </View>
                </View>
              )
            })}
        </View>
        <View style={{marginTop:10}}>
          <Text>Popular on Pinterest</Text>
          {posts.map(post=>{
              return(
                <View style={{marginVertical:5,flexDirection:"row"}}>
                  <View>
                  <View style={{backgroundColor:'#e2e2e2',marginHorizontal:5, height:100,width:200,borderRadius:20}} >
                    <ImageBackground source={post.image}  borderRadius={20}  style={{height:100,width:200,resizeMode: "cover",justifyContent: "center" }}>
                    <Text style={{fontSize:30,color:'#fff',textAlign:"center"}}>{post.title}</Text>
                    </ImageBackground>
                  </View>
                  </View>
                  <View style={{flex:1,backgroundColor:'#e2e2e2', borderRadius:20}} >
                    <ImageBackground source={post.image}  borderRadius={20}   style={{height:100,width:200,resizeMode: "cover",justifyContent: "center" }}>
                    <Text style={{fontSize:30,color:'#fff',textAlign:"center"}}>{post.title}</Text>
                    </ImageBackground>
                  </View>
                </View>
              )
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop:25,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
