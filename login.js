<script type="module">

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCZVaDhVpk2QBku0H-BFPOdzNcsxLUvMhY",
    authDomain: "bombayedtech.firebaseapp.com",
    databaseURL: "https://bombayedtech-default-rtdb.firebaseio.com",
    projectId: "bombayedtech",
    storageBucket: "bombayedtech.appspot.com",
    messagingSenderId: "224717213900",
    appId: "1:224717213900:web:e561caa1eda07b7e87b269"
  };


  const app = initializeApp(firebaseConfig);
</script>



import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    import { getAuth, onAuthStateChanged } from "firebase/auth";

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });



