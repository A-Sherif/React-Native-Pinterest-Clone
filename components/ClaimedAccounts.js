import React from 'react'
import {View,Text,Switch} from 'react-native'

export default function LoginOptions({navigation}){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View>
            <View style={[styles.Group,{flexDirection:"row"}]}>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={styles.Icon}
                >
                    <Ionicons name='ios-arrow-back' size={30}/>
                </TouchableOpacity>
                <Text style={{alignSelf:'center',textAlign:"center"}}>Login options</Text>
            </View>
            <View>
                <View>
                    <Text>Instagram</Text>
                    <Switch
                        trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                        thumbColor={isEnabled ? "#043f61" : "#a3a3a3"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                </View>
                <View>
                    <Text>Etsy</Text>
                    <Switch
                        trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                        thumbColor={isEnabled ? "#043f61" : "#a3a3a3"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                </View>
                <View>
                    <Text>Yotube</Text>
                    <Switch
                        trackColor={{ false: "#e2e2e2", true: "#043f61" }}
                        thumbColor={isEnabled ? "#043f61" : "#a3a3a3"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                </View>
            </View>
        </View>
    )
}