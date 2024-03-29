import React, { useState } from 'react';
import api from '../api/posts.js';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  function handleRegistration(event) {
    event.preventDefault();
    // Validate form fields
    if (!username || !email || !password || !firstName || !lastName) {
      setError('Please enter all required fields');
      return;
    }
    // Send a request to the server to register
    api.post('/auth/register', {
        email: email,
        username:username,
        firstName: firstName,
        lastName:lastName,
        password:password
    })
      .then(data => {
        // Redirect the user to the login page
        window.location.href = '/zadania';
      })
      .catch(error => {
        setError(error.message);
      });
  }

  return (
    <form style={{width:'32vh'}}onSubmit={handleRegistration}>
      {error && <p className="error">{error}</p>}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default RegistrationForm;
