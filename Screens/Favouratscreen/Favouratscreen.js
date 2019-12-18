import React, {useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Favouritepost from '../../Components/Favourite/Favouritepost';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Header from '../../Components/Home/Header';
import * as Action from '../../redux/actions';
function Fav(props) {
  const ID = useSelector(state => state.Auth.ID);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getfav({nUserID: ID}));
  }, [props.navigation.state.key]);
  return (
    <View>
      <Header />
      <View
        style={{
          padding: 5,
          borderTopWidth: 1,
          borderTopColor: 'lightgrey',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 20, padding: 12, fontFamily: 'Poppins-Medium'}}>
          Favourites
        </Text>
      </View>
      <Favouritepost />
    </View>
  );
}

export default withNavigation(Fav);
