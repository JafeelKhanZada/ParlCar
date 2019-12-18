import React from 'react';
import Header from '../../Components/Home/Header';
import Search from '../../Components/Home/SearchEngin';
import BrandShowroom from '../../Components/Home/Brand-Showroom';
import Tab from '../../Components/Home/Tabs';
import Slider from '../../Components/Home/Slider';
import Showroom from '../../Components/Home/Showroom';
import BRAND from '../../Components/Brand/Brand';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
function HomeScreen(props) {
  const Type = useSelector(state => state.Modal.Tab);
  return (
    <React.Fragment>
      <ScrollView style={{height: hp('100%')}}>
        <Header />
        <Search />
        <BrandShowroom />
        <Tab />
        <Slider />
        {Type === 'BRAND' ? <BRAND /> : <Showroom />}
      </ScrollView>
    </React.Fragment>
  );
}

export default HomeScreen;
