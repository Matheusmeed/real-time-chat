import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #91e8e2, #7b7ed1);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ChatWrapper = styled.div`
  width: 800px;
  height: 95%;
  border-radius: 30px 30px 0 0;
  backdrop-filter: blur(10px);
  background-color: #00000085;
`;

export const ChatHeader = styled.div`
  position: relative;
  height: 15%;
  width: 100%;
  background-color: #80008012;
  border-bottom: 3px solid #17008008;
  border-radius: 30px 30px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ImageDiv = styled.div`
  background-color: #333333;
  width: 90px;
  height: 90px;
  border-radius: 70px;
  border: 3px solid #233f48b8;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 70px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const TextsDiv = styled.div`
  color: white;
  * {
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    img {
      width: 30px;
      margin-top: 3px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding-top: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    :hover {
      * {
        color: #ffffff94;
        transition: 0.3s;
      }
    }
  }
`;

export const ChatBody = styled.div`
  width: 100%;
  height: 75%;
`;

export const ChatBottom = styled.div`
  border-top: 1px solid red;
  width: 100%;
  height: 10%;
  display: flex;
  padding: 10px 25px;
`;

export const TextInput = styled.input`
  width: 90%;
  background-color: #0000003d;
  border-radius: 10px 0 0 10px;
  border: none;
  padding: 0 20px;
  color: white;
  outline: none;

  &::placeholder {
    color: #ffffffa8;
  }
`;

export const SendMessageButton = styled.button`
  width: 10%;
  cursor: pointer;
  background-color: #0000003d;
  border: none;
  border-radius: 0 8px 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    * {
      color: #c0ffca;
      transition: 0.3s;
    }
  }
`;