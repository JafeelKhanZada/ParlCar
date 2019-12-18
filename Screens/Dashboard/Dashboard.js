import React, {Component} from 'react';
import {View, ImageBackgroundComponent} from 'react-native';
import DashboardAds from '../../Components/Dashboard/DashboardAds';
import Header from '../../Components/Home/Header';
export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <Header />
        <DashboardAds />
      </View>
    );
  }
}
