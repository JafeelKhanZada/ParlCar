import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Favouritepost from '../../Components/Favourite/Favouritepost';

export default class Favouratscreen extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            padding: 5,
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, padding: 5}}>
            Favoritos
          </Text>
        </View>
        <Favouritepost />
      </View>
    );
  }
}
