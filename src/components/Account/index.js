import React from 'react';

import { AuthUserContext } from 'components/Session';
import { PasswordForgetForm } from 'components/PasswordForget';
import PasswordChangeForm from 'components/PasswordChange';
import { withAuthorization } from 'components/Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
