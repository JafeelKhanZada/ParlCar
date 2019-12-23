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
import {withNavigation} from 'react-navigation';
function NotificationHeader(props) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Drawer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrow-left" size={20} style={{marginLeft: 10}} />
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Image
            style={styles.logoImg}
            source={require('../../assests/images/logo.png')}
          />
        </View>
        <View style={styles.HeaderNotification}>
          <TouchableOpacity>
            <Image
              style={styles.notificationImg}
              // source={require('../../assests/images/notification.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default withNavigation(NotificationHeader);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding:5
  },
  Drawer: {
    width: '25%',
    backgroundColor: 'white',
  },
  menuimg: {
    height: 25,
    width: 38,
    marginLeft: 5,
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
    height: 30,
    width: 34,
    margin: 10,
  },
});
