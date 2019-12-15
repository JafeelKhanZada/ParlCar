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
            fontWeight: 'bold',
            fontSize: 15,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
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
            <Text style={{fontSize: 15, fontFamily:"Poppins-Bold", paddingLeft: 10}}>
              My Adds
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'tomato', fontSize: 12, fontWeight: 'bold'}}>
                Active Adds
              </Text>
              <Text style={{fontSize: 15, fontWeight: '300'}}>256 Adds</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Activeads')}
                  style={{
                    width: 100,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                  }}>
                  <Text style={{color: 'white'}}>View All</Text>
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
              <Text style={{color: 'tomato', fontSize: 12, fontWeight: 'bold'}}>
                Expired Adds
              </Text>
              <Text style={{fontSize: 15, fontWeight: '300'}}>256 Adds</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Expiredads')}
                  style={{
                    width: 100,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                  }}>
                  <Text style={{color: 'white'}}>View All</Text>
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
              <Text style={{color: 'tomato', fontSize: 12, fontWeight: 'bold'}}>
                Pending Adds
              </Text>
              <Text style={{fontSize: 15, fontWeight: '300'}}>256 Adds</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('PendingAds')}
                  style={{
                    width: 100,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                  }}>
                  <Text style={{color: 'white'}}>View All</Text>
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
