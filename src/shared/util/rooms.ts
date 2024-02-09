interface IRoom {
  name: string;
  category: 'SOCCER' | 'GAMES' | 'MOVIES' | 'TRAVEL';
  country: 'BR' | 'US' | 'PT' | 'AR';
  image: string;
  id: number;
}

export const rooms: IRoom[] = [
  {
    name: 'Bola',
    category: 'SOCCER',
    country: 'BR',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/280px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg',
    id: 1,
  },
  {
    name: 'Mario',
    category: 'GAMES',
    country: 'US',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
  },
  {
    name: 'Sim',
    category: 'MOVIES',
    country: 'PT',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 3,
  },
  {
    name: 'Yeah',
    category: 'TRAVEL',
    country: 'AR',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 4,
  },
];
