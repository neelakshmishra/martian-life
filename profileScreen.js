import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import db from '../config';
import HomeScreen from "./homeScreen"

export default class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      gmail: '',
      password:""
    };
  }
  getData = () => {
    db.ref('test/').on('value', (data) => {
      var info = data.val();
      this.setState({
        userName: info.name,
        gmail: info.gmail,
        password: info.password
      });
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={{ resizeMode: 'cover', flex: 1 }}>
          <SafeAreaView style={styles.safeAreaView} />
    
          <View
            style={{
              backgroundColor: '#05445E',
              width: '80%',
              hieght: '10%',
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginTop: 30,
            }}>
          </View>
          <View
            style={{
              backgroundColor: '#05445E',
              width: '80%',
              hieght: '10%',
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginTop:10
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontFamily: 'Dancing Script',
                color: 'white',
              }}>
              E-mail : {this.state.gmail}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#05445E',
              width: '80%',
              hieght: '10%',
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginTop:10
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontFamily: 'Dancing Script',
                color: 'white',
              }}>
              Password : {this.state.password}
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Register")}} style={{backgroundColor:"#01141B",padding:5,margin:20,borderRadius:30}}><Text style={{alignSelf:'center',color:'white'}}>Go Back</Text></TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  safeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
