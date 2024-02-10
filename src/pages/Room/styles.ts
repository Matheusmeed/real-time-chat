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
  width: 80px;
  height: 80px;
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

    &:hover {
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
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a9e4ff21;
    border-radius: 4px;
    &:hover {
      background-color: #a9e4ff3d;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #b6b6b614;
  }
`;

export const MessageDiv = styled.div<{ ownMessage?: boolean }>`
  padding: 10px 4px 0 4px;
  display: flex;
  flex-direction: ${({ ownMessage }) => (ownMessage ? 'row-reverse' : 'row')};
  gap: 10px;
`;

export const Message = styled.div<{ ownMessage?: boolean }>`
  padding: 10px 20px 15px 20px;
  background-color: ${({ ownMessage }) =>
    ownMessage ? '#002b3a85' : '#00000059'};
  color: #fffffff0;
  border-radius: ${({ ownMessage }) =>
    ownMessage ? '20px 5px 20px 20px' : '5px 20px 20px 20px'};
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    margin: 0;
  }
`;

export const UsernameDiv = styled.div`
  p {
    color: pink;
  }
`;

export const TextDiv = styled.p``;

export const ChatBottom = styled.div`
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
