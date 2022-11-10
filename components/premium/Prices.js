import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const Prices = () => {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <TouchableOpacity activeOpacity={0.5} style={styles.container1}>
          <Text style={styles.headerText}>1 month</Text>
          <Text style={styles.dollar}>
            $
            <Text style={{fontSize: 28}}>9,99</Text>
          </Text>
          <Text style={styles.bottomText}>per month</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.container2}>
          <Text style={styles.headerText}>6 months</Text>
          <Text style={styles.dollar}>
            $
            <Text style={{fontSize: 28}}>5,99</Text>
          </Text>
          <Text style={styles.bottomText}>per month</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.container3}>
          <Text style={styles.headerText}>3 month</Text>
          <Text style={styles.dollar}>
            $
            <Text style={{fontSize: 28}}>7,99</Text>
          </Text>
          <Text style={styles.bottomText}>per month</Text>
        </TouchableOpacity>
        <View style={styles.saveContainer}>
          <Text style={styles.saveText}>saving 40%</Text>
        </View>
      </View>
    )
  }
}

export default Prices

const styles = StyleSheet.create({
  container1: {
    width: 100,
    height: 115,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E6",
    marginTop: 67,
    marginLeft: 15,
  },
  container2: {
    width: 105,
    height: 115,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#96CBFF",
    marginTop: 67,
    position: "absolute",
    marginLeft: 130,
    backgroundColor: "#101F2D"
  },
  container3: {
    width: 100,
    height: 115,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E6",
    marginTop: 67,
    marginLeft: 245,
    position: "absolute"
  },
  headerText: {
    fontSize: 13, 
    fontFamily: "Inter_500Medium",  
    marginTop: 16,
    color: "#E2E2E6",
    textAlign: "center",
  },
  dollar: {
    fontSize: 18, 
    color: "white",
    fontFamily: "Inter_500Medium", 
    textAlign: "center", 
    margin: 5, 
  },
  bottomText: {
    fontSize: 12, 
    fontFamily: "Inter_400Regular",
    color: "#C2C7CF", 
    textAlign: "center"
  },
  saveText:{
    fontSize: 12, 
    fontFamily: "Inter_500Medium", 
    color: "#101F2D", 
    textAlign: "center"
  },
  saveContainer: {
    width: 79, 
    height: 20,
    borderRadius: 5, 
    marginTop: 58, 
    backgroundColor: "#96CBFF", 
    position: "absolute", 
    marginLeft: 143.5
  }
})