import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';
import RegisterModal from './RegisterModal';
import Callmodel from './Callmodel';
import {Footer} from 'native-base';
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector} from 'react-redux';
import moment from 'moment';
function CarDetails() {
  const AdDetail = useSelector(state => state.Ads.SelectedAd);
  const [Detail, setDetail] = useState([]);
  const [modalVisible, setModel] = useState(false);
  const [modalVisible1, setModel1] = useState(false);
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ];
  useEffect(() => {
    if (AdDetail) {
      setDetail(AdDetail);
    }
  }, [AdDetail]);
  const visiblemodel = visible => {
    setModel(visible);
  };
  const visiblemodel1 = visible => {
    setModel1(visible);
  };
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%'}}>
        <SliderBox
          images={images}
          dotColor="red"
          inactiveDotColor="white"
          dotStyle={styles.dot}
        />
        <View style={styles.header}>
          <View style={styles.innerHeader}></View>
          <Text style={{fontSize: 15, color: 'white', paddingLeft: 10}}>
            Export lady owned Volvo XC60
          </Text>
          <TouchableOpacity>
            <View style={styles.Icon}>
              <Icon name="heart" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '100%', flex: 1}}>
        <ScrollView>
          {Detail &&
            Detail.map((v, k) => {
              return (
                <React.Fragment key={k}>
                  <View style={styles.grid}>
                    <Text style={styles.text}>City</Text>
                    <Text style={styles.text2}>{v.CityName}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Source</Text>
                    <Text style={styles.text2}>{v.Source}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Price</Text>
                    <Text style={{...styles.text2, color: '#d81f25'}}>
                      {v.Price}
                    </Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Car Brand</Text>
                    <Text style={styles.text2}>{v.BrandName}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Model</Text>
                    <Text style={styles.text2}>{v.Model}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Year</Text>
                    <Text style={styles.text2}>
                      {moment(v.Year).format('MM-DD-YYYY')}
                    </Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Kilometers</Text>
                    <Text style={styles.text2}>{v.KiloMeters}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Car Origin</Text>
                    <Text style={styles.text2}>{v.CarOrigin}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Warranty</Text>
                    <Text style={styles.text2}>
                      {v.Warranty === true ? 'Yes' : 'No'}
                    </Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Color</Text>
                    <Text style={styles.text2}>{v.Color}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Doors</Text>
                    <Text style={styles.text2}>{v.Doors}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Transmission</Text>
                    <Text style={styles.text2}>{v.Transmission}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Body Type</Text>
                    <Text style={styles.text2}>{v.BodyType}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Fuel Type</Text>
                    <Text style={styles.text2}>{v.FuelType}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Engine Size</Text>
                    <Text style={styles.text2}>{v.EngineSize}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.text}>Notes</Text>
                    <Text style={styles.text2}>{v.Notes}</Text>
                  </View>
                </React.Fragment>
              );
            })}
        </ScrollView>
      </View>
      <Footer style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            style={{width: '50%'}}
            onPress={() => visiblemodel1(true)}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#d81f25',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcon name="phone" size={15} color="white" />
              <Text style={{color: 'white'}}>call</Text>
            </View>
          </TouchableOpacity>
          <View style={{width: '1%'}}></View>
          <TouchableOpacity
            style={{width: '50%'}}
            onPress={() => visiblemodel(true)}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#d81f25',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcon name="drive-eta" size={15} color="white" />
              <Text style={{color: 'white'}}>Test Drive</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Footer>
      <Callmodel
        modalVisible={modalVisible1}
        setModalVisible={visiblemodel1}
        data={AdDetail}
      />
      <RegisterModal
        modalVisible={modalVisible}
        setModalVisible={visiblemodel}
      />
    </View>
  );
}
CarDetails.navigationOptions = {
  // headerTitle instead of title
  headerTitle: () => <Header />,
};
export default CarDetails;
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    padding: 0,
    marginBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 160,
    width: '100%',
  },
  innerHeader: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
    alignItems: 'center',
  },
  Icon: {
    marginRight: 8,
    position: 'relative',
    top: -20,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    width: '30%',
    color: 'grey',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
  text2: {
    width: '60%',
    fontFamily: 'Poppins',
    color: '#333',
    letterSpacing: 1,
    fontSize: 12,
  },
});
