import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';
import RegisterModal from './RegisterModal';
import Callmodel from './Callmodel';
import {Footer} from 'native-base';
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
import Login from '../Login';
function CarDetails(props) {
  const AdDetail = useSelector(state => state.Ads.SelectedAd);
  const [Detail, setDetail] = useState([]);
  const [modalVisible, setModel] = useState(false);
  const [modalVisible1, setModel1] = useState(false);
  const auth = useSelector(state => state.Auth.auth);
  const [images, setImages] = useState(['']);
  const dispatch = useDispatch();
  const datas = useSelector(state => state.Filter);
  const ID = useSelector(state => state.Auth.ID);
  const [IID, setIID] = useState(null);
  const [UID, setUID] = useState(null);
  useEffect(() => {
    if (AdDetail) {
      setDetail(AdDetail);
      if (AdDetail[0]) {
        setIID(AdDetail[0].ID);
        if (AdDetail[0].ImagesForSlider !== '') {
          let arr = AdDetail[0].ImagesForSlider.split(',');
          const newarr = converstation(arr);
          setImages(newarr);
        }
        if (
          AdDetail[0].UserData !== null &&
          AdDetail[0].UserData !== undefined &&
          AdDetail[0].UserData.length > 0
        ) {
          setUID(AdDetail[0].UserData[0].ID);
        }
      }
    }
  }, [AdDetail]);
  useEffect(() => {
    if (auth === true) {
      props.navigation.state.params.onGoBack();
    }
  }, [props.navigation]);
  const converstation = array => {
    let Arr = [];
    for (let i = 0; i < array.length - 1; i++) {
      Arr.push(`http://207.180.230.73/palcar/${array[i]}`);
    }
    return Arr;
  };
  const visiblemodel = visible => {
    setModel(visible);
  };
  const visiblemodel1 = visible => {
    setModel1(visible);
  };
  return (
    <React.Fragment>
      <Login id={IID} />
      <Header back={props.navigation.state.params} />
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
            <Text
              style={{
                fontSize: 13,
                color: 'white',
                paddingLeft: 10,
                paddingTop: 3,
                fontFamily: 'Poppins',
              }}>
              {Detail && Detail.map((v, k) => v.BrandName)}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (auth === true) {
                  Detail.map((v, k) => v.IsFavourite)[0] === false
                    ? dispatch(Action.addFavourite(Detail[0].ID, ID, datas))
                    : Detail[0].FavouriteAdsID !== undefined
                    ? Promise.all([
                        dispatch(
                          Action.removeFavourite(
                            Detail[0].FavouriteAdsID !== null
                              ? Detail[0].FavouriteAdsID
                              : '',
                            ID,
                            Detail[0].ID,
                            datas,
                          ),
                        ),
                      ])
                    : Promise.all([
                        dispatch(
                          Action.removeFavourite(
                            Detail[0].FavID !== null ? Detail[0].FavID : '',
                            ID,
                            Detail[0].ID,
                            {},
                          ),
                        ),
                      ]);
                } else {
                  dispatch(Action.Toggle_PopUp(true));
                }
              }}>
              <View style={styles.Icon}>
                <Icon
                  name="heart"
                  color={
                    Detail.map((v, k) => v.IsFavourite)[0] === false
                      ? 'grey'
                      : '#d81f25'
                  }
                  size={20}
                />
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
                      <Text style={styles.text2}>{v.Year}</Text>
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
                <Image
                  source={require('../../assests/NewAssets/Call.png')}
                  resizeMode="contain"
                  style={{width: 15, height: 15}}
                />
                <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                  CALL
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{width: '1%'}}></View>
            <TouchableOpacity
              style={{width: '50%'}}
              onPress={async () => {
                if (auth === true) {
                  dispatch(Action.toggleReg(true));
                } else {
                  await setIID('R');
                  dispatch(Action.Toggle_PopUp(true));
                }
              }}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#d81f25',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assests/NewAssets/drive.png')}
                  resizeMode="contain"
                  style={{width: 15, height: 15}}
                />
                <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                  Drive
                </Text>
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
          rec={UID}
        />
      </View>
    </React.Fragment>
  );
}
CarDetails.navigationOptions = {
  // headerTitle instead of title
  headerTitle: () => null,
  header: () => null,
};
export default withNavigation(CarDetails);
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    padding: 0,
    marginBottom: 20,
    margin: -10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 174,
    width: '100%',
  },
  innerHeader: {
    height: '65%',
    position: 'absolute',
    // top:10,
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
    borderBottomWidth: 0.2,
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
