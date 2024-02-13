import { IRoom } from '../types/room';

export const initialRooms: IRoom[] = [
  {
    name: 'Soberanos',
    category: 'SOCCER',
    country: 'BR',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/280px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg',
    id: 1,
    userEmail: 'mms.medeiros12@gmail.com',
    isPrivate: false,
    roomCode: 11132,
    messages: [
      {
        message: 'Olá, tudo bem?',
        time: new Date('2024-02-10T15:30:00Z'),
        username: 'Lucas',
        email: 'lucas@gmail.com',
        id: 1,
      },
      {
        message: 'Sim, estou bem! Como você está?',
        time: new Date('2024-02-10T15:35:00Z'),
        username: 'Mariana',
        email: 'mariana@gmail.com',
        id: 2,
      },
      {
        message: 'Estou ótimo, obrigado por perguntar!',
        time: new Date('2024-02-10T15:40:00Z'),
        username: 'Lucas',
        email: 'lucas@gmail.com',
        id: 3,
      },
      {
        message: 'Alguém mais vai se juntar a nós?',
        time: new Date('2024-02-10T15:45:00Z'),
        username: 'Mariana',
        email: 'mariana@gmail.com',
        id: 4,
      },
      {
        message: 'Ainda não sei, vamos esperar mais um pouco.',
        time: new Date('2024-02-10T15:50:00Z'),
        username: 'Lucas',
        email: 'lucas@gmail.com',
        id: 5,
      },
    ],
  },
  {
    name: 'Mario Fans',
    category: 'GAMES',
    country: 'US',
    image:
      'https://www.shutterstock.com/image-vector/art-super-mario-bros-3-600nw-2296443947.jpg',
    id: 2,
    userEmail: 'mms.medeiros12@gmail.com',
    isPrivate: false,
    roomCode: 32322,
    messages: [
      {
        message: 'Hey, Mario enthusiasts! What is your favorite Mario game?',
        time: new Date('2024-02-11T10:00:00Z'),
        username: 'Gamer123',
        email: 'gamer123@gmail.com',
        id: 1,
      },
      {
        message:
          'I love Super Mario Odyssey! The graphics and gameplay are amazing.',
        time: new Date('2024-02-11T10:05:00Z'),
        username: 'SuperFan',
        email: 'superfan@gmail.com',
        id: 2,
      },
      {
        message: 'Anyone excited about the upcoming Mario Kart 9 release?',
        time: new Date('2024-02-11T10:10:00Z'),
        username: 'RacingFanatic',
        email: 'racer@gmail.com',
        id: 3,
      },
      {
        message:
          "I can't wait for Mario Kart 9! It better have new tracks and characters.",
        time: new Date('2024-02-11T10:15:00Z'),
        username: 'TrackMaster',
        email: 'trackmaster@gmail.com',
        id: 4,
      },
      {
        message:
          "Let's organize a Mario game marathon this weekend! Who is in?",
        time: new Date('2024-02-11T10:20:00Z'),
        username: 'GameMaster',
        email: 'gamemaster@gmail.com',
        id: 5,
      },
    ],
  },
  {
    name: 'Cinephiles Lounge',
    category: 'MOVIES',
    country: 'US',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/best-fall-movies-1659459329.jpg?crop=0.6223479490806223xw:1xh;center,top&resize=1200:*',
    id: 3,
    userEmail: 'mms.medeiros12@gmail.com',
    isPrivate: false,
    roomCode: 12332,
    messages: [
      {
        message:
          'Hello fellow movie buffs! What is the latest film you watched?',
        time: new Date('2024-02-11T12:00:00Z'),
        username: 'FilmFanatic',
        email: 'filmfanatic@gmail.com',
        id: 1,
      },
      {
        message: 'I just watched an amazing thriller. Highly recommend it!',
        time: new Date('2024-02-11T12:05:00Z'),
        username: 'ThrillSeeker',
        email: 'thrillseeker@gmail.com',
        id: 2,
      },
      {
        message:
          'Looking for recommendations for a good comedy movie. Any suggestions?',
        time: new Date('2024-02-11T12:10:00Z'),
        username: 'LaughLover',
        email: 'laughlover@gmail.com',
        id: 3,
      },
    ],
  },
  {
    name: 'Wanderlust Explorers',
    category: 'TRAVEL',
    country: 'PT',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/000/702/403/small/airplane-flying-and-leaving-heart-shape-dashed-line.jpg',
    id: 4,
    userEmail: 'mms.medeiros12@gmail.com',
    isPrivate: false,
    roomCode: 43532,
    messages: [
      {
        message:
          'Greetings fellow travelers! Share your favorite travel destination.',
        time: new Date('2024-02-11T14:00:00Z'),
        username: 'Explorer123',
        email: 'explorer123@gmail.com',
        id: 1,
      },
      {
        message:
          'I recently visited a beautiful beach in Portugal. The sunset was breathtaking!',
        time: new Date('2024-02-11T14:05:00Z'),
        username: 'SunsetChaser',
        email: 'sunsetchaser@gmail.com',
        id: 2,
      },
      {
        message:
          'Any tips for budget-friendly travel experiences? Share your wisdom!',
        time: new Date('2024-02-11T14:10:00Z'),
        username: 'ThriftyTraveler',
        email: 'thriftytraveler@gmail.com',
        id: 3,
      },
    ],
  },
  {
    name: 'Football Fanatics',
    category: 'SOCCER',
    country: 'AR',
    image:
      'https://cdn.espn.com.br/image/wide/622_bc6c6c94-d13f-3686-9258-996af10302b4.jpg',
    id: 5,
    userEmail: 'mms.medeiros12@gmail.com',
    isPrivate: false,
    roomCode: 53212,
    messages: [
      {
        message: 'Hola amigos! ¿Qué opinan del último partido de fútbol?',
        time: new Date('2024-02-11T16:00:00Z'),
        username: 'Futbolero',
        email: 'futbolero@gmail.com',
        id: 1,
      },
      {
        message:
          'El equipo jugó increíble. ¡Estoy emocionado por la próxima temporada!',
        time: new Date('2024-02-11T16:05:00Z'),
        username: 'EnthusiasticFan',
        email: 'enthusiasticfan@gmail.com',
        id: 2,
      },
      {
        message: '¿Alguien más va a ver el próximo partido en el estadio?',
        time: new Date('2024-02-11T16:10:00Z'),
        username: 'StadiumGoer',
        email: 'stadiumgoer@gmail.com',
        id: 3,
      },
    ],
  },
  {
    name: 'Gaming Central',
    category: 'GAMES',
    country: 'BR',
    image:
      'https://cdn.ome.lt/J6ySr7FdQis-nH8greNS-qcyYWw=/480x270/smart/uploads/conteudo/fotos/the_last_of_us_girafa.jpg',
    id: 6,
    userEmail: 'mms.games@gmail.com',
    isPrivate: false,
    roomCode: 43212,
    messages: [
      {
        message: 'Hey gamers! What game are you currently addicted to?',
        time: new Date('2024-02-11T18:00:00Z'),
        username: 'GamerX',
        email: 'gamerx@gmail.com',
        id: 1,
      },
      {
        message:
          'I can not get enough of the latest RPG. The storyline is so immersive!',
        time: new Date('2024-02-11T18:05:00Z'),
        username: 'RPGMaster',
        email: 'rpgmaster@gmail.com',
        id: 2,
      },
      {
        message:
          'Looking for co-op partners for a multiplayer session. Anyone interested?',
        time: new Date('2024-02-11T18:10:00Z'),
        username: 'CoOpExplorer',
        email: 'coopexplorer@gmail.com',
        id: 3,
      },
    ],
  },
  {
    name: 'Private Sonic Fans',
    category: 'GAMES',
    country: 'BR',
    image:
      'data:image/jpeg;base64,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',
    id: 7,
    userEmail: 'mms.medeiros12@gmail.com',
    isPrivate: true,
    roomCode: 11111,
    messages: [
      {
        message: 'Hey gamers! What game are you currently addicted to?',
        time: new Date('2024-02-11T18:00:00Z'),
        username: 'GamerX',
        email: 'gamerx@gmail.com',
        id: 1,
      },
      {
        message:
          'I can not get enough of the latest RPG. The storyline is so immersive!',
        time: new Date('2024-02-11T18:05:00Z'),
        username: 'RPGMaster',
        email: 'rpgmaster@gmail.com',
        id: 2,
      },
      {
        message:
          'Looking for co-op partners for a multiplayer session. Anyone interested?',
        time: new Date('2024-02-11T18:10:00Z'),
        username: 'CoOpExplorer',
        email: 'coopexplorer@gmail.com',
        id: 3,
      },
    ],
  },
];
