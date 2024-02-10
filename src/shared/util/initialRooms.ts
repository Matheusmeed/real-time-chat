import { IRoom } from '../types/room';

export const initialRooms: IRoom[] = [
  {
    name: 'Bola',
    category: 'SOCCER',
    country: 'BR',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/280px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg',
    id: 1,
    messages: [
      {
        message: 'Olá, tudo bem?',
        time: '2024-02-10T15:30:00Z',
        username: 'Lucas',
        email: 'lucas@gmail.com',
      },
      {
        message: 'Sim, estou bem! Como você está?',
        time: '2024-02-10T15:35:00Z',
        username: 'Mariana',
        email: 'mariana@gmail.com',
      },
      {
        message: 'Estou ótimo, obrigado por perguntar!',
        time: '2024-02-10T15:40:00Z',
        username: 'Lucas',
        email: 'lucas@gmail.com',
      },
      {
        message: 'Alguém mais vai se juntar a nós?',
        time: '2024-02-10T15:45:00Z',
        username: 'Mariana',
        email: 'mariana@gmail.com',
      },
      {
        message: 'Ainda não sei, vamos esperar mais um pouco.',
        time: '2024-02-10T15:50:00Z',
        username: 'Lucas',
        email: 'lucas@gmail.com',
      },
    ],
  },
  {
    name: 'Mario',
    category: 'GAMES',
    country: 'US',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 2,
    messages: [],
  },
  {
    name: 'Sim',
    category: 'MOVIES',
    country: 'PT',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 3,
    messages: [],
  },
  {
    name: 'Yeah',
    category: 'TRAVEL',
    country: 'AR',
    image:
      'https://meups.com.br/wp-content/uploads/2023/08/Industria-dos-Games-900x503.jpg',
    id: 4,
    messages: [],
  },
];
