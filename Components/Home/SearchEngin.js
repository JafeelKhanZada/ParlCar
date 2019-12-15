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
    this.setState({
      Visible: v,
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.Visible === true ? (
          <SearchComponent Visible={() => this.Visibel()} />
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <View style={{backgroundColor: 'white'}}>
          <Item>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
              }}
              onPress={() => this.Visibel(true)}>
              <Icon
                size={10}
                name="search"
                color="#949494"
                style={{color: '#949494', paddingLeft: 10}}
              />
              <Text style={Styles.text}>Start searching for Used Cars</Text>
            </TouchableOpacity>
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
    letterSpacing: 1,
    color: '#949494',
    fontSize: 12,
    paddingLeft: 10,
  },
});
