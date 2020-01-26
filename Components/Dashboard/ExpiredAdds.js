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
import Loader from '../../Components/Loader';
function ExpireAds(props) {
  const dispatch = useDispatch();
  const [activeAds, setActiveAds] = useState([]);
  const Ads = useSelector(state => state.Ads.ExpiredAd);
  const ID = useSelector(state => state.Auth.ID);
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(true);
    Promise.all([dispatch(Action.getExpiredAds(ID))]).then(() => {
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
        style={{
          backgroundColor: '#F4F4F4',
          height: hp('100%'),
        }}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        }>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            padding: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
            fontFamily: 'Poppins-Bold',
          }}>
          Expired Ads
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
                      opacity: 0.5,
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
                            letterSpacing: 1,
                            fontFamily: 'Poppins',
                          }}>
                          {moment(v.CreatedDate).format('DD/MMMM/YYYY')}
                        </Text>
                        <Text
                          style={{
                            color: 'grey',
                            fontSize: 9,
                            fontFamily: 'Poppins-Bold',
                          }}>
                          71,619 Views
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '15%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        resizeMethod="resize"
                        resizeMode="contain"
                        style={{height: 15, width: 15}}
                        source={require('../../assests/images/delRed.png')}
                      />
                    </View>
                  </View>
                </React.Fragment>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
export default withNavigation(ExpireAds);
