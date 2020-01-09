import React, {Component, useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, RefreshControl} from 'react-native';
import Search from '../../Components/Home/SearchEngin';
import SearchPost from '../../Components/YourSearch/YouSearchPost';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Header from '../../Components/Home/Header';
import * as Action from '../../redux/actions';
import Loader from '../../Components/Loader';

function YourSerach(props) {
  console.log(props);
  const [refresh, setRefresh] = useState(false);
  const [BrandId, setBrandId] = useState(null);
  const [ShowRoom, setShowRoom] = useState(null);
  useEffect(() => {
    setBrandId(
      props.navigation.state.params.brand !== undefined
        ? props.navigation.state.params.brand
        : null,
    );
  }, [props.navigation.state]);
  useEffect(() => {
    setShowRoom(
      props.navigation.state.params.showroom !== undefined
        ? props.navigation.state.params.showroom
        : null,
    );
  }, [props.navigation.state]);
  const ID = useSelector(state => state.Auth.ID);
  const handleRefrest = () => {
    setRefresh(true);
    Promise.all([
      dispatch(Action.getAds({UID: ID, Brand: BrandId, Name: ShowRoom})),
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
        <View>
          <SearchPost />
        </View>
      </ScrollView>
      <Loader />
    </React.Fragment>
  );
}
export default withNavigation(YourSerach);
