import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Action from '../redux/actions';
function Login() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const Visibility = useSelector(state => state.Modal.Login);
  useEffect(() => {
    setVisible(Visibility);
  }, [Visibility]);
  const submitHandle = () => {
    dispatch(Action.login(name, password));
  };
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={Styles.Container} />
      <View style={Styles.Popup}>
        <View style={Styles.Ads}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => dispatch(Action.Toggle_PopUp(false))}>
            <Icon name="close" color="#c7c7c7" size={20} />
          </TouchableOpacity>
          <Text style={Styles.Text}>Login</Text>
          <Text style={Styles.Text1}>Showroom User</Text>
          <View style={Styles.TextContainer}>
            <Text
              style={{
                ...Styles.Text,
                fontSize: 14,
                textTransform: 'capitalize',
                marginTop: 10,
              }}>
              User Name
            </Text>
            <TextInput
              placeholder="Enter your username here."
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
              Password
            </Text>
            <TextInput
              placeholder="Enter your password here."
              style={Styles.TextInputContainer}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
          <TouchableOpacity style={Styles.btn} onPress={() => submitHandle()}>
            <Text style={Styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
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
    backgroundColor: 'transparent',
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
    fontSize: 14,
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    letterSpacing: 1,
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
    padding: 5,
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 30,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
export default Login;
