import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Premium from './screens/Premium'
import Countries from './screens/Countries';

const Stack = createNativeStackNavigator()

export default () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Premium" component={Premium}/>
      <Stack.Screen name="Countries" component={Countries}/>
    </Stack.Navigator>
  </NavigationContainer>
}