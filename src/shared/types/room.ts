interface IMessage {
  message: string;
  time: string;
  username: string;
  email: string;
}

export interface IRoom {
  name: string;
  category: 'SOCCER' | 'GAMES' | 'MOVIES' | 'TRAVEL';
  country: 'BR' | 'US' | 'PT' | 'AR';
  image: string;
  id: number;
  messages: IMessage[];
}
