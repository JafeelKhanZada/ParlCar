import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Brand from '../Screens/Brandscreen/Brandscreen';
import Home from '../Screens/Homescreen/HomeScreen';
import {DashboardDrawer} from './DashboardDrwawer';
import Tab from './BottomTabNavigator';
import AddNew from '../Components/Dashboard/AddNewAdds';
import ProfileDrwawer from '../Components/Drwawer/ProfileDrawer';
import Activeads from '../Components/Dashboard/ActiveAds';
import Expiredads from '../Components/Dashboard/ExpiredAdds';
import PendingAds from '../Components/Dashboard/PendingAds';
import DashboardAds from '../Screens/Dashboard/Dashboard';
import Drawer from '../Components/Drwawer/Drawers';
import Header from '../Components/Home/Header';
import Profile from "../Components/Dashboard/Profile"
// import DashboardDrawe from '../Components/Drwawer/DashboardDrawer';
export const ProfileDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Tab,
    },
    AddNew: {
      screen: AddNew,
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
    Dashboard: {
      screen: DashboardAds,
    },
    Profile:{
      screen:Profile
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerType: 'slide',
    navigationOptions: {
      drawerLabel: () => null, // to hide this header
      header: null,
    },
  },
);
