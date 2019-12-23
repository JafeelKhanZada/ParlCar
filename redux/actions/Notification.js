import axios from 'axios';
import * as Action from '../constant';
export const getNotification = id => {
  const config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nTitle: '',
    nRecieverID: id,
    nStatus: '',
    nOrderBy: 'ID',
    nPageIndex: 0,
    nPageSize: 1000,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/GetNotification_Pagged',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_NOTIFICATION,
        payload:
          response.data.NotificationData === null
            ? []
            : response.data.NotificationData,
      });
    });
  };
};
