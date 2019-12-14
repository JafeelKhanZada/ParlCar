import React, { Component } from 'react';
import { Picker } from 'react-native';
import { TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { View, Text, Item, Input, Icon } from 'native-base';

export default class SearchComponent extends Component {
  state = {
    language: 'No minimum',
    language1: 'No minimum',
    language2: 'No minimum',
    language3: 'No minimum',
    language4: 'No minimum',
    language5: 'No minimum',
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled >
        <View style={Styles.Container}>
          <Item>
            <Icon active name='search' />
            <Input placeholder="Newyourk Los Angeles" />
            <Icon active name='location' />
          </Item>
          <Item>
            <Icon active name='search' />
            <Input placeholder="Newyourk Los Angeles" />
          </Item>
          <View
            style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={Styles.Heading}>Price</Text>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <Picker

                selectedValue={this.state.language}
                style={{ width: '45%', }}
                mode="dialog"
                itemStyle={{
                  borderWidth: 5,
                  borderColor: 'black',
                  borderStyle: 'solid',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }>
                <Picker.Item label="No minium" value="No minium" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
              <Text style={Styles.Text}>To</Text>
              <Picker
                selectedValue={this.state.language1}
                style={{ width: '45%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language1: itemValue })
                }>
                <Picker.Item label="No minium" value="No minium" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <Text style={Styles.Heading}>Mileage</Text>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <Picker
                selectedValue={this.state.language2}
                style={{ width: '45%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language2: itemValue })
                }>
                <Picker.Item label="No minium" value="No minium" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
              <Text style={Styles.Text}>To</Text>
              <Picker
                selectedValue={this.state.language3}
                style={{ width: '45%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language3: itemValue })
                }>
                <Picker.Item label="No minium" value="No minium" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <Text style={Styles.Heading}>Year</Text>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <Picker
                selectedValue={this.state.language4}
                style={{ width: '45%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language4: itemValue })
                }>
                <Picker.Item label="No minium" value="No minium" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
              <Text style={Styles.Text}>To</Text>
              <Picker
                selectedValue={this.state.language5}
                style={{ width: '45%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language5: itemValue })
                }>
                <Picker.Item label="No minium" value="No minium" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <TouchableOpacity
              onPress={() => this.props.Visible(false)}
              style={{ width: '30%', backgroundColor: '#d81f25' }}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins-Medium',
                  padding: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: 'center',
                }}>
                Search
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const Styles = StyleSheet.create({
  Text: {
    width: '10%',
    textAlign: 'center',
    paddingTop: 15,
    color: '#d81f25',
    fontFamily: 'Poppins-Medium',
  },
  Container: {
    padding: 10,
    position: 'relative',
    opacity: 1,
    backgroundColor: 'white',
    width: '100%',
    zIndex: 2000,
  },
  Heading: {
    color: '#333',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'flex-start',
  },
});
