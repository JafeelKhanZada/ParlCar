import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Homescreen/HomeScreen';
import YourSerach from '../Screens/YourSearch/YourSerach';
import Favourate from '../Screens/Favouratscreen/Favouratscreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Image, TouchableOpacity, View} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
export default Tabnavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={20} name={'home'} />
        ),
      },
    },
    YourSerach: {
      screen: YourSerach,
      navigationOptions: {
        tabBarOnPress: ({navigation, defaultHandler}) => {
          console.log(navigation);
          navigation.navigate('YourSerach', {
            brand: null,
            showroom: null,
            back: false,
          });
          defaultHandler();
        },
        tabBarLabel: 'Your Search',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={20} name={'clockcircleo'} />
        ),
      },
    },
    Favourite: {
      screen: Favourate,
      navigationOptions: {
        tabBarLabel: 'Favourite',
        tabBarOnPress: ({navigation, defaultHandler}) => {
          console.log(navigation);
          navigation.navigate('Favourite');
          defaultHandler();
        },
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={20} name={'heart'} />
        ),
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      initialRouteName: 'Home',
      barStyle: {backgroundColor: '#BF1B20'},
      inactiveColor: '#ABABAB',
    }),

    tabBarOptions: {},
  },
);
