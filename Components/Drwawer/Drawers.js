import React, {useEffect, useState} from 'react';
import Profile from './ProfileDrawer';
import Dashboard from './DashboardDrawer';
import {useDispatch, useSelector} from 'react-redux';
import Login from '../Login';
import {withNavigation} from 'react-navigation';
function Drawers() {
  const [type, setType] = useState('');
  const Type = useSelector(state => state.Auth.Type);
  useEffect(() => {
    setType(Type);
  }, [Type]);
  return (
    <React.Fragment>
      <Login id={null} />
      {type === 'Showroom' ? <Dashboard /> : <Profile />}
    </React.Fragment>
  );
}
Drawers.navigationOptions = {
  drawerLabel: () => null,
};
export default withNavigation(Drawers);
