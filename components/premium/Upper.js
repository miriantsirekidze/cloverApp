import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
  useFonts,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const Upper = () => {

  const navigation = useNavigation(); 

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <TouchableOpacity style={{marginTop: 69, marginLeft: 24}} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../img/icons/close.png")} style={styles.close}/>
        </TouchableOpacity>
        <Image source={require("../../img/icons/logo.png")} style={styles.logo}/>
        <Text style={styles.upperText}>Get Premium Today</Text>
        <Text style={styles.lowerText}>Protect yourself from data interception using the Internet in any cafe, airport or park thanks to bank-grade encryption</Text>
      </View>
    )
  }
}

export default Upper


const styles = StyleSheet.create({
  close: {
    width: 30,
    height: 30,
    color: "#E2E2E6",
    position: "absolute",
  }, 
  logo: {
    width: 55.3,
    height: 56,
    marginTop: 80,
    marginLeft: 150
  },
  upperText: {
    fontSize: 22,
    color: "#F2F1F1",
    fontFamily: "Inter_500Medium",
    textAlign: "center",
    marginTop: 20,
  },
  lowerText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "400",
    color: "#E2E2E6",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5
  }
})