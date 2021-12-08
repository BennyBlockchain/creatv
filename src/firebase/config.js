import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBE8HGJksknMKXI6syjfCY0PP2cRcuxf2E',
  authDomain: 'creatv-b32c9.firebaseapp.com',
  projectId: 'creatv-b32c9',
  storageBucket: 'creatv-b32c9.appspot.com',
  messagingSenderId: '574254566058',
  appId: '1:574254566058:web:6fda4a5a2e96c858e71ed3',
  measurementId: '${config.measurementId}',
};

const app = initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

export const db = getFirestore(app);

export const getTest = async db => {
  const todoCol = collection(db, 'post');
  const snapshot = getDocs(todoCol);
  const list = (await snapshot).docs.map(doc => doc.data());
  console.log('List: ', list);
  return list;
};
