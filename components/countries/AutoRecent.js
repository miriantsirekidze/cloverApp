import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Line from './Line';

const width = Dimensions.get('window').width;

const AutoRecent = () => {

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular
  });

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <Text style={styles.automatic}>AUTOMATIC CONNECTION</Text>
        <Line flag={require("../../img/flags/japan.png")} countryName={"Japan"} percent={"33%"}/>
        <Text style={styles.automatic}>RECENT CONNECTIONS</Text>
        <Line flag={require("../../img/flags/canada.png")} countryName={"Canada"} percent={"56%"}/>
        <Line flag={require("../../img/flags/austria.png")} countryName={"Austria"} percent={"96%"}/>
        <Line flag={require("../../img/flags/thailand.png")} countryName={"Thailand"} percent={"40%"}/>
        <Text style={styles.all}>ALL (89)</Text>
      </View>
    )
  }

}

export default AutoRecent

const styles = StyleSheet.create({
  automatic: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    color: "#A3A7AE",
    marginTop: 14,
    marginLeft: 14
  },
  all: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    color: "#A3A7AE",
    marginTop: 14,
    marginLeft: 14
  }
})