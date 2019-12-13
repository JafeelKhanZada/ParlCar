import React, {Component} from 'react';
import Appcontainer from './navigation/Appcontainer';
import Login from './Components/Login';
import Loader from './Components/Loader';
export default class App extends Component {
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
