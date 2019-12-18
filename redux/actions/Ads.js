import axios from 'axios';
import * as Action from '../constant';
import * as Actions from './index';
import {Header} from 'react-navigation-stack';
export const getAds = obj => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nShowRoom: obj.Name || '',
    nAdsID: obj.ID || null,
    nCity: obj.City || null,
    nModel: obj.Model || '',
    nPriceFrom: obj.PriceFrom || null,
    nPriceTo: obj.PriceTo || null,
    nYearFrom: obj.YearFrom || '',
    nYearTo: obj.YearTo || '',
    nOrderBy: obj.OrderBy || 'A.ID',
    nKiloMeterFrom: obj.KileFrom || null,
    nKiloMeterTo: obj.KiloTo || null,
    nStatusID: obj.Status || 2,
    nUserID: obj.UserId || null,
    nPageIndex: obj.Index || 0,
    nPageSize: obj.Size || 10,
  };
  return dispatch => {
    dispatch(Actions.toggleLoader(true));
    axios
      .post('http://207.180.230.73/palcar/Api/GetAllAds_Pagged', config, {
        headers: Action.headers,
      })
      .then(response => {
        dispatch({
          type: Action.GET_ADS_PAGES,
          payload: response.data.AdsData === null ? [] : response.data.AdsData,
        });
        dispatch(Actions.toggleLoader(false));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const selectAd = payload => {
  return {
    type: Action.SELECT_AD,
    payload,
  };
};
export const deleteAd = (id, nId) => {
  const config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nAdsID: id,
  };
  return dispatch => {
    axios
      .post('http://207.180.230.73/palcar/Api/DeleteAds', config, {
        headers: Action.headers,
      })
      .then(response => {
        console.log(response);
        if (response.data.QueryResponse[0].result === true) {
          dispatch(getAds({UserId: nId}));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
