import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div<{ isLeft?: boolean; isCenter?: boolean }>`
  width: 300px;
  height: ${({ isCenter }) => (isCenter ? '390px' : '370px')};
  background: linear-gradient(to top, #dadbff, #b224ef);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transform: ${({ isCenter, isLeft }) =>
    isCenter
      ? 'unset'
      : isLeft
      ? 'perspective(1000px) rotateY(-30deg)'
      : 'perspective(1000px) rotateY(30deg)'};
  box-shadow: ${({ isCenter, isLeft }) =>
    isCenter
      ? '0 6px 1px #6900af'
      : isLeft
      ? '5px 6px 1px #6900af'
      : '-5px 6px 1px #6900af'};

  h1 {
    color: #383838;
  }

  &:hover {
    width: 320px;
    height: 430px;
    cursor: pointer;
    transition: 0.5s;
  }
`;
