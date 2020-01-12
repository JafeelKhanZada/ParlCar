import * as Action from '../constant';
import * as Actions from './index';
import axios from 'axios';
import {AsyncStorage, Alert} from 'react-native';
export const toggleAuth = payload => {
  return {
    type: Action.TOGGLE_AUTH,
    payload,
  };
};
export const login = (username, password) => {
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
    dispatch(Actions.toggleLoader(true));
    request.then(response => {
      dispatch(Actions.toggleLoader(false));
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
      } else {
        Alert.alert(
          'Invalid Email or Password!',
          'Please Check Your Username/Email or Passowrd.',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
        dispatch(Actions.toggleAuth(false));
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
      console.log(response);
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
export const testDrive = (name, phone) => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nIsNew: true,
    nCurrentID: -1,
    nSenderID: null,
    nRecieverID: null,
    nCity: 2,
    nShowroom: '',
    nVehicleID: 2,
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
      dispatch(getUserById(data.nCurrentID));
      console.log(response);
    });
  };
};
