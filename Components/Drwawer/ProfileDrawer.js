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
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Action from '../../redux/actions';
import Image1 from '../../assests/images/dashboard.png';
import Image2 from '../../assests/images/addNew.png';
import Image3 from '../../assests/images/myAd.png';
import Image4 from '../../assests/images/myAd.png';
import Image5 from '../../assests/images/notificationWhite.png';
import Image6 from '../../assests/images/feedback.png';
import ProfileImg from '../../assests/NewAssets/logo.png';
import {withNavigation} from 'react-navigation';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
function ProfileComponent(props) {
  console.log(props);
  const Auth = useSelector(state => state.Auth.auth);
  const dispatch = useDispatch();
  let Drawer = [
    {
      label: 'Search cars',
      Icon: Image1,
      Search: 'Home',
    },
    {
      label: 'Sell a car',
      Icon: Image2,
      Search: 'AddNew',
    },
    {
      label: 'Bank Icons',
      Icon: Image3,
      Search: '',
    },
    {
      label: 'Inshurance Quotes',
      Icon: Image4,
      Search: '',
    },
    {
      label: 'Recovery Number',
      Icon: Image5,
      Search: '',
    },
    {
      label: 'Service work shops',
      Icon: Image6,
      Search: '',
    },
    {
      label: 'Feedback',
      Icon: Image6,
      Search: '',
    },
  ];
  return (
    <ScrollView
      style={{
        backgroundColor: '#212121',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', padding: 5}}
          onPress={() => props.navigation.closeDrawer()}>
          <Icon name="close" color="white" size={14} />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={{
            height: 50,
            width: 200,
            marginTop: 30,
            marginBottom: 30,
          }}
          source={ProfileImg}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        {Drawer.map((res, i) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(res.Search)}
              style={{
                backgroundColor:
                  props.navigation.state.index === i
                    ? '#363535'
                    : 'transparent',
              }}
              key={i}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  padding: 7,
                  borderBottomColor: '#c7c7c7',
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
              : dispatch(Action.logout());
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
    </ScrollView>
  );
}
ProfileComponent.navigationOptions = {
  drawerLabel: () => null,
};
export default withNavigation(ProfileComponent);
