import React, {Component} from 'react';
import {View, ImageBackgroundComponent, ScrollView} from 'react-native';
import DashboardAds from '../../Components/Dashboard/DashboardAds';
import Header from '../../Components/Home/Header';
export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <View>
          <Header />
          <ScrollView style={{height: '100%', backgroundColor: '#F4F4F4'}}>
            <View>
              <DashboardAds />
            </View>
          </ScrollView>
        </View>
      </React.Fragment>
    );
  }
}
