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

database.ref().set({
  discipline: 'Analysis',
  level: 'Delivery Fundamentals',
  skill: 'Requirements Engineering',
  title: 'An intro to Behaviour-driven Development (BDD)',
  description: 'An overview of BDD and its history, from its inception to the use of the scenario-based frameworks that predominate today. It will highlight conversation, questioning and feedback, these are at the heart of BDD. BDD is a framework that helps development teams frame a problem, explore it through conversations, scenarios and concrete examples, and specify system behaviour using natural language. This content will describe the principles of this framework, highlighting the level of importance and weight attributed to different aspects, and provide benefits and examples of its use from an analysis perspective.',
  url: 'https://drive.google.com/file/d/1gfCB9kQKX6cc8X1EXxgX7NkslpXRl2el/view',
  deliveryMethod: 'Self-serve',
  format: 'Video',
  duration: '00:30',
  ratingCount: 0,
  ratingSum: 0,
  rating: 4.3
}).then(() => {
  console.log('Set promise resolved, data is saved.');
}).catch((e) => {
  console.log('Set promise failed.', e);
});

