import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
function Brand(props) {
  const dispatch = useDispatch();
  const Brands = useSelector(state => state.Mis.Brands);
  const [renderBrands, setBrands] = useState([]);
  useEffect(() => {
    dispatch(Action.getBrands());
  }, [props.navigation.state.key]);
  useEffect(() => {
    setBrands(Brands);
  }, [Brands]);
  return (
    <React.Fragment>
      <View style={{...style.Root}}>
        {renderBrands.Brands &&
          renderBrands.Brands.map((v, k) => {
            return (
              <TouchableOpacity
                style={{...style.container}}
                key={k}
                onPress={() => {
                  dispatch(Action.getAds({Brand: v.ID}));
                  props.navigation.navigate('YourSerach');
                }}>
                <Image
                  style={{height: '60%', borderWidth: 1, width: '60%'}}
                  resizeMethod="resize"
                  resizeMode="contain"
                  source={{
                    uri: `http://207.180.230.73/palcar${v.Image}`,
                  }}
                />
                <Text style={{...style.text}}>{v.Count}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </React.Fragment>
  );
}
const style = StyleSheet.create({
  Root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    width: '31%',
    height: 110,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F4F4F4',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#D6D6D6',
    marginTop: 10,
  },
});
export default withNavigation(Brand);
