import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import NotificationPost from '../../Components/Notification/Notification';
import Header from '../../Components/Home/Header';
export default class Notification extends Component {
  render() {
    return (
      <View>
        <NotificationPost />
      </View>
    );
  }
}
