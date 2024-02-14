import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #91e8e2, #7b7ed1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const RoomCodeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 340px;
  background-color: #0000009c;
  border-radius: 30px;
  padding: 30px;
  margin: 20px;
`;

export const FieldsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    background: linear-gradient(to right, #e0e5ff, #cc68f6);
    background-clip: text;
    color: transparent;
    font-family: 'Protest Strike', sans-serif;
    margin: 2px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    div {
      height: 10px;
      p {
        margin: 0;
        color: #ffa8a8;
      }
    }

    input {
      padding: 10px;
      outline: none;
      border: 2px solid #de90ffa6;
      background-color: #334154;
      border-radius: 8px;
      color: white;
      width: 300px;
      text-align: center;
      appearance: textfield;
    }
  }
`;

export const AccessRoomButton = styled.button`
  margin-top: 20px;
  padding: 12px;
  background: linear-gradient(to right, #5056e1, #cc68f6);
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 1.2em;
  font-family: 'Protest Strike', sans-serif;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #5056e1ba, #cc68f699);
  }
`;
