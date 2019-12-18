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
import {useDispatch, useSelector} from 'react-redux';
import * as Action from '../../redux/actions';
import {withNavigation} from 'react-navigation';
function Showroom(props) {
  const dispatch = useDispatch();
  const Brands = useSelector(state => state.Mis.Brands);
  const [renderBrands, setBrands] = useState([]);
  useEffect(() => {
    dispatch(Action.getBrands());
  }, [props.navigation.state.key]);
  useEffect(() => {
    setBrands(Brands);
  }, [Brands]);
  const [modalVisible, visiblemodel] = useState(false);
  return (
    <View>
      <View style={style.Showroom}>
        <Text style={{fontFamily: 'Poppins-Medium'}}>Brand</Text>
        <Text style={{color: '#d81f25'}}>View All</Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20}}>
        <View style={style.Names}>
          {renderBrands &&
            renderBrands.map((v, k) => {
              return (
                <TouchableOpacity style={style.Image} key={k}>
                  <Image
                    style={{height: '100%', borderWidth: 1, width: '100%'}}
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={{
                      uri: `data:image/jpeg;base64,${v.Image}`,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </View>
  );
}
Showroom.navigationOptiosn = {
  tabBarVisible: true,
};
export default withNavigation(Showroom);
const style = StyleSheet.create({
  Showroom: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  Names: {
    marginTop: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Image: {
    height: 50,
    width: 70,
    margin: 5,
  },
});
