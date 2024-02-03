import React, { useState } from 'react';
import './LoginPage.css';

// LoginPage.js
function LoginPage({ setUser }) {
  const login = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    setUser(username); 
  };

  return (
    <form onSubmit={login}>
      <input name="username" placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;