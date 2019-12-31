import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

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
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
                width: '100%',
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
export default withNavigation(SearchEngin);
const Styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    color: '#949494',
    fontSize: 12,
    paddingLeft: 10,
  },
});
