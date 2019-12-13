import React, {Component} from 'react';
import Header from '../../Components/Home/Header';
import Search from '../../Components/Home/SearchEngin';
import BrandShowroom from '../../Components/Home/Brand-Showroom';
import Tab from '../../Components/Home/Tabs';
import Slider from '../../Components/Home/Slider';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Showroom from '../../Components/Home/Showroom';
import {connect} from 'react-redux';
import * as Action from '../../redux/actions';
import axios from 'axios';
class HomeScreen extends Component {
  state = {
    check: true,
  };
  static navigationOptions = {
    headerTitle: () => <Header />,
  };
  render() {
    return (
      <View>
        <ScrollView>
          {/* <Header /> */}
          <Search />
          <BrandShowroom />
          <Tab />
          <Slider />
          <Showroom />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    GetAds: () => {
      dispatch(Action.getAds());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
