import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Thumbnail} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
export default function Model(props) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.Showroom.ActiveShowRoom);
  return (
    <Modal animationType="fade" transparent={true} visible={props.modalVisible}>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 0.7,
          backgroundColor: 'black',
        }}></View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        {data &&
          data.map((v, k) => {
            return (
              <View
                key={k}
                style={{
                  width: '80%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}>
                <TouchableHighlight
                  style={{
                    padding: 10,
                    alignItems: 'flex-end',
                    backgroundColor: 'white',
                  }}
                  onPress={() => {
                    props.setModalVisible(!props.modalVisible);
                  }}>
                  <Icon name="close" size={15} color="#c7c7c7" />
                </TouchableHighlight>
                <View
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Thumbnail
                    large
                    source={require('../../assests/images/showroom.png')}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      padding: 5,
                      fontFamily: 'Poppins-Medium',
                      color: '#333',
                    }}>
                    {v.ShowromName}
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: '#333',
                      padding: 5,
                      paddingLeft: 20,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Poppins-Medium',
                        letterSpacing: 1,
                        fontSize: 12,
                      }}>
                      Phone: {v.ShowroomTelephone}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#333',
                      padding: 5,
                      marginTop: 4,
                      paddingLeft: 20,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Poppins-Medium',
                        letterSpacing: 1,
                        fontSize: 12,
                      }}>
                      Address: {v.Address}
                    </Text>
                  </View>
                </View>
                <View style={{backgroundColor: 'white'}}>
                  <ScrollView>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                        letterSpacing: 1,
                        marginLeft: 20,
                        marginTop: 10,
                      }}>
                      Detail
                    </Text>
                    <Text
                      style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontFamily: 'Poppins',
                        fontSize: 11,
                        color: '#333',
                      }}>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </Text>
                  </ScrollView>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                    padding: 10,
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      backgroundColor: '#d81f25',
                      width: 150,
                      alignItems: 'center',
                      borderRadius: 3,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Poppins-Bold',
                        letterSpacing: 1,
                        fontSize: 12,
                      }}>
                      View Showroom
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </Modal>
  );
}
