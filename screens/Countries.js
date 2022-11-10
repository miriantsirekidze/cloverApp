import { View, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../components/countries/SearchBar'
import All from '../components/countries/All'

const Countries = () => {
  return (
    <View style={{backgroundColor: "#101F2D", flex: 1}}>
      <SearchBar/>
      <ScrollView >
        <All/>
      </ScrollView>
    </View>
  )
}

export default Countries