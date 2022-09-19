import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from  "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAXju2L8ni3KYXb-XDZ639wPnSu19mhWic",
    authDomain: "minor2-9a271.firebaseapp.com",
    projectId: "minor2-9a271",
    storageBucket: "minor2-9a271.appspot.com",
    messagingSenderId: "690488709778",
    appId: "1:690488709778:web:b76a6172ebdf4693bf0c4b",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);