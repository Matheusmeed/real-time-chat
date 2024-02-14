import { useSelector } from 'react-redux';
import GoBackButton from '../../shared/components/GoBackButton';
import { AccessRoomButton, FieldsDiv, RoomCodeDiv, Wrapper } from './styles';
import { useState } from 'react';
import { IRoom } from '../../shared/types/room';
import { useNavigate } from 'react-router-dom';

const PrivateRooms = () => {
  const navigate = useNavigate();
  const rooms = useSelector((state: { rooms: IRoom[] }) => state.rooms);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');

  const handleAccessRoom = () => {
    if (code.trim() === '') {
      setCodeError('Por favor, insira um código de sala válido.');
    } else if (code.length < 5) {
      setCodeError('O código deve ter pelo menos 5 dígitos.');
    } else {
      const room = rooms.find((room) => room.roomCode === parseInt(code));

      if (room) {
        navigate(`/private/${code}`);
      } else {
        setCodeError('Código de sala inválido.');
      }
    }
  };

  return (
    <Wrapper>
      <GoBackButton returnTo='home' dark />
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
            Access
          </AccessRoomButton>
        </FieldsDiv>
      </RoomCodeDiv>
    </Wrapper>
  );
};

export default PrivateRooms;
