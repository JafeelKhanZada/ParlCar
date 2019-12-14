import React, { useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Favouritepost from '../../Components/Favourite/Favouritepost';
import { useDispatch } from "react-redux"
import { withNavigation } from "react-navigation"
import * as Action from "../../redux/actions"
function Fav(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getfav());
  }, [props.navigation.state.key]);
  return (
    <View>
      <View
        style={{
          padding: 5,
          borderTopWidth: 1,
          borderTopColor: 'lightgrey',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, padding: 5 }}>
          Favoritos
          </Text>
      </View>
      <Favouritepost />
    </View>
  );
}

export default withNavigation(Fav);