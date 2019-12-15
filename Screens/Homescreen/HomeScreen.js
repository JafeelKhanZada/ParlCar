import React, {useState, useEffect} from 'react';
import Header from '../../Components/Home/Header';
import Search from '../../Components/Home/SearchEngin';
import BrandShowroom from '../../Components/Home/Brand-Showroom';
import Tab from '../../Components/Home/Tabs';
import Slider from '../../Components/Home/Slider';
import Showroom from '../../Components/Home/Showroom';
import BRAND from '../../Components/Brand/Brand';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import * as Action from '../../redux/actions';
function HomeScreen() {
  const Type = useSelector(state => state.Modal.Tab);
  // const [Tabs, setTab] = useState('BRAND');
  // useEffect(() => {
  //   setTab(Type);
  // }, [Type]);
  return (
    <React.Fragment>
      <View style={{position: 'absolute', zIndex: 1}}>
        <Search />
        <ScrollView>
          {/* <Header /> */}
          <BrandShowroom />
          <Tab />
          <Slider />
          {Type === 'BRAND' ? <BRAND /> : <Showroom />}
        </ScrollView>
      </View>
    </React.Fragment>
  );
}
HomeScreen.navigationOptions = {
  headerTitle: () => <Header />,
};
export default HomeScreen;
