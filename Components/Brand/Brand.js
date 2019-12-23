import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Action from '../../redux/actions';
import {withNavigation} from 'react-navigation';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import {Circle, Rect} from 'react-native-svg';
function Showroom(props) {
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
    <View>
      <View style={style.Showroom}>
        <Text style={{fontFamily: 'Poppins-Medium'}}>Brand</Text>
        <Text style={{color: '#d81f25'}}>View All</Text>
      </View>
      <View style={{paddingRight: 10, paddingLeft: 10}}>
        <View style={style.Names}>
          {renderBrands.length !== 0 ? (
            renderBrands.map((v, k) => {
              return (
                <TouchableOpacity
                  style={style.Image}
                  key={k}
                  onPress={() => {
                    dispatch(Action.getAds({Brand: v.ID}));
                    props.navigation.navigate('YourSerach');
                  }}>
                  <Image
                    style={{height: '90%', borderWidth: 1, width: '90%'}}
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={{
                      uri: `http://207.180.230.73/palcar${v.Image}`,
                    }}
                  />
                </TouchableOpacity>
              );
            })
          ) : (
            <SvgAnimatedLinearGradient
              primaryColor="#f4f4f4"
              secondaryColor="#E3E3E3"
              width={'100%'}>
              <Rect x="0%" y="10" width="23%" height="50" />
              <Rect x="25%" y="10" width="23%" height="50" />
              <Rect x="50%" y="10" width="23%" height="50" />
              <Rect x="75%" y="10" width="23%" height="50" />
              <Rect x="0%" y="70" width="23%" height="50" />
              <Rect x="25%" y="70" width="23%" height="50" />
              <Rect x="50%" y="70" width="23%" height="50" />
              <Rect x="75%" y="70" width="23%" height="50" />
              <Rect x="0%" y="130" width="23%" height="50" />
              <Rect x="25%" y="130" width="23%" height="50" />
              <Rect x="50%" y="130" width="23%" height="50" />
              <Rect x="75%" y="130" width="23%" height="50" />
            </SvgAnimatedLinearGradient>
          )}
        </View>
      </View>
    </View>
  );
}
Showroom.navigationOptiosn = {
  tabBarVisible: true,
};
export default withNavigation(Showroom);
const style = StyleSheet.create({
  Showroom: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  Names: {
    marginTop: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Image: {
    height: 50,
    width: '20%',
    margin: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
