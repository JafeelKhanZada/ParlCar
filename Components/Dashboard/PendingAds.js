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
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';
class Pendingads extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // title: "djds",
    headerTitle: () => <Header />,
  };
  render() {
    return (
      <View>
        <ScrollView>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 1,
              borderTopColor: 'lightgrey',
              fontFamily:"Poppins-Bold"
            }}>
            Pending Adds
          </Text>
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#F4F4F4',
              padding: 5,
            }}>
            <TouchableOpacity style={{margin:10,marginBottom:-10}} >
              <View
                style={{
                  marginTop: 10,
                  padding: 10,
                  height: 100,
                  width: '100%',
                  backgroundColor: 'white',
                  flexDirection: 'row',
                }}>
                <View
                  style={{height: 80, width: '25%', backgroundColor: 'white'}}>
                  <Image
                    style={{height: '100%', width: '100%'}}
                    source={require('../../assests/images/bimage.png')}
                  />
                </View>
                <View
                  style={{width: '75%', backgroundColor: 'white', padding: 5}}>
                  <Text style={{ fontFamily:"Poppins-Light",fontWeight: 'bold', fontSize: 11}}>
                    Export lady owned Volvo..
                  </Text>
                  <Text style={{color: 'grey', fontSize: 8,fontFamily:"Poppins-Medium"}}>
                    User car for sale
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'grey', fontSize: 8, paddingTop: 10,fontFamily:"Poppins-Light"}}>
                      1 min post
                    </Text>
                    <TouchableOpacity
                      style={{
                        marginTop: -30,
                        justifyContent: 'flex-end',
                        height: 40,
                        width: 40,
                        backgroundColor: '#F4F4F4',
                        borderRadius: 100,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                        }}>
                        <Icon name="check" size={20} color="green" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default withNavigation(Pendingads);
