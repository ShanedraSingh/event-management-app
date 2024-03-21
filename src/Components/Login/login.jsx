import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data); // handle successful login
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login_container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn_login'>Login</button>
      </form>
    </div>
  );
};

export default Login;
