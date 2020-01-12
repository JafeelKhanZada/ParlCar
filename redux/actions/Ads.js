import axios from 'axios';
import * as Action from '../constant';
import * as Actions from './index';
import moment from 'moment';
export const getAds = obj => {
  console.log(obj);
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nShowRoom: obj.Name || '',
    nAdsID: obj.ID || null,
    nCity: obj.nCity || null,
    nModel: '',
    nPriceFrom: obj.nPriceFrom || null,
    nPriceTo: obj.nPriceTo || null,
    nYearFrom: obj.nYearFrom || '',
    nYearTo: obj.nYearTo || '',
    nOrderBy: obj.OrderBy || 'A.ID',
    nKiloMeterFrom: obj.nKiloMeterFrom || null,
    nKiloMeterTo: obj.nKiloMeterTo || null,
    nStatusID: obj.Status || 2,
    nUserID: obj.UserId || null,
    nPageIndex: obj.Index || 0,
    nPageSize: obj.Size || 100,
    oBrandID: obj.Brand || null,
    oCategoryID: obj.Category || null,
    CuurentLoginUserID: obj.UID || -1,
    nBodyType: null,
    nkeywordTitle: obj.nModel || '',
  };
  return dispatch => {
    dispatch(Actions.toggleLoader(true));
    return axios
      .post('http://207.180.230.73/palcar/Api/GetAllAds_Pagged', config, {
        headers: Action.headers,
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: Action.GET_ADS_PAGES,
          payload: response.data.AdsData === null ? [] : response.data.AdsData,
        });
        dispatch(Actions.toggleLoader(false));
        return response.data;
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
        if (response.data.QueryResponse[0].result === true) {
          dispatch(getAds({UID: nId}));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const getSelected = obj => {
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
    oBrandID: obj.Brand || null,
    oCategoryID: obj.Category || null,
    CuurentLoginUserID: obj.UID || -1,
  };
  return dispatch => {
    axios
      .post('http://207.180.230.73/palcar/Api/GetAllAds_Pagged', config, {
        headers: Action.headers,
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: Action.SELECT_AD,
          payload: response.data.AdsData === null ? [] : response.data.AdsData,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const getActiveAds = obj => {
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
    nPageSize: obj.Size || 100,
    oBrandID: obj.Brand || null,
    oCategoryID: obj.Category || null,
    CuurentLoginUserID: obj.UID || -1,
  };
  return dispatch => {
    return axios
      .post('http://207.180.230.73/palcar/Api/GetAllAds_Pagged', config, {
        headers: Action.headers,
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: Action.GET_ACTIVE_ADS,
          payload: response.data.AdsData !== null ? response.data.AdsData : [],
        });
        dispatch(getAds({UID: obj.UserId}));
      });
  };
};
export const getExpiredAds = userId => {
  return dispatch => {
    dispatch(getAds({UserId: userId, Status: 4})).then(response => {
      dispatch({
        type: Action.GET_DELETED_ADS,
        payload: response.AdsData !== null ? response.AdsData : [],
      });
    });
  };
};
export const getPending = userId => {
  return dispatch => {
    dispatch(getAds({UserId: userId, Status: 1})).then(response => {
      dispatch({
        type: Action.GET_PENDING_ADS,
        payload: response.AdsData !== null ? response.AdsData : [],
      });
    });
  };
};
export const saveAd = adData => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nIsNew: true,
    nSource: 'Mobile App',
    nCurrentID: -1,
    nDateFrom: moment(new Date()).format('YYYY-MM-DD'),
    nDateTo: moment(new Date()).format('YYYY-MM-DD'),
    nStatus: 2,
    ...adData,
  };
  let request = axios.post(
    'http://207.180.230.73/palcar/Api/SaveVehicleAds',
    config,
    {headers: Action.headers},
  );
  console.log(JSON.stringify(config));
  return dispatch => {
    request.then(response => {
      console.log(response);
    });
  };
};
