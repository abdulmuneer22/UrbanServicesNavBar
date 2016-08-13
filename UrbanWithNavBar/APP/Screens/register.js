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





const window = Dimensions.get('window');
const USERID = ""

class Register extends Component {

// Constructor
constructor(){
super()
this.state = {
  name : "",
  email : "",
  password : "",
  password_confirmation : "",
  errors:[]


}

}





redirect(routeName){

  this.props.navigator.push(
    {
      name:routeName
      
    }
    )


}









onRegisterPress(){

let userID = this.state.name
let userName = this.state.name
let email = this.state.email


firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
.catch((error)=> {

// Handle Errors here.
alert(error)

});




this.redirect('login')



}






  render() {
    return (
      <View style={styles.container}>
      
     


      <TextInput 
      style={styles.input} 
      placeholder="Name" 
      onChangeText = {(text) => this.setState({name:text})} 
      value={this.state.name}
      />

      <TextInput 
      style={styles.input} 
      placeholder="Email" 
      onChangeText = {(text) => this.setState({email:text})} 
      value={this.state.email}
      />
      
     

      <TextInput 
      style={styles.input} 
      placeholder="Password" 
      secureTextEntry = {true}
      onChangeText = {(text) => this.setState({password:text})} 
      value={this.state.password}
      />

      <TextInput 
      style={styles.input} 
      placeholder="Confirm Password" 
      secureTextEntry = {true}
      onChangeText = {(text) => this.setState({password_confirmation:text})} 
      value={this.state.password_confirmation}
      />
      
      <TouchableHighlight 
      style={styles.Button}
      onPress = {this.onRegisterPress.bind(this)}

      >
      <Text style={styles.ButtonText}>Register</Text>
      </TouchableHighlight>

      <View>
      <Text>Already Have An Account ?</Text>
      <Text></Text>
      </View>
      <TouchableHighlight 
      style={styles.Button}
      onPress = {this.redirect.bind(this,'login')}

      >
      <Text style={styles.ButtonText}>Login</Text>
      </TouchableHighlight>
      
      
      
      
      
      
      
      </View>
      



        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input :{
      alignItems : 'center',
      alignSelf : 'center',
      width : window.width*0.7,
      borderColor : 'red'
  },
  inputWrapper : {
      borderColor : 'red',
      borderWidth : 1

  },
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.7, 
  backgroundColor : '#039BE5', 
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginBottom :10 
  
  },
  SkipButton:{
    backgroundColor : '#37474F',
    borderColor : '#37474F'
  },

  ButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }
 
});

export default Register
