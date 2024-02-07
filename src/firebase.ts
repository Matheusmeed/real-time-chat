import { initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBC6jBjiWuPgOU20mxNpxfXtkyPz4H1PL8',
  authDomain: 'real-time-chat-cf084.firebaseapp.com',
  projectId: 'real-time-chat-cf084',
  storageBucket: 'real-time-chat-cf084.appspot.com',
  messagingSenderId: '695778732695',
  appId: '1:695778732695:web:bbb7ee97f3df3ceed497d2',
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export type User = import('firebase/auth').User;

export {
  auth,
  app,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};
