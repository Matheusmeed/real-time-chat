import { AccessRoomButton, FieldsDiv, RoomCodeDiv, Wrapper } from './styles';
import { useState } from 'react';

const Home = () => {
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');

  const handleAccessRoom = () => {
    if (code.trim() === '') {
      setCodeError('Por favor, insira um código de sala válido.');
    } else if (code.length < 5) {
      setCodeError('O código deve ter pelo menos 5 dígitos.');
    } else {
      setCodeError('');
    }
  };
  return (
    <Wrapper>
      <RoomCodeDiv>
        <FieldsDiv>
          <h1>Room Code</h1>
          <div>
            <input
              type='number'
              name='code'
              value={code}
              onChange={(el) => {
                const enteredValue = el.target.value;
                if (/^\d{0,5}$/.test(enteredValue)) {
                  setCode(enteredValue);
                  setCodeError('');
                }
              }}
            />
            <div>{codeError && <p>{codeError}</p>}</div>
          </div>
          <AccessRoomButton
            onClick={() => {
              handleAccessRoom();
            }}
          >
            Acessar
          </AccessRoomButton>
        </FieldsDiv>
      </RoomCodeDiv>
    </Wrapper>
  );
};

export default Home;
