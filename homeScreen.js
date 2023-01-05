import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      surname: '',
      hobbies: '',
      school: '',
      contactInfo: '',
    };
  }

  importData = () => {
    db.ref('users/').on('value', (data) => {
      var info = data.val();
      this.setState({
        firstName: info.firstName,
        surname: info.surname,
        hobbies: info.hobbies,
        school: info.school,
        contactInfo: info.contactInfo,
      });
    });
  };

  componentDidMount() {
    this.importData();
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/iss_bg.jpg')}
        style={{ flex: 1 }}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.view}>
            <Text
              style={{
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 30,
              }}>
              Martian Life
            </Text>
            <Image
              source={require('../assets/Planet_Mars.png')}
              style={styles.image}
            />
            <View state={styles.view}>
              <Text style={styles.text}>Name : {this.state.firstName}</Text>
              <Text style={styles.text}>SurName : {this.state.surname}</Text>
              <Text style={styles.text}>Hobbies : {this.state.hobbies}</Text>
              <Text style={styles.text}>School : {this.state.school}</Text>
              <Text style={styles.text}>
                Contact Info : {this.state.contactInfo}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: { width: 300, height: 300, alignSelf: 'center' },
  safeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: { color: '#01141B', fontWeight: 'bold', fontSize: 20 },
  view: {
    backgroundColor: '#ffffff',
    width: 350,
    height: 600,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    borderRadius: 30,
    borderColor: '#189AB4',
    marginTop: 100,
  },
});
