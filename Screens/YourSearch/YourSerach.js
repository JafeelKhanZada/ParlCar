import React, {Component, useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, RefreshControl} from 'react-native';
import Search from '../../Components/Home/SearchEngin';
import SearchPost from '../../Components/YourSearch/YouSearchPost';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import Header from '../../Components/Home/Header';
import * as Action from '../../redux/actions';
import Loader from '../../Components/Loader';
import {heightPercentageToDP} from 'react-native-responsive-screen';

function YourSerach(props) {
  const ID = useSelector(state => state.Auth.ID);
  const [refresh, setRefresh] = useState(false);
  const [BrandId, setBrandId] = useState(null);
  const [ShowRoom, setShowRoom] = useState(null);
  const filter = useSelector(state => state.Filter);
  const [data, setData] = useState({
    nCity: null,
    nModel: null,
    nPriceFrom: null,
    nPriceTo: null,
    nYearFrom: null,
    nYearTo: null,
    nKiloMeterFrom: null,
    nKiloMeterTo: null,
  });
  useEffect(() => {
    setBrandId(
      props.navigation.state.params !== undefined
        ? props.navigation.state.params.brand
        : null,
    );
    setShowRoom(
      props.navigation.state.params !== undefined
        ? props.navigation.state.params.showroom
        : null,
    );
  }, [props]);
  useEffect(() => {
    if (props.isFocused === true) {
      const calBack = () => {
        if (
          props.navigation.state.params.showroom !== undefined &&
          props.navigation.state.params.brand !== undefined
        ) {
          if (
            props.navigation.state.params.showroom === null ||
            props.navigation.state.params.showroom === ''
          ) {
            if (
              props.navigation.state.params.brand === null ||
              props.navigation.state.params.brand === ''
            ) {
              console.log(props, data);
              if (data.nCity === null || data.nCity === '') {
                if (data.nModel === null || data.nModel === '') {
                  if (data.nPriceFrom === null || data.nPriceFrom === '')
                    if (data.nPriceTo === null || data.nPriceTo === '')
                      if (data.nYearFrom === null || data.nYearFrom === '')
                        if (data.nYearTo === null || data.nYearTo === '')
                          if (
                            data.nKiloMeterFrom === null ||
                            data.nKiloMeterFrom === ''
                          )
                            if (
                              data.nKiloMeterTo === null ||
                              data.nKiloMeterTo === ''
                            )
                              dispatch(Action.getAds({UID: ID}));
                }
              }
            }
          }
        }
      };
      if (props.navigation.state.params !== undefined)
        if (props.navigation.state.params.back !== undefined) {
          if (props.navigation.state.params.back === false) {
            // calBack();
          }
        } else {
          // calBack();
        }
    }
  }, [BrandId, ShowRoom, props]);
  useEffect(() => {
    setData(filter);
  }, [filter]);

  const handleRefrest = () => {
    setRefresh(true);
    Promise.all([
      dispatch(
        Action.getAds({UID: ID, UserId: ShowRoom, ...data, Brand: BrandId}),
      ),
    ]);
    setRefresh(false);
  };
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Header />
      <ScrollView
        style={{height: '100%'}}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefrest} />
        }>
        <Search />
        <View style={{minHeight: heightPercentageToDP('70%')}}>
          <SearchPost brand={BrandId} showroom={ShowRoom} data={data} />
        </View>
      </ScrollView>
      <Loader />
    </React.Fragment>
  );
}
export default withNavigationFocus(YourSerach);
