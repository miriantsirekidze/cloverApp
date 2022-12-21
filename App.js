import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Premium from './screens/Premium'
import Countries from './screens/Countries';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, animation: 'slide_from_left'}}/>
        <Stack.Screen name="Premium" component={Premium} options={{headerShown: false, animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="Countries" component={Countries} options={{headerShown: false, animation: 'slide_from_right'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
