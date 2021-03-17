import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [mat_no, setMat_no] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const usernameHandlerChange = (event) => {
    setUsername(event.target.value);
  };

  const mat_noHandlerChange = (event) => {
    setMat_no(event.target.value);
  };

  const passwordHandlerChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandlerChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  //   onSubmitSignIn = () => {
  //     fetch('https://calm-tundra-76384.herokuapp.com/SignIn', {
  //       method: 'post',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         email: this.state.signInEmail,
  //         password: this.state.signInPassword,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((user) => {
  //         if (user.id) {
  //           this.props.loadUser(user);
  //           this.props.onRouteChange('home');
  //         }
  //       });
  //   };
  return (
    <div className="signInContainer">
      <h2>Register</h2>
      <div className="credentials">
        <label htmlFor="email-address">Username</label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          onChange={usernameHandlerChange}
        />
      </div>
      <div className="credentials">
        <label htmlFor="email-address">Matriculation Number</label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          onChange={mat_noHandlerChange}
        />
      </div>
      <div className="credentials">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={passwordHandlerChange}
        />
      </div>
      <div className="credentials">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={confirmPasswordHandlerChange}
        />
      </div>
      <button>Register</button>
      <div className="register">
        <p
          href="#0"
          className="f6 link dim black db pointer"
          onClick={(event) => {
            event.preventDefault();
            history.push('/');
          }}
        >
          Sign In?
        </p>
      </div>
    </div>
  );
};

export default Register;
