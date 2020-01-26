/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  FlatList,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import * as Action from '../../redux/actions';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const MainContent = props => {
  const dispatch = useDispatch();
  const Ads = useSelector(state => state.Ads.ActiveAds);
  const History = useSelector(state => state.Ads.History);
  const [Data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const id = useSelector(state => state.Auth.ID);
  const auth = useSelector(state => state.Auth.auth);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setHistory(History);
  }, [History]);
  const handleRefrest = () => {
    setRefresh(true);
    Promise.all([dispatch(Action.getAds({UID: id}))]);
    setRefresh(false);
  };
  useEffect(() => {
    setData(Ads);
  }, [Ads]);
  const handleClick = async v => {
    dispatch(Action.saveView(v.ID));
    dispatch(Action.selectAd([v]));
    props.navigation.navigate('Details', {
      onGoBack: () =>
        auth === true ? dispatch(Action.ViewUpdate({UserId: id})) : '',
      back: 'YourSerach',
    });
    dispatch(Action.getfav({nUserID: id}));
    let History = await AsyncStorage.getItem('History').then(res => res);
    let Arr = [];
    if (History === null) {
      Arr.push(v);
    } else {
      Arr = JSON.parse(History);
      Arr = Arr.filter(arr => arr.ID !== v.ID);
      if (Arr.length > 4) {
        Arr.unshift(v);
        Arr.pop();
      } else {
        Arr.unshift(v);
      }
    }
    AsyncStorage.setItem('History', JSON.stringify(Arr));
    dispatch(Action.setHistoryAd(Arr));
  };
  const handleHistory = v => {
    dispatch(Action.selectAd([v]));
    props.navigation.navigate('Details');
    dispatch(Action.getfav({nUserID: id}));
  };
  return (
    // <View
    //   style={{
    //     backgroundColor: '#F4F4F4',
    //   }}>
    //   <ScrollView
    //     style={{backgroundColor: 'purple', height: '100%'}}
    //     refreshControl={
    //       <RefreshControl refreshing={refresh} onRefresh={handleRefrest} />
    //     }>
    <View>
      {props.showroom !== 'x' ? (
        (props.showroom === null || props.showroom === '') &&
        (props.brand === null || props.brand === '') &&
        (props.data.nCity === null || props.data.nCity === '') &&
        (props.data.nModel === null || props.data.nModel === '') &&
        (props.data.nPriceFrom === null || props.data.nPriceFrom === '') &&
        (props.data.nPriceTo === null || props.data.nPriceTo === '') &&
        (props.data.nYearFrom === null || props.data.nYearFrom === '') &&
        (props.data.nYearTo === null || props.data.nYearTo === '') &&
        (props.data.nKiloMeterFrom === null ||
          props.data.nKiloMeterFrom === '') &&
        (props.data.nKiloMeterTo === null || props.data.nKiloMeterTo === '') &&
        (props.data.nYearFrom === null || props.data.nYearFrom === '') ? (
          <Text style={{fontSize: 18, fontFamily: 'Poppins', padding: 5}}>
            Last Searches {history.length}
          </Text>
        ) : (
          <React.Fragment></React.Fragment>
        )
      ) : (
        <React.Fragment></React.Fragment>
      )}
      {(props.showroom === null || props.showroom === '') &&
      (props.brand === null || props.brand === '') &&
      (props.data.nCity === null || props.data.nCity === '') &&
      (props.data.nModel === null || props.data.nModel === '') &&
      (props.data.nPriceFrom === null || props.data.nPriceFrom === '') &&
      (props.data.nPriceTo === null || props.data.nPriceTo === '') &&
      (props.data.nYearFrom === null || props.data.nYearFrom === '') &&
      (props.data.nYearTo === null || props.data.nYearTo === '') &&
      (props.data.nKiloMeterFrom === null ||
        props.data.nKiloMeterFrom === '') &&
      (props.data.nKiloMeterTo === null || props.data.nKiloMeterTo === '') &&
      (props.data.nYearFrom === null || props.data.nYearFrom === '') ? (
        history &&
        history.map((v, k) => {
          return (
            <TouchableOpacity
              style={{
                margin: 0,
                marginBottom: 0,
                padding: 5,
              }}
              onPress={() => {
                handleClick(v);
              }}
              key={k}>
              <View style={styles.container}>
                <View
                  style={{
                    width: '40%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={{width: 110, height: 90}}
                    source={{
                      uri: `http://207.180.230.73/palcar${
                        v.Images !== null ? v.Images[0].nImage : ''
                      }`,
                    }}
                  />
                </View>
                <View style={{width: '60%'}}>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        width: '70%',
                        ...styles.text,
                        fontFamily: 'Poppins-Medium',
                        paddingLeft: 5,
                        paddingTop: 24,
                        fontSize: 10,
                        textTransform: 'capitalize',
                        color: '#333',
                      }}>
                      {v.BrandName}
                    </Text>
                    {/* <Icon
                      name="heart"
                      size={15}
                      color={v.IsFavourite === false ? 'grey' : '#d81f25'}
                      style={{paddingRight: 10}}
                    /> */}
                    <TouchableOpacity>
                      {v.UserData !== undefined &&
                      v.UserData !== null &&
                      v.UserData.length > 0 ? (
                        <Image
                          style={styles.LeftLogo}
                          resizeMethod="resize"
                          resizeMode="contain"
                          source={{
                            uri: `http://207.180.230.73/palcar/${
                              v.UserData[0].Logo !== undefined &&
                              v.UserData[0].Logo !== null
                                ? v.UserData[0].Logo
                                : ''
                            }`,
                          }}
                        />
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: '70%',
                      paddingLeft: 5,
                    }}>
                    {/* <Text style={{color: 'grey', fontSize: 8, ...styles.text}}>
                      {v.Model}
                    </Text> */}
                    <Text
                      style={{
                        color: '#d81f25',
                        fontFamily: 'Poppins-Bold',
                        fontSize: 13,
                      }}>
                      {v.Price}
                    </Text>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 9,
                        ...styles.text,
                      }}>
                      {moment(v.CreatedDate)
                        .startOf('minute')
                        .fromNow()}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingLeft: 5,
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        width: '30%',
                        backgroundColor:
                          v.AdsType === 'Sponsored' ? 'orange' : 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        height: 17,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          ...styles.text,
                          fontSize: 7,
                        }}>
                        Sponsered
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        width: '30%',
                        borderRightWidth: 1,
                        borderRightColor: 'grey',
                        alignItems: 'center',
                        marginTop: -15,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 10,
                          ...styles.text,
                        }}>
                        {v.KiloMeters}
                      </Text>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 7,
                          ...styles.text,
                        }}>
                        Kilometers
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '25%',
                        alignItems: 'center',
                        marginTop: -15,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 10,
                          ...styles.text,
                        }}>
                        Model
                      </Text>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 8,
                          ...styles.text,
                          textAlign: 'center',
                          lineHeight: 11,
                        }}>
                        {v.Model}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <Text style={{fontSize: 18, fontFamily: 'Poppins', padding: 5}}>
        Total Ads {Data.length}
      </Text>
      {Data.length > 0 ? (
        Data &&
        Data.map((v, k) => {
          return (
            <TouchableOpacity
              style={{
                margin: 0,
                marginBottom: 0,
                padding: 5,
              }}
              onPress={() => {
                handleClick(v);
              }}
              key={k}>
              <View style={styles.container}>
                <View
                  style={{
                    width: '40%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={{width: 110, height: 90}}
                    source={{
                      uri: `http://207.180.230.73/palcar${
                        v.Images !== null ? v.Images[0].nImage : ''
                      }`,
                    }}
                  />
                </View>
                <View style={{width: '60%'}}>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        width: '70%',
                        ...styles.text,
                        fontFamily: 'Poppins-Medium',
                        paddingLeft: 5,
                        paddingTop: 24,
                        fontSize: 10,
                        textTransform: 'capitalize',
                        color: '#333',
                      }}>
                      {v.BrandName}
                    </Text>
                    {/* <Icon
                      name="heart"
                      size={15}
                      color={v.IsFavourite === false ? 'grey' : '#d81f25'}
                      style={{paddingRight: 10}}
                    /> */}
                    <TouchableOpacity>
                      {v.UserData !== undefined &&
                      v.UserData !== null &&
                      v.UserData.length > 0 ? (
                        <Image
                          style={styles.LeftLogo}
                          resizeMethod="resize"
                          resizeMode="contain"
                          source={{
                            uri: `http://207.180.230.73/palcar/${
                              v.UserData[0].Logo !== undefined &&
                              v.UserData[0].Logo !== null
                                ? v.UserData[0].Logo
                                : ''
                            }`,
                          }}
                        />
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: '70%',
                      paddingLeft: 5,
                    }}>
                    {/* <Text style={{color: 'grey', fontSize: 8, ...styles.text}}>
                      {v.Model}
                    </Text> */}
                    <Text
                      style={{
                        color: '#d81f25',
                        fontFamily: 'Poppins-Bold',
                        fontSize: 13,
                      }}>
                      {v.Price}
                    </Text>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 9,
                        ...styles.text,
                      }}>
                      {moment(v.CreatedDate)
                        .startOf('minute')
                        .fromNow()}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingLeft: 5,
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        width: '30%',
                        backgroundColor:
                          v.AdsType === 'Sponsored' ? 'orange' : 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        height: 17,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          ...styles.text,
                          fontSize: 7,
                        }}>
                        Sponsered
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        width: '30%',
                        borderRightWidth: 1,
                        borderRightColor: 'grey',
                        alignItems: 'center',
                        marginTop: -15,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 10,
                          ...styles.text,
                        }}>
                        {v.KiloMeters}
                      </Text>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 7,
                          ...styles.text,
                        }}>
                        Kilometers
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '25%',
                        alignItems: 'center',
                        marginTop: -15,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 10,
                          ...styles.text,
                        }}>
                        Model
                      </Text>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 8,
                          ...styles.text,
                          textAlign: 'center',
                          lineHeight: 11,
                        }}>
                        {v.Model}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <View
          style={{
            width: '100%',
            minHeight: 500,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              letterSpacing: 1,
            }}>
            There Is No Ads Related Search...
          </Text>
        </View>
      )}
    </View>
    //   </ScrollView>
    // </View>
  );
};
export default withNavigation(MainContent);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 0,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.0,
    elevation: 2,
  },
  text: {
    fontFamily: 'Poppins-Medium',
  },
  LeftLogo: {
    marginRight: 10,
    height: 50,
    width: 50,
  },
});
