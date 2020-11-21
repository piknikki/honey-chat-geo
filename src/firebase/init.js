import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDiQhrmwvkmz4jKdMVsHKzWHrvYMnjFx2A",
  authDomain: "honey-chat-geo.firebaseapp.com",
  databaseURL: "https://honey-chat-geo.firebaseio.com",
  projectId: "honey-chat-geo",
  storageBucket: "honey-chat-geo.appspot.com",
  messagingSenderId: "596130452202",
  appId: "1:596130452202:web:a5ce5a3b3521e9b3343d93"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
