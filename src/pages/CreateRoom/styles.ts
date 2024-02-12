import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #91e8e2, #7b7ed1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  font-family: 'Protest Strike', sans-serif;

  h1 {
    background: linear-gradient(to right, #ff8c00, #ff0000);
    background-clip: text;
    color: transparent;
  }
`;

export const RoomCreationDiv = styled.div`
  display: flex;
  width: 700px;
  height: 600px;
  background-color: #0000009c;
  border-radius: 30px;
  padding: 30px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5em;
    margin: -8px;
  }
`;

export const FieldsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 8px;
    }

    input,
    select {
      padding: 10px;
      outline: none;
      border: 2px solid #ff8c00;
      background-color: #334154;
      border-radius: 8px;
      color: white;
      width: 300px;
    }
  }
`;

export const CreateRoomButton = styled.button<{ disabled?: boolean }>`
  margin-top: 40px;
  padding: 12px;
  background: ${({ disabled }) =>
    disabled ? '#6d6d6d' : 'linear-gradient(to right, #ff8c00, #ff0000)'};
  color: ${({ disabled }) => (disabled ? '#b9b8b8' : 'white')};
  border-radius: 10px;
  border: none;
  font-size: 1.2em;
  font-family: 'Protest Strike', sans-serif;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? '#6d6d6d' : 'linear-gradient(to right, #ff0000ba, #ff8c0099)'};
  }
`;

export const CustomFileInputWrapper = styled.label`
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

export const CustomFileInput = styled.input`
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
`;

export const CustomFileButton = styled.div<{ hasImage: boolean }>`
  background-color: ${(props) => (props.hasImage ? '#359f7847' : '#400c4763')};
  color: #ececec;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
`;
