import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Upper from '../components/premium/Upper';
import Prices from '../components/premium/Prices';
import Lower from '../components/premium/Lower';

const Premium = () => {

  return (
    <LinearGradient colors={["#55ADBE", "#101F2D"]} style={{flex: 1}}>
      <Upper/>
      <Prices/>
      <Lower/>
    </LinearGradient>
  )
}



export default Premium