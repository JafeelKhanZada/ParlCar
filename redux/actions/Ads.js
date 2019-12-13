import axios from 'axios';
import * as Action from '../constant';
import * as Actions from './index';
import {Header} from 'react-navigation-stack';
export const getAds = (
  Name,
  ID,
  City,
  Model,
  PriceFrom,
  PriceTo,
  YearFrom,
  YearTo,
  OrderBy,
  KileFrom,
  KiloTo,
  Status,
  UserId,
  Index,
  Size,
) => {
  let config = {
    nUserName: 'sample string 1',
    nToken: 'sample string 2',
    nShowRoom: Name || '',
    nAdsID: ID || null,
    nCity: City || null,
    nModel: Model || '',
    nPriceFrom: PriceFrom || null,
    nPriceTo: PriceTo || null,
    nYearFrom: YearFrom || '',
    nYearTo: YearTo || '',
    nOrderBy: OrderBy || 'A.ID',
    nKiloMeterFrom: KileFrom || null,
    nKiloMeterTo: KiloTo || null,
    nStatusID: Status || 2,
    nUserID: UserId || null,
    nPageIndex: Index || 0,
    nPageSize: Size || 10,
  };
  return dispatch => {
    dispatch(Actions.toggleLoader(true));
    axios
      .post('http://palcar.graffitecs.com/Api/GetAllAds_Pagged', config, {
        headers: Action.headers,
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: Action.GET_ADS_PAGES,
          payload: response.data.AdsData,
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
