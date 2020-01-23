import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Model extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    if (this.props.data !== undefined && this.props.data !== null) {
      if (
        this.props.data[0].UserData !== undefined &&
        this.props.data[0].UserData !== null
      ) {
        this.setState({
          data: this.props.data[0].UserData,
        });
      }
    }
  };
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}>
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: 0.5,
            backgroundColor: '#333',
          }}></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <View
            style={{width: '80%', backgroundColor: 'white', paddingBottom: 20}}>
            <View
              style={{
                width: '100%',
                alignItems: 'flex-end',
                paddingRight: 10,
                paddingTop: 5,
              }}>
              <TouchableHighlight
                onPress={() => {
                  this.props.setModalVisible(!this.props.modalVisible);
                }}>
                <Icon name="close" size={20} color="#c7c7c7" />
              </TouchableHighlight>
            </View>

            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 50,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 30,
                    backgroundColor: '#333',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                    {this.state.data.map((v, k) => v.UserName)}
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 30,
                    backgroundColor: '#333',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                    {this.state.data.map((v, k) => v.ShowroomTelephone)}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 150,
                    marginTop: 20,
                    flexDirection: 'row',
                    padding: 5,
                    backgroundColor: '#d81f25',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                  }}
                  onPress={() => {
                    Linking.openURL(
                      `tel:${this.state.data[0].ShowroomTelephone}`,
                    );
                  }}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                    Call
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
