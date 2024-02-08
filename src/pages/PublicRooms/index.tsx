import { TextField } from '@material-ui/core';
import {
  CardHeader,
  FilterDiv,
  RoomCard,
  RoomsDiv,
  RoomsSelectionDiv,
  TitleDiv,
  Wrapper,
} from './styles';

const rooms = [
  {
    name: 'Bola',
    category: 'Soccer',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/280px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg',
    id: 1,
  },
  {
    name: 'Mario',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Sim',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Yeah',
    category: 'Games',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
];

const PublicRooms = () => {
  return (
    <Wrapper>
      <RoomsSelectionDiv>
        <FilterDiv>
          <TextField
            label='Procurar Sala'
            variant='standard'
            type='text'
            InputLabelProps={{ style: { color: 'white' } }}
          />
        </FilterDiv>
        <RoomsDiv>
          {rooms.map((room) => (
            <RoomCard key={room.id} image={room.image}>
              <CardHeader>
                <h3>Category</h3>
                <div>
                  <img
                    src='/images/flagIcons/unitedStates.png'
                    alt='flag'
                    width={40}
                  />
                </div>
              </CardHeader>
              <TitleDiv>
                <h2>Recanto dos Melhores Amigos</h2>
              </TitleDiv>
            </RoomCard>
          ))}
        </RoomsDiv>
      </RoomsSelectionDiv>
    </Wrapper>
  );
};

export default PublicRooms;
