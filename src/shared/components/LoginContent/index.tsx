import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../../firebase';
import {
  FieldsDiv,
  FormDiv,
  Header,
  LoginWrapper,
  SignupDiv,
  SubmitButton,
  TextFieldUseStyles,
} from './styles';
import { CircularProgress, TextField } from '@mui/material';
import { toast } from 'react-toastify';

const LoginContent = ({ isRegister }: { isRegister: boolean }) => {
  const navigate = useNavigate();
  const textFieldClasses = TextFieldUseStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = async () => {
    setLoadingLogin(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login realizado com sucesso', {
        style: { background: '#00ff446d', color: '#FFFFFF' },
      });
      navigate('/home');
    } catch (error) {
      toast.error('Conta inválida', {
        style: { background: '#ff00006e', color: '#FFFFFF' },
      });
    }
    setLoadingLogin(false);
  };

  return (
    <LoginWrapper>
      <FormDiv>
        <Header>
          <div>
            <img src='/images/chatIcon.png' alt='chat logo' width={60} />
          </div>
          <h1>{!isRegister ? 'LOG IN' : 'REGISTER'} </h1>
        </Header>

        {!isRegister ? (
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
        ) : (
          <p>cadastro</p>
        )}

        <SubmitButton
          type='button'
          onClick={handleLogin}
          isLoading={loadingLogin}
          disabled={loadingLogin}
        >
          {loadingLogin ? (
            <CircularProgress color='inherit' size={30} />
          ) : (
            'Login'
          )}
        </SubmitButton>
        <SignupDiv>
          <button
            onClick={() => {
              navigate('/signup');
            }}
          >
            Não possui conta? Realizar cadastro
          </button>
        </SignupDiv>
      </FormDiv>
    </LoginWrapper>
  );
};

export default LoginContent;
