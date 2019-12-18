import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as Action from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from 'react-native';
import Header from '../Home/Header';
function AddNewAdds(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getCity());
  }, [props.navigation.state.key]);
  const city = useSelector(state => state.Mis.City);
  const [nCity, setSelectedCity] = useState('');
  return (
    <React.Fragment>
      <Header />
      <ScrollView style={{backgroundColor: '#F4F4F4'}}>
        <React.Fragment>
          <View style={styles.heading}>
            <Text style={styles.Htext}>Add New</Text>
          </View>
          <View style={styles.Container}>
            <View style={styles.InnerPlus}>
              <TouchableOpacity>
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
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.plus}>
                  <Text style={{color: 'grey'}}>More</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.textInp}>
                <Picker
                  textStyle={{backgroundColor: 'orange'}}
                  selectedValue={nCity}
                  style={{
                    width: '100%',
                    height: 25,
                    color: '#CFCFCF',
                    fontFamily: 'Poppins',
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedCity(itemValue)
                  }>
                  <Picker.Item label="--City" value="" disabled />
                  {city &&
                    city.map((v, k) => {
                      return <Picker.Item label={v.CityName} value={v.ID} />;
                    })}
                </Picker>
              </View>
              <TextInput style={styles.textInp} placeholder="Showroom Name" />
              <TextInput style={styles.textInp} placeholder="Car Brand" />
              <TextInput style={styles.textInp} placeholder="Model" />
              <TextInput style={styles.textInp} placeholder="Price" />
              <TextInput style={styles.textInp} placeholder="Car Origin" />
              <TextInput style={styles.textInp} placeholder="Year" />
              <TextInput style={styles.textInp} placeholder="Kilometers" />
              <TextInput style={styles.textInp} placeholder="Warranty" />
              <TextInput style={styles.textInp} placeholder="Color" />
              <TextInput style={styles.textInp} placeholder="Transmission" />
              <TextInput style={styles.textInp} placeholder="Body Type" />
              <TextInput style={styles.textInp} placeholder="Fuel Type" />
              <TextInput style={styles.textInp} placeholder="Engine Size" />
              <TextInput style={styles.textInp} placeholder="Notes" />
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
                  }}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </React.Fragment>
      </ScrollView>
    </React.Fragment>
  );
}

export default AddNewAdds;
const styles = StyleSheet.create({
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
  },
  plus: {
    width: 70,
    height: 70,
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
