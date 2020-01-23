import React, {Component} from 'react';
import Appcontainer from './navigation/Appcontainer';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';
import * as Action from './redux/actions';
class App extends Component {
  componentDidMount() {
    AsyncStorage.getItem('History').then(res => {
      if (res !== null) {
        this.props.history(JSON.parse(res));
      }
    });
    AsyncStorage.getItem('TOKEN').then(response => {
      if (response !== null || response !== undefined) {
        AsyncStorage.getItem('UserData').then(data => {
          let user = JSON.parse(data);
          this.props.checkToken(user, response);
        });
      }
      if (response === null) {
        this.props.elseDispatch();
      }
      SplashScreen.hide();
    });
  }
  render() {
    return (
      <React.Fragment>
        <Appcontainer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkToken: async (user, token) => {
      Promise.all([
        dispatch(Action.checkTOKEN(user)),
        dispatch(Action.setToken(token)),
        dispatch(Action.setType(user.Type)),
        dispatch(Action.getNotification(user.ID)),
      ]).then(async () => {
        // await dispatch(Action.getAds({UID: user.ID}));
      });
    },
    elseDispatch: () => {
      dispatch(Action.getAds({}));
    },
    history: v => {
      dispatch(Action.setHistoryAd(v));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
