import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage(props) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLoginUsernameChange = (e) => {
    setLoginUsername(e.target.value);
  }

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  }

  const handleSignupUsernameChange = (e) => {
    setSignupUsername(e.target.value);
  }

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  }

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Add 
  }

  return (
    <div className="loginPage">
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={handleLoginUsernameChange}
        />
        <input 
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={handleLoginPasswordChange}
        />
        <button type="submit">Log In</button>
      </form>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input 
          type="text"
          placeholder="Username"
          value={signupUsername}
          onChange={handleSignupUsernameChange}
        />
        <input 
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={handleSignupPasswordChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}