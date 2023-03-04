import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDktX7JTqbygFsWmIDncA4qf7yV2KqQOD8",
    authDomain: "chemisphere-33c44.firebaseapp.com",
    projectId: "chemisphere-33c44",
    storageBucket: "chemisphere-33c44.appspot.com",
    messagingSenderId: "781175905864",
    appId: "1:781175905864:web:6f96a7815c183fc4c0427d",
    measurementId: "G-MHRHYEZ6Z1"
};
firebase.initializeApp(firebaseConfig);

var signupForm = document.getElementById("signup-form");

// Add a listener for the form submission
signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the user's email and password
  var email = signupForm.email.value;
  var password = signupForm.password.value;

  // Create a new user account with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // User account created successfully
      var user = userCredential.user;
      alert("User account created:", user);
    })
    .catch(function(error) {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error creating user account:", errorCode, errorMessage);
    });
});