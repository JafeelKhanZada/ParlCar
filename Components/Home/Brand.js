import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import {Circle, Rect} from 'react-native-svg';
import {heightPercentageToDP as Hp} from 'react-native-responsive-screen';
function Brand(props) {
  const dispatch = useDispatch();
  const Brands = useSelector(state => state.Mis.Brands);
  const ID = useSelector(state => state.Auth.ID);
  const [renderBrands, setBrands] = useState([]);
  useEffect(() => {
    dispatch(Action.getBrands());
  }, []);
  useEffect(() => {
    setBrands(Brands);
  }, [Brands]);
  return (
    <React.Fragment>
      <View style={{...style.Root}}>
        {renderBrands.length === 0 ? (
          <SvgAnimatedLinearGradient
            primaryColor="#f4f4f4"
            secondaryColor="#E3E3E3"
            width={'100%'}
            height={Hp('100%')}>
            <Rect x="0%" y="30" width="30%" height="100" />
            <Rect x="34%" y="30" width="30%" height="100" />
            <Rect x="68%" y="30" width="30%" height="100" />
            <Rect x="0%" y="140" width="30%" height="100" />
            <Rect x="34%" y="140" width="30%" height="100" />
            <Rect x="68%" y="140" width="30%" height="100" />
            <Rect x="0%" y="250" width="30%" height="100" />
            <Rect x="34%" y="250" width="30%" height="100" />
            <Rect x="68%" y="250" width="30%" height="100" />
          </SvgAnimatedLinearGradient>
        ) : (
          <React.Fragment>
            <TouchableOpacity
              style={style.container}
              onPress={() => {
                dispatch(Action.getAds({UID: ID}));
                dispatch(Action.resetSearch());
                props.navigation.navigate('YourSerach', {
                  brand: 'x',
                  showroom: '',
                  back: false,
                });
              }}>
              <Text style={style.headText}>All</Text>
            </TouchableOpacity>
            {renderBrands.Brands &&
              renderBrands.Brands.map((v, k) => {
                return (
                  <TouchableOpacity
                    style={{...style.container}}
                    key={k}
                    onPress={() => {
                      dispatch(Action.getAds({Brand: v.ID, UID: ID}));
                      dispatch(
                        Action.setSpecificSearch({name: 'Brand', val: v.ID}),
                      );
                      props.navigation.navigate('YourSerach', {
                        brand: v.ID,
                        showroom: null,
                      });
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
          </React.Fragment>
        )}
      </View>
    </React.Fragment>
  );
}
const style = StyleSheet.create({
  Root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor:"white"
  },
  container: {
    width: '31%',
    height: 110,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    marginRight: 5,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#D6D6D6',
    marginTop: 10,
  },
  headText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginTop: 10,
    letterSpacing: 2,
    color: '#D6D6D6',
  },
});
export default withNavigation(Brand);
