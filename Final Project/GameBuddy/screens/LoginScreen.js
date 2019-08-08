import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    //set state of username and password to empty string
    this.state = {
      email: '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    //If login button clicked
    if (viewId == 'login') {
      //Check validity of password formatting
      if(this.validateUsername(this.state.email) == false && this.validatePassword(this.state.password)==false){
        Alert.alert('General Login Error', 'Invalid email. Password must be at least 6 characters.')
      } else if(this.validateUsername(this.state.email) == false){
        Alert.alert('Email Error', 'Invalid email.')
      }else if (this.validatePassword(this.state.password)==false){
        Alert.alert('Password Error', ' Password must be at least 6 characters.')
      } else{
        this.props.navigation.navigate('Main')
      }
    //If register button clicked
    } else if (viewId == 'register') {
      Alert.alert('Feature Not Part of Prototype.', 'User will be sent to external site. Try Login.')
    //If forgot password button clicked
    } else if (viewId == 'forgotPassword') {
      Alert.alert('Feature Not Part of Prototype.', 'User will be sent to external site. Try Login')
    }
  }
  
  validateUsername(username){
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(String(username).toLowerCase());
  }

  validatePassword(password) {
    var re = /^.{6,}$/
    return re.test(String(password).toLowerCase());
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: 200, height: 200, marginBottom: 50 }}
            source={require('../assets/images/icon.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('forgotPassword')}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
          <Text style={styles.registerText}>Register</Text>
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
    backgroundColor: 'rgb(26,27,34)',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "rgb(29, 180, 196)",
  },
  loginText: {
    color: 'white',
  },
  forgotText: {
    color: "rgb(153, 153, 153)"
  },
  registerText: {
    color: "rgb(153, 153, 153)"
  }
});