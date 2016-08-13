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

import Firebase from 'firebase';
import NavigationBar from './NavigationBar'
import Drawer from 'react-native-drawer' 

const window = Dimensions.get('window');
const ACCESS_TOKEN = 'access_token'
const EMAIL = 'email'
const UID = 'uid'

const ControlPanel = <View><Text>ControlPanel</Text></View>
const MainView = <View><Text>MainView</Text></View>


class TestView extends Component {


closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
    <Drawer
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}
        >
        <MainView />
      </Drawer>
        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor : 'black',
   flex : 1
  },
  contentText :{
    color : 'white'
  }
});

export default TestView
