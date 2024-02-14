import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
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

export const RoomsSelectionDiv = styled.div`
  z-index: 1;
  width: 1100px;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const FilterDiv = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 80px;
  gap: 10px 20px;

  div {
    display: flex;
    gap: 20px;

    @media (max-width: 650px) {
      gap: 10px;
    }

    select {
      background-color: #155977;
      border: 1px solid white;
      padding: 10px;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    }
  }

  input {
    background-color: #155977;
    border: 1px solid white;
    padding: 10px;
    color: white;
    border-radius: 6px;
    outline: unset;

    &::placeholder {
      color: white;
    }
  }

  @media (max-width: 1440px) {
    margin-top: 50px;
  }
`;

export const RoomsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #816ca4;
    border-radius: 4px;
    &:hover {
      background-color: #967fba;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #b6b6b614;
  }
`;

export const RoomCard = styled.div<{ image: string; isMyRoomsRoute: boolean }>`
  position: relative;
  width: 300px;
  height: 200px;
  background-image: ${(props) => `url('${props.image}')`};
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  color: #e9e9e9;

  &:hover {
    ${(props) =>
      !props.isMyRoomsRoute &&
      `
      width: 305px;
      height: 205px;
      cursor: pointer;
      transition: 0.3s;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #9595953b;
        z-index: 2;
      }
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000c2;
    z-index: 1;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  h3 {
    margin: 10px 5px;
    transform: rotate(-20deg);
  }
`;

export const TitleDiv = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0 5px;
    text-align: center;
  }

  h4 {
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
  }

  div {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;

    button {
      padding: 6px 10px;
      display: flex;
      align-items: center;
      gap: 6px;
      border-radius: 6px;
      border: none;
      background-color: #8b00df9c;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: #8b00df;
      }
    }
  }
`;

export const RoomCreationButton = styled.button`
  position: absolute;
  z-index: 2;
  right: 40px;
  top: 20px;
  padding: 15px 25px;
  background-color: #4e006c91;
  color: #f8e6ff;
  font-size: 1.2em;
  border-radius: 8px;
  border: 1px solid #edc2ff;
  cursor: pointer;

  &:hover {
    background-color: #4e006c;
    color: white;
  }
`;

export const IconDiv = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 6px;
  right: 7px;
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const NoRoomsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-size: 1.3em;
    color: white;
    animation: ${fadeInOut} 3s infinite;
  }
`;
