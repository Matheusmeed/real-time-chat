import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(to right, #91e8e2, #7b7ed1);
  padding: 80px 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2em;
    color: white;
  }

  p {
    cursor: pointer;

    &:hover {
      color: #555555;
      transition: 0.3s;
    }
  }
`;
