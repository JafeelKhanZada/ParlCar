import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
function Loader() {
  const loading = useSelector(state => state.Loader.value);
  return loading === true ? (
    <View
      style={{
        ...Style.Container,
      }}>
      <Image
        style={{width: 120}}
        resizeMode="contain"
        source={require('../assests/NewAssets/loader.gif')}
      />
    </View>
  ) : (
    <React.Fragment></React.Fragment>
  );
}
export default Loader;
const Style = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  },
});
