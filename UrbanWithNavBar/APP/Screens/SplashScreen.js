'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  AsyncStorage,
  Dimensions
} from 'react-native';

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};


class SplashScreen extends Component {
  componentDidMount(){
    firebase.initializeApp(firebaseConfig)
    setTimeout(()=>
    {this.props.navigator.push({name:'login'})},
    500
      
      );
  }


  render() {
    return (
        <View></View>
    );

}}

export default SplashScreen
