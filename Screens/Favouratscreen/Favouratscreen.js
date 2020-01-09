import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Favouritepost from '../../Components/Favourite/Favouritepost';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Header from '../../Components/Home/Header';
import * as Action from '../../redux/actions';
import Loader from '../../Components/Loader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
function Fav(props) {
  const ID = useSelector(state => state.Auth.ID);
  const Auth = useSelector(state => state.Auth.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getfav({nUserID: ID}));
  }, []);
  const [refresh, setRefresh] = useState(false);
  const refreshing = () => {
    setRefresh(true);
    dispatch(Action.getfav({nUserID: ID}));
    setRefresh(false);
  };
  return (
    <React.Fragment>
      <Header />
      {Auth === true ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={refreshing} />
          }
          style={{height: hp('100%'), backgroundColor: '#f4f4f4'}}>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: 'lightgrey',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              backgroundColor: 'white',
            }}>
            <Text
              style={{fontSize: 20, padding: 12, fontFamily: 'Poppins-Medium'}}>
              Favourites
            </Text>
            <Favouritepost />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.elseContainer}>
          <Text style={styles.elseText}>Login Please To Add Favourite</Text>
          <TouchableOpacity
            style={styles.elseBtnContainer}
            onPress={() => dispatch(Action.Toggle_PopUp(true))}>
            <Text style={styles.elseBtnContainerText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
      <Loader />
    </React.Fragment>
  );
}

export default withNavigation(Fav);
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
