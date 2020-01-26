import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  RefreshControl,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Header from '../Home/Header';
import {useSelector, useDispatch} from 'react-redux';
import * as Action from '../../redux/actions';
import moment from 'moment';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../Components/Loader';
function Activeads(props) {
  const dispatch = useDispatch();
  const [activeAds, setActiveAds] = useState([]);
  const Ads = useSelector(state => state.Ads.PendingAds);
  const ID = useSelector(state => state.Auth.ID);
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(true);
    Promise.all([dispatch(Action.getPending(ID))]).then(() => {
      setRefresh(false);
    });
  };
  useEffect(() => {
    if (Ads) {
      setActiveAds(Ads);
    }
  }, [Ads]);
  return (
    <View>
      <Loader />
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        }
        style={{
          backgroundColor: '#F4F4F4',
          height: hp('100%'),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
            fontFamily: 'Poppins-Bold',
          }}>
          Pending Ads
        </Text>
        <View
          style={{
            height: '100%',
            width: '100%',
            padding: 10,
          }}>
          {activeAds &&
            activeAds.map((v, k) => {
              return (
                <React.Fragment key={k}>
                  <View
                    style={{
                      height: 70,
                      padding: 3,
                      paddingLeft: 0,
                      paddingRight: 10,
                      width: '100%',
                      backgroundColor: 'white',
                      flexDirection: 'row',
                      marginTop: k === 0 ? 0 : 6,
                    }}>
                    <View style={{width: '30%', backgroundColor: 'white'}}>
                      <Image
                        resizeMethod="resize"
                        resizeMode="contain"
                        style={{height: '100%', width: '100%'}}
                        source={{
                          uri: `http://207.180.230.73/palcar${
                            v.Images !== undefined &&
                            v.Images !== null &&
                            v.Images.length > 0
                              ? v.Images[0].nImage
                              : ''
                          }`,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: '60%',
                        padding: 5,
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 12,
                            fontFamily: 'Poppins-Light',
                            letterSpacing: 1,
                          }}>
                          {v.BrandName}
                        </Text>
                        {/* <Text
                          style={{
                            color: 'lightgrey',
                            fontSize: 9,
                            fontFamily: 'Poppins-Medium',
                            letterSpacing: 1,
                          }}>
                          User car for sale
                        </Text> */}
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            color: 'grey',
                            fontSize: 9,
                            fontFamily: 'Poppins-Bold',
                          }}>
                          1 Min
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        width: '15%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 7,
                          backgroundColor: 'lightgrey',
                          borderRadius: 100,
                        }}>
                        <Icon name="check" size={16} color="green" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
export default withNavigation(Activeads);
