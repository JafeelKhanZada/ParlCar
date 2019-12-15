import React from 'react';
import {View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
const Navbutton = props => {
  const Type = useSelector(state => state.Modal.Tab);
  const dispatch = useDispatch();
  console.log('Type', Type);
  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{
            ...styles.container,
            backgroundColor: Type === 'BRAND' ? '#d81f25' : 'white',
          }}
          onPress={() => dispatch(Action.toggleButton('BRAND'))}>
          <Text
            style={{
              ...styles.text,
              color: Type === 'BRAND' ? 'white' : '#c7c7c7',
            }}>
            BRAND
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.container,
            backgroundColor: Type === 'SHOWROOM' ? '#d81f25' : 'white',
          }}
          onPress={() => dispatch(Action.toggleButton('SHOWROOM'))}>
          <Text
            style={{
              ...styles.text,
              color: Type === 'SHOWROOM' ? 'white' : '#c7c7c7',
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
