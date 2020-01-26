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
} from 'react-native';
import {CheckBox} from 'native-base';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
// import Checkbox from 'react-native-modest-checkbox';
import * as Action from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from 'react-native';
import Header from '../Home/Header';
import useForm from 'react-hook-form';
import ImagePicker from 'react-native-image-picker';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RNFS from 'react-native-fs';
import {withNavigation} from 'react-navigation';
import Login from '../Login';
let IMG = [
  {
    ImageExtension: '',
    VehicleID: 3,
    ID: -1,
    nImage: null,
  },
  {
    ImageExtension: '',
    VehicleID: 3,
    ID: -1,
    nImage: null,
  },
  {
    ImageExtension: '',
    VehicleID: 3,
    ID: -1,
    nImage: null,
  },
  {
    ImageExtension: '',
    VehicleID: 3,
    ID: -1,
    nImage: null,
  },
];
const State = {
  nCity: null,
  nShowRoomName: '',
  nBrand: null,
  nModel: null,
  nPrice: 0,
  nCarOrigin: null,
  nYear: null,
  nKiloMeters: '',
  nWarranty: null,
  nColor: null,
  nDoors: null,
  oTransmission: null,
  nBodyType: null,
  nFuelType: null,
  nEngineSize: '',
  nNotes: '',
};
function AddNewAds(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getCity());
    dispatch(Action.getBodyType());
  }, [props.navigation.state.key]);
  const auth = useSelector(state => state.Auth.auth);
  const city = useSelector(state => state.Mis.City);
  const User = useSelector(state => state.Auth.UserData);
  const BodyType = useSelector(state => state.Mis.BodyType);
  const brands = useSelector(state => state.Mis.Brands.Brands);
  const Models = useSelector(state => state.Mis.Model);
  const Color = useSelector(state => state.Mis.Color);
  const CarOrigin = useSelector(state => state.Mis.CarOrigin);
  const DOORS = useSelector(state => state.Mis.DOORS);
  const YEAR = useSelector(state => state.Mis.YearsList);
  const TRANSMISSION = useSelector(state => state.Mis.TRANSMISSION);
  const Option = useSelector(state => state.Mis.Options);
  const [OPT, setOPT] = useState([]);
  const FuelType = useSelector(state => state.Mis.FuelType);
  const [AddImage, setAddImage] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [City, setCity] = useState([]);
  const [counter, setCounter] = useState(0);
  const [Images, setImages] = useState(IMG);
  const [normalAd, setNormalAd] = useState(0);
  const [sponserAd, setSponserAd] = useState(0);
  const [ExtraVehicleInfo, setExtraVehicleInfo] = useState([]);
  const [value3Index, setvalue3Index] = useState(null);
  const [err, setErr] = useState(false);
  const [dis, setDIS] = useState(false);
  useEffect(() => {
    setOPT(Option);
  }, [Option, counter]);
  const TYPE = [
    {label: 'Normal Ad', value: 'normal'},
    {label: 'Sponser Ad', value: 'sponser'},
  ];
  useEffect(() => {
    setCity(city);
  }, [city]);
  useEffect(() => {
    setBodyType(BodyType);
  }, [BodyType]);
  const {
    register,
    setValue,
    getValues,
    reset,
    watch,
    errors,
    setError,
  } = useForm({
    mode: 'onBlur',
    defaultValues: State,
  });
  const values = watch();
  const handleCheckBox = v => {
    let c = counter;
    let config = ExtraVehicleInfo;
    let arr = config.filter(arr => arr.nExtraVehiclePartID === v.ID);
    if (arr.length === 0) {
      config.push({nExtraVehiclePartID: v.ID});
      setExtraVehicleInfo(config);
    } else {
      arr = config.filter(arr => arr.nExtraVehiclePartID !== v.ID);
      setExtraVehicleInfo(arr);
    }
    c++;
    setCounter(c);
  };
  useEffect(() => {
    setAddImage(Images);
  }, [counter, Images]);
  const moreImg = () => {
    let config = {
      ImageExtension: '',
      VehicleID: 3,
      ID: -1,
      nImage: null,
    };
    let image = Images;
    image.push(config);
    let count = counter;
    count--;
    setCounter(count);
    setImages(image);
  };
  useEffect(() => {
    if (auth === true) {
      setValue('nShowRoomName', User.ShowromName);
      setValue('nCity', User.City);
      setNormalAd(User.Normal_ads_Balance);
      setSponserAd(User.Sponsored_ads_balance);
    }
  }, [User]);
  const validate = async () => {
    let city = getValues().nCity === null ? false : true;
    let nShowRoomName = getValues().nShowRoomName === '' ? false : true;
    let nBrand = getValues().nBrand === null ? false : true;
    let nModel = getValues().nModel === null ? false : true;
    let nPrice =
      getValues().nPrice === '' || getValues().nPrice === 0 ? false : true;
    let nYear = getValues().nYear === null ? false : true;
    let nKiloMeters = getValues().nKiloMeters === '' ? false : true;
    let nColor = getValues().nColor === null ? false : true;
    let nFuelType = getValues().nFuelType === null ? false : true;
    let Type = value3Index === null ? false : true;
    let nEngineSize = getValues().nEngineSize === '' ? false : true;
    if (city !== true) {
      setError('nCity');
    }
    if (nShowRoomName !== true) {
      setError('nShowRoomName');
    }
    if (nBrand !== true) {
      setError('nBrand');
    }
    if (nModel !== true) {
      setError('nModel');
    }
    if (nPrice !== true) {
      setError('nPrice');
    }
    if (nYear !== true) {
      setError('nYear');
    }
    if (nKiloMeters !== true) {
      setError('nKiloMeters');
    }
    if (nColor !== true) {
      setError('nColor');
    }
    if (nFuelType !== true) {
      setError('nFuelType');
    }
    if (nEngineSize !== true) {
      setError('nEngineSize');
    }
    if (Type !== true) {
      setErr(true); // setError('nAdType');
    }
  };

  const onSubmit = async () => {
    let img = Images;
    const filterImage = img.filter(arr => arr.nImage !== null);
    let obj = {
      ...getValues(),
      nUserID: User.ID,
      nCreatedBy: User.UserName,
      Images: filterImage,
      ExtraVehicleInfo,
      nAdType: value3Index,
    };
    if (filterImage.length === 0) {
      validate();
      Alert.alert('Please Add At Least One Picture!');
    } else if (value3Index === null) {
      validate();
      Alert.alert('Please Select Ad Type!');
    } else if (obj.nCity === null) {
      validate();
      Alert.alert('Please Select City!');
    } else if (obj.nShowRoomName === '') {
      validate();
      Alert.alert('Please Enter Showroom Name!');
    } else if (obj.nBrand === null) {
      validate();
      Alert.alert('Please Select Brand Name!');
    } else if (obj.nModel === null) {
      validate();
      Alert.alert('Please Select Model!');
    } else if (obj.nPrice === '' || obj.nPrice === 0) {
      validate();
      Alert.alert('Please Enter Price!');
    } else if (obj.nYear === null) {
      validate();
      Alert.alert('Please Select Year!');
    } else if (obj.nKiloMeters === '') {
      validate();
      Alert.alert('Please Enter Kilometers!');
    } else if (obj.nColor === null) {
      validate();
      Alert.alert('Please Select Color!');
    } else if (obj.nFuelType === null) {
      validate();
      Alert.alert('Please Select Fuel Type!');
    } else if (obj.nEngineSize === '') {
      validate();
      Alert.alert('Please Enter Engine Size!');
    } else {
      if (values.nAdType === 'normal' && normalAd <= 0) {
        Alert.alert('Your Normal Ad Credit Is Finished!');
      } else if (values.nAdType === 'sponser' && sponserAd <= 0) {
        Alert.alert('Your Sponser Ad Credit Is Finished!');
      } else {
        setDIS(true);
        await Promise.all([await dispatch(Action.saveAd(obj))]).then(res => {
          setDIS(false);
          if (res[0] === true) {
            setImages([
              {
                ImageExtension: '',
                VehicleID: 3,
                ID: -1,
                nImage: null,
              },
              {
                ImageExtension: '',
                VehicleID: 3,
                ID: -1,
                nImage: null,
              },
              {
                ImageExtension: '',
                VehicleID: 3,
                ID: -1,
                nImage: null,
              },
              {
                ImageExtension: '',
                VehicleID: 3,
                ID: -1,
                nImage: null,
              },
            ]);
            let count = counter;
            count++;
            reset(State);
            dispatch(Action.getActiveAds({UserId: User.ID}));
            props.navigation.navigate('YourSerach');
            dispatch(Action.resetModel());
            setCounter(count);
            setExtraVehicleInfo([]);
            setValue('nShowRoomName', User.ShowromName);
            setValue('nCity', User.City);
            dispatch(Action.UPDATEUSER(User.ID));
          }
        });
      }
    }
  };
  const handleImages = (k, id) => {
    Alert.alert(
      'Image Uploading',
      'Have you want to change image or remove?',
      [
        {
          text: 'Remove',
          onPress: () => removeImage(id, k),
        },
        {
          text: 'Change',
          onPress: () => handleChoosePhoto(k),
        },
        {text: 'Cancel', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };
  const removeImage = (v, k) => {
    let Img = AddImage;
    Img[k] = {
      ImageExtension: '',
      VehicleID: 3,
      ID: -1,
      nImage: null,
    };
    setImages(Img);
    console.log(Img);
    let co = counter;
    co++;
    setCounter(co);
  };
  const Img = AddImage.map((v, k) => {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={() => {
            v.nImage === null ? handleChoosePhoto(k) : handleImages(k, v);
          }}
          key={k}>
          {v.nImage === null ? (
            <View style={styles.plus}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: '#d81f25',
                  fontSize: 30,
                }}>
                +
              </Text>
            </View>
          ) : (
            <Image
              source={{
                uri: `data:image/${v.ImageExtension};base64,${v.nImage}`,
              }}
              style={styles.plus}
            />
          )}
        </TouchableOpacity>
      </React.Fragment>
    );
  });
  const toBase64 = (file, k) => {
    if (
      file !== undefined &&
      file !== null &&
      file !== '' &&
      file.didCancel !== true
    ) {
      let files = file.path.split('.');
      let extension = files[files.length - 1];
      RNFS.readFile(file.path, 'base64').then(res => {
        let Image = Images;
        Image[k].ImageExtension = extension;
        Image[k].nImage = res;
        setImages(Image);
        setAddImage(Image);
        let count = counter;
        count++;
        setCounter(count);
      });
    }
  };
  const handleChoosePhoto = async k => {
    const options = {
      noData: true,
    };
    ImagePicker.showImagePicker(options, response => {
      console.log(response);
      toBase64(response, k);
    });
  };
  return (
    <React.Fragment>
      <Login id={null} />
      <Header />
      <ScrollView style={{backgroundColor: '#F4F4F4'}}>
        <React.Fragment>
          <View style={styles.heading}>
            <Text style={styles.Htext}>Add New</Text>
          </View>
          {auth === true ? (
            <View style={styles.Container}>
              <View style={styles.InnerPlus}>
                {Img}
                <TouchableOpacity
                  onPress={() => {
                    moreImg();
                  }}>
                  <View style={styles.plus}>
                    <Text style={{color: 'grey'}}>More</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: 11,
                      marginBottom: 10,
                      color: err === true ? '#CB3837' : '#333',
                      marginLeft: 5,
                    }}>
                    Ad Type*
                  </Text>
                  <RadioForm
                    formHorizontal={true}
                    labelHorizontal={true}
                    animation={true}>
                    {/* To create radio buttons, loop through your array of options */}
                    {TYPE.map((obj, i) => (
                      <RadioButton labelHorizontal={true} key={i}>
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={value3Index === obj.value}
                          onPress={val => {
                            setvalue3Index(val);
                            setErr(false);
                          }}
                          borderWidth={1}
                          buttonInnerColor={'#d81f25'}
                          buttonOuterColor={
                            value3Index === obj.value
                              ? '#d81f25'
                              : err === true
                              ? '#CB3837'
                              : '#333'
                          }
                          buttonSize={12}
                          buttonOuterSize={18}
                          buttonStyle={{}}
                          buttonWrapStyle={{marginLeft: i !== 0 ? 30 : 5}}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          onPress={val => {
                            setvalue3Index(val);
                            setErr(false);
                          }}
                          labelStyle={{
                            fontSize: 12,
                            color: err === true ? '#CB3837' : '#333',
                            fontFamily: 'Poppins',
                            marginTop: -4,
                            marginLeft: 10,
                          }}
                        />
                      </RadioButton>
                    ))}
                  </RadioForm>
                  {value3Index !== null ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins',
                        padding: 2,
                        fontSize: 10,
                        textTransform: 'capitalize',
                      }}>
                      {`Total Credit Of ${value3Index} : ${
                        values.nAdType === 'normal' ? normalAd : sponserAd
                      }`}
                    </Text>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </View>
                <View
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nCity ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    enabled={false}
                    selectedValue={values.nCity}
                    ref={register({name: 'nCity'}, {required: false})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nCity', itemValue, true)
                    }>
                    <Picker.Item label="--City*" value={null} disabled />
                    {City &&
                      City.map((v, k) => {
                        return <Picker.Item label={v.CityName} value={v.ID} />;
                      })}
                  </Picker>
                </View>
                <TextInput
                  ref={register({name: 'nShowRoomName'}, {required: true})}
                  onChangeText={text => setValue('nShowRoomName', text, true)}
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nShowRoomName ? 'red' : '#CFCFCF',
                  }}
                  editable={false}
                  placeholder="Showroom Name*"
                  value={values.nShowRoomName}
                  placeholderTextColor="#808080"
                />
                <View
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nBrand ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nBrand}
                    ref={register({name: 'nBrand'}, {required: false})}
                    onValueChange={(itemValue, itemIndex) => {
                      dispatch(Action.models(itemValue));
                      setValue('nBrand', itemValue, true);
                    }}>
                    <Picker.Item label="--Brand*" value={null} disabled />
                    {brands &&
                      brands.map((v, k) => {
                        return <Picker.Item label={v.Title} value={v.ID} />;
                      })}
                  </Picker>
                </View>
                <View
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nModel ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nModel}
                    ref={register({name: 'nModel'}, {required: false})}
                    onValueChange={(itemValue, itemIndex) => {
                      setValue('nModel', itemValue, true);
                    }}>
                    <Picker.Item label="--Model*" value={null} disabled />
                    {Models &&
                      Models.map((v, k) => {
                        return (
                          <Picker.Item label={v.ModelTitle} value={v.ID} />
                        );
                      })}
                  </Picker>
                </View>

                <TextInput
                  ref={register({name: 'nPrice'}, {required: true})}
                  onChangeText={text => setValue('nPrice', text, true)}
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nPrice ? 'red' : '#CFCFCF',
                  }}
                  keyboardType="numeric"
                  placeholder="Price*"
                  value={values.nPrice}
                  placeholderTextColor="#808080"
                />
                <View
                  style={{
                    ...styles.textInp,
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nDoors}
                    ref={register({name: 'nDoors'}, {required: false})}
                    onValueChange={(itemValue, itemIndex) => {
                      setValue('nDoors', itemValue, true);
                    }}>
                    <Picker.Item label="--Door" value={null} disabled />
                    {DOORS &&
                      DOORS.map((v, k) => {
                        return <Picker.Item label={v} value={v} />;
                      })}
                  </Picker>
                </View>
                <View
                  style={{
                    ...styles.textInp,
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nCarOrigin}
                    ref={register({name: 'nCarOrigin'}, {required: false})}
                    onValueChange={(itemValue, itemIndex) => {
                      setValue('nCarOrigin', itemValue, true);
                    }}>
                    <Picker.Item label="--Car-Origin" value={null} disabled />
                    {CarOrigin &&
                      CarOrigin.map((v, k) => {
                        return <Picker.Item label={v} value={v} />;
                      })}
                  </Picker>
                </View>
                <View
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nYear ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nYear}
                    ref={register({name: 'nYear'}, {required: false})}
                    onValueChange={(itemValue, itemIndex) => {
                      setValue('nYear', itemValue, true);
                    }}>
                    <Picker.Item label="--Years*" value={null} disabled />
                    {YEAR &&
                      YEAR.map((v, k) => {
                        return <Picker.Item label={v.Year} value={v.Year} />;
                      })}
                  </Picker>
                </View>
                <TextInput
                  ref={register({name: 'nKiloMeters'}, {required: true})}
                  onChangeText={text => setValue('nKiloMeters', text, true)}
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nKiloMeters ? 'red' : '#CFCFCF',
                  }}
                  placeholder="Kilometers*"
                  keyboardType="numeric"
                  value={values.nKiloMeters}
                  placeholderTextColor="#808080"
                />
                <View
                  style={{
                    ...styles.textInp,
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nWarranty}
                    ref={register({name: 'nWarranty'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nWarranty', itemValue, true)
                    }>
                    <Picker.Item label="--Warranty" value={null} disabled />
                    <Picker.Item label="Yes" value={true} />
                    <Picker.Item label="No" value={false} />
                  </Picker>
                </View>
                <View
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nColor ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nColor}
                    ref={register({name: 'nColor'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nColor', itemValue, true)
                    }>
                    <Picker.Item label="--Color*" value={null} disabled />
                    {Color &&
                      Color.map(v => <Picker.Item label={v} value={v} />)}
                  </Picker>
                </View>
                <View
                  style={{
                    ...styles.textInp,
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.oTransmission}
                    ref={register({name: 'oTransmission'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('oTransmission', itemValue, true)
                    }>
                    <Picker.Item label="--Transmission" value={null} disabled />
                    {TRANSMISSION &&
                      TRANSMISSION.map(v => (
                        <Picker.Item label={v} value={v} />
                      ))}
                  </Picker>
                </View>
                <View
                  style={{
                    ...styles.textInp,
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nBodyType}
                    ref={register({name: 'nBodyType'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nBodyType', itemValue, true)
                    }>
                    <Picker.Item label="--Body-Type" value={null} disabled />
                    {bodyType &&
                      bodyType.map((v, k) => {
                        return (
                          <Picker.Item label={v.BodyTypeTitle} value={v.ID} />
                        );
                      })}
                  </Picker>
                </View>
                <View
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nFuelType ? 'red' : '#CFCFCF',
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                      height: 28,
                      fontFamily: 'Poppins',
                    }}
                    selectedValue={values.nFuelType}
                    ref={register({name: 'nFuelType'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nFuelType', itemValue, true)
                    }>
                    <Picker.Item label="--Fuel-Type*" value={null} disabled />
                    {FuelType &&
                      FuelType.map((v, k) => {
                        return <Picker.Item label={v} value={v} />;
                      })}
                  </Picker>
                </View>
                <TextInput
                  ref={register({name: 'nEngineSize'}, {required: true})}
                  onChangeText={text => setValue('nEngineSize', text, true)}
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nEngineSize ? 'red' : '#CFCFCF',
                  }}
                  placeholder="Engine Size*"
                  value={values.nEngineSize}
                  placeholderTextColor="#808080"
                />

                <TextInput
                  ref={register({name: 'nNotes'}, {required: true})}
                  multiline={true}
                  onChangeText={text => setValue('nNotes', text, true)}
                  style={{
                    ...styles.textInp,
                    borderColor: errors.nNotes ? 'red' : '#CFCFCF',
                  }}
                  placeholder="Notes"
                  placeholderTextColor="#808080"
                  value={values.nNotes}
                  numberOfLines={3}
                />
                <View style={styles.extraContainer}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      marginTop: 10,
                      marginLeft: 5,
                    }}>
                    Extra Item
                  </Text>
                  <View style={styles.checkBox}>
                    {OPT &&
                      OPT.map((v, k) => {
                        return (
                          <View style={styles.checkBoxItems} key={k}>
                            <CheckBox
                              onPress={() => handleCheckBox(v)}
                              color="#d81f25"
                              checked={
                                ExtraVehicleInfo.filter(
                                  arr => arr.nExtraVehiclePartID === v.ID,
                                ).length > 0
                                  ? true
                                  : false
                              }
                            />
                            <Text
                              style={{
                                fontFamily: 'Poppins',
                                fontSize: 10,
                                marginLeft: 15,
                              }}>
                              {v.Title}
                            </Text>
                          </View>
                        );
                      })}
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    disabled={dis}
                    style={{
                      width: 140,
                      padding: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      backgroundColor: dis === false ? '#d81f25' : '#C7C7C7',
                    }}
                    onPress={() => onSubmit()}>
                    <Text
                      style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.elseContainer}>
              <Text style={styles.elseText}>Login Please To Sell a Car</Text>
              <TouchableOpacity
                style={styles.elseBtnContainer}
                onPress={() => dispatch(Action.Toggle_PopUp(true))}>
                <Text style={styles.elseBtnContainerText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </React.Fragment>
      </ScrollView>
    </React.Fragment>
  );
}

export default withNavigation(AddNewAds);
const styles = StyleSheet.create({
  elseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('50%'),
  },
  elseText: {
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1,
    fontSize: 17,
  },
  elseBtnContainer: {
    width: 120,
    height: 30,
    backgroundColor: '#d81f25',
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 20,
  },
  elseBtnContainerText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1,
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#CFCFCF',
    borderBottomWidth: 0.5,
  },
  Htext: {
    fontSize: 18,
    padding: 5,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1,
    color: '#333',
  },
  Container: {height: '100%', width: '100%', padding: 10, paddingBottom: 30},
  InnerPlus: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  plus: {
    width: 75,
    height: 80,
    backgroundColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    margin: 5,
  },
  textInp: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#333',
    color: '#CFCFCF',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 2,
    fontSize: 12,
    paddingLeft: 10,
    fontFamily: 'Poppins',
    borderRadius: 5,
  },
  extraContainer: {
    width: '100%',
  },
  checkBox: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBoxItems: {
    marginTop: 10,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
