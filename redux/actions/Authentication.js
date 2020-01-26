import * as Action from '../constant';
import * as Actions from './index';
import axios from 'axios';
import moment from 'moment';
import {AsyncStorage, Alert} from 'react-native';
export const toggleAuth = payload => {
  return {
    type: Action.TOGGLE_AUTH,
    payload,
  };
};
export const login = (username, password, adID) => {
  let config = {
    nUserName: 'sample string 1',
    token: 'sample string 2',
    nName: username,
    nPassword: password,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/UserAuthentication',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(response => {
      if (response.data.result === true) {
        dispatch(setType(response.data.UserData[0].Type));
        dispatch({
          type: Action.SET_USER_AUTHENTICATE,
          payload: response.data.UserData[0],
        });
        dispatch({
          type: Action.SET_USER_ID,
          payload: response.data.UserData[0].ID,
        });
        dispatch(Actions.getNotification(response.data.UserData[0].ID));
        dispatch(Actions.getAds({UID: response.data.UserData[0].ID}));
        dispatch(Actions.getActiveAds({UserId: response.data.UserData[0].ID}));
        dispatch(Actions.getPending(response.data.UserData[0].ID));
        dispatch(Actions.getExpiredAds(response.data.UserData[0].ID));
        dispatch(Actions.getDeleteAD({UserId: response.data.UserData[0].ID}));
        adID === null && adID === 'R'
          ? ''
          : dispatch(
              Actions.addFavourite(adID, response.data.UserData[0].ID, {}),
            );
        adID === 'R' ? dispatch(Actions.toggleReg(true)) : '';
        let token = AsyncStorage.getItem('TOKEN').then(res => res);
        if (token === null) {
          AsyncStorage.setItem('TOKEN', response.data.token).then(() => {
            Promise.all([
              AsyncStorage.setItem(
                'UserData',
                JSON.stringify(response.data.UserData[0]),
              ),
              AsyncStorage.setItem(
                'Type',
                JSON.stringify(response.data.UserData[0].Type),
              ),
            ]);
          });
        } else {
          AsyncStorage.clear().then(() => {
            AsyncStorage.setItem('TOKEN', response.data.token).then(() => {
              Promise.all([
                AsyncStorage.setItem(
                  'UserData',
                  JSON.stringify(response.data.UserData[0]),
                ),
                AsyncStorage.setItem(
                  'Type',
                  JSON.stringify(response.data.UserData[0].Type),
                ),
              ]);
            });
          });
        }
        dispatch(toggleAuth(true));
        dispatch(Actions.Toggle_PopUp(false));
        return true;
      } else {
        Alert.alert(
          'Invalid Email or Password!',
          'Please Check Your Username/Email or Passowrd.',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
        dispatch(Actions.toggleAuth(false));
        return false;
      }
    });
  };
};
export const checkTOKEN = payload => {
  return dispatch => {
    dispatch({
      type: Action.SET_USER_AUTHENTICATE,
      payload: payload,
    });
    dispatch({
      type: Action.SET_USER_ID,
      payload: payload.ID,
    });
    dispatch(toggleAuth(true));
  };
};
export const setToken = token => {
  return {
    type: Action.SET_TOKEN,
    payload: token,
  };
};
export const logout = () => {
  return dispatch => {
    AsyncStorage.clear();
    dispatch({
      type: Action.LOG_OUT,
    });
  };
};
export const setType = type => {
  return {
    type: Action.SET_TYPE,
    payload: type,
  };
};
export const getUserById = id => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nUserID: id,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/GetUserByID',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(response => {
      if (response.data) {
        dispatch({
          type: Action.SET_USER_AUTHENTICATE,
          payload: response.data,
        });
        AsyncStorage.setItem('UserData', JSON.stringify(response.data));
      }
    });
  };
};
export const testDrive = (name, phone, send, rec, car) => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nIsNew: true,
    nCurrentID: -1,
    nSenderID: send,
    nRecieverID: rec,
    nCity: 2,
    nShowroom: '',
    nVehicleID: car,
    nStatus: 'Pending',
    oNotes: '',
    nName: name,
    nPhoneNumber: phone,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/SaveTestDriveRequest',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(response => {
      console.log(response);
      alert(response.data.message);
    });
  };
};
export const updateUser = data => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nIsNew: false,
    ...data,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/UserRegisteration',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(response => {
      console.log(response);
      dispatch(getUserById(data.nCurrentID));
    });
  };
};
export const saveUsers = data => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nIsNew: true,
    nCurrentID: -1,
    oAddress: '',
    oShowromName: '',
    oShowroomTelephone: '',
    oLogo: '',
    oLogoExtension: '',
    oActiveFromDate: moment(new Date()).format('YYYY-MM-DD'),
    oActiveToDate: moment(new Date()).format('YYYY-MM-DD'),
    nStatus: true,
    oNormal_ads_Balance: null,
    oSponsored_ads_balance: null,
    nCreatedBy: 'Asad Noman',
    nGroupID: 1,
    nType: 'Normal',
    ...data,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/UserRegisteration',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(response => {
      if (response.data.result === false) {
        Alert.alert(response.data.message);
      } else {
        dispatch(Actions.toggleSignUp(false));
        Alert.alert('Sign Up Successfuly!', '', [
          {
            text: 'Ok',
            onPress: () => dispatch(Actions.Toggle_PopUp(true)),
          },
        ]);
      }
      return response.data.result;
    });
  };
};
export const UPDATEUSER = id => {
  let config = {
    nUserName: 'sample string 1',
    token: 'sample string 2',
    nUserID: id,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/GetUserByID',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(Response => {
      AsyncStorage.setItem('UserData', JSON.stringify(Response.data)),
        dispatch({
          type: Action.SET_USER_AUTHENTICATE,
          payload: Response.data,
        });
    });
  };
};
export const forgetPassword = name => {
  let config = {
    nUserName: 'sample string 1',
    token: 'sample string 2',
    nName: name,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/ForgetUserPassword',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(Response => {
      if (Response.data.result === true) {
        dispatch(Actions.toggleForget(false));
        Alert.alert("You're Password Reset", 'Kindly Check Your Email Please!');
      } else {
        Alert.alert(
          'Wrong Email/Username',
          'Kindly Check Your Email/Username Please!',
        );
      }
      return Response.data.result;
    });
  };
};
