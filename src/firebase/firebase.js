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

// database.ref('trainingResources').push({
//   title: 'BDD',
//   description: 'Intro to BDD',
//   stage: 'Delivery Fundamentals',discipline: 'Analysis'
// });

// database.ref('trainingResources').push({
//   title: 'BDD_2',
//   description: 'How to BDD',
//   stage: 'Individual Choice',
//   discipline: 'Test'
// });

// database.ref('trainingResources').push({
//   deliveryMethod: 'Self-serve',
//   description: 'An overview of BDD and its history, from its in...',
//   discipline: 'Analysis',
//   duration: '00:30',
//   format: 'Video',
//   rating: 4.3,
//   ratingCount: 0,
//   ratingSum: 0,
//   skill: 'Requirements Engineering',
//   stage: 'Delivery Fundamentals',
//   title: 'An intro to Behaviour-driven Development (BDD)',
//   url: 'https://drive.google.com/file/d/1gfCB9kQKX6cc8X...'
// });

// database.ref('trainingResources/-LQ5o3-XjVjhmvSO2sCo').update({
//   description: 'How to do BDD... even better! (Updated from code)'
// });

// from Lecture 150
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
    // console.log(trainingResources);
  });

export { firebase, database as default };