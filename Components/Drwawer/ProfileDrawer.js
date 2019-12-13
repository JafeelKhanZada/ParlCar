import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import * as Action from '../../redux/actions';
import Image1 from '../../assests/images/dashboard.png';
import Image2 from '../../assests/images/addNew.png';
import Image3 from '../../assests/images/myAd.png';
import Image4 from '../../assests/images/myAd.png';
import Image5 from '../../assests/images/notificationWhite.png';
import Image6 from '../../assests/images/feedback.png';
import ProfileImg from '../../assests/NewAssets/logo.png';
import {withNavigation} from 'react-navigation';
import {useSelector, useDispatch} from 'react-redux';
function ProfileComponent(props) {
  const Auth = useSelector(state => state.Auth.auth);
  const dispatch = useDispatch();
  let Drawer = [
    {
      label: 'Search cars',
      Icon: Image1,
      Search: 'Brand',
    },
    {
      label: 'Sell a car',
      Icon: Image2,
      Search: 'DashboardDrawer',
    },
    {
      label: 'Bank Icons',
      Icon: Image3,
      Search: 'DashboardDrawer',
    },
    {
      label: 'Inshurance Quotes',
      Icon: Image4,
      Search: 'DashboardDrawer',
    },
    {
      label: 'Recovery Number',
      Icon: Image5,
      Search: 'DashboardDrawer',
    },
    {
      label: 'Service work shops',
      Icon: Image6,
      Search: 'DashboardDrawer',
    },
    {
      label: 'Feedback',
      Icon: Image6,
      Search: 'DashboardDrawer',
    },
  ];
  return (
    <React.Fragment>
      <View
        style={{
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#222222',
        }}>
        <Image
          resizeMode="contain"
          style={{
            height: 50,
            width: 200,
            marginTop: 20,
            marginBottom: 20,
          }}
          source={ProfileImg}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#222222',
        }}>
        {Drawer.map((res, i) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(res.Search)}
              key={i}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  padding: 5,
                  borderBottomColor: '#c7c7c7',
                  borderBottomWidth: 0.5,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Image
                    resizeMethod="auto"
                    resizeMode="center"
                    style={{height: 30, width: 40}}
                    source={res.Icon}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  {res.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            Auth !== true
              ? dispatch(Action.Toggle_PopUp(true))
              : dispatch(Action.toggleAuth(false));
          }}>
          <Image
            source={require('../../assests/images/logOut.png')}
            resizeMode="stretch"
            style={{height: 20, width: 20}}
          />
          <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
            {Auth === true ? 'Logout' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

export default withNavigation(ProfileComponent);
