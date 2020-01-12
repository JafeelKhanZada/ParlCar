import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Image, Alert} from 'react-native';
import {withNavigation} from 'react-navigation';
import Geolocation from '@react-native-community/geolocation';
import Geocode from 'react-geocode';
import {connect} from 'react-redux';
import * as Action from '../../redux/actions';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  View,
  Text,
} from 'native-base';

import SearchComponent from './SearchComponent';
class SearchEngin extends Component {
  state = {
    Visible: false,
  };
  Visibel = v => {
    this.setState(state => {
      return {
        Visible: !state.Visible,
      };
    });
  };
  async watchPosition() {
    Geocode.setApiKey('AIzaSyA7s1z3r04bAEN9KxrayKFv0sHMoXF6-ZI');
    await Geolocation.getCurrentPosition(
      position => {
        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude,
        ).then(
          response => {
            const address = response.results[0].address_components;
            console.log(address);
            this.props.Search(address[3].long_name);
          },
          error => {
            Alert.alert(error.message);
          },
        );
        console.log('Position -> ', position.coords);
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: false, timeout: 50000},
    );
  }
  handleSearch = async () => {
    this.Visibel();
    this.watchPosition();
  };
  render() {
    return (
      <React.Fragment>
        {this.state.Visible === true ? (
          <SearchComponent Visible={this.Visibel} />
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <View style={{backgroundColor: 'white'}}>
          <Item style={{justifyContent: 'center'}}>
            <React.Fragment>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                  width: '80%',
                }}
                onPress={() => this.Visibel()}>
                <Icon
                  size={10}
                  name="search"
                  color="#949494"
                  style={{color: '#949494', paddingLeft: 10}}
                />
                <Text style={Styles.text}>Start Searching</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleSearch}>
                <Image
                  resizeMode="center"
                  source={require('../../assests/location.png')}
                  style={{width: 20}}
                />
              </TouchableOpacity>
            </React.Fragment>
          </Item>
          <Item
            style={{
              width: '100%',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins',
                color: '#949494',
                marginRight: 10,
              }}>
              Quick Search
            </Text>
            <View
              style={{
                width: '70%',
                height: 1,
                backgroundColor: 'rgba(141,141,141,.3)',
              }}
            />
          </Item>
        </View>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Search: name => {
      dispatch(Action.setCityName(name));
    },
  };
};
export default connect(null, mapDispatchToProps)(withNavigation(SearchEngin));
const Styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    color: '#949494',
    fontSize: 12,
    paddingLeft: 10,
  },
});
