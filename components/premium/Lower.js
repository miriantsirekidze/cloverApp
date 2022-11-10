import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Lower = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Premium Now</Text>
      </TouchableOpacity>
      <Text style={styles.lowerText}>The subscription will automatically renew for the same period, unless you cancel it 24 hours before the end of the current period</Text>
    </View>
  )
}

export default Lower

const styles = StyleSheet.create({
  button: {
    width: 340,
    height: 57,
    backgroundColor: "#96CBFF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10, 
    marginTop: 112
  }, 
  buttonText: {
    color: "#101F2D",
    fontSize: 16,
    fontWeight: "500"
  },
  lowerText: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    color: "#C2C7CF",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5
  }
})