import { View, TouchableOpacity, TextInput, StyleSheet, Dimensions, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import {
  useFonts,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const width = Dimensions.get('window').width;

const SearchBar = () => {

  const navigation = useNavigation(); 

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  const [clicked, setClicked] = useState(false)
  const [text, setText] = useState(null)

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} hitSlop={{bottom: 30, left: 20, right: 20, top: 20}}>
          <View style={{width: 35, height: 35}}>
            <Image source={require("../../img/icons/arrow-left.png")} style={styles.arrow}/>
          </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => setClicked(true)} hitSlop={{bottom: 30, left: 20, right: 30, top: 20}}>
          <View>
            <Image source={require("../../img/icons/search.png")} style={styles.search}/>
          </View>
        </TouchableOpacity>
        {clicked ? <TextInput style={styles.searchBar} onChangeText={setText} value={text} placeholder="Enter Location" placeholderTextColor={"#E2E2E6"} /> : <Text style={styles.text}>Virtual Location</Text>}
      </View>
    )
  }
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    height: 116,
    width: width,
    backgroundColor: "#273C51",
  },
  arrow: {
    width: 30,
    height: 30,
    color: "#E2E2E6",
    marginLeft: 24, 
    marginTop: 69,
  },
  search: {
    width: 30,
    height: 30,
    color: "#E2E2E6",
    marginLeft: 304, 
    marginTop: 35,
    position: "absolute"
  },
  text: {
    fontSize: 22,
    fontFamily: "Inter_500Medium",
    marginLeft: 74,
    color: "#E2E2E6",
    marginTop: 67,
    position: "absolute"
  },
  searchBar: {
    height: 28,
    width: 198,
    marginLeft: 74,
    fontSize: 22,
    marginTop: 35,
    color: "#E2E2E6"
  }
})