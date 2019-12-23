import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
function Header(props) {
  const Auth = useSelector(state => state.Auth.auth);
  const [Noti, setNoti] = useState([]);
  const Notification = useSelector(state => state.Notification.Notifcation);
  useEffect(() => {
    setNoti(Notification);
  }, [Notification]);
  console.log(props);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Drawer}>
          <TouchableOpacity
            style={{paddingRight: 5}}
            onPress={() => {
              props.navigation.openDrawer();
            }}>
            <Image
              style={styles.menuimg}
              source={require('../../assests/images/menu.png')}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Image
            style={styles.logoImg}
            source={require('../../assests/images/logo.png')}
          />
        </View>
        <View style={{...styles.HeaderNotification}}>
          <TouchableOpacity
            style={{display: Auth === false ? 'none' : 'flex'}}
            onPress={() => props.navigation.navigate('Favourite')}>
            <Image
              style={styles.notificationImg}
              source={require('../../assests/images/heartRed.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: Auth === false ? 'none' : 'flex',
              position: 'relative',
            }}
            onPress={() => props.navigation.navigate('Notification')}>
            <Image
              style={styles.notificationImg}
              source={require('../../assests/images/notification.png')}
            />
            <View
              style={{
                width: 19,
                height: 18,
                backgroundColor: '#d81f25',
                position: 'absolute',
                left: 20,
                top: 10,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 9,
                }}>
                {Noti.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default withNavigation(Header);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 0.5,
  },
  Drawer: {
    width: '25%',
    backgroundColor: 'white',
  },
  menuimg: {
    height: 20,
    width: 25,
    marginLeft: 20,
  },
  logo: {
    width: '50%',
    height: 'auto',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoImg: {
    justifyContent: 'center',
    height: 50,
    width: 90,
  },
  HeaderNotification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '25%',
    backgroundColor: 'white',
  },
  notificationImg: {
    height: 25,
    width: 28,
    margin: 10,
  },
});
