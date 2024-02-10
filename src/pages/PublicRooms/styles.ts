import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
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
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;

  div {
    display: flex;
    gap: 20px;

    select {
      background-color: #0072a599;
      border: 1px solid white;
      padding: 10px;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    }
  }

  input {
    background-color: #0072a599;
    border: 1px solid white;
    padding: 10px;
    color: white;
    border-radius: 6px;

    &::placeholder {
      color: white;
    }
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

export const RoomCard = styled.div<{ image: string }>`
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
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    width: 305px;
    height: 205px;

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
  justify-content: center;

  h2 {
    text-align: center;
  }
`;
