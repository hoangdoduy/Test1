import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import { Component } from 'react';

export default class App extends Component {
  state={
    email:"",
    password:""
  }
  onLogin() {
    const user = this.state.email;
    const pass = this.state.password;

    if(user == 'hoanglcit' && pass == '123')
    {
        Alert.alert('Success', 'Thành Công');
    }else{
        Alert.alert('Error', 'Thất Bại');
    }

    
  }
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/favicon.png")} />
        <View style={styles.inputView}>
          <TextInput style={styles.TextInput} placeholder='UserName' placeholderTextColor='black' onChangeText={text => this.setState({email:text})}/>

        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.TextInput} placeholder='Password' placeholderTextColor='black' secureTextEntry={true} onChangeText={text => this.setState({password:text})}/>

        </View>
        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.onLogin.bind(this)}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E9AFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#F2FBEF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  TextInput: {
      height: 50,
      color: 'black',
      fontFamily: 'Arial',
    },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontFamily: 'Arial',
  },
  loginBtn:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:15,
    backgroundColor:"#01DF01",
    
  },
  loginText:{
    fontFamily: 'Arial',
    color: 'white',
    fontSize: 20
  }
});
