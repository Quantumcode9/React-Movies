import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ setUser: setAppUser }) {
  const [username, setUsername] = useState('');

  const loginUser = () => {
    localStorage.setItem('user', username);
    setAppUser(username);
  };

  const login = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
    <form className='form' onSubmit={login}>
      <input
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );

}