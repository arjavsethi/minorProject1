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
    // apiKey: "AIzaSyC7KqClQ36NWO23oLifQjKjCQ0SQAAqMQE",
    // authDomain: "minor3-1e451.firebaseapp.com",
    // projectId: "minor3-1e451",
    // storageBucket: "minor3-1e451.appspot.com",
    // messagingSenderId: "643856146498",
    // appId: "1:643856146498:web:64cd13e48fd4df25f4cddb"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);