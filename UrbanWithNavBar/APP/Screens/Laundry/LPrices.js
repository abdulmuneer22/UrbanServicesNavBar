/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator,
  ListView,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';


import GiftedSpinner from 'react-native-gifted-spinner';


const window = Dimensions.get('window');





class LPrices extends Component {
constructor(props){
  super(props);
    
    
    this.state = {

      dataSource : new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,

      }),
      spinnerVisible : true

      }

    }



redirect(routeName,productSKU,productPrice,productTitle){

  this.props.navigator.push(
    {
      name:routeName,
      passProps:{
        sku : productSKU,
        price : productPrice,
        title : productTitle
      }
    }
    )


}


componentWillMount(){
  this.getProducts()
}


addToCartButtonPressd(productSKU,productPrice,productTitle){
let title = productTitle
let sku = productSKU
let price = productPrice
//alert(title)

this.redirect('myCart',sku,price,title)
}

getProducts(){

var CanRef = firebase.database().ref('urbanservices/products/watercan/')
CanRef.on('value',(can)=>{
  //alert(can.val())
  var items = []
  
  can.forEach((child)=>{
    items.push({
      title : child.val().productTitle,
      imageurl : child.val().imageurl,
      price : child.val().price,
      sku : child.val().sku,
      description : child.val().description


    })
  })

  //console.log(items)
   this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
        
      });
  //alert("Loaded")
  this.setState({spinnerVisible:false})
})

}

 




  render(){
    return(

     <View style={styles.container}>
      <Text style={{marginBottom : 60}}></Text>
      
      
      <ScrollView showsVerticalScrollIndicator = {false} style={{}}>
        <Image style = {styles.dpImage}
        source={require('./res/prices.png')}/>

        <TouchableHighlight 
        style={styles.Button}
        //onPress = {this.onSignInPress.bind(this)}

        >
      <Text style={styles.ButtonText}>Proceed</Text>
      </TouchableHighlight>

      

      </ScrollView>
    
    </View>
    );

  }


}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    
  },
  dpImage:{
    width : 300,
    height : 420,
    alignSelf:'center'
    
  },

  productTitleWrapper:{
  flexDirection : 'row',
   width : window.width*0.9,
   height : 40,
   alignItems : 'center',
   borderBottomColor:"#BDBDBD",
   borderBottomWidth:1,
   
   
   
  },

  productTitle:{
    fontSize : 18,
    color : '#37474F',
    marginLeft : 10,
    flex : 4
  },
  productPrice : {
    fontSize : 19,
    fontWeight : "300",
    flex : 2,
    marginLeft : 10
  },
  addToCartButton : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.9, 
  backgroundColor : '#039BE5', 
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  
  },
  addToCartButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
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
  marginBottom :10,
  marginTop : 30,
  
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


export default LPrices
