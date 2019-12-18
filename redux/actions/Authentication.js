import * as Action from '../constant';
import * as Actions from './index';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
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
          payload: response.data.UserData,
        });
        dispatch({
          type: Action.SET_USER_ID,
          payload: response.data.UserData[0].ID,
        });
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
