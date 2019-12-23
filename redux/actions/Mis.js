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
export const getCategories = () => {
  const request = axios.post(
    'http://207.180.230.73/palcar/Api/GetAllCategories',
    {},
    {headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_CATEGORIES,
        payload: response.data,
      });
    });
  };
};
export const getPrice = () => {
  const config = {};
  const request = axios.post(
    'http://207.180.230.73/palcar/Api/GetPriceList',
    config,
    {headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_PRICE_LIST,
        payload: response.data,
      });
    });
  };
};
export const getMile = () => {
  const config = {};
  const request = axios.post(
    'http://207.180.230.73/palcar/Api/GetMileList',
    config,
    {headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_MILES,
        payload: response.data,
      });
    });
  };
};
export const getYears = () => {
  const config = {};
  const request = axios.post(
    'http://207.180.230.73/palcar/Api/GetYearList',
    config,
    {headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_YEARS,
        payload: response.data,
      });
    });
  };
};
export const getBodyType = () => {
  let config = {};
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/GetBodyTypes',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    return request.then(response => {
      dispatch({
        type: Action.GET_BODY_TYPE,
        payload: response.data,
      });
    });
  };
};
