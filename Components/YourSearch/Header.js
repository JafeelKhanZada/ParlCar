import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';
export default class Header extends Component {
  render() {
    return (
      <View
        style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{marginLeft: 85, width: '50%', justifyContent: 'center'}}>
          <Image
            style={{height: 50, width: 90}}
            resizeMode="contain"
            source={require('../../assests/images/logo.png')}
          />
        </View>
        <View style={{width: '20%', justifyContent: 'center'}}>
          <Antdesign name="sharealt" size={30} />
        </View>
      </View>
    );
  }
}
