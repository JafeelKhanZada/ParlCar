import React, {useEffect} from 'react';
import Header from '../../Components/Home/Header';
import Search from '../../Components/Home/SearchEngin';
import BrandShowroom from '../../Components/Home/Brand-Showroom';
import Tab from '../../Components/Home/Tabs';
import Slider from '../../Components/Home/Slider';
import Showroom from '../../Components/Home/Showroom';
import BRAND from '../../Components/Brand/Brand';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
import {Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
function HomeScreen(props) {
  const dispatch = useDispatch();
  const Type = useSelector(state => state.Modal.Tab);
  const ID = useSelector(state => state.Auth.ID);
  return (
    <React.Fragment>
      <Header />
      <ScrollView style={{height: hp('100%')}}>
        <Search />
        <BrandShowroom />
        <Tab />
        <Slider />
        {Type === 'BRAND' ? <BRAND /> : <Showroom />}
      </ScrollView>
    </React.Fragment>
  );
}

export default withNavigation(HomeScreen);
