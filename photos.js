import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/meteor_bg.jpg')}
        style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
          <ScrollView>
            <View style={{ padding: 15 }}>
              <Image
                source={require('../assets/2.png')}
                style={{ alignSelf: 'center' }}
              />
            </View>
            <View style={{ padding: 15 }}>
              <Image
                source={require('../assets/1.png')}
                style={{ alignSelf: 'center' }}
              />
            </View>
            <View style={{ padding: 15, paddingBottom: 60 }}>
              <Image
                source={require('../assets/images.jpeg')}
                style={{ alignSelf: 'center' }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
