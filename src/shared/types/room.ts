export type countryType = 'BR' | 'US' | 'PT' | 'AR';

interface IMessage {
  message: string;
  time: string;
  username: string;
  email: string;
}

export interface IRoom {
  name: string;
  category: 'SOCCER' | 'GAMES' | 'MOVIES' | 'TRAVEL';
  country: countryType;
  image: string;
  id: number;
  messages: IMessage[];
}
