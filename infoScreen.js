import * as React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

export default class InfoScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <ImageBackground
            source={require('../assets/bg_updates.jpg')}
            style={styles.ImageBackground}>
            <ScrollView>
              <Text style={styles.TextStyle}>
                The possibilities of life on Mars is a subject of interest in
                astrobiology due to the planet's proximity and similarities to
                Earth. To date, no proof of past or present life has been found
                on Mars.The possibilities of life on Mars is a subject of
                interest in astrobiology due to the planet's proximity and
                similarities to Earth. To date, no proof of past or present life
                has been found on Mars. Scientific searches for evidence of life
                began in the 19th century and continue today via telescopic
                investigations and deployed probes. While early work focused on
                phenomenology and bordered on fantasy, the modern scientific
                inquiry has emphasized the search for water, chemical
                biosignatures in the soil and rocks at the planet's surface, and
                biomarker gases in the atmosphere.Mars is of particular interest
                for the study of the origins of life because of its similarity
                to the early Earth. This is especially true since Mars has a
                cold climate and lacks plate tectonics or continental drift, so
                it has remained almost unchanged since the end of the Hesperian
                period. At least two-thirds of Mars's surface is more than 3.5
                billion years old, and Mars may thus hold the best record of the
                prebiotic conditions leading to life, even if life does not or
                has never existed there,which might have started developing as
                early as 4.48 billion years ago. Following the confirmation of
                the past existence of surface liquid water, the Curiosity,
                Perseverance and Opportunity rovers started searching for
                evidence of past life, including a past biosphere based on
                autotrophic, chemotrophic, or chemolithoautotrophic
                microorganisms, as well as ancient water, including
                fluvio-lacustrine environments
              </Text>
              <Text style={styles.Text}>
                (plains related to ancient rivers or lakes) that may have been
                habitable. The search for evidence of habitability, taphonomy
                (related to fossils), and organic compounds on Mars is now a
                primary NASA and ESA objective.
              </Text>
            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: { resizeMode: 'cover' },
  TextStyle: { color: 'white', alignSelf: 'center', padding: 10 ,paddingTop:30},
  Text: {
    color: 'white',
    alignSelf: 'center',
    paddingBottom: 500,
    paddingTop: 10,
  },
  safeAreaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
