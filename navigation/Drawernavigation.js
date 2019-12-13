import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Brand from '../Screens/Brandscreen/Brandscreen';
import Home from '../Screens/Homescreen/HomeScreen';
import {DashboardDrawer} from './DashboardDrwawer';
import Tab from './BottomTabNavigator';
import AddNew from '../Components/Dashboard/AddNewAdds';
import ProfileDrwawer from '../Components/Drwawer/ProfileDrawer';
// import DashboardDrawer from "../Components/Drwawer/DashboardDrawer"
export const ProfileDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Tab,
    },
    Brand: {
      screen: Brand,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: ProfileDrwawer,
    drawerType: 'front',
  },
);
