import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, RefreshControl} from 'react-native';
import Favouritepost from '../../Components/Favourite/Favouritepost';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Header from '../../Components/Home/Header';
import * as Action from '../../redux/actions';
import Loader from '../../Components/Loader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
function Fav(props) {
  const ID = useSelector(state => state.Auth.ID);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getfav({nUserID: ID}));
  }, []);
  const [refresh, setRefresh] = useState(false);
  const refreshing = () => {
    setRefresh(true);
    dispatch(Action.getfav({nUserID: ID}));
    setRefresh(false);
  };
  return (
    <React.Fragment>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={refreshing} />
        }
        style={{height: hp('100%'), backgroundColor: '#f4f4f4'}}>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            backgroundColor: 'white',
          }}>
          <Text
            style={{fontSize: 20, padding: 12, fontFamily: 'Poppins-Medium'}}>
            Favourites
          </Text>
          <Favouritepost />
        </View>
      </ScrollView>
      <Loader />
    </React.Fragment>
  );
}

export default withNavigation(Fav);
