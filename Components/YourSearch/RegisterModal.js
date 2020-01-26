import React, {useState, useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import * as Action from '../../redux/actions';
function Model(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const reg = useSelector(state => state.Modal.Reg);
  const User = useSelector(state => state.Auth.UserData);
  const Auth = useSelector(state => state.Auth.auth);
  const ID = useSelector(State => State.Auth.ID);
  useEffect(() => {
    if (User) {
      setName(User.UserName);
      setPassword(User.ShowroomTelephone);
    }
  }, [User]);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={reg}
      onRequestClose={() => {
        dispatch(Action.toggleReg(false));
      }}>
      <View style={Styles.Popup}>
        <View style={Styles.Ads}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => dispatch(Action.toggleReg(false))}>
            <Icon name="close" color="#c7c7c7" size={20} />
          </TouchableOpacity>
          <Text style={Styles.Text}>REQUEST</Text>
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
              editable={false}
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
              keyboardType="numeric"
              placeholder="Enter your number here."
              style={Styles.TextInputContainer}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
          {/* <Text
            style={{
              fontFamily: 'Poppins-Bold',
              marginTop: 10,
              marginBottom: 10,
              letterSpacing: 2,
            }}>
            Or
          </Text> */}
          {Auth === false ? (
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
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              if (name !== '' && password !== '') {
                dispatch(Action.testDrive(name, password, ID, props.rec));
                dispatch(Action.toggleReg(false));
              } else {
                Alert.alert(
                  'Name/Number are empty',
                  'Check Name and Number Please!',
                );
              }
            }}>
            <Text style={Styles.btnText}>Submit</Text>
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
    paddingBottom: 30,
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
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
