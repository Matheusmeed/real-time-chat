import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
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

export const HomeDiv = styled.div`
  z-index: 1;
`;

export const LogoutButtonDiv = styled.div`
  button {
    margin: 20px;
    border: none;
    border-radius: 20px;
    background-color: #ff00007a;
    color: white;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;

    &:hover {
      background-color: #ff0000b5;
      transition: 0.3s;
    }
  }
`;
