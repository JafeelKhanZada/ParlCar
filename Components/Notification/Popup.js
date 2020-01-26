import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
function Popup(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [name, setName] = useState(null);
  const [model, setModel] = useState(null);
  const [logo, setLogo] = useState(null);
  const [number, setNumber] = useState(null);
  const [price, setPrice] = useState(null);
  const [mil, setMil] = useState(null);
  const [make, setMake] = useState(null);
  const [ad, setAd] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, [props]);
  useEffect(() => {
    if (data !== undefined && data !== null) {
      if (data.length > 0) {
        if (data[0].AdsData !== undefined && data[0].AdsData !== null) {
          if (data[0].AdsData.length > 0) {
            setAd(data[0].AdsData);
            let img = data[0].AdsData[0].ImagesForSlider.split(',');
            setLogo(img[0] !== undefined && img[0] !== null ? img[0] : '');
            setModel(data[0].AdsData[0].Model);
            setPrice(data[0].AdsData[0].Price);
            setMil(data[0].AdsData[0].KiloMeters);
            setMake(data[0].AdsData[0].BrandName);
          }
        }
        if (data[0].SenderData !== undefined && data[0].SenderData !== null) {
          if (data[0].SenderData.length > 0) {
            setNumber(data[0].SenderData[0].ShowroomTelephone);
            setName(data[0].SenderData[0].UserName);
          }
        }
      }
    }
  }, [data]);
  const closing = () => {
    props.setVisible(false);
    setData([]);
    setName('');
    setModel('');
    setLogo(null);
    setNumber('');
    setPrice('');
    setMil('');
    setMake('');
  };
  return (
    <React.Fragment>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => closing()}>
        <View style={Style.Container}>
          <View style={Style.fluid}>
            <TouchableOpacity
              style={{alignItems: 'flex-end', width: '100%', padding: 10}}
              onPress={() => {
                props.setVisible(false);
                closing();
              }}>
              <Icon name="close" size={20} />
            </TouchableOpacity>
            <View style={Style.ImgContainer}>
              {logo === null ? (
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={require('../../assests/dp.jpg')}
                  resizeMode="cover"
                  resizeMethod="resize"
                />
              ) : (
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={{
                    uri: `http://207.180.230.73/palcar${logo}`,
                  }}
                  resizeMode="cover"
                  resizeMethod="resize"
                />
              )}
              <Text style={Style.text}>{model}</Text>
            </View>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  ad.length > 0
                    ? Promise.all([
                        dispatch(
                          Action.selectAd(ad),
                          closing(),
                          props.navigation.navigate('Details', {
                            onGoBack: () => {},
                            back: 'Notification',
                          }),
                        ),
                      ])
                    : '';
                }}
                style={{
                  width: 80,
                  alignItems: 'center',
                  backgroundColor: '#d81f25',
                  padding: 5,
                  marginRight: 20,
                  marginBottom: 10,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', fontFamily: 'Poppins'}}>
                  View Add
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{...Style.textContainer}}>
              <Text style={Style.HText}>Name : </Text>
              <Text style={{...Style.HText, marginLeft: 20}}>{name}</Text>
            </View>
            <View style={{...Style.textContainer, marginTop: 10}}>
              <Text style={Style.HText}>Mobile Number : </Text>
              <Text style={{...Style.HText, marginLeft: 20}}>{number}</Text>
            </View>
            <View style={{...Style.textContainer, marginTop: 10}}>
              <Text style={Style.HText}>Make : </Text>
              <Text style={{...Style.HText, marginLeft: 20}}>{make}</Text>
            </View>
            <View style={{...Style.textContainer, marginTop: 10}}>
              <Text style={Style.HText}>Price : </Text>
              <Text style={{...Style.HText, marginLeft: 20}}>{price}</Text>
            </View>
            <View style={{...Style.textContainer, marginTop: 10}}>
              <Text style={Style.HText}>Mileage : </Text>
              <Text style={{...Style.HText, marginLeft: 20}}>
                {mil} Kilometers
              </Text>
            </View>
            <TouchableOpacity
              style={Style.btn}
              onPress={() => {
                Linking.openURL(`tel:${number}`);
              }}>
              <Text style={Style.btnText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
}
export default withNavigation(Popup);
const Style = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fluid: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  ImgContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
    letterSpacing: 1,
    fontSize: 16,
  },
  textContainer: {
    backgroundColor: '#333',
    width: '100%',
    padding: 5,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  HText: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 12,
  },
  btn: {
    backgroundColor: '#d81f25',
    padding: 5,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontFamily: 'Poppins',
    color: 'white',
  },
});
