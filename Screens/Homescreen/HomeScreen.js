import React, {useEffect, useState} from 'react';
import Header from '../../Components/Home/Header';
import Search from '../../Components/Home/SearchEngin';
import BrandShowroom from '../../Components/Home/Brand-Showroom';
// import Tab from '../../Components/Home/Tabs';
// import Slider from '../../Components/Home/Slider';
import Showroom from '../../Components/Home/Showroom';
// import BRAND from '../../Components/Brand/Brand';
import BRAND from '../../Components/Home/Brand';
import {
  ScrollView,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AsyncStorage} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import * as Action from '../../redux/actions';
// import {Dimensions} from 'react-native';
import SIGNUP from '../../Components/Signup';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
function HomeScreen(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [searches, setSearches] = useState([]);
  const Auth = useSelector(state => state.Auth.auth);
  const [dis, setDis] = useState(false);
  useEffect(() => {
    if (props.isFocused === true) {
      dispatch(Action.resetSearch());
    }
    setSearch('');
    AsyncStorage.getItem('Search').then(res => {
      setSearches(res === null ? [] : JSON.parse(res));
    });
  }, [props, Auth]);
  useEffect(() => {
    dispatch(Action.getPrice());
    dispatch(Action.getMile());
    dispatch(Action.getYears());
    dispatch(Action.getCity());
    dispatch(Action.getOption());
    dispatch(Action.getShowroom({}));
  }, []);

  const saveSearch = () => {
    if (search !== '') {
      AsyncStorage.getItem('Search').then(res => {
        if (res !== null) {
          let arr = JSON.parse(res);
          if (arr.length > 4) {
            arr.unshift(search);
            arr.pop();
          } else {
            arr.unshift(search);
          }
          AsyncStorage.setItem('Search', JSON.stringify(arr));
          setSearches(arr);
        } else {
          let newArr = [];
          newArr.push(search);
          AsyncStorage.setItem('Search', JSON.stringify(newArr));
          setSearches(newArr);
        }
      });
    }
  };
  useEffect(() => {
    setSearch('');
  }, []);
  const Type = useSelector(state => state.Modal.Tab);
  return (
    <React.Fragment>
      <SIGNUP />
      <Header />
      <ScrollView style={{height: hp('100%')}}>
        <Search />
        <BrandShowroom />
        {/* <Tab /> */}
        {/* <Slider /> */}
        {Type === 'BRAND' ? (
          <BRAND />
        ) : (
          <React.Fragment>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                position: 'relative',
              }}>
              <View style={Style.Container}>
                <TextInput
                  style={Style.input}
                  placeholder={'Search Here.....'}
                  value={search}
                  onFocus={() => setDis(true)}
                  onBlur={() => {
                    saveSearch();
                  }}
                  onChangeText={text => {
                    setSearch(text);
                    dispatch(Action.getShowroom({name: text}));
                  }}
                />
                {dis === false ? (
                  <TouchableOpacity
                    onPress={() =>
                      dispatch(Action.getShowroom({name: search}))
                    }>
                    <Icon name="search" size={16} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setDis(false)}>
                    <Icon name="close" size={20} />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  width: '80%',
                  backgroundColor: 'white',
                  overflow: 'hidden',
                  position: 'absolute',
                  top: 40,
                  zIndex: 100,
                }}>
                {search === '' && dis !== false ? (
                  searches.map((v, k) => {
                    return (
                      <TouchableOpacity
                        key={k}
                        style={{
                          width: '100%',
                          borderBottomColor: '#c7c7c7',
                          borderBottomWidth: 1,
                          borderRightColor: '#c7c7c7',
                          borderRightWidth: 1,
                          borderLeftColor: '#c7c7c7',
                          borderLeftWidth: 1,
                          padding: 5,
                        }}
                        onPress={() => {
                          setSearch(v);
                          dispatch(Action.getShowroom({name: v}));
                          setDis(false);
                        }}>
                        <Text style={{fontFamily: 'Poppins'}}>{v}</Text>
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </View>
            </View>
            <Showroom search={() => setDis(false)} />
          </React.Fragment>
        )}
      </ScrollView>
    </React.Fragment>
  );
}
const Style = StyleSheet.create({
  Container: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 1,
  },
  input: {
    width: '90%',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    padding: 5,
  },
});
export default withNavigationFocus(HomeScreen);
