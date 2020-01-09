import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import * as Action from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from 'react-native';
import Header from '../Home/Header';
import useForm from 'react-hook-form';
import ImagePicker from 'react-native-image-picker';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RNFS from 'react-native-fs';
import {withNavigation} from 'react-navigation';
import Loader from '../Loader';
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
  nBrand: '',
  nModel: '',
  nPrice: 0,
  nCarOrigin: '',
  nYear: '',
  nKiloMeters: '',
  nWarranty: '',
  nColor: '',
  nDoors: '',
  oTransmission: '',
  nBodyType: '',
  nFuelType: '',
  nEngineSize: '',
  nNotes: '',
};
function AddNewAdds(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getCity());
    dispatch(Action.getBodyType());
  }, [props.navigation.state.key]);
  const auth = useSelector(state => state.Auth.auth);
  const city = useSelector(state => state.Mis.City);
  const User = useSelector(state => state.Auth.UserData);
  const BodyType = useSelector(state => state.Mis.BodyType);
  const [AddImage, setAddImage] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [City, setCity] = useState([]);
  const [counter, setCounter] = useState(0);
  const [Images, setImages] = useState(IMG);
  useEffect(() => {
    setCity(city);
  }, [city]);
  useEffect(() => {
    setBodyType(BodyType);
  }, [BodyType]);
  const {register, setValue, getValues, reset, watch} = useForm({
    mode: 'onChange',
    defaultValues: State,
  });
  const values = watch();
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
  const onSubmit = async () => {
    let img = Images;
    const filterImage = img.filter(arr => arr.nImage !== null);
    let obj = {
      ...getValues(),
      nUserID: User.ID,
      nCreatedBy: User.UserName,
      Images: filterImage,
      ExtraVehicleInfo: [],
    };
    await Promise.all([await dispatch(Action.saveAd(obj))]).then(() => {
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
      setCounter(count);
      reset(State);
      props.navigation.navigate('YourSerach');
      dispatch(Action.getActiveAds({UserId: User.ID}));
    });
  };
  const Img = AddImage.map((v, k) => {
    return (
      <React.Fragment>
        <Loader />
        <TouchableOpacity onPress={() => handleChoosePhoto(k)} key={k}>
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
      let extension = file.type.split('/')[1];
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
    ImagePicker.launchImageLibrary(options, response => {
      toBase64(response, k);
    });
  };
  return (
    <React.Fragment>
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
                <View style={styles.textInp}>
                  <Picker
                    textStyle={{backgroundColor: 'orange'}}
                    selectedValue={getValues().nCity}
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
                    <Picker.Item label="--City" value={null} disabled />
                    {City &&
                      City.map((v, k) => {
                        return <Picker.Item label={v.CityName} value={v.ID} />;
                      })}
                  </Picker>
                </View>
                <TextInput
                  ref={register({name: 'nShowRoomName'}, {required: true})}
                  onChangeText={text => setValue('nShowRoomName', text, true)}
                  style={styles.textInp}
                  placeholder="Showroom Name"
                  value={values.nShowRoomName}
                />
                <TextInput
                  ref={register({name: 'nBrand'}, {required: true})}
                  onChangeText={text => setValue('nBrand', text, true)}
                  style={styles.textInp}
                  placeholder="Car Brand"
                  value={values.nBrand}
                />
                <TextInput
                  ref={register({name: 'nModel'}, {required: true})}
                  onChangeText={text => setValue('nModel', text, true)}
                  style={styles.textInp}
                  placeholder="Model"
                  value={values.nModel}
                />
                <TextInput
                  ref={register({name: 'nPrice'}, {required: true})}
                  onChangeText={text => setValue('nPrice', text, true)}
                  style={styles.textInp}
                  placeholder="Price"
                  value={values.nPrice}
                />
                <TextInput
                  ref={register({name: 'nDoor'}, {required: true})}
                  onChangeText={text => setValue('nDoor', text, true)}
                  style={styles.textInp}
                  placeholder="Door"
                  value={values.nDoor}
                />
                <TextInput
                  ref={register({name: 'nCarOrigin'}, {required: true})}
                  onChangeText={text => setValue('nCarOrigin', text, true)}
                  style={styles.textInp}
                  placeholder="Car Origin"
                  value={values.nCarOrigin}
                />
                <TextInput
                  ref={register({name: 'nYear'}, {required: true})}
                  onChangeText={text => setValue('nYear', text, true)}
                  style={styles.textInp}
                  placeholder="Year"
                  value={values.nYear}
                />
                <TextInput
                  ref={register({name: 'nKiloMeters'}, {required: true})}
                  onChangeText={text => setValue('nKiloMeters', text, true)}
                  style={styles.textInp}
                  placeholder="Kilometers"
                  value={values.nKiloMeters}
                />
                <View style={styles.textInp}>
                  <Picker
                    textStyle={{backgroundColor: 'orange'}}
                    selectedValue={getValues().nCity}
                    style={{
                      width: '100%',
                      height: 25,
                      color: '#CFCFCF',
                      fontFamily: 'Poppins',
                    }}
                    ref={register({name: 'nWarranty'}, {required: true})}
                    onValueChange={(itemValue, itemIndex) =>
                      setValue('nWarranty', itemValue, true)
                    }>
                    <Picker.Item label="--Warranty" value={null} disabled />
                    <Picker.Item label="Yes" value={true} />
                    <Picker.Item label="No" value={false} />
                  </Picker>
                </View>
                <TextInput
                  ref={register({name: 'nColor'}, {required: true})}
                  onChangeText={text => setValue('nColor', text, true)}
                  style={styles.textInp}
                  placeholder="Color"
                  value={values.nColor}
                />
                <TextInput
                  ref={register({name: 'oTransmission'}, {required: true})}
                  onChangeText={text => setValue('oTransmission', text, true)}
                  style={styles.textInp}
                  placeholder="Transmission"
                  value={values.oTransmission}
                />
                <View style={styles.textInp}>
                  <Picker
                    textStyle={{backgroundColor: 'orange'}}
                    selectedValue={getValues().nBodyType}
                    style={{
                      width: '100%',
                      height: 25,
                      color: '#CFCFCF',
                      fontFamily: 'Poppins',
                    }}
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
                <TextInput
                  ref={register({name: 'nFuelType'}, {required: true})}
                  onChangeText={text => setValue('nFuelType', text, true)}
                  style={styles.textInp}
                  placeholder="Fuel Type"
                  value={values.nFuelType}
                />
                <TextInput
                  ref={register({name: 'nEngineSize'}, {required: true})}
                  onChangeText={text => setValue('nEngineSize', text, true)}
                  style={styles.textInp}
                  placeholder="Engine Size"
                  value={values.nEngineSize}
                />
                <TextInput
                  ref={register({name: 'nNotes'}, {required: true})}
                  onChangeText={text => setValue('nNotes', text, true)}
                  style={styles.textInp}
                  placeholder="Notes"
                  value={values.nNotes}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 140,
                      padding: 5,
                      backgroundColor: '#d81f25',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                    onPress={onSubmit}>
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

export default withNavigation(AddNewAdds);
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
    width: 85,
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
    borderColor: '#CFCFCF',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 2,
    fontSize: 12,
    paddingLeft: 10,
    fontFamily: 'Poppins',
    borderRadius: 5,
  },
});
