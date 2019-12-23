import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Image1 from '../../assests/images/dashboard.png';
import Image2 from '../../assests/images/addNew.png';
import Image3 from '../../assests/images/myAd.png';
import Image4 from '../../assests/images/balance.png';
import Image5 from '../../assests/images/notificationWhite.png';
import Image6 from '../../assests/images/feedback.png';
import {Thumbnail} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Action from '../../redux/actions';
import {withNavigation} from 'react-navigation';
import {heightPercentageToDP as Hp} from 'react-native-responsive-screen';
function DrawerComponent(props) {
  console.log(props.navigation);
  const dispatch = useDispatch();
  const Auth = useSelector(state => state.Auth.auth);
  const user = useSelector(state => state.Auth.UserData);
  const [User, setUser] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setUser([user]);
    console.log(user);
  }, [user]);
  let Drawer = [
    {
      label: 'Dashboard',
      Icon: Image1,
      Search: 'Home',
    },
    {
      label: 'Add New',
      Icon: Image2,
      Search: 'AddNew',
    },
    {
      label: 'My Ads',
      Icon: Image3,
      Search: 'Dashboard',
    },
    {
      label: 'Balance',
      Icon: Image4,
      Search: '',
    },
    {
      label: 'Notification',
      Icon: Image5,
      Search: '',
    },
    {
      label: 'Feedback',
      Icon: Image6,
      Search: '',
    },
    {
      label: 'Profile',
      Icon: Image6,
      Search: '',
      // Icon: Image7
    },
  ];
  return (
    <ScrollView style={{height: Hp('100%'), backgroundColor: '#222222'}}>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', padding: 10}}
        onPress={() => props.navigation.closeDrawer()}>
        <Icon name="close" color="white" size={14} />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <Thumbnail
          style={{borderWidth: 2, borderColor: 'white', marginTop: 30}}
          large
          source={{
            uri: `http://207.180.230.73/palcar${User.map((v, k) => v.Logo)}`,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            fontFamily: 'Poppins',
            letterSpacing: 1,
            padding: 20,
          }}>
          {User.map((v, k) => v.ShowromName)}
        </Text>
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
DrawerComponent.navigationOptions = {
  drawerLabel: () => null,
};
export default withNavigation(DrawerComponent);
