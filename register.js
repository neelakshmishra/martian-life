import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  Platform,
} from 'react-native';
import HomeScreen from './homeScreen';
import firebase from '../config';
import db from '../config';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      surname: '',
      hobbies: '',
      school: '',
      contactInfo: '',
    };
  }

  registerUserWithNoUID = (
    firstName,
    surname,
    hobbies,
    school,
    contactInfo
  ) => {
    db.ref('users/').update({
      firstName: this.state.firstName,
      surname: this.state.surname,
      hobbies: this.state.hobbies,
      school: this.state.school,

      contactInfo: this.state.contactInfo,
    });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/iss_bg.jpg')}
        style={{ flex: 1 }}>
        <SafeAreaView style={styles.safeAreaView} />
        <View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="white"
              onChangeText={(name) => {
                this.setState({ firstName: name });
              }}
            />
            <TextInput
              style={styles.inputmid}
              placeholder="Your surname"
              placeholderTextColor="white"
              onChangeText={(surname) => {
                this.setState({ surname: surname });
              }}
            />

            <TextInput
              style={styles.inputmid}
              placeholder="Hobbies"
              placeholderTextColor="white"
              onChangeText={(password) => {
                this.setState({ hobbies: password });
              }}
            />
            <TextInput
              style={styles.inputmid}
              placeholder="School"
              placeholderTextColor="white"
              onChangeText={(password) => {
                this.setState({ school: password });
              }}
            />
            <TextInput
              style={styles.inputbottom}
              placeholder="Contact Number"
              placeholderTextColor="white"
              placeholderTextAlign="center"
              onChangeText={(passwordConfirm) => {
                this.setState({ contactInfo: passwordConfirm });
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.registerUserWithNoUID(
                  this.state.firstName,
                  this.state.surname,
                  this.state.hobbies,
                  this.state.school,
                  this.state.contactInfo
                );

                //this.props.navigation.replace('home')
              }}>
              <Text style={styles.buttontext}>Update Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.Button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.replace('login');
              }}>
              <Text style={styles.hilighttext}>login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 10 ,backgroundColor:"#01141B",borderRadius:20,justifyContent:"center",padding:2}}
              onPress={() => {
                this.props.navigation.replace('Profile');
              }}>
              <Text style={styles.hilighttext}>App Login info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    padding: 10,
    backgroundColor: 'grey',
  },
  inputbottom: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderBottomRightRadius: 30,
    padding: 10,
    backgroundColor: 'grey',
  },
  inputmid: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'grey',
  },
  button: {
    alignItems: 'center',
    color: '#D3B5E5',
    padding: 5,
    borderRadius: 30,
    
  },
  Button: {
    alignItems: 'center',
    color: 'white',
    
    
  },
  text: {
    alignText: 'center',
    color: '#ffffff',
    marginTop: 10,
    paddingHorizontal: 100,
  },
  hilighttext: {
    alignText: 'center',
    color: '#ffffff',
    padding: 10,
  },
  buttontext: {
    alignItems: 'center',
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    backgroundColor: '#01141B',
    borderRadius: 15,
  },
  safeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
