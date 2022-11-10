import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';


const Connection = () => {

  const navigation = useNavigation(); 

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => navigation.navigate("Countries")}>
          <Image source={require("../../img/flags/japan.png")} style={styles.image}/>
          <Text style={styles.japan}>Japan</Text>
          <Text style={styles.connection}>automatic connection</Text>
          <Image source={require("../../img/icons/chevron-right.png")} style={styles.arrow}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Connection

const styles = StyleSheet.create({
  container:{
    marginTop: 175, 
    marginLeft: 15,
    width: 330,
    height: 84,
    backgroundColor: "#21374B",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#96CBFF",
  },
  image:{
    width: 32.67,
    height: 32.67,
    marginTop: 26,
    marginLeft: 23,
    position: 'absolute',
  },
  japan:{
    color: "#E2E2E6",
    fontFamily: "Inter_500Medium",
    marginTop: 18.67,
    marginLeft: 72.67,
    position: "absolute",
    fontSize: 18.67
  },
  connection:{
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    marginTop: 46.67,
    position: "absolute",
    marginLeft: 72.33,
    color: "#E2E2E6"
  },
  arrow:{
    width: 28,
    height: 28,
    marginTop: 28,
    marginLeft: 290,
    color: "#96CBFF",
    position: "absolute",
  }
})