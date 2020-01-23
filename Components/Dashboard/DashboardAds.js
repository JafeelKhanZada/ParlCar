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
import {useDispatch, useSelector} from 'react-redux';
import * as Action from '../../redux/actions';
function Notification(props) {
  const ID = useSelector(state => state.Auth.ID);
  const State = useSelector(state => state.Ads);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = () => {
    return Promise.all([
      dispatch(Action.getActiveAds({UserId: ID})),
      dispatch(Action.getPending(ID)),
      dispatch(Action.getExpiredAds(ID)),
      dispatch(Action.getDeleteAD({UserId: ID})),
    ]);
  };
  const handleRefresh = () => {
    setRefresh(true);
    Promise.all([handleSubmit()]).then(() => {
      setRefresh(false);
    });
  };
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          borderTopWidth: 1,
          borderTopColor: 'lightgrey',
          fontFamily: 'Poppins-Medium',
        }}>
        Dashboard
      </Text>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#F4F4F4',
          padding: 10,
          flexDirection: 'column',
        }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
          }>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Poppins-Medium',
              paddingLeft: 5,
            }}>
            My Ads
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'tomato',
                fontSize: 12,
              }}>
              Active Ads
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 15,
                fontWeight: '300',
              }}>
              {State.ActivatedAds.length} Ads
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Activeads')}
                style={{
                  width: 90,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#d81f25',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: 'white',
                    fontSize: 12,
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'tomato',
                fontSize: 12,
              }}>
              Expired Ads
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 15,
                fontWeight: '300',
              }}>
              {State.ExpiredAd.length} Ads
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Expiredads')}
                style={{
                  width: 90,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#d81f25',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: 'white',
                    fontSize: 12,
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'tomato',
                fontSize: 12,
              }}>
              Pending Ads
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 15,
                fontWeight: '300',
              }}>
              {State.PendingAds.length} Ads
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('PendingAds')}
                style={{
                  width: 90,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#d81f25',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: 'white',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'tomato',
                fontSize: 12,
              }}>
              Deleted Ads
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 15,
                fontWeight: '300',
              }}>
              {State.DeletedAd.length} Ads
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('DeletedAd')}
                style={{
                  width: 90,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#d81f25',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: 'white',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default withNavigation(Notification);
