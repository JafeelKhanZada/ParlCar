import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
export default function Header() {
  return (
    <View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{marginLeft: 100, width: '50%', justifyContent: 'center'}}>
          <Image
            style={{height: 50, width: 90}}
            source={require('../../assests/images/logo.png')}
          />
        </View>
        <View style={{width: '25%', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image
              style={{height: 34, width: 38}}
              source={require('../../assests/images/notification.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
