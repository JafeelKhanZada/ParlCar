import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import NotificationPost from '../../Components/Notification/Notification';
import * as Action from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
function Notification() {
  const dispatch = useDispatch();
  const ID = useSelector(state => state.Auth.ID);
  const [refresh, setRefrest] = useState(false);
  const handleRefrest = () => {
    setRefrest(true);
    Promise.all([dispatch(Action.getNotification(ID))]).then(() => {
      setRefrest(false);
    });
  };
  return (
    <ScrollView
      style={{height: '100%', backgroundColor: '#F4F4F4'}}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={handleRefrest} />
      }>
      <View>
        <NotificationPost />
      </View>
    </ScrollView>
  );
}
export default Notification;
