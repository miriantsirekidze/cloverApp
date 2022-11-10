import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Header = () => {
  
  const navigation = useNavigation(); 

  return (
    <View>
      <TouchableOpacity>
        <Image source={require("../../img/icons/setting.png")} style={styles.setting}/>
      </TouchableOpacity>
      <View>
        <TouchableOpacity hitSlop={{bottom: 60}} onPress={() => navigation.navigate("Premium")}>
          <Image source={require("../../img/icons/logo.png")} style={styles.logo}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={require("../../img/icons/user.png")} style={styles.user}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  setting:{
    position: "absolute",
    marginTop: 69,
    marginLeft: 24,
    color: "#E2E2E6",
    width: 30,
    height: 30
  },
  logo:{
    position: "absolute",
    marginLeft: 160,
    width: 31.69,
    height: 32,
    color: "#E2E2E6",
    marginTop: 68
  },
  user:{
    position: "absolute",
    marginLeft: 160+136.31,
    width: 30,
    height: 30,
    color: "#E2E2E6",
    marginTop: 69
  }
})