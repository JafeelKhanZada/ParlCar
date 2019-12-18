import React, {Component} from 'react';
import Appcontainer from './navigation/Appcontainer';
import Login from './Components/Login';
import Loader from './Components/Loader';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';
import * as Action from './redux/actions';
class App extends Component {
  componentDidMount() {
    AsyncStorage.getItem('TOKEN').then(response => {
      console.log('TOKEN', response);
      if (response !== null || response !== undefined) {
        AsyncStorage.getItem('UserData').then(data => {
          let user = JSON.parse(data);
          this.props.checkToken(user, response);
        });
      }
      SplashScreen.hide();
    });
  }
  render() {
    return (
      <React.Fragment>
        <Appcontainer />
        <Login />
        <Loader />
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
    checkToken: (user, token) => {
      dispatch(Action.checkTOKEN(user));
      dispatch(Action.setToken(token));
      dispatch(Action.setType(user.Type));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
