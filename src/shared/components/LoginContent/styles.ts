import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const TextFieldUseStyles = makeStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'white',
    },
    '& input': {
      color: 'white',
    },
  },
});

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/images/mapBackground.jpg') no-repeat center center fixed;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000bd;
  }
`;

export const FormDiv = styled.div<{ isRegister: boolean }>`
  margin: 10px;
  padding: 60px 20px 30px 20px;
  padding-top: ${({ isRegister }) => (isRegister ? '35px' : '60px')};
  z-index: 1;
  height: 90%;
  width: 500px;
  background: linear-gradient(to top, #7579ff, #b224ef);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 100px;
  }

  h1 {
    color: white;
  }
`;

export const FieldsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
`;

export const SubmitButton = styled.button<{ isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8214baa8;
  color: white;
  margin-top: 50px;
  border: none;
  min-height: 45px;
  width: 140px;
  border-radius: 60px;
  font-size: 1.2em;

  &:hover {
    color: ${({ isLoading }) => (isLoading ? 'white' : '#3f005f')};
    transition: 0.3s;
    background-color: ${({ isLoading }) =>
      isLoading ? '#8214baa8' : '#8214ba91'};
    cursor: ${({ isLoading }) => (isLoading ? 'unset' : 'pointer')};
  }
`;

export const SignupDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;

  button {
    background: none;
    border: none;
    color: #ffffff;

    &:hover {
      cursor: pointer;
      color: #e9e9e9;
      transition: 0.3s;
    }
  }
`;

export const PasswordIconButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
