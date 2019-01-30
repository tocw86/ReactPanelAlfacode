import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from 'components/SignOut';
import * as ROUTES from 'constants/routes';

const Navigation = ({ authUser }) => (
  <div>
    {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <div></div>
);

export default Navigation;