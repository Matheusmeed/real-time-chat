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
    name: 'Private Gaming Central',
    category: 'GAMES',
    country: 'BR',
    image:
      'https://cdn.ome.lt/J6ySr7FdQis-nH8greNS-qcyYWw=/480x270/smart/uploads/conteudo/fotos/the_last_of_us_girafa.jpg',
    id: 6,
    userEmail: 'mms.games@gmail.com',
    isPrivate: true,
    roomCode: 234214,
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
