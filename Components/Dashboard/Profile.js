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
  Modal,
  Picker,
} from 'react-native';
import {connect} from 'react-redux';
import Icons from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';
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
import Loader from '../Loader';
import * as Action from '../../redux/actions';
// import EditModal from "./EditProfile"
import {useSelector, useDispatch} from 'react-redux';
import useForm from 'react-hook-form';
import Axios from 'axios';
function HomeScreen(props) {
  const dispatch = useDispatch();
  const [ProfileData, setProfile] = useState([]);
  const [TotalCount, setTotalCount] = useState([]);
  const [visible, setVisible] = useState(false);
  const city = useSelector(state => state.Mis.City);
  const country = useSelector(state => state.Mis.Country);
  const Userdata = useSelector(state => state.Auth.UserData);
  const adsLength = useSelector(state => state.Ads.ActivatedAds);
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    nCurrentID: null,
    oShowromName: '',
    nType: '',
    oAddress: '',
    oContactPersonName: '',
    oLogo: '',
    oLogoExtension: null,
    oActiveFromDate: '2019-12-15 09:48:41.230',
    oActiveToDate: '2021-5-10 13:14:02.787',
    nStatus: false,
    oNormal_ads_Balance: 0,
    oSponsored_ads_balance: 0,
    nCreatedBy: '',
    nGroupID: 1,
  });
  const {register, setValue, getValues, reset, watch} = useForm({
    mode: 'onChange',
    defaultValues: {
      nCountry: null,
      nName: '',
      oShowroomTelephone: '',
      nCity: 0,
      oPassword: '',
      nEmail: '',
    },
  });
  useEffect(() => {
    dispatch(Action.getCity());
    dispatch(Action.getCountry());
  }, []);
  useEffect(() => {
    console.log('work');
    if (ProfileData[0]) {
      let v = ProfileData[0];
      setValue('oShowromName', v.ShowromName);
      setValue('oShowroomTelephone', v.ShowroomTelephone);
      setValue('nCity', v.City);
      setValue('nCountry', v.Country === 0 ? 1 : v.Country);
      setValue('oAddress', v.Address);
      setState({
        nName: v.UserName,
        nCurrentID: v.ID,
        nType: v.Type,
        oContactPersonName: v.ContactPersonName,
        oActiveFromDate: v.ActiveFromDate,
        oActiveToDate: v.ActiveToDate,
        nStatus: v.Status,
        oNormal_ads_Balance: v.Normal_ads_Balance,
        oSponsored_ads_balance: v.Sponsored_ads_balance,
        nCreatedBy: v.CreatedBy,
        nGroupID: v.GroupID,
        oLogo: null,
        oLogoExtension: null,
        nEmail: v.Email,
      });
    }
  }, [ProfileData, count]);
  console.log({...getValues(), ...state});
  useEffect(() => {
    setTotalCount(adsLength);
  }, [adsLength]);
  useEffect(() => {
    setProfile([Userdata]);
  }, [Userdata]);

  const toBase64 = (file, k) => {
    if (
      file !== undefined &&
      file !== null &&
      file !== '' &&
      file.didCancel !== true
    ) {
      let extension = file.type.split('/')[1];
      RNFS.readFile(file.path, 'base64').then(async res => {
        let obj = state;
        obj.oLogo = res;
        obj.oLogoExtension = extension;
        setState(obj);
        let counter = count;
        counter++;
        dispatch(Action.toggleLoader(true));
        await Promise.all([
          await dispatch(Action.updateUser({...getValues(), ...obj})),
        ]);
        dispatch(Action.toggleLoader(false));
        setCount(counter);
      });
    }
  };
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      toBase64(response);
    });
  };
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
  const values = watch();
  return (
    <React.Fragment>
      <Loader />

      <View>
        <Modal
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType="fade"
          transparent={true}>
          <React.Fragment>
            <View
              style={{
                width: '100%',
                height: hp('100%'),
                backgroundColor: 'rgba(0,0,0,.5)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: '80%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <TouchableOpacity
                  style={{alignSelf: 'flex-end', padding: 5}}
                  onPress={() => setVisible(false)}>
                  <Icons name="close" color="#c7c7c7" size={20} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    letterSpacing: 1,
                  }}>
                  Edit Profile
                </Text>
                <TextInput
                  name="oShowromName"
                  placeholder="Enter Showroom Name Here...."
                  style={styles.input}
                  value={values.oShowromName}
                  ref={register({name: 'oShowromName'}, {required: true})}
                  onChangeText={text => setValue('oShowromName', text, true)}
                />
                <TextInput
                  name="oShowroomTelephone"
                  placeholder="Enter Mobile Number Here...."
                  style={styles.input}
                  value={values.oShowroomTelephone}
                  ref={register({name: 'oShowroomTelephone'}, {required: true})}
                  onChangeText={text =>
                    setValue('oShowroomTelephone', text, true)
                  }
                />
                <TextInput
                  name="oAddress"
                  placeholder="Enter Address Here...."
                  style={styles.input}
                  value={values.oAddress}
                  ref={register({name: 'oAddress'}, {required: true})}
                  onChangeText={text => setValue('oAddress', text, true)}
                />
                <View style={styles.input}>
                  <Picker
                    textStyle={{backgroundColor: 'orange'}}
                    selectedValue={values.nCity}
                    style={{
                      width: '100%',
                      height: 25,
                      color: '#CFCFCF',
                      fontFamily: 'Poppins',
                    }}
                    ref={register({name: 'nCity'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nCity', itemValue, true)
                    }>
                    <Picker.Item label="--City" value={-1} disabled />
                    {city &&
                      city.map((v, k) => {
                        return <Picker.Item label={v.CityName} value={v.ID} />;
                      })}
                  </Picker>
                </View>
                <View style={styles.input}>
                  <Picker
                    selectedValue={getValues().nCountry}
                    style={{width: '100%', height: 30, color: '#c7c7c7'}}
                    ref={register({name: 'nCountry'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nCountry', itemValue)
                    }>
                    <Picker.Item label="--Country" value={-1} disabled />
                    {country &&
                      country.map((v, k) => {
                        return (
                          <Picker.Item label={v.CountryName} value={v.Id} />
                        );
                      })}
                  </Picker>
                </View>
                <TextInput
                  name="oPassword"
                  placeholder="Enter Password Here...."
                  style={styles.input}
                  value={values.oPassword}
                  ref={register({name: 'oPassword'}, {required: true})}
                  onChangeText={text => setValue('oPassword', text, true)}
                />
                <TouchableOpacity
                  style={{
                    margin: 10,
                    backgroundColor: '#d81f25',
                    width: 160,
                    padding: 5,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}
                  onPress={() => {
                    dispatch(Action.updateUser({...getValues(), ...state}));
                    setVisible(false);
                  }}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </React.Fragment>
        </Modal>
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
                      backgroundColor: 'white',
                      marginTop: '30%',
                      marginBottom: '30%',
                      position: 'relative',
                    }}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View
                        style={{
                          height: 180,
                          width: 150,
                          top: -90,
                          borderColor: '#ffff',
                          borderWidth: 1,
                          overflow: 'hidden',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity>
                          <Image
                            style={{height: 150, width: 150, borderRadius: 10}}
                            source={{
                              uri: `http://207.180.230.73/palcar${v.Logo}`,
                            }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleChoosePhoto()}>
                          <Text
                            style={{
                              fontFamily: 'Poppins-Medium',
                              marginTop: 5,
                              fontSize: 12,
                              color:"#5CA7FF"
                            }}>
                            Update Picture
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -90,
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
                        <Text style={{fontFamily: 'Poppins-Medium'}}>
                          {v.CountryName}
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
                      <View style={{paddingTop: 10, paddingBottom: 30}}>
                        <TouchableOpacity
                          style={{
                            alignSelf: 'center',
                            padding: 3,
                            backgroundColor: '#db2025',
                            width: '40%',
                            justifyContent: 'center',
                            borderRadius: 5,
                            alignItems: 'center',
                          }}
                          onPress={() => {
                            setVisible(true);
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
    </React.Fragment>
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
  input: {
    borderWidth: 1,
    borderColor: '#F4F4F4',
    fontFamily: 'Poppins',
    fontSize: 10,
    width: '90%',
    padding: 5,
    marginTop: 20,
    borderRadius: 5,
  },
});
