import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import * as Action from '../../redux/actions';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import {Circle, Rect} from 'react-native-svg';
function Slider(props) {
  const dispatch = useDispatch();
  const category = useSelector(state => state.Mis.Categories);
  useEffect(() => {
    dispatch(Action.getCategories());
  }, []);
  const [categories, setCategories] = useState([]);
  let index = 0;
  useEffect(() => {
    let Arr = [];
    let index = 0;
    let NewArray = [];
    for (let i = 0; i < category.length; i++) {
      index++;
      if (index < 5) {
        NewArray.push(category[i]);
      }
      if (index === 4) {
        Arr.push(NewArray);
        index = 0;
        NewArray = [];
      }
      if (i === category.length + 1 - (category.length % 4)) {
        Arr.push(NewArray);
        index = 0;
        NewArray = [];
      }
    }
    setCategories(Arr);
  }, [category]);
  return (
    <View style={styles.container}>
      {categories.length === 0 ? (
        <SvgAnimatedLinearGradient
          primaryColor="#f4f4f4"
          secondaryColor="#E3E3E3"
          width={'100%'}>
          <Rect x="3%" y="20" width="21%" height="30" />
          <Rect x="6%" y="60" width="15%" height="15" />
          <Rect x="27%" y="20" width="21%" height="30" />
          <Rect x="30%" y="60" width="15%" height="15" />
          <Rect x="51%" y="20" width="21%" height="30" />
          <Rect x="54%" y="60" width="15%" height="15" />
          <Rect x="75%" y="20" width="21%" height="30" />
          <Rect x="78%" y="60" width="15%" height="15" />
          <Circle cx="46%" cy="87.5" r="5" />
          <Circle cx="50%" cy="87.5" r="5" />
          <Circle cx="54%" cy="87.5" r="5" />
        </SvgAnimatedLinearGradient>
      ) : (
        <SwiperFlatList
          autoplay={false}
          autoplayDelay={2}
          autoplayLoop={false}
          index={0}
          showPagination
          paginationActiveColor="#d81f25"
          paginationStyleItem={{width: 8, height: 8, marginLeft: -5}}>
          {categories &&
            categories.map((v, k) => {
              return (
                <View style={[styles.child]} key={k}>
                  <View style={styles.slide}>
                    {v.map((val, key) => {
                      return (
                        <TouchableOpacity
                          style={styles.Slidepost}
                          key={key}
                          onPress={() => {
                            dispatch(Action.getAds({Category: val.ID}));
                            props.navigation.navigate('YourSerach');
                          }}>
                          <Image
                            style={styles.img}
                            resizeMode="stretch"
                            source={{
                              uri: `data:image/jpeg;base64,${val.Icon}`,
                            }}
                          />
                          <Text style={styles.text}>{val.Title}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            })}
        </SwiperFlatList>
      )}
    </View>
  );
}
export const {width, height} = Dimensions.get('window');
export default withNavigation(Slider);
const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  child: {
    paddingTop: 10,
    width,
    paddingBottom: 15,
  },
  slide: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  Slidepost: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 11,
    color: '#c7c7c7',
    marginTop: 10,
  },
  img: {
    width: 60,
    height: 25,
  },
});
