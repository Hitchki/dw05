import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: 'AIzaSyBmfrG4J1EgGdjStSX7qiZb2wzFEv_56XE',
    authDomain: 'denkwelten.firebaseapp.com',
    databaseURL: 'https://denkwelten.firebaseio.com',
    storageBucket: 'denkwelten.appspot.com',
    messagingSenderId: '684226708322'
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
