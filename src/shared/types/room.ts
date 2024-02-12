export type countryType = 'BR' | 'US' | 'PT' | 'AR';

export interface IMessage {
  message: string;
  time: Date;
  username: string;
  email: string;
  id?: number;
}

export interface IRoom {
  name: string;
  category: 'SOCCER' | 'GAMES' | 'MOVIES' | 'TRAVEL';
  country: countryType;
  image: string;
  id?: number;
  messages: IMessage[];
  userEmail: string;
}
