import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

export const Card = styled.div<{ isLeft?: boolean; isCenter?: boolean }>`
  width: 300px;
  height: ${({ isCenter }) => (isCenter ? '410px' : '370px')};
  background: linear-gradient(to top, #dadbff, #b224ef);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
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
    height: ${({ isCenter }) => (isCenter ? '430px' : '400px')};
    background: linear-gradient(to top, #ffffff, #c94dff);
    transition: 0.5s;
  }

  @media (max-width: 940px) {
    width: 300px;
    height: 150px;
    transform: none;
    box-shadow: 5px 5px 1px #6900af;

    h1 {
      font-size: 24px;
    }

    svg {
      width: 40px;
      height: 40px;
    }

    &:hover {
      width: 300px;
      height: 150px;
    }
  }
  will-change: transform;
`;
