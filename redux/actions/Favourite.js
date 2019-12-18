import axios from 'axios';
import * as Action from '../constant';
import * as Actions from './index';
import {Alert} from 'react-native';

export const getfav = obj => {
  let Params = {
    nUserName: obj.nUserName || 'sample string 1',
    nToken: obj.nToken || 'sample string 2',
    nUserID: obj.nUserID || null,
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
        dispatch({
          type: Action.GET_FAV_DATA,
          payload: res.data.FavouriteAdsData,
        });
        dispatch(Actions.toggleLoader(false));
      });
  };
};
