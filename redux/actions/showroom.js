import * as Action from '../constant';
import axios from 'axios';
export const toggleShowroom = payload => {
  return {
    type: Action.SET_LOAD_SHOWROOM,
    payload,
  };
};

export const getShowroom = obj => {
  const config = {
    nUserName: 'sample string 1',
    token: 'sample string 2',
    nkeywordTitle: '',
    nName: '',
    nShowromName: obj.name || '',
    nType: 'Showroom',
    nEmail: '',
    nCity: null,
    nGroupID: null,
    nStatus: null,
    nOrderBy: 'ID',
    nPageIndex: 0,
    nPageSize: 2500,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/GetAllUser_Pagged',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    dispatch(toggleShowroom(true));
    request.then(response => {
      dispatch({
        type: Action.GET_SHOWROOM,
        payload: response.data.UserData !== null ? response.data.UserData : [],
      });
      dispatch(toggleShowroom(false));
    });
  };
};
export const setActiveShowroom = payload => {
  return {
    type: Action.SET_ACTIVE_SHOWROOM,
    payload,
  };
};
