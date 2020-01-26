import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import {Circle, Rect} from 'react-native-svg';
import Popup from './Popup';
function Notification(props) {
  const [Noti, setNoti] = useState([]);
  const Notification = useSelector(state => state.Notification.Notifcation);
  const state = useSelector(state => state.Notification.getNot);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    setNoti(Notification);
  }, [Notification]);
  return (
    <React.Fragment>
      <Popup visible={visible} setVisible={setVisible} data={data} />
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 12,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
          }}>
          Notification
        </Text>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#F4F4F4',
            padding: 10,
            flexDirection: 'column',
          }}>
          <ScrollView>
            {state !== true ? (
              Noti.length > 0 ? (
                Noti.map((v, k) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setData([v]);
                        setVisible(true);
                      }}
                      style={{
                        width: '100%',
                        backgroundColor: 'white',
                        padding: 10,
                        marginTop: 10,
                      }}
                      key={k}>
                      <Text
                        style={{
                          color: 'tomato',
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}>
                        What's new
                      </Text>
                      <Text style={{fontSize: 12, fontWeight: '300', fontFamily:"Poppins"}}>
                        Request For{' '}
                        {v.AdsData !== undefined &&
                        v.AdsData !== null &&
                        v.AdsData.length > 0
                          ? v.AdsData[0].Model
                          : ''}{' '}
                        From{' '}
                        {v.SenderData !== undefined &&
                        v.SenderData !== null &&
                        v.SenderData.length > 0
                          ? v.SenderData[0].UserName
                          : ''} For Drive
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '100%',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{width: '40%'}}>
                          {/* <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'red',
      }}>
      <Text
        style={{color: 'white', fontWeight: 'bold', fontSize: 8}}>
        +99 new Ads
      </Text>
    </TouchableOpacity> */}
                        </View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 10,
                            color: 'grey',
                          }}>
                          {moment(v.CreatedDate)
                            .startOf('minute')
                            .fromNow()}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <React.Fragment>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      letterSpacing: 1,
                      fontSize: 17,
                      textAlign: 'center',
                      marginTop: 250,
                    }}>
                    No Notification!
                  </Text>
                </React.Fragment>
              )
            ) : (
              <React.Fragment>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    marginTop: 10,
                    height: 80,
                  }}>
                  <SvgAnimatedLinearGradient
                    primaryColor="#f4f4f4"
                    secondaryColor="#E3E3E3"
                    width={'100%'}>
                    <Rect x="10" y="10" width="80" height="20" />
                    <Rect x="10" y="40" width="140" height="20" />
                    <Rect x="81%" y="60" width="70" height="10" />
                  </SvgAnimatedLinearGradient>
                </View>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    marginTop: 10,
                    height: 80,
                  }}>
                  <SvgAnimatedLinearGradient
                    primaryColor="#f4f4f4"
                    secondaryColor="#E3E3E3"
                    width={'100%'}>
                    <Rect x="10" y="10" width="80" height="20" />
                    <Rect x="10" y="40" width="140" height="20" />
                    <Rect x="81%" y="60" width="70" height="10" />
                  </SvgAnimatedLinearGradient>
                </View>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    marginTop: 10,
                    height: 80,
                  }}>
                  <SvgAnimatedLinearGradient
                    primaryColor="#f4f4f4"
                    secondaryColor="#E3E3E3"
                    width={'100%'}>
                    <Rect x="10" y="10" width="80" height="20" />
                    <Rect x="10" y="40" width="140" height="20" />
                    <Rect x="81%" y="60" width="70" height="10" />
                  </SvgAnimatedLinearGradient>
                </View>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    marginTop: 10,
                    height: 80,
                  }}>
                  <SvgAnimatedLinearGradient
                    primaryColor="#f4f4f4"
                    secondaryColor="#E3E3E3"
                    width={'100%'}>
                    <Rect x="10" y="10" width="80" height="20" />
                    <Rect x="10" y="40" width="140" height="20" />
                    <Rect x="81%" y="60" width="70" height="10" />
                  </SvgAnimatedLinearGradient>
                </View>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    marginTop: 10,
                    height: 80,
                  }}>
                  <SvgAnimatedLinearGradient
                    primaryColor="#f4f4f4"
                    secondaryColor="#E3E3E3"
                    width={'100%'}>
                    <Rect x="10" y="10" width="80" height="20" />
                    <Rect x="10" y="40" width="140" height="20" />
                    <Rect x="81%" y="60" width="70" height="10" />
                  </SvgAnimatedLinearGradient>
                </View>
              </React.Fragment>
            )}
          </ScrollView>
        </View>
      </View>
    </React.Fragment>
  );
}
export default withNavigation(Notification);
