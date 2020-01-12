import React, {Component, useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, RefreshControl} from 'react-native';
import Search from '../../Components/Home/SearchEngin';
import SearchPost from '../../Components/YourSearch/YouSearchPost';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Header from '../../Components/Home/Header';
import * as Action from '../../redux/actions';
import Loader from '../../Components/Loader';
import {heightPercentageToDP} from 'react-native-responsive-screen';

function YourSerach(props) {
  console.log(props);
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
    setData(filter);
  }, [filter]);
  useEffect(() => {
    setBrandId(
      props.navigation.state.params !== undefined
        ? props.navigation.state.params.brand
        : null,
    );
  }, [props.navigation.state]);
  useEffect(() => {
    setShowRoom(
      props.navigation.state.params !== undefined
        ? props.navigation.state.params.showroom
        : null,
    );
  }, [props.navigation.state]);
  const ID = useSelector(state => state.Auth.ID);
  const handleRefrest = () => {
    setRefresh(true);
    Promise.all([
      dispatch(
        Action.getAds({UID: ID, Brand: BrandId, Name: ShowRoom, ...data}),
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
        <View style={{minHeight: heightPercentageToDP('50%')}}>
          <SearchPost />
        </View>
      </ScrollView>
      <Loader />
    </React.Fragment>
  );
}
export default withNavigation(YourSerach);
