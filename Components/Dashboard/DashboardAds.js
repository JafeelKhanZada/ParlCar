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
import {withNavigation} from 'react-navigation';
class Notification extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
            fontFamily: 'Poppins-Medium',
          }}>
          Dashboard
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
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                paddingLeft: 5,
              }}>
              My Adds
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'tomato',
                  fontSize: 12,
                }}>
                Active Adds
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                256 Adds
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Activeads')}
                  style={{
                    width: 90,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#d81f25',
                    borderRadius: 3,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                      fontSize: 12,
                    }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'tomato',
                  fontSize: 12,
                }}>
                Expired Adds
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                256 Adds
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Expiredads')}
                  style={{
                    width: 90,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#d81f25',
                    borderRadius: 3,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                      fontSize: 12,
                    }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'tomato',
                  fontSize: 12,
                }}>
                Pending Adds
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                256 Adds
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('PendingAds')}
                  style={{
                    width: 90,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#d81f25',
                    borderRadius: 3,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                    }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default withNavigation(Notification);