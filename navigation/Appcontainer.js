import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View, Text} from 'react-native';
import {ProfileDrawer} from './Drawernavigation';
import Brand from '../Screens/Brandscreen/Brandscreen';
import Serach from '../Components/Home/SearchComponent';
import Details from '../Components/YourSearch/CarDetails';
import Header from '../Components/Home/Header';
import Notification from '../Screens/Notification/Notification';
import Activeads from '../Components/Dashboard/ActiveAds';
import Expiredads from '../Components/Dashboard/ExpiredAdds';
import DashboardHEader from '../Components/Dashboard/DashboardHeader';
import PendingAds from '../Components/Dashboard/PendingAds';
import {DashboardDrawer} from './DashboardDrwawer';
const Appcontainer = createStackNavigator(
  {
    Drawer: {
      screen: ProfileDrawer,
      navigationOptions: ({navigation}) => ({
        header: <Header navigation={navigation} />,
      }),
    },
    DashboardDrawer: {
      screen: DashboardDrawer,
      navigationOptions: ({navigation}) => ({
        header: <DashboardHEader navigation={navigation} />,
      }),
    },
    Details: {
      screen: Details,
    },
    Notification: {
      screen: Notification,
    },
    Activeads: {
      screen: Activeads,
    },
    Expiredads: {
      screen: Expiredads,
    },
    PendingAds: {
      screen: PendingAds,
    },
  },
  {
    initialRouteName: 'Drawer',
  },
);
export default createAppContainer(Appcontainer);
