import React, {Component} from 'react';
import axios from 'axios';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Action from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
function Tabss() {
  const Type = useSelector(state => state.Modal.Tab);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <View style={{...Styles.container}}>
        <TouchableOpacity>
          <Text
            style={{
              ...Styles.text,
              borderBottomColor: '#d81f25',
              color: '#d81f25',
            }}>
            Category
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.text}>Make</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.text}>Model</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.text}>Cities</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.text}>Body type</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#c7c7c7',
          position: 'relative',
          top: -1,
        }}></View>
    </React.Fragment>
  );
}
export default Tabss;
const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    zIndex: 1,
    marginTop: 10,
  },
  text: {
    color: 'grey',
    fontFamily: 'Poppins',
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
