import React, {useState} from 'react'
import Header from '../components/home/Header';
import Power from '../components/home/Power';
import Connection from '../components/home/Connection';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';



const Home = () => {

  const [clicked, setClicked] = useState(["#28A2AA", "#101F2D"])

  return (
    <LinearGradient colors={clicked} style={{flex: 1}}>
      <StatusBar style='light'/> 
      <Header/>
      <Power setClicked={setClicked}/>
      <Connection/>
    </LinearGradient>
  )
}

export default Home