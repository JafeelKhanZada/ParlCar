import axios from 'axios';
import * as Action from '../constant';
import * as Actions from './index';
import { Alert } from 'react-native';

export const getfav = (
    nUserName,
    nToken,
    nUserID,
    nAdsID,
    nOrderBy,
    nPageIndex,
    nPageSize
) => {

    let Params = {
        nUserName: nUserName || "sample string 1",
        nToken: nToken || "sample string 2",
        nUserID: nUserID || null,
        nAdsID: nAdsID || null,
        nOrderBy: nOrderBy || "A.CreatedDate",
        nPageIndex: nPageIndex || 0,
        nPageSize: nPageSize || 4
    }
    return dispatch => {
        dispatch(Actions.toggleLoader(true));
        axios.post("http://palcar.graffitecs.com/Api/GetAllFavouritesAds_Pagged", Params, {
            headers: Action.headers
        }).then((res) => {

            dispatch({
                type: Action.GET_FAV_DATA,
                payload: res.data.FavouriteAdsData
            })
            dispatch(Actions.toggleLoader(false));
        })
    }
}