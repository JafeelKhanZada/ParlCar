import axios from 'axios';
import * as Action from '../constant';
import * as Actions from './index';
import {Alert} from 'react-native';

export const getfav = obj => {
  let Params = {
    nUserName: obj.nUserName || 'sample string 1',
    nToken: obj.nToken || 'sample string 2',
    nUserID: obj.nUserID === null ? -1 : obj.nUserID || null,
    nAdsID: obj.nAdsID || null,
    nOrderBy: obj.nOrderBy || 'A.CreatedDate',
    nPageIndex: obj.nPageIndex || 0,
    nPageSize: obj.nPageSize || 4,
  };
  return dispatch => {
    dispatch(Actions.toggleLoader(true));
    axios
      .post(
        'http://207.180.230.73/palcar/Api/GetAllFavouritesAds_Pagged',
        Params,
        {
          headers: Action.headers,
        },
      )
      .then(res => {
        console.log(res);
        dispatch({
          type: Action.GET_FAV_DATA,
          payload: res.data.FavouriteAdsData,
        });
        dispatch(Actions.toggleLoader(false));
      });
  };
};
export const addFavourite = (id, userId) => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nCurrentID: -1,
    nUserID: userId,
    nAdsID: id,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/SaveFavoriteAds',
    config,
    {
      headers: Action.headers,
    },
  );
  return dispatch => {
    request.then(response => {
      if (response.data.result === true) {
        dispatch(Actions.getSelected({ID: id, UID: userId}));
        Alert.alert('Ad Added Favourite Successfully');
        dispatch(Actions.getAds({UID: userId}));
      }
    });
  };
};
export const removeFavourite = id => {
  console.log(id);
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nCurrentID: -1,
    nID: id,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/RemoveFavouriteAds',
    config,
    {
      headers: Action.headers,
    },
  );
  return dispatch => {
    return request.then(response => {
      console.log(response);
      Alert.alert('Ad Remove Favourite Successfully');
    });
  };
};
