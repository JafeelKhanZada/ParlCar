import React, {Component, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Search from '../../Components/Home/SearchEngin';
import SearchPost from '../../Components/YourSearch/YouSearchPost';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
function YourSerach(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getAds());
  }, [props.navigation.state.key]);
  return (
    <View>
      <ScrollView style={{backgroundColor: '#F0F0F0', height: '100%'}}>
        <Search />
        <SearchPost />
      </ScrollView>
    </View>
  );
}
export default withNavigation(YourSerach);
