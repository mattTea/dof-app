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

export { firebase, database as default };