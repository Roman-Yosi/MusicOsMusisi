import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔥 isi dari Firebase kamu
const firebaseConfig = {
  apiKey: "ISI_API_KEY",
  authDomain: "musicos-studio.firebaseapp.com",
  projectId: "musicos-studio",
  storageBucket: "musicos-studio.appspot.com",
  messagingSenderId: "ISI_ID",
  appId: "ISI_APPID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();

// 🔑 LOGIN FUNCTION
export function login() {
  signInWithRedirect(auth, provider);
}

// cek login result
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      console.log("LOGIN SUCCESS:", result.user);
    }
  })
  .catch((error) => {
    console.log(error);
  });