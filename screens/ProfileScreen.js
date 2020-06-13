import React from 'react'
import {View,Text, TextInput ,TouchableOpacity,ScrollView,Image, FlatList,RefreshControl,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const DATA=[
  {
    id:'1',
    image:{uri:'https://i.pravatar.cc/1000'},
    title:'wallpapers',
    pinNo: 1,
    date: '1mo'
  },{
    id:'2',
    image:{uri:'https://i.pravatar.cc/200'},
    title:'avatars',
    pinNo: 1,
    date: '1mo'
  },{
    id:'3',
    image:{uri:'https://i.pravatar.cc/300'},
    title:'',
    pinNo: 1,
    date: '1mo'
  },
  ]

function Pin({id,image,title,pinNo,date}){
  return(
    <View style={styles.pinContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={image} height={250} width={180} style={styles.Board}/>
        </View>
        <View>
          <Text style={{marginRight: 10,fontWeight:'bold',fontSize:20}}>{title}</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginRight:5}}>{pinNo} pin</Text>
          <Text>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function Profile({navigation}){
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    return(
        <View style={styles.Container}>
          <View>
              {/* <TouchableOpacity>
                  <Ionicons name='md-contact' size={50}/>
              </TouchableOpacity> */}
              <View style={{marginVertical:5}}>
                <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
                  <Ionicons name='ios-arrow-up' size={30}/>
                  <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                  <Ionicons name='md-settings' size={30}/>
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',alignSelf:'center'}}><Ionicons name='md-contact' size={100}/></View>
                <Text style={{fontSize:40, fontWeight:'bold',textAlign:"center"}}>John Doe</Text>
                <View style={{flexDirection:'row', alignItems:"center",justifyContent:"center"}}>
                  <Text style={{marginHorizontal:10}}>0 followers</Text>
                  <Text>0 following</Text>
                </View>
              </View>
              <View style={styles.nav}>
                  <TouchableOpacity style={styles.Selected}>
                    <Text style={{color:'#fff'}}>Boards</Text>
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
                  <Ionicons name='md-search' size={25}/>
              </TextInput>
              <TouchableOpacity
              >
                <Ionicons name='md-switch' size={30}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name='md-add' size={30}/>
              </TouchableOpacity>
          </View>
          <FlatList
        horizontal={false}
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => (
          <Pin
            image={item.image}
            title={item.title}
            date={item.date}
            pinNo={item.pinNo}
          />
        )}
        keyExtractor={item=>item.id}
      />
        </View>
    )
}


const styles= StyleSheet.create({
  Container: {
      marginTop: 25,
      marginHorizontal: 10,
      display: 'flex',
      flex: 1
    },
    Header: {
      
    },
    nav: {
      marginVertical: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:'center',
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
      justifyContent: "space-evenly",
      marginVertical:5,
    },
    SearchBar: {
      backgroundColor: '#e2e2e2',
      borderRadius: 50,
      padding: 10,
      width: 300
    },
    pinContainer: {
      marginHorizontal:10,
      marginVertical: 5,
      justifyContent: "space-between",
    },
    imageContainer: {
      height: 150,
      width: 180,
      borderRadius: 20,
      backgroundColor: '#e2e2e2'
    },
    Board: {
      height: 150,
      width: 180,
      borderRadius: 20,
      resizeMode: 'cover'
    },

})