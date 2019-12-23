import React, {useState, useEffect} from 'react';
import {Picker} from 'react-native';
import {
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Animated,
  TextInput,
} from 'react-native';
import {View, Text, Item, Icon} from 'native-base';
import useForm from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
function SearchComponent(props) {
  const [Price, setPrice] = useState([]);
  const [Mile, setMile] = useState([]);
  const [Years, setYears] = useState([]);
  const State = useSelector(state => state.Mis);
  const dispatch = useDispatch();
  const slide = () => {
    Animated.timing(x, {
      toValue: 0,
      duration: 1000,
    }).start();
  };
  useEffect(() => {
    slide();
    dispatch(Action.getPrice());
    dispatch(Action.getMile());
    dispatch(Action.getYears());
  }, []);
  console.log(Price);
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
  const {register, setValue, getValues} = useForm({
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
    },
  });
  const handleSubmit = data => {
    dispatch(Action.getAds(data));
    props.Visible(false);
    props.navigation.navigate('YourSerach');
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
        <Item>
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
            />
          </TouchableOpacity>
        </Item>
        <Item>
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
            />
          </TouchableOpacity>
        </Item>
        <View style={Styles.rowContainer}>
          <Text style={Styles.Heading}>Price</Text>
          <View style={Styles.line}>
            <View style={Styles.dropContainer}>
              <Picker
                selectedValue={getValues().nPriceFrom}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nPriceFrom'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nPriceFrom', itemValue, true)
                }>
                <Picker.Item label="Price From" value={''} />
                {Price.map((v, k) => {
                  return (
                    <Picker.Item label={v.Price.toString()} value={v.ID} />
                  );
                })}
              </Picker>
            </View>
            <Text style={Styles.Text}>To</Text>
            <View style={Styles.dropContainer}>
              <Picker
                selectedValue={getValues().nPriceTo}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nPriceTo'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nPriceTo', itemValue, true)
                }>
                <Picker.Item label="Price To" value="" />
                {Price.map((v, k) => {
                  return (
                    <Picker.Item label={v.Price.toString()} value={v.ID} />
                  );
                })}
              </Picker>
            </View>
          </View>
          <Text style={Styles.Heading}>Mileage</Text>
          <View style={Styles.line}>
            <View style={Styles.dropContainer}>
              <Picker
                selectedValue={getValues().nKiloMeterFrom}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nKiloMeterFrom'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nKiloMeterFrom', itemValue, true)
                }>
                <Picker.Item label="KiloMeters From" value="No minium" />
                {Mile.map((v, k) => {
                  return (
                    <Picker.Item label={v.MileAges.toString()} value={v.ID} />
                  );
                })}
              </Picker>
            </View>
            <Text style={Styles.Text}>To</Text>
            <View style={Styles.dropContainer}>
              <Picker
                selectedValue={getValues().nKiloMeterTo}
                style={{width: '100%', height: 30, color: '#c7c7c7'}}
                ref={register({name: 'nKiloMeterTo'}, {required: true})}
                onValueChange={(itemValue, itemIndex) =>
                  setValue('nKiloMeterTo', itemValue, true)
                }>
                <Picker.Item label="Kilemeter to" value="" />
                {Mile.map((v, k) => {
                  return (
                    <Picker.Item label={v.MileAges.toString()} value={v.ID} />
                  );
                })}
              </Picker>
            </View>
          </View>
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
                <Picker.Item label="Year From" value="No minium" />
                {Years.map((v, k) => {
                  return <Picker.Item label={v.Year.toString()} value={v.ID} />;
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
                <Picker.Item label="Year To" value="" />
                {Years.map((v, k) => {
                  return <Picker.Item label={v.Year.toString()} value={v.ID} />;
                })}
              </Picker>
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
    width: '90%',
  },
});
