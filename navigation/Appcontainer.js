import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View, Text} from 'react-native';
import {ProfileDrawer} from './Drawernavigation';
import Brand from '../Screens/Brandscreen/Brandscreen';
import Serach from '../Components/Home/SearchComponent';
import Details from '../Components/YourSearch/CarDetails';
import Header from '../Components/Notification/NotificationHeader';
import Notification from '../Screens/Notification/Notification';
import DashboardHEader from '../Components/Dashboard/DashboardHeader';
import Drawer from '../Components/Drwawer/Drawers';
import {DashboardDrawer} from './DashboardDrwawer';
const Appcontainer = createStackNavigator(
  {
    Drawer: {
      screen: ProfileDrawer,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        };
      },
    },
    // DashboardDrawer: {
    //   screen: DashboardDrawer,
    //   navigationOptions: ({navigation}) => ({
    //     header: <DashboardHEader navigation={navigation} />,
    //   }),
    // },
  
    Details: {
      screen: Details,
    },
    Notification: {
      screen: Notification,
      navigationOptions: ({navigation}) => ({
        header: () => <Header navigation={navigation} />,
      }),
    },
  },
  {
    initialRouteName: 'Drawer',
  },
);
export default createAppContainer(Appcontainer);
