import React, { Component } from 'react'
import { Text, StyleSheet, View, AsyncStorage } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/page/Home';
import Signup from './src/page/Signup';
import Addasset from './src/page/Addasset';

class App extends Component {
  
  CheckIsSignIn = async() => {
    let name = await AsyncStorage.getItem('Name')
    setTimeout(() => {
      if(name!=='' && name!==null) { // มีข้อมูล
        // ไป home เลย
        this.props.navigation.navigate('Home')
      }else { // ไม่มีข้อมูล
        // ไป sign
        this.props.navigation.navigate('Signup')
      }
    }, 2000) 
  }

  componentDidMount() {
    this.CheckIsSignIn()
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff'}}>
        <Text style={{textAlign: 'center', fontSize: 48, fontWeight: 'bold', color: '#666'}}> HELLO </Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Splash: {
    screen: App
  },
  Home: {
    screen: Home
  },
  Signup: {
    screen: Signup
  },
  Addasset: {
    screen: Addasset
  }
}, {headerMode: 'none'})

export default createAppContainer(AppNavigator)
