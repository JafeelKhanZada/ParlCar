import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  RefreshControl,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Header from '../Home/Header';
import {useSelector, useDispatch} from 'react-redux';
import * as Action from '../../redux/actions';
import moment from 'moment';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Loader from '../../Components/Loader';
import ICON from 'react-native-vector-icons/FontAwesome';
function Activeads(props) {
  const dispatch = useDispatch();
  const [activeAds, setActiveAds] = useState([]);
  const Ads = useSelector(state => state.Ads.DeletedAd);
  const ID = useSelector(state => state.Auth.ID);
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(true);
    Promise.all([dispatch(Action.getDeleteAD({UserId: ID}))]).then(() => {
      setRefresh(false);
    });
  };
  useEffect(() => {
    if (Ads) {
      setActiveAds(Ads);
    }
  }, [Ads]);
  return (
    <React.Fragment>
      <Loader />
      <ScrollView
        style={{height: '100%'}}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        }>
        <View>
          <Header />
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
            Deleted Ads
          </Text>
          <View
            style={{
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
                            uri: `http://207.180.230.73/palcar${v.Images[0].nImage}`,
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
                            {v.TotalViews} Views
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: 'green',
                          borderStyle: 'solid',
                          borderRadius: 100,
                          width: 30,
                          height: 30,
                        }}
                        onPress={() => {
                          Alert.alert(
                            'Re-Active Ads?',
                            'Are you sure for Re-Active ad?',
                            [
                              {
                                text: 'Yes',
                                onPress: async () =>
                                  await Promise.all([
                                    await dispatch(
                                      Action.activateAd({id: v.ID, user: ID}),
                                    ),
                                  ]).then(async () => {
                                    dispatch(Action.getAds({UID: ID}));
                                    dispatch(Action.getDeleteAD({UserId: ID}));
                                    dispatch(Action.getActiveAds({UserId: ID}));
                                    dispatch(Action.UPDATEUSER(ID));
                                  }),
                              },
                              {
                                text: 'No',
                                style: 'cancel',
                              },
                            ],
                            {cancelable: false},
                          );
                        }}>
                        <ICON name="check" color="green" />
                      </TouchableOpacity>
                    </View>
                  </React.Fragment>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}
export default withNavigation(Activeads);
