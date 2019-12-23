import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Homescreen/HomeScreen';
import YourSerach from '../Screens/YourSearch/YourSerach';
import Favourate from '../Screens/Favouratscreen/Favouratscreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import {Image} from 'react-native';
export default Tabnavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    YourSerach: {
      screen: YourSerach,
    },
    Favourite: {
      screen: Favourate,
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = require('../assests/NewAssets/search.png');
        }
        if (routeName === 'YourSerach') {
          iconName = require('../assests/NewAssets/history.png');
        }
        if (routeName === 'Favourite') {
          iconName = require('../assests/NewAssets/heart.png');
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return (
          <Image
            source={iconName}
            style={{width: 17, height: 17}}
            resizeMethod="auto"
            resizeMode="center"
          />
        );
      },
    }),
  
    tabBarOptions: {
      tabStyle: {
        backgroundColor: '#d81f25',
        height: '100%',
      },

      activeTintColor: 'white',
      inactiveTintColor: 'white',
    },
  },
);
