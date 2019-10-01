import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAxwBisyrSd4GeQwUvotkBOSjQRZAwGFEg",
    authDomain: "danusan-project.firebaseapp.com",
    databaseURL: "https://danusan-project.firebaseio.com",
    projectId: "danusan-project",
    storageBucket: "",
    messagingSenderId: "329447380225",
    appId: "1:329447380225:web:df2d5c582f01f7863d3700"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase