import { init } from "./view-controller/route.js";

var firebaseConfig = {
  apiKey: "AIzaSyAEXlEYeMnZrk708URZBo520yunR94PJjo",
  authDomain: "hackathon-interna.firebaseapp.com",
  databaseURL: "https://hackathon-interna.firebaseio.com",
  projectId: "hackathon-interna",
  storageBucket: "",
  messagingSenderId: "1039939561783",
  appId: "1:1039939561783:web:8e83b8dc9e26bc4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.addEventListener('load', () => {
  init()
})