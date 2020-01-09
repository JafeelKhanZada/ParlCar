import React, {useEffect, useState} from 'react';
import Header from '../Home/Header';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Img1 from '../../assests/images/ProfileIcon/1.png';
import Img2 from '../../assests/images/ProfileIcon/2.png';
import Img3 from '../../assests/images/ProfileIcon/3.png';
import Img4 from '../../assests/images/ProfileIcon/4.png';
import Img5 from '../../assests/images/ProfileIcon/5.png';
import Img6 from '../../assests/images/ProfileIcon/6.png';
// import EditModal from "./EditProfile"
import {useSelector} from 'react-redux';
import Axios from 'axios';
function HomeScreen(props) {
  const [ProfileData, setProfile] = useState([]);
  const [TotalCount, setTotalCount] = useState([]);
  const Userdata = useSelector(state => state.Auth.UserData);
  const adsLength = useSelector(state => state.Ads.ActivatedAds);
  useEffect(() => {
    setTotalCount(adsLength);
  }, [adsLength]);
  useEffect(() => {
    setProfile([Userdata]);
  }, [Userdata]);

  useEffect(() => {
    let params = {
      nUserName: 'sample string 1',
      nToken: 'sample string 2',
      nShowRoom: '',
      nAdsID: null,
      nCity: null,
      nModel: '',
      nPriceFrom: null,
      nPriceTo: null,
      nYearFrom: '',
      nYearTo: '',
      nOrderBy: 'A.City',
      nKiloMeterFrom: null,
      nKiloMeterTo: null,
      nStatusID: 2,
      nUserID: Userdata.ID,
      nPageIndex: 0,
      nPageSize: 4,
    };
    Axios.post('http://207.180.230.73/palcar/Api/GetAllAds_Pagged', params, {
      headers: {
        Authorization: 'bearer  ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      setTotalCount(res.data.TotalCount);
    });
  }, [Userdata.ID]);

  return (
    <View>
      <Header />
      <View style={styles.ProParent}>
        <Text style={styles.ProfileText}>Profile</Text>
      </View>
      <View
        style={{height: hp('100%'), backgroundColor: '#F4F4F4', padding: 10}}>
        {ProfileData &&
          ProfileData.map((v, k) => {
            return (
              <React.Fragment key={k}>
                <View
                  style={{
                    height: hp('55%'),
                    backgroundColor: 'white',
                    marginTop: '30%',
                    marginBottom: '30%',
                    position: 'relative',
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View
                      style={{
                        height: 150,
                        width: 150,
                        backgroundColor: '#F7F7F7',
                        top: -90,
                        borderRadius: 10,
                        borderColor: '#ffff',
                        borderWidth: 1,
                        overflow: 'hidden',
                      }}>
                      <TouchableOpacity>
                        <Image
                          style={{height: 150, width: 150}}
                          source={{
                            uri: `http://207.180.230.73/palcar${v.Logo}`,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: -70,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: 'Poppins-Medium',
                        color: '#db2025',
                      }}>
                      Welcome
                    </Text>
                    <Text style={{fontFamily: 'Poppins-Bold'}}>
                      {v.UserName}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: hp('45%'),
                      width: '100%',
                    }}>
                    <ScrollView
                      style={{
                        width: '100%',
                        flex: 1,
                        padding: 10,
                      }}
                      showsVerticalScrollIndicator={false}>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row', width: '45%'}}>
                          <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={Img1}
                            style={{height: 20, width: 20, paddingRight: 50}}
                          />
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'Poppins-Light',
                            }}>
                            Mobile
                          </Text>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Medium'}}>
                          {v.ShowroomTelephone}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row', width: '45%'}}>
                          <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={Img2}
                            style={{height: 20, width: 20, paddingRight: 50}}
                          />
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'Poppins-Light',
                            }}>
                            Email Adress
                          </Text>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Medium'}}>
                          {v.Email}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row', width: '45%'}}>
                          <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={Img3}
                            style={{height: 20, width: 20, paddingRight: 50}}
                          />
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'Poppins-Light',
                            }}>
                            City
                          </Text>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Medium'}}>
                          {v.CityName}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row', width: '45%'}}>
                          <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={Img4}
                            style={{height: 20, width: 20, paddingRight: 50}}
                          />
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'Poppins-Light',
                            }}>
                            Country
                          </Text>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Medium'}}>Pak</Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row', width: '45%'}}>
                          <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={Img5}
                            style={{height: 20, width: 20, paddingRight: 50}}
                          />
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'Poppins-Light',
                            }}>
                            Password
                          </Text>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Medium'}}>
                          ********
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row', width: '45%'}}>
                          <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={Img6}
                            style={{height: 20, width: 20, paddingRight: 50}}
                          />
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'Poppins-Light',
                            }}>
                            No. of Ads
                          </Text>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Medium'}}>
                          {TotalCount}
                        </Text>
                      </View>
                    </ScrollView>
                    <View style={{paddingTop: 10}}>
                      <TouchableOpacity
                        style={{
                          alignSelf: 'center',
                          padding: 3,
                          backgroundColor: '#db2025',
                          width: '40%',
                          justifyContent: 'center',
                          borderRadius: 5,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Medium',
                            color: 'white',
                            padding: 5,
                          }}>
                          Edit Profile
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </React.Fragment>
            );
          })}
      </View>
      {/* <EditModal  /> */}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  ProParent: {borderWidth: 1, borderColor: '#F4F4F4', padding: 10},
  ProfileText: {fontFamily: 'Poppins-Bold', fontSize: 20, letterSpacing: 1},
  grid: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingLeft: 80,
    padding: 5,
  },
  text: {
    width: '40%',
    color: 'grey',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
  text2: {
    width: '50%',
    fontFamily: 'Poppins',
    color: '#333',
    letterSpacing: 1,
    fontSize: 12,
  },
});
