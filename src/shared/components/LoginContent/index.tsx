import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from '../../../firebase';
import {
  FieldsDiv,
  FormDiv,
  Header,
  LoginWrapper,
  PasswordIconButton,
  SignupDiv,
  SubmitButton,
  TextFieldUseStyles,
} from './styles';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa';
import { CircularProgress, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import PasswordStrengthList from './components/PasswordStrengthList';

const LoginContent = ({ isRegister }: { isRegister: boolean }) => {
  const navigate = useNavigate();
  const textFieldClasses = TextFieldUseStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');

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
      if (!username.length) {
        setUsernameError('Você deve preencher esse campo');
        hasError = true;
      }

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
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(userCredential.user, { displayName: username });

        toast.success('Cadastro realizado com sucesso', {
          style: { background: '#003c10', color: '#FFFFFF' },
          autoClose: 2000,
        });

        navigate('/login');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login realizado com sucesso', {
          style: { background: '#003c10', color: '#FFFFFF' },
          autoClose: 2000,
        });
        navigate('/home');
      }
    } catch (error) {
      toast.error('Conta inválida', {
        style: { background: '#ff000048', color: '#FFFFFF' },
        autoClose: 2000,
      });
    }
    setLoadingAuth(false);
  };

  return (
    <LoginWrapper>
      <FormDiv isRegister={isRegister}>
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
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ style: { color: 'white' } }}
              className={textFieldClasses.root}
              fullWidth
              InputProps={{
                endAdornment: (
                  <PasswordIconButton
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <MdOutlineRemoveRedEye color='white' size={20} />
                    ) : (
                      <FaRegEyeSlash color='white' size={20} />
                    )}
                  </PasswordIconButton>
                ),
              }}
            />
          </FieldsDiv>
        ) : (
          <FieldsDiv>
            <TextField
              label='Username'
              variant='standard'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{ style: { color: 'white' } }}
              className={textFieldClasses.root}
              fullWidth
              error={usernameError !== ''}
              helperText={usernameError}
              FormHelperTextProps={{
                style: { color: '#ad0000', fontWeight: 'bold' },
              }}
              onBlur={() => {
                if (!!username.length) {
                  setUsernameError('');
                }
              }}
            />
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
              type={showPassword ? 'text' : 'password'}
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
              InputProps={{
                endAdornment: (
                  <PasswordIconButton
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <MdOutlineRemoveRedEye color='white' size={20} />
                    ) : (
                      <FaRegEyeSlash color='white' size={20} />
                    )}
                  </PasswordIconButton>
                ),
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
              ? 'Already have an account? Go to login'
              : 'Do not have an account? Register'}
          </button>
        </SignupDiv>
      </FormDiv>
    </LoginWrapper>
  );
};

export default LoginContent;
