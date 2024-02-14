import React, { useState } from 'react';
import {
  CardHeader,
  FilterDiv,
  IconDiv,
  NoRoomsDiv,
  RoomCard,
  RoomCreationButton,
  RoomsDiv,
  RoomsSelectionDiv,
  TitleDiv,
  Wrapper,
} from './styles';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { MdModeEdit, MdOutlinePublic } from 'react-icons/md';
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
      (!room.isPrivate || !!isMyRoomsRoute) &&
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
        <RoomCreationButton
          onClick={() => {
            navigate('create');
          }}
        >
          Room Creation
        </RoomCreationButton>
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
          {!filteredRooms.length ? (
            <NoRoomsDiv>
              <p>Não há salas...</p>
            </NoRoomsDiv>
          ) : (
            filteredRooms.map((room) => (
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
                  {!!room.roomCode && <h4>#{room.roomCode}</h4>}
                  {isMyRoomsRoute && (
                    <div>
                      <button
                        onClick={() => {
                          navigate(`room/${room.id}`);
                        }}
                      >
                        Access
                      </button>
                      <button
                        onClick={() => {
                          navigate('update', { state: room });
                        }}
                      >
                        Edit <MdModeEdit />
                      </button>
                    </div>
                  )}
                </TitleDiv>
                {isMyRoomsRoute && (
                  <IconDiv>
                    {!room.isPrivate ? (
                      <MdOutlinePublic color='white' size={20} />
                    ) : (
                      <RiGitRepositoryPrivateFill color='#FFFFFF' size={20} />
                    )}
                  </IconDiv>
                )}
              </RoomCard>
            ))
          )}
        </RoomsDiv>
      </RoomsSelectionDiv>
    </Wrapper>
  );
};

export default Rooms;
