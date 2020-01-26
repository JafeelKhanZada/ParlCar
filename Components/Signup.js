import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Picker,
  PickerItem,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Action from '../redux/actions';
import Loader from './Loader';
import {withNavigation} from 'react-navigation';
import useForm from 'react-hook-form';
const State = {
  nName: '',
  nPassword: '',
  nCity: null,
  nCountry: null,
  oShowroomTelephone: '',
  nEmail: '',
};
function SIGNUP(props) {
  const [AdID, setAdID] = useState(null);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [dis, setDis] = useState(false);
  const City = useSelector(state => state.Mis.City);
  const Country = useSelector(state => state.Mis.Country);
  const Visibility = useSelector(state => state.Modal.SignUp);
  const {
    register,
    setValue,
    getValues,
    reset,
    watch,
    errors,
    formState,
    setError,
  } = useForm({
    mode: 'onBlur',
    defaultValues: State,
  });
  const value = watch();
  useEffect(() => {
    setVisible(Visibility);
    dispatch(Action.getCountry());
  }, [Visibility]);
  const valid = () => {
    let city = getValues().nCity === null ? false : true;
    let pass = getValues().nPassword === '' ? false : true;
    let name = getValues().nName === '' ? false : true;
    let country = getValues().nCountry === null ? false : true;
    let mail = getValues().nEmail === '' ? false : true;
    if (city === false) {
      setError('nCity');
    }
    if (pass === false) {
      setError('nPassword');
    }
    if (name === false) {
      setError('nName');
    }
    if (country === false) {
      setError('nCountry');
    }
    if (mail === false) {
      setError('nEmail');
    }
  };
  const submitHandle = () => {
    valid();
    if (
      errors.nCity ||
      errors.nPassword ||
      errors.nName ||
      errors.nCountry ||
      errors.nEmail
    ) {
      Alert.alert('Please Fill All Neccessary Fields!');
    } else {
      setDis(true);
      Promise.all([dispatch(Action.saveUsers(getValues()))]).then(val => {
        if (val[0] === true) {
          reset();
        }
        setDis(false);
      });
    }
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={Styles.Container} />
      <View style={Styles.Popup}>
        <KeyboardAvoidingView
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          behavior="height"
          enabled>
          {dis === true ? <Loader /> : <React.Fragment></React.Fragment>}
          <ScrollView style={{width: '100%'}}>
            <View style={Styles.Ads}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={() =>
                  props.id === true
                    ? props.navigation.navigate('Home')
                    : dispatch(Action.toggleSignUp(false))
                }>
                <Icon name="close" size={15} />
              </TouchableOpacity>
              <Text style={Styles.Text}>Sign Up</Text>
              <Text style={Styles.Text1}>User</Text>
              <View style={Styles.TextContainer}>
                <Text
                  style={{
                    ...Styles.Text,
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 10,
                  }}>
                  User Name
                </Text>
                <TextInput
                  placeholder="Enter your username here."
                  ref={register({name: 'nName'}, {required: true})}
                  onChangeText={text => setValue('nName', text, true)}
                  style={{
                    ...Styles.TextInputContainer,
                    borderColor: errors.nName ? 'red' : '#CFCFCF',
                  }}
                  onChangeText={text => setValue('nName', text, true)}
                  value={value.nName}
                />
              </View>
              <View style={Styles.TextContainer}>
                <Text
                  style={{
                    ...Styles.Text,
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 10,
                  }}>
                  Password
                </Text>
                <TextInput
                  placeholder="Enter your password here."
                  ref={register({name: 'nPassword'}, {required: true})}
                  onChangeText={text => setValue('nPassword', text, true)}
                  style={{
                    ...Styles.TextInputContainer,
                    borderColor: errors.nPassword ? 'red' : '#CFCFCF',
                  }}
                  secureTextEntry={true}
                  value={value.nPassword}
                />
              </View>
              <View style={Styles.TextContainer}>
                <Text
                  style={{
                    ...Styles.Text,
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 10,
                  }}>
                  Email
                </Text>
                <TextInput
                  placeholder="Enter your email here."
                  ref={register({name: 'nEmail'}, {required: true})}
                  style={{
                    ...Styles.TextInputContainer,
                    borderColor: errors.nEmail ? 'red' : '#CFCFCF',
                  }}
                  onChangeText={text => setValue('nEmail', text, true)}
                  value={value.nEmail}
                />
              </View>
              <View style={Styles.TextContainer}>
                <Text
                  style={{
                    ...Styles.Text,
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 10,
                  }}>
                  Phone Number
                </Text>
                <TextInput
                  placeholder="Enter your number here."
                  ref={register(
                    {name: 'oShowroomTelephone'},
                    {required: false},
                  )}
                  style={{
                    ...Styles.TextInputContainer,
                    borderColor: errors.oShowroomTelephone ? 'red' : '#CFCFCF',
                  }}
                  onChangeText={text =>
                    setValue('oShowroomTelephone', text, false)
                  }
                  value={value.oShowroomTelephone}
                />
              </View>
              <View
                style={{
                  ...Styles.TextContainer,
                }}>
                <Text
                  style={{
                    ...Styles.Text,
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 10,
                  }}>
                  Country
                </Text>
                <View
                  style={{
                    ...Styles.TextInputContainer,
                    margin: 0,
                    borderColor: errors.nCountry ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      height: 28,
                    }}
                    selectedValue={value.nCountry}
                    ref={register({name: 'nCountry'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) => {
                      setValue('nCountry', itemValue, true);
                    }}>
                    <PickerItem label="--Country" value={null} disabled />
                    {Country &&
                      Country.map((v, k) => {
                        return (
                          <Picker.Item label={v.CountryName} value={v.Id} />
                        );
                      })}
                  </Picker>
                </View>
              </View>
              <View
                style={{
                  ...Styles.TextContainer,
                }}>
                <Text
                  style={{
                    ...Styles.Text,
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 10,
                  }}>
                  City
                </Text>
                <View
                  style={{
                    ...Styles.TextInputContainer,
                    margin: 0,
                    borderColor: errors.nCity ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      height: 28,
                    }}
                    selectedValue={value.nCity}
                    ref={register({name: 'nCity'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) => {
                      setValue('nCity', itemValue, true);
                    }}>
                    <PickerItem label="--City" value={null} disabled />
                    {City &&
                      City.map((v, k) => {
                        return <Picker.Item label={v.CityName} value={v.ID} />;
                      })}
                  </Picker>
                </View>
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
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
export default withNavigation(SIGNUP);
const Styles = StyleSheet.create({
  Container: {
    position: 'relative',
    width: '100%',
    height:"100%",
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
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginLeft: '5%',
  },
  Text: {
    fontSize: 14,
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
    fontSize: 10,
    marginTop: 5,
    color: '#c7c7c7',
    borderRadius: 2,
    letterSpacing: 1,
    paddingLeft: 10,
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
