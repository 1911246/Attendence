import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyChJsQU5nG8_tm11nxS0FrTkBFyKEXgPqg",
    authDomain: "attendenceapp-d2446.firebaseapp.com",
    databaseURL: "https://attendenceapp-d2446-default-rtdb.firebaseio.com",
    projectId: "attendenceapp-d2446",
    storageBucket: "attendenceapp-d2446.appspot.com",
    messagingSenderId: "1092464148877",
    appId: "1:1092464148877:web:2cbd7f4eb2ad5349227dc4",
    measurementId: "G-YLZKPHC1V2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();