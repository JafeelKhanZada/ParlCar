import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Header from './NotificationHeader';
import {withNavigation} from 'react-navigation';
class Notification extends Component {
  static navigationOptions = {
    headerTitle: () => <Header />,
  };
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 12,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
          }}>
          Notification
        </Text>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#F4F4F4',
            padding: 10,
            flexDirection: 'column',
          }}>
          <ScrollView>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'tomato', fontSize: 12, fontWeight: 'bold'}}>
                What's new
              </Text>
              <Text style={{fontSize: 15, fontWeight: '300'}}>
                TX, Mercedes
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '40%'}}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                      backgroundColor: 'red',
                    }}>
                    <Text
                      style={{color: 'white', fontWeight: 'bold', fontSize: 8}}>
                      +99 new adds
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 10, color: 'grey'}}>
                  21 Hours ago
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'tomato', fontSize: 12, fontWeight: 'bold'}}>
                What's new
              </Text>
              <Text style={{fontSize: 15, fontWeight: '300'}}>
                TX, Mercedes
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '40%'}}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                      backgroundColor: 'red',
                    }}>
                    <Text
                      style={{color: 'white', fontWeight: 'bold', fontSize: 8}}>
                      +99 new adds
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 12, color: 'grey'}}>
                  21 Hours ago
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'tomato', fontSize: 12, fontWeight: 'bold'}}>
                What's new
              </Text>
              <Text style={{fontSize: 15, fontWeight: '300'}}>
                TX, Mercedes
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '40%'}}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                      backgroundColor: 'red',
                    }}>
                    <Text
                      style={{color: 'white', fontWeight: 'bold', fontSize: 8}}>
                      +99 new adds
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 12, color: 'grey'}}>
                  21 Hours ago
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default withNavigation(Notification);
