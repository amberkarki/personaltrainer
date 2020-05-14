
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC0u3IWwK8t54XlmC0fA4wFnsdYnGwFahI",
    authDomain: "my-new-app-fbe6f.firebaseapp.com",
    databaseURL: "https://my-new-app-fbe6f.firebaseio.com",
    projectId: "my-new-app-fbe6f",
    storageBucket: "my-new-app-fbe6f.appspot.com",
    messagingSenderId: "873353455716",
    appId: "1:873353455716:web:c9e8aaeca25066e054d771",
    measurementId: "G-EP7FZ9QLHP"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire; 