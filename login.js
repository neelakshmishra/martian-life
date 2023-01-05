import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Platform,
  Alert,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      userSignin: false,
    };
  }
  SignIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('BottomTab');
      })
      .catch(() => {});
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={{ resizeMode: 'cover', flex: 1 }}>
          <SafeAreaView style={styles.safeAreaView} />
          <Image
            source={require('../assets/1656695282_27-papik-pro-p-gouache-drawings-of-planet-mars-28.png')}
            style={{
              alignSelf: 'center',
              paddingTop: 30,
              width: 200,
              height: 200,
            }}
          />
          <TextInput
            onChangeText={(userEmail) => {
              this.setState({ email: userEmail });
            }}
            style={styles.inputmid}
            placeholder={'E-mail'}
            placeholderTextColor={'white'}
          />
          <TextInput
            onChangeText={(userPassword) => {
              this.setState({ password: userPassword });
            }}
            style={styles.inputmid}
            placeholder={'Password'}
            placeholderTextColor={'white'}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => {
              this.SignIn(this.state.email, this.state.password);
            }}
            style={styles.hilighttext}>
            <Text style={styles.text}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}
            style={{
              backgroundColor: '#59D7EE',
              padding: 5,
              margin: 20,
              borderRadius: 30,
            }}>
            <Text style={{ alignSelf: 'center', color: 'black' }}>Go Back</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  safeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  inputmid: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    backgroundColor: '#53DFD1',
  },
  hilighttext: {
    alignSelf: 'center',
    color: '#ffffff',
    padding: 10,
    marginTop: 250,
    marginBottom: 5,
    backgroundColor: '#59D7EE',
    borderRadius: 20,
  },
  text: {
    alignText: 'center',
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 100,
  },
});
