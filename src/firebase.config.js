import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getStorage  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlBWlFJD7k5rY0ma5cfS8yFOPB6Vbm6Yw",
  authDomain: "restaurant-7f777.firebaseapp.com",
  databaseURL: "https://restaurant-7f777-default-rtdb.firebaseio.com",
  projectId: "restaurant-7f777",
  storageBucket: "restaurant-7f777.appspot.com",
  messagingSenderId: "84847267979",
  appId: "1:84847267979:web:3388398dbb42fe53bf448e"
};

const  app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app , firestore, storage};