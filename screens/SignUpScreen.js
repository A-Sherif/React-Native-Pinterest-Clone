import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import CreatePassword from '../components/CreatePassword'
import SetName from '../components/SetName'
import GetAge from '../components/GetAge'
import GetGender from '../components/GetGender'
import GetCountry from '../components/CountryPicker'
import Interests from '../components/Interests'

const Stack = createStackNavigator();

export default function SignUp(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Create Password" component={CreatePassword} />
            <Stack.Screen name="Set Name" component={SetName} />
            <Stack.Screen name="Get Age" component={GetAge} />
            <Stack.Screen name="Get Gender" component={GetGender} />
            <Stack.Screen name="Country" component={GetCountry} />
            <Stack.Screen name="Interests" component={Interests} />
        </Stack.Navigator>
    )
}