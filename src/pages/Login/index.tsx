import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login bem-sucedido!');
    } catch (error: any) {
      console.error('Erro durante o login:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='button' onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
