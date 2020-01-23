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
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Action from '../../redux/actions';
import moment from 'moment';
const MainContent = props => {
  const dispatch = useDispatch();
  const Favads = useSelector(state => state.Favourite.FavAds);
  const [Favdata, setfavdata] = useState([]);
  const id = useSelector(state => state.Auth.UserData);
  useEffect(() => {
    setfavdata(Favads);
  }, [Favads]);
  return (
    <View>
      {Favdata &&
        Favdata.map((val, k) => {
          return (
            <React.Fragment key={k}>
              {val.NewFavAds !== null ? (
                val.NewFavAds.map((v, key) => {
                  v.FavID = val.ID;
                  return (
                    <TouchableOpacity
                      style={{
                        margin: 0,
                        marginBottom: 0,
                        padding: 5,
                      }}
                      onPress={() => {
                        dispatch(Action.selectAd([v]));
                        props.navigation.navigate('Details', {
                          onGoBack: () => {},
                          back: 'Favourite',
                        });
                        dispatch(
                          Action.getfav({nUserID: id.ID !== null ? id.ID : -1}),
                        );
                      }}
                      key={key}>
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
                              uri: `http://207.180.230.73/palcar${v.Images[0].nImage}`,
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
                                fontSize: 10,
                                textTransform: 'capitalize',
                                color: '#333',
                              }}>
                              {v.BrandName}
                            </Text>
                            <Icon
                              name="heart"
                              size={15}
                              color={
                                v.IsFavourite === false ? 'grey' : '#d81f25'
                              }
                              style={{paddingRight: 10}}
                            />
                          </View>
                          <View
                            style={{
                              width: '70%',
                              paddingLeft: 5,
                            }}>
                            {/* <Text
                              style={{
                                color: 'grey',
                                fontSize: 8,
                                ...styles.text,
                              }}>
                              User Cars for sale {v.BrandName}
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
                                width: '40%',
                                backgroundColor: 'orange',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 3,
                                height: 17,
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
                                marginTop: -15,
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
                            <View
                              style={{
                                width: '25%',
                                alignItems: 'center',
                                marginTop: -15,
                              }}>
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
                })
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </React.Fragment>
          );
        })}
    </View>
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
});
