import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../../../firebase';
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
import PasswordStrengthList from './components/PasswordStrengthList';

const LoginContent = ({ isRegister }: { isRegister: boolean }) => {
  const navigate = useNavigate();
  const textFieldClasses = TextFieldUseStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!emailRegex.test(email);
  };

  const isPasswordValid = () => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[%?$*&@#!_.,+\-=]).{8,}$/;
    return !!passwordRegex.test(password);
  };

  const handleAuth = async () => {
    setLoadingAuth(true);

    let hasError = false;

    if (isRegister) {
      if (!isEmailValid()) {
        setEmailError('Email inválido');
        hasError = true;
      }

      if (!isPasswordValid()) {
        setPasswordError('Senha inválida');
        hasError = true;
      }
    } else {
      if (!isEmailValid()) {
        setEmailError('Email inválido');
        hasError = true;
      }
    }

    if (hasError) {
      setLoadingAuth(false);
      return;
    }

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Cadastro realizado com sucesso', {
          style: { background: '#00ff446d', color: '#FFFFFF' },
        });
        navigate('/login');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login realizado com sucesso', {
          style: { background: '#00ff446d', color: '#FFFFFF' },
        });
        navigate('/home');
      }
    } catch (error) {
      toast.error('Conta inválida', {
        style: { background: '#ff00006e', color: '#FFFFFF' },
      });
    }
    setLoadingAuth(false);
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
              error={emailError !== ''}
              helperText={emailError}
              FormHelperTextProps={{
                style: { color: '#ad0000', fontWeight: 'bold' },
              }}
              onBlur={() => {
                if (!!isEmailValid()) {
                  setEmailError('');
                }
              }}
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
              error={emailError !== ''}
              helperText={emailError}
              FormHelperTextProps={{
                style: { color: '#ad0000', fontWeight: 'bold' },
              }}
              onBlur={() => {
                if (!!isEmailValid()) {
                  setEmailError('');
                }
              }}
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
              error={passwordError !== ''}
              helperText={passwordError}
              FormHelperTextProps={{
                style: { color: '#ad0000', fontWeight: 'bold' },
              }}
              onBlur={() => {
                if (!!isPasswordValid()) {
                  setPasswordError('');
                }
              }}
            />
            <div>
              <PasswordStrengthList password={password} />
            </div>
          </FieldsDiv>
        )}

        <SubmitButton
          type='button'
          onClick={handleAuth}
          isLoading={loadingAuth}
          disabled={loadingAuth}
        >
          {loadingAuth ? (
            <CircularProgress color='inherit' size={30} />
          ) : isRegister ? (
            'Register'
          ) : (
            'Login'
          )}
        </SubmitButton>
        <SignupDiv>
          <button
            onClick={() => {
              isRegister ? navigate('/login') : navigate('/signup');
            }}
          >
            {isRegister
              ? 'Já possui uma conta? Ir para o login'
              : 'Não possui conta? Realizar cadastro'}
          </button>
        </SignupDiv>
      </FormDiv>
    </LoginWrapper>
  );
};

export default LoginContent;
