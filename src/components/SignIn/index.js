import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from 'components/SignUp';
import { PasswordForgetLink } from 'components/PasswordForget';
import { withFirebase } from 'components/Firebase';
import * as ROUTES from 'constants/routes';

const SignInPage = () => (
  <div className="container-scroller">
  <div className="page-body-wrapper full-page-wrapper auth-page">
    <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
    <div className="row w-100">
          <div className="col-lg-4 mx-auto">
            <div className="auto-form-wrapper">
    <SignInForm />
    {/* <PasswordForgetLink />
    <SignUpLink /> */}
    </div>
    </div>
    </div>
    </div>
    </div>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
       <div class="form-group">
          <label class="label">Username</label>
          <div class="input-group">
            <input 
            type="text" 
            name="email"
            value={email}
            className="form-control"
              placeholder="Username"
              onChange={this.onChange}
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="mdi mdi-check-circle-outline"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="form-group">
                  <label class="label">Password</label>
                  <div class="input-group">
                    <input name="password" type="password" className="form-control" value={password} placeholder="*********"  onChange={this.onChange}/>
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button className="btn btn-primary submit-btn btn-block" disabled={isInvalid} type="submit">Login</button>
                </div>
    
        {error && <p>{error.message}</p>}
      </form>
      
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };