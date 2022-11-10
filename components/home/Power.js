import { View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState} from 'react'


const Power = (props) => {

  const [logo, setLogo] = useState(require("../../img/icons/power.png"));

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => {props.setClicked(["#66C1AE", "#101F2D"]) ; setLogo(require("../../img/icons/stop.png"))}}>
          <Image source={logo} style={styles.power}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Power

const styles = StyleSheet.create({
  power:{
    width: 54.23,
    height: 54.23,
    color: "#96CBFF",
  },
  container:{
    width: 174,
    height: 174,
    backgroundColor: "#101F2D",
    borderRadius: 87,
    borderWidth: 7,
    borderColor: "#E2E2E6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 293,
    marginLeft: 90,
  }
})