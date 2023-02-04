// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import IFirebase from "./interfaces/Firebase";
import { getAuth } from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}
// Your web app's Firebase configuration
const firebaseConfig: IFirebase = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_DOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDERID,
  appId: process.env.VUE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
auth.languageCode = "es";
