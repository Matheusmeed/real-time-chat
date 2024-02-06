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

export const FormDiv = styled.div`
  margin: 10px;
  padding: 60px 20px 30px 20px;
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

  * {
    color: white;
  }
`;

export const SubmitButton = styled.button`
  background-color: #8214baa8;
  color: white;
  margin-top: 50px;
  border: none;
  padding: 15px 40px;
  border-radius: 60px;
  font-size: 1.2em;

  &:hover {
    background-color: #8214ba91;
    color: #3f005f;
    cursor: pointer;
    transition: 0.3s;
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
