import React, { useState } from 'react';
import {
  CardHeader,
  FilterDiv,
  RoomCard,
  RoomCreationButton,
  RoomsDiv,
  RoomsSelectionDiv,
  TitleDiv,
  Wrapper,
} from './styles';
import { MdModeEdit } from 'react-icons/md';
import GoBackButton from '../../shared/components/GoBackButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRoom } from '../../shared/types/room';
import { auth } from '../../firebase';

const Rooms = () => {
  const location = useLocation();
  const isMyRoomsRoute = location.pathname === '/myRooms';
  const userEmail = auth.currentUser?.email;
  const rooms = useSelector((state: { rooms: IRoom[] }) => state.rooms);
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    name: '',
    category: 'ALL',
    country: 'ALL',
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, name: e.target.value });
  };

  const filteredRooms = rooms.filter((room) => {
    const lowerCaseName = filter.name.toLowerCase();
    return (
      (lowerCaseName === '' ||
        room.name.toLowerCase().includes(lowerCaseName)) &&
      (filter.category === 'ALL' || room.category === filter.category) &&
      (filter.country === 'ALL' || room.country === filter.country) &&
      (isMyRoomsRoute ? room.userEmail === userEmail : true)
    );
  });

  return (
    <Wrapper>
      <GoBackButton returnTo='home' />
      {isMyRoomsRoute && (
        <RoomCreationButton>Criação de Sala</RoomCreationButton>
      )}
      <RoomsSelectionDiv>
        <FilterDiv>
          <input
            type='text'
            placeholder='Name'
            value={filter.name}
            onChange={handleNameChange}
          />

          <div>
            <select
              value={filter.category}
              onChange={(e) =>
                setFilter({ ...filter, category: e.target.value })
              }
            >
              <option value='ALL'>All Categories</option>
              <option value='SOCCER'>Soccer</option>
              <option value='GAMES'>Games</option>
              <option value='MOVIES'>Movies</option>
              <option value='TRAVEL'>Travel</option>
            </select>
            <select
              value={filter.country}
              onChange={(e) =>
                setFilter({ ...filter, country: e.target.value })
              }
            >
              <option value='ALL'>All Countries</option>
              <option value='BR'>Brazil</option>
              <option value='US'>United States</option>
              <option value='PT'>Portugal</option>
              <option value='AR'>Argentina</option>
            </select>
          </div>
        </FilterDiv>
        <RoomsDiv>
          {filteredRooms.map((room) => (
            <RoomCard
              isMyRoomsRoute={isMyRoomsRoute}
              key={room.id}
              image={room.image}
              onClick={() => {
                if (!isMyRoomsRoute) {
                  navigate(`/public/${room.id}`);
                }
              }}
            >
              <CardHeader>
                <h3>{room.category}</h3>
                <div>
                  <img
                    src={`/images/flagIcons/${room.country.toLowerCase()}.png`}
                    alt='flag'
                    width={40}
                  />
                </div>
              </CardHeader>
              <TitleDiv>
                <h2>{room.name}</h2>
                {isMyRoomsRoute && (
                  <div>
                    <button>Acessar</button>
                    <button>
                      Editar <MdModeEdit />
                    </button>
                  </div>
                )}
              </TitleDiv>
            </RoomCard>
          ))}
        </RoomsDiv>
      </RoomsSelectionDiv>
    </Wrapper>
  );
};

export default Rooms;
