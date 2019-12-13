import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Homescreen/HomeScreen';
import YourSerach from '../Screens/YourSearch/YourSerach';
import Favourate from '../Screens/Favouratscreen/Favouratscreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
function tab(){
  
}
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
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
          IconComponent = Icon;
        }
        if (routeName === 'YourSerach') {
          iconName = `clock`;
          IconComponent = FoundationIcon;
        }
        if (routeName === 'Favourite') {
          iconName = `heart`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = FoundationIcon;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      tabStyle: {
        backgroundColor: '#d81f25',
      },
      activeTintColor: '#CCCCCC',
      inactiveTintColor: 'white',
    },
  },
);
