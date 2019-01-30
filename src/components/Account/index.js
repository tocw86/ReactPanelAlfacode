import React from 'react';

import { PasswordForgetForm } from 'components/PasswordForget';
import PasswordChangeForm from 'components/PasswordChange';

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

export default AccountPage;
