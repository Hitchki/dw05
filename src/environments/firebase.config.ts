
import {AuthMethods, AuthProviders} from "angularfire2";

// export const firebaseConfig = {
//     apiKey: "AIzaSyDC27mEsCmSEukqpsJKLXVROCaEoJi1qOs",
//     authDomain: "final-project-aff93.firebaseapp.com",
//     databaseURL: "https://final-project-aff93.firebaseio.com",
//     storageBucket: "final-project-aff93.appspot.com",
//     messagingSenderId: "137840237153"
// };

export const firebaseConfig = {
    apiKey: "AIzaSyBmfrG4J1EgGdjStSX7qiZb2wzFEv_56XE",
    authDomain: "denkwelten.firebaseapp.com",
    databaseURL: "https://denkwelten.firebaseio.com",
    storageBucket: "denkwelten.appspot.com",
    messagingSenderId: "684226708322"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
