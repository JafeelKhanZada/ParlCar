import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Action from '../redux/actions';
import Loader from './Loader';
import {withNavigation} from 'react-navigation';
function Login(props) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [dis, setDis] = useState(false);
  const Visibility = useSelector(state => state.Modal.Forget);
  useEffect(() => {
    setVisible(Visibility);
  }, [Visibility]);
  const submitHandle = () => {
    if (name !== '') {
      setDis(true);
      Promise.all([dispatch(Action.forgetPassword(name))]).then(val => {
        setDis(false);
        if (val[0] === true) {
          setName('');
        }
      });
    } else {
      Alert.alert(
        'Empty Email or Username!',
        'Please Check Your Email or Username.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={Styles.Container} />
      <View style={Styles.Popup}>
        {dis === true ? <Loader /> : <React.Fragment></React.Fragment>}
        <View style={Styles.Ads}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() =>
              props.id === true
                ? props.navigation.navigate('Home')
                : dispatch(Action.toggleForget(false))
            }>
            <Icon name="close" size={20} />
          </TouchableOpacity>
          <Text style={Styles.Text}>Forget Password</Text>
          <Text style={Styles.Text1}>User/Showroom</Text>
          <View style={Styles.TextContainer}>
            <Text
              style={{
                ...Styles.Text,
                fontSize: 14,
                textTransform: 'capitalize',
                marginTop: 10,
              }}>
              Email
            </Text>
            <TextInput
              placeholder="Enter your Email or here."
              style={Styles.TextInputContainer}
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>
          <TouchableOpacity
            style={[
              Styles.btn,
              {
                backgroundColor: dis === false ? '#d81f25' : '#C7C7C7',
              },
            ]}
            onPress={() => submitHandle()}
            disabled={dis}>
            <Text
              style={{
                ...Styles.btnText,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(Action.Toggle_PopUp(false));
              dispatch(Action.toggleSignUp(true));
            }}>
            <Text
              style={{
                ...Styles.btnText,
                color: '#5CA7FF',
                fontSize: 12,
                marginTop: 10,
              }}>
              Sign Up
            </Text>
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
// export default withNavigation(Login);
export default Login;
