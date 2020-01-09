import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import * as Action from '../../redux/actions';
function Model(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={Styles.Popup}>
        <View style={Styles.Ads}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => props.setModalVisible(!props.modalVisible)}>
            <Icon name="close" color="#c7c7c7" size={20} />
          </TouchableOpacity>
          <Text style={Styles.Text}>REGISTER</Text>
          <Text style={Styles.Text1}>TEST DRIVE</Text>
          <View style={Styles.TextContainer}>
            <Text
              style={{
                ...Styles.Text,
                fontSize: 14,
                textTransform: 'capitalize',
                marginTop: 10,
              }}>
              Name
            </Text>
            <TextInput
              placeholder="Enter your name here."
              style={Styles.TextInputContainer}
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>
          <View style={Styles.TextContainer}>
            <Text
              style={{
                ...Styles.Text,
                fontSize: 14,
                textTransform: 'capitalize',
                marginTop: 10,
              }}>
              Number
            </Text>
            <TextInput
              placeholder="Enter your number here."
              style={Styles.TextInputContainer}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              marginTop: 10,
              marginBottom: 10,
              letterSpacing: 2,
            }}>
            Or
          </Text>
          <TouchableOpacity
            style={{
              ...Styles.btn,
              backgroundColor: '#4268B3',
              flexDirection: 'row',
              width: 'auto',
              paddingLeft: 10,
              paddingRight: 20,
              marginBottom: 10,
            }}>
            <Icon name="facebook" color="white" />
            <Text
              style={{
                ...Styles.btnText,
                fontFamily: 'Poppins',
                paddingLeft: 20,
              }}>
              Register with facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              if (name !== '' && password !== '') {
                dispatch(Action.testDrive(name, password));
                props.setModalVisible(!props.modalVisible);
                setName('');
                setPassword('');
              } else {
                Alert.alert(
                  'Email/Password Wrong',
                  'Check Email and Password Please!',
                );
              }
            }}>
            <Text style={Styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
export default Model;
const Styles = StyleSheet.create({
  Container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
    top: 0,
    left: 0,
    zIndex: 0,
  },
  Popup: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Ads: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  Text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#333',
  },
  Text1: {
    fontSize: 13,
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    color: '#333',
  },
  TextContainer: {
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  TextInputContainer: {
    borderWidth: 0.5,
    borderColor: '#c7c7c7',
    width: '100%',
    padding: 3,
    fontFamily: 'Poppins',
    fontSize: 11,
    marginTop: 5,
    color: '#c7c7c7',
    borderRadius: 2,
    letterSpacing: 1,
  },
  btn: {
    backgroundColor: '#d81f25',
    width: 120,
    padding: 2,
    alignItems: 'center',
    borderRadius: 2,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
