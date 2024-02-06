import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../firebase';
import {
  FieldsDiv,
  FormDiv,
  Header,
  LoginWrapper,
  SignupDiv,
  SubmitButton,
  TextFieldUseStyles,
} from './styles';
import { TextField } from '@mui/material';

const Login: React.FC = () => {
  const textFieldClasses = TextFieldUseStyles();
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
    <LoginWrapper>
      <FormDiv>
        <Header>
          <div>
            <img src='/images/chatIcon.png' alt='chat logo' width={60} />
          </div>
          <h1>LOG IN</h1>
        </Header>

        <FieldsDiv>
          <TextField
            label='Email'
            variant='standard'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ style: { color: 'white' } }}
            className={textFieldClasses.root}
            fullWidth
          />
          <TextField
            label='Password'
            variant='standard'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ style: { color: 'white' } }}
            className={textFieldClasses.root}
            fullWidth
          />
        </FieldsDiv>
        <SubmitButton type='button' onClick={handleLogin}>
          Login
        </SubmitButton>
        <SignupDiv>
          <button>Não possui conta? Realizar cadastro</button>
        </SignupDiv>
      </FormDiv>
    </LoginWrapper>
  );
};

export default Login;
