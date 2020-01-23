import React, {useState, useEffect} from 'react';
import {Picker} from 'react-native';
import Geocode from 'react-geocode';
import Geolocation from '@react-native-community/geolocation';

import {
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Animated,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {View, Text, Item, Icon} from 'native-base';
import useForm from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
function SearchComponent(props) {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.Filter);
  const [brand, setBrand] = useState(null);
  const [showroom, setShowroom] = useState(null);
  const brands = useSelector(state => state.Mis.Brands.Brands);
  const models = useSelector(state => state.Mis.Model);
  useEffect(() => {
    const {state} = props.navigation;
    setBrand(state.params !== undefined ? state.params.brand : null);
    setShowroom(state.params !== undefined ? state.params.showroom : null);
  }, []);
  const CITY = useSelector(state => state.Mis.City);
  async function watchPosition() {
    Geocode.setApiKey('AIzaSyA7s1z3r04bAEN9KxrayKFv0sHMoXF6-ZI');
    await Geolocation.getCurrentPosition(
      position => {
        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude,
        ).then(
          response => {
            const address = response.results[0].address_components;
            dispatch(Action.setCityName(address[3].long_name));
          },
          error => {
            Alert.alert(error.message);
          },
        );
        console.log('Position -> ', position.coords);
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: false, timeout: 50000},
    );
  }
  const handleSearch = () => {
    watchPosition();
  };
  const [Price, setPrice] = useState([]);
  const [Mile, setMile] = useState([]);
  const [Years, setYears] = useState([]);
  const State = useSelector(state => state.Mis);
  const ID = useSelector(state => state.Auth.ID);
  const slide = () => {
    Animated.timing(x, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    slide();
  }, []);
  useEffect(() => {
    const {
      nCity,
      nModel,
      nPriceFrom,
      nPriceTo,
      nYearFrom,
      nYearTo,
      nKiloMeterFrom,
      nKiloMeterTo,
      Models,
      Brand,
    } = filter;
    setValue('nCity', nCity);
    setValue('nModel', nModel);
    setValue('nPriceFrom', nPriceFrom);
    setValue('nPriceTo', nPriceTo);
    setValue('nYearFrom', nYearFrom);
    setValue('nYearTo', nYearTo);
    setValue('nKiloMeterFrom', nKiloMeterFrom);
    setValue('nKiloMeterTo', nKiloMeterTo);
    setValue('Models', Models);
    setValue('Brand', Brand);
    setBrand(Brand);
  }, [filter]);
  useEffect(() => {
    if (State.PriceList) {
      setPrice(State.PriceList);
    }
    if (State.MileList) {
      setMile(State.MileList);
    }
    if (State.YearsList) {
      setYears(State.YearsList);
    }
  }, [State]);
  const [x, setX] = useState(new Animated.Value(-500));
  const {register, setValue, getValues, watch} = useForm({
    mode: 'onChange',
    defaultValues: {
      nCity: null,
      nModel: null,
      nPriceFrom: null,
      nPriceTo: null,
      nYearFrom: null,
      nYearTo: null,
      nKiloMeterFrom: null,
      nKiloMeterTo: null,
      Models: null,
      Brand: null,
    },
  });
  const values = watch();
  // const cityName = useSelector(state => state.Mis.CityName);
  // useEffect(() => {
  //   setValue('nCity', cityName);
  // }, [cityName]);

  const handleSubmit = async data => {
    await Promise.all([await dispatch(Action.setSearch(getValues()))]).then(
      () => {
        props.Visible(false);
        dispatch(
          Action.getAds({
            ...data,
            UID: ID,
            Brand: brand === null ? values.Brand : brand,
            UserId: showroom,
          }),
        );
        props.navigation.navigate('YourSerach', {
          brand: values.Brand,
          showroom: null,
        });
      },
    );
  };
  const handleChange = async id => {
    Promise.all([await setValue('Brand', id)]).then(async () => {
      setBrand(id);
      dispatch(Action.models(id));
      await dispatch(Action.setSearch({...getValues(), Brand: id}));
    });
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      style={{position: 'absolute', zIndex: 100}}>
      <Animated.View
        style={{
          ...Styles.Container,
          transform: [
            {
              translateY: x,
            },
          ],
        }}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', padding: 5, paddingRight: 20}}
          onPress={props.Visible}>
          <Icon name="close" size={7} color="#949494" />
        </TouchableOpacity>
        {/* <Item>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', padding: 0}}>
            <Icon
              name="search"
              size={10}
              color="#949494"
              style={{color: '#949494', marginLeft: 20}}
            />
            <TextInput
              style={Styles.text}
              placeholder="New York, Los Angeles"
              ref={register({name: 'nCity'}, {required: true})}
              onChangeText={text => setValue('nCity', text, true)}
              value={values.nCity}
              onBlur={e => dispatch(Action.setCityName(values.nCity))}
            />
          </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => handleSearch()}>
            <Image
              resizeMode="center"
              source={require('../../assests/location.png')}
              style={{width: 20}}
            />
          </TouchableOpacity> */}
        {/* </Item> */}
        {/* <Item>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', padding: 0}}>
            <Icon
              name="search"
              size={10}
              color="#949494"
              style={{color: '#949494', marginLeft: 20}}
            />
            <TextInput
              style={Styles.text}
              placeholder="Type a car name or model"
              ref={register({name: 'nModel'}, {required: true})}
              onChangeText={text => setValue('nModel', text, true)}
              value={values.nModels}
            />
          </TouchableOpacity>
        </Item> */}

        <View
          style={{
            ...Styles.dropContainer,
            width: '100%',
            paddingLeft: 20,
            borderTopColor: 'transparent',
          }}>
          <Picker
            selectedValue={getValues().nCity}
            style={{width: '100%', height: 40, color: '#c7c7c7'}}
            ref={register({name: 'nCity'}, {required: true})}
            onValueChange={(itemValue, itemIndex) =>
              setValue('nCity', itemValue)
            }>
            <Picker.Item label="City" value={''} />
            {CITY &&
              CITY.map((v, k) => {
                return <Picker.Item label={v.CityName} value={v.CityName} />;
              })}
          </Picker>
        </View>
        <View
          style={{
            ...Styles.dropContainer,
            width: '100%',
            paddingLeft: 20,
            borderTopColor: 'transparent',
          }}>
          <Picker
            selectedValue={values.Brand}
            style={{width: '100%', height: 40, color: '#c7c7c7'}}
            ref={register({name: 'Brand'}, {required: true})}
            onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}>
            <Picker.Item label="Brand" value={''} />
            {brands &&
              brands.map((v, k) => {
                return <Picker.Item label={v.Title} value={v.ID} />;
              })}
          </Picker>
        </View>
        <View
          style={{
            ...Styles.dropContainer,
            width: '100%',
            paddingLeft: 20,
            borderTopColor: 'transparent',
          }}>
          <Picker
            selectedValue={getValues().Models}
            style={{width: '100%', height: 40, color: '#c7c7c7'}}
            ref={register({name: 'Models'}, {required: true})}
            onValueChange={(itemValue, itemIndex) => {
              setValue('Models', itemValue);
            }}>
            <Picker.Item label="Models" value={''} />
            {models &&
              models.map((v, k) => {
                return <Picker.Item label={v.ModelTitle} value={v.ID} />;
              })}
          </Picker>
        </View>
        <View style={Styles.rowContainer}>
          <Text style={Styles.Heading}>Year</Text>
          <View style={Styles.line}>
            <View style={Styles.dropContainer}>
              <Picker
                selectedValue={getValues().nYearFrom}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nYearFrom'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nYearFrom', itemValue, true)
                }>
                <Picker.Item label="From" value="" />
                {Years.map((v, k) => {
                  return (
                    <Picker.Item label={v.Year.toString()} value={v.Year} />
                  );
                })}
              </Picker>
            </View>
            <Text style={Styles.Text}>To</Text>
            <View style={Styles.dropContainer}>
              <Picker
                selectedValue={getValues().nYearTo}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nYearTo'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nYearTo', itemValue, true)
                }>
                <Picker.Item label="To" value="" />
                {Years.map((v, k) => {
                  return (
                    <Picker.Item label={v.Year.toString()} value={v.Year} />
                  );
                })}
              </Picker>
            </View>
          </View>

          <Text style={Styles.Heading}>Mileage</Text>
          <View style={Styles.line}>
            <View style={{...Styles.dropContainer, padding: 0}}>
              <TextInput
                style={{
                  ...Styles.text,
                  width: '100%',
                  paddingTop: 1,
                  paddingBottom: 1,
                }}
                placeholder="Min"
                ref={register({name: 'nKiloMeterFrom'}, {required: true})}
                onChangeText={text => setValue('nKiloMeterFrom', text, true)}
                value={values.nKiloMeterFrom}
                keyboardType="numeric"
              />
              {/* <Picker
                selectedValue={getValues().nKiloMeterFrom}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nKiloMeterFrom'}, {required: true})}
                onValueChange={(itemValue, itemIndex) => {
                  setValue('nKiloMeterFrom', itemValue, true);
                }}>
                <Picker.Item label="Min" value="" />
                {Mile.map((v, k) => {
                  return (
                    <Picker.Item
                      label={v.MileAges.toString()}
                      value={v.MileAges}
                    />
                  );
                })}
              </Picker> */}
            </View>
            <Text style={Styles.Text}>To</Text>
            <View style={Styles.dropContainer}>
              <TextInput
                style={{
                  ...Styles.text,
                  width: '100%',
                  paddingTop: 1,
                  paddingBottom: 1,
                }}
                placeholder="Max"
                ref={register({name: 'nKiloMeterTo'}, {required: true})}
                onChangeText={text => setValue('nKiloMeterTo', text, true)}
                value={values.nKiloMeterTo}
                keyboardType="numeric"
              />
              {/* <Picker
                selectedValue={getValues().nKiloMeterTo}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nKiloMeterTo'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nKiloMeterTo', itemValue, true)
                }>
                <Picker.Item label="Max" value="" />
                {Mile.map((v, k) => {
                  return (
                    <Picker.Item
                      label={v.MileAges.toString()}
                      value={v.MileAges}
                    />
                  );
                })}
              </Picker> */}
            </View>
          </View>
          <Text style={Styles.Heading}>Price</Text>
          <View style={Styles.line}>
            <View style={Styles.dropContainer}>
              <TextInput
                style={{
                  ...Styles.text,
                  width: '100%',
                  paddingTop: 1,
                  paddingBottom: 1,
                }}
                placeholder="Min"
                ref={register({name: 'nPriceFrom'}, {required: true})}
                onChangeText={text => setValue('nPriceFrom', text, true)}
                value={values.nPriceFrom}
                keyboardType="numeric"
              />
              {/* <Picker
                selectedValue={getValues().nPriceFrom}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nPriceFrom'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nPriceFrom', itemValue, true)
                }>
                <Picker.Item label="Min" value={''} />
                {Price.map((v, k) => {
                  return (
                    <Picker.Item label={v.Price.toString()} value={v.Price} />
                  );
                })}
              </Picker> */}
            </View>
            <Text style={Styles.Text}>To</Text>
            <View style={Styles.dropContainer}>
              <TextInput
                style={{
                  ...Styles.text,
                  width: '100%',
                  paddingTop: 1,
                  paddingBottom: 1,
                }}
                placeholder="Max"
                ref={register({name: 'nPriceTo'}, {required: true})}
                onChangeText={text => setValue('nPriceTo', text, true)}
                value={values.nPriceTo}
                keyboardType="numeric"
              />
              {/* <Picker
                selectedValue={getValues().nPriceTo}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nPriceTo'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nPriceTo', itemValue, true)
                }>
                <Picker.Item label="Max" value="" />
                {Price.map((v, k) => {
                  return (
                    <Picker.Item label={v.Price.toString()} value={v.Price} />
                  );
                })}
              </Picker> */}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              handleSubmit(getValues());
            }}
            style={{
              width: '30%',
              backgroundColor: '#d81f25',
              borderRadius: 3,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-Medium',
                padding: 3,
                textAlign: 'center',
                fontSize: 12,
              }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
export default withNavigation(SearchComponent);
const Styles = StyleSheet.create({
  rowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  line: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dropContainer: {
    width: '44%',
    borderColor: '#c7c7c7',
    borderWidth: 0.5,
    borderRadius: 3,
  },
  Text: {
    width: '10%',
    textAlign: 'center',
    color: '#d81f25',
    fontFamily: 'Poppins-Medium',
  },
  Container: {
    opacity: 1,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 20,
  },
  Heading: {
    color: '#333',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
  },
  text: {
    fontFamily: 'Poppins',
    letterSpacing: 1,
    color: '#949494',
    fontSize: 12,
    paddingLeft: 5,
    width: '77%',
  },
});
