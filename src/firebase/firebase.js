import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB0-TBMelLxeys667vf4KjJ-wER_OZ880U",
  authDomain: "dof-learning.firebaseapp.com",
  databaseURL: "https://dof-learning.firebaseio.com",
  projectId: "dof-learning",
  storageBucket: "",
  messagingSenderId: "377317128652"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Get the data back from Firebase
database.ref('trainingResources')
  .once('value')
  .then((snapshot) => {
    const trainingResources = [];
    
    snapshot.forEach((childSnapshot) => {
      trainingResources.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
  });

// To upload data to Firebase add in here the details saved in "dof-app-data-new.js"
// yarn run dev-server to run program an upload to firebase

export { firebase, googleAuthProvider, database as default };