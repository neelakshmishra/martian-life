import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground
} from 'react-native';

const information = require('./qna.json');

export default class QandAScreen extends React.Component {
  keyExtractor = (item, index) => {
    index.toString();
  };
  renderItem = ({ item }) => {
    return (
      <ImageBackground source={require("../assets/iss_bg.jpg")}>
      <View
        style={{
          width: '90%',
          backgroundColor: '#2c3968',
          height: 360,
          alignSelf: 'center',
          borderRadius: 50,
          marginTop: 25,
          marginBottom: 25,
          borderColor: '#00000',
          borderWidth: 8,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginLeft: 38,
            marginRight: 38,
            textAlign: 'center',
          }}>
          {item.questions}
        </Text>
        <Text style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center',
            marginLeft: 10,
            marginRight: 10,
            textAlign: 'center',
          }}>{item.answers}</Text>
      </View>
      </ImageBackground>
    );
  };
  render() {
    return (
      <FlatList
        data={information}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}
