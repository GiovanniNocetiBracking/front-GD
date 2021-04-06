// Get a RTDB instance
import firebase from "firebase/app";
import "firebase/database";
const db = firebase
  .initializeApp({
    databaseURL: "https://gasdetect-fe60e-default-rtdb.firebaseio.com",
  })
  .database();
export default db;
