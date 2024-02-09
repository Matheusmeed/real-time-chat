import React, { useState } from 'react';
import {
  CardHeader,
  FilterDiv,
  RoomCard,
  RoomsDiv,
  RoomsSelectionDiv,
  TitleDiv,
  Wrapper,
} from './styles';
import { rooms } from '../../shared/util/rooms';
import GoBackButton from '../../shared/components/GoBackButton';

const PublicRooms = () => {
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
      (filter.country === 'ALL' || room.country === filter.country)
    );
  });

  return (
    <Wrapper>
      <GoBackButton returnTo='home' />
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
            <RoomCard key={room.id} image={room.image}>
              <CardHeader>
                <h3>Category: {room.category}</h3>
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
              </TitleDiv>
            </RoomCard>
          ))}
        </RoomsDiv>
      </RoomsSelectionDiv>
    </Wrapper>
  );
};

export default PublicRooms;
