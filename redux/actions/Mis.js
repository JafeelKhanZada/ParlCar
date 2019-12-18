import * as Action from '../constant';
import axios from 'axios';
export const headers = {
  Authorization: 'bearer  ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  'Content-Type': 'application/json',
};
export const getCity = () => {
  let config = {};
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/GetAllCities',
    config,
    {headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_CITY,
        payload: response.data,
      });
    });
  };
};
export const getBrands = () => {
  const request = axios.post(
    'http://207.180.230.73/palcar/Api/GetAllBrands',
    {},
    {headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_BRANDS,
        payload: response.data,
      });
    });
  };
};
