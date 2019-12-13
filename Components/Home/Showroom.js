import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Modal from './Model';
import {withNavigation} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import * as Action from '../../redux/actions';
function Showroom(props) {
  const dispatch = useDispatch();
  const [modalVisible, visiblemodel] = useState(false);
  const [showroom, setShowroom] = useState([]);
  const showrooms = useSelector(state => state.Showroom.TotalShowRoom);
  useEffect(() => {
    if (showrooms) {
      setShowroom(showrooms);
    }
  }, [showrooms]);
  useEffect(() => {
    dispatch(Action.getShowroom());
  }, [props.navigation.state.key]);
  return (
    <View>
      <View style={{...style.Showroom, padding: 10, alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: '#333',
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Showroom
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: '#d81f25',
            fontSize: 12,
          }}>
          View All
        </Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20}}>
        <View style={style.Names}>
          {showroom &&
            showroom.map((v, k) => {
              return (
                <TouchableOpacity
                  style={style.Image}
                  onPress={() => {
                    dispatch(Action.setActiveShowroom([v]));
                    visiblemodel(true);
                  }}
                  key={k}>
                  <Image
                    style={{height: '100%', borderWidth: 1, width: '100%'}}
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={require('../../assests/images/showroom.png')}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
      <Modal modalVisible={modalVisible} setModalVisible={visiblemodel} />
    </View>
  );
}
export default withNavigation(Showroom);
const style = StyleSheet.create({
  Showroom: {
    paddingTop: 12,
    backgroundColor: '#f4f4f4',
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Names: {
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Image: {
    padding: 5,
    height: 55,
    width: '25%',
  },
});
