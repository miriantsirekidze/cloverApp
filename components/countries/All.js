import { View, Text, StyleSheet, Dimensions} from 'react-native'
import { FlashList } from '@shopify/flash-list';
import React from 'react'
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Line from './Line';
import {DATA} from "./Data"
import AutoRecent from './AutoRecent';




const All = () => {

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular
  });

  const Data = DATA;

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View style={{height: 1000, width: Dimensions.get("screen").width}}>
        <FlashList
          ListHeaderComponent={AutoRecent}
          data={Data}
          renderItem={({item}) => (
            <Line flag={item.flag} countryName={item.countryName} percent={item.percent}/>
          )}
          estimatedItemSize={13}
        />
      </View>
    )
  }
}

export default All
