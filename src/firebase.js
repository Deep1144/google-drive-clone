import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
})

export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();
export const database = {
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: (doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  }
}
export default app;
