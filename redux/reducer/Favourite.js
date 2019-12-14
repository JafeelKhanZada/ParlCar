import * as Action from "../constant"
const initstate = {
    FavAds: [],
    SelectAds: []
}
const FavAdsReducer = (state = initstate, action) => {
    switch (action.type) {
        case Action.GET_FAV_DATA: {
            return {
                ...state,
                FavAds: action.payload,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
export default FavAdsReducer;