import React from 'react';
import {View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const Navbutton = props => {
  console.log(props);
  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{
            ...styles.container,
            backgroundColor:
              props.navigation.state.routeName === 'Brand'
                ? '#d81f25'
                : 'white',
          }}
          onPress={() => props.navigation.navigate('Brand')}>
          <Text
            style={{
              ...styles.text,
              color:
                props.navigation.state.routeName === 'Brand'
                  ? 'white'
                  : '#c7c7c7',
            }}>
            BRAND
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.container,
            backgroundColor:
              props.navigation.state.routeName === 'Home' ? '#d81f25' : 'white',
          }}
          onPress={() => props.navigation.navigate('Home')}>
          <Text
            style={{
              ...styles.text,
              color:
                props.navigation.state.routeName === 'Home'
                  ? 'white'
                  : '#c7c7c7',
            }}>
            SHOWROOM
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default withNavigation(Navbutton);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 0,
    height: 45,
    borderTopColor: '#c7c7c7',
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 0.5,
  },
  btns: {
    width: '50%',
    backgroundColor: '#db2025',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1,
    fontSize: 12,
  },
});
