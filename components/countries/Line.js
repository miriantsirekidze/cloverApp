import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';


const Line = (props) => {

  const percentProp = props.percent;
  const parsedPercent = percentProp.replace(/[^a-zA-Z0-9 ]/g, '');
  const number = parseInt(parsedPercent);

  const [ball, setBall] = useState(false)

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular
  });

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <View style={{position: "absolute", marginTop: 17, marginLeft: 15}}>
          <Image source={props.flag} style={styles.flag}/>
          <Text style={styles.countryName}>{props.countryName}</Text>
        </View>
        <View style={{ marginTop: 28.5, flexDirection: "row", marginLeft: 270}}>
          <View style={{...styles?.ball, backgroundColor: number <= 40 ? "#7FE3B1" : number > 40 && number < 70 ? "#F38E41" : "#DD3730"}}/>
          <Text style={styles.percentage}>{props.percent}</Text>
          <TouchableOpacity style={styles.selectedOutside} onPress={() => setBall(true)}>
            {ball ? <View style={styles.selectedInside}/> : <View/>}
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

export default Line

const styles = StyleSheet.create({
  automatic: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    color: "#E2E2E6",
    marginTop: 14,
    marginLeft: 14
  }, 
  flag: {
    width: 28,
    height: 28,
    borderRadius: 14,
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1, 
    borderColor: "white"
  }, 
  countryName: {
    fontSize: 19,
    fontFamily: "Inter_500Medium",
    color: "#E2E2E6",
    position: "absolute",
    marginLeft: 40
  },
  ball: {
    width: 8, 
    height: 8, 
    borderRadius: 4, 
  },
  percentage: {
    marginLeft: 5, 
    bottom: 5.5, 
    color: "#E2E2E6", 
    fontFamily: "Inter_400Regular", 
    fontSize: 12
  },
  selectedOutside: {
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    backgroundColor: "#101F2D", 
    borderWidth: 2, 
    borderColor: "#96CBFF", 
    justifyContent: "center", 
    alignItems: "center",
    marginLeft: 15,
    bottom: 6
  },
  selectedInside: {
    width: 10, 
    height: 10, 
    backgroundColor: "#96CBFF", 
    borderRadius: 6
  }
})