import * as Action from '../constant';
import axios from 'axios';
export const getShowroom = (
  keyword,
  name,
  showroom,
  mail,
  city,
  group,
  status,
  order,
  index,
  size,
) => {
  const config = {
    nUserName: 'sample string 1',
    token: 'sample string 2',
    nkeywordTitle: '',
    nName: '',
    nShowromName: name || '',
    nType: 'Showroom',
    nEmail: '',
    nCity: null,
    nGroupID: null,
    nStatus: '',
    nOrderBy: 'ID',
    nPageIndex: 0,
    nPageSize: 12,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/GetAllUser_Pagged',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    request.then(response => {
      dispatch({
        type: Action.GET_SHOWROOM,
        payload: response.data.UserData,
      });
    });
  };
};
export const setActiveShowroom = payload => {
  return {
    type: Action.SET_ACTIVE_SHOWROOM,
    payload,
  };
};
