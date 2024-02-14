import styled from 'styled-components';

export const BackButton = styled.button<{ dark: boolean }>`
  background: none;
  border: none;
  position: absolute;
  z-index: 4;
  top: 15px;
  left: 15px;
  cursor: pointer;

  &:hover {
    * {
      color: ${({ dark }) => (dark ? '#000000bf' : '#ffffff')};
    }
  }
`;
