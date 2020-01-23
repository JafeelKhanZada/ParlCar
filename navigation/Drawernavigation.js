import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Brand from '../Screens/Brandscreen/Brandscreen';
import Home from '../Screens/Homescreen/HomeScreen';
import {DashboardDrawer} from './DashboardDrwawer';
import {createStackNavigator} from 'react-navigation-stack';
import Tab from './BottomTabNavigator';
import AddNew from '../Components/Dashboard/AddNewAdds';
// import ProfileDrwawer from '../Components/Drwawer/ProfileDrawer';
import Activeads from '../Components/Dashboard/ActiveAds';
import Expiredads from '../Components/Dashboard/ExpiredAdds';
import PendingAds from '../Components/Dashboard/PendingAds';
import DashboardAds from '../Screens/Dashboard/Dashboard';
import DELETEDADS from '../Components/Dashboard/DeletedAd';
import Drawer from '../Components/Drwawer/Drawers';
// import Header from '../Components/Home/Header';
import Profile from '../Components/Dashboard/Profile';
import Header from '../Components/Dashboard/Header';
import Login from '../Components/Login';

// import DashboardDrawe from '../Components/Drwawer/DashboardDrawer';
const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: DashboardAds,
    navigationOptions: {
      drawerLabel: () => null, // to hide this header
      header: null,
    },
  },
  Activeads: {
    screen: Activeads,
    navigationOptions: {
      drawerLabel: () => null, // to hide this header
      header: null,
    },
  },
  Expiredads: {
    screen: Expiredads,
    navigationOptions: {
      drawerLabel: () => null, // to hide this header
      header: null,
    },
  },
  PendingAds: {
    screen: PendingAds,
    navigationOptions: {
      drawerLabel: () => null, // to hide this header
      header: null,
    },
  },
  DeletedAd: {
    screen: DELETEDADS,
    navigationOptions: {
      drawerLabel: () => null, // to hide this header
      header: null,
    },
  },
});
export const ProfileDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Tab,
    },
    AddNew: {
      screen: AddNew,
    },
    Dashboard: {
      screen: AppNavigator,
    },
    Activead: {
      screen: Activeads,
    },
    Expiredad: {
      screen: Expiredads,
    },
    PendingAd: {
      screen: PendingAds,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerType: 'slide',
    navigationOptions: {
      // drawerLabel: () => null, // to hide this header
      // header: null,
    },
  },
);
