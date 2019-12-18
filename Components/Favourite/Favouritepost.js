import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as Action from '../../redux/actions';
import moment from 'moment';
const MainContent = props => {
  const dispatch = useDispatch();
  const Favads = useSelector(state => state.Favourite.FavAds);
  const [Favdata, setfavdata] = useState([]);
  useEffect(() => {
    setfavdata(Favads);
  }, [Favads]);
  return (
    <View>
      <ScrollView>
        <View style={{backgroundColor: '#F4F4F4'}}>
          {Favdata &&
            Favdata.map((val, k) => {
              val.AdsData.map((v, key) => {
                return (
                  <TouchableOpacity
                    style={{margin: 13}}
                    onPress={() => {
                      dispatch(Action.selectAd(v.AdsData));
                      props.navigation.navigate('Details');
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
                          resizeMethod="resize"
                          style={{width: 130, height: 90}}
                          source={{
                            uri: `data:image/${v.Images[0].ImageExtension};base64,${v.Images[0].nImage}`,
                          }}
                        />
                      </View>
                      <View style={{width: '60%'}}>
                        <View
                          style={{
                            width: '100%',
                            padding: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              width: '70%',
                              ...styles.text,
                              fontSize: 12,
                              textTransform: 'capitalize',
                            }}>
                            {v.BrandName}
                          </Text>
                          <Icon
                            name="heart"
                            size={15}
                            color="grey"
                            style={{paddingRight: 10}}
                          />
                        </View>
                        <View
                          style={{
                            width: '70%',
                            paddingLeft: 5,
                          }}>
                          <Text
                            style={{
                              color: 'grey',
                              fontSize: 10,
                              ...styles.text,
                            }}>
                            User Cars for sale {v.BrandName}
                          </Text>
                          <Text
                            style={{
                              color: 'red',
                              fontWeight: 'bold',
                              fontSize: 13,
                            }}>
                            {v.Price}
                          </Text>
                          <Text
                            style={{
                              color: 'grey',
                              fontSize: 9,
                              padding: 5,
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
                              width: '45%',
                              backgroundColor: 'orange',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 3,
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                ...styles.text,
                                fontSize: 10,
                              }}>
                              Sponsered
                            </Text>
                          </TouchableOpacity>
                          <View
                            style={{
                              width: '25%',
                              borderRightWidth: 1,
                              borderRightColor: 'grey',
                              alignItems: 'center',
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
                                fontSize: 10,
                                ...styles.text,
                              }}>
                              Miles
                            </Text>
                          </View>
                          <View style={{width: '25%', alignItems: 'center'}}>
                            <Text
                              style={{
                                color: 'grey',
                                fontSize: 10,
                                ...styles.text,
                              }}>
                              {v.Model}
                            </Text>
                            <Text
                              style={{
                                color: 'grey',
                                fontSize: 10,
                                ...styles.text,
                              }}>
                              Model
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              });
            })}
        </View>
      </ScrollView>
    </View>
  );
};
export default withNavigation(MainContent);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontFamily: 'Poppins-Medium',
  },
});
