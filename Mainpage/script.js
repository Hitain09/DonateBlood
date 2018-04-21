(function() {

  // Initialize Firebase
  
const config = {
    apiKey: "AIzaSyAELBDfqYULuYthOPadRpA3wiUTo41yqX4",
    authDomain: "donate-blood-b009a.firebaseapp.com",
    databaseURL: "https://donate-blood-b009a.firebaseio.com",
    //projectId: "donate-blood-b009a",
    storageBucket: "donate-blood-b009a.appspot.com",
    //messagingSenderId: "894496275500"
  };
  firebase.initializeApp(config);
 

  const txtEmail = document.getElementById('textEmail');
  const txtPassword = document.getElementById('textPassword');
  const btnLogIn = document.getElementById('btnlogIn');
  const btnSignUp = document.getElementById('btnSignUp');

  btnLogIn.addEventListener('click', e => {
    const Email = txtEmail.value;
    const PassKey = txtPassword.value;
    const auth = firebase.auth();
window.alert("working");
   const promise =  auth.signInWithEmailAndPassword(Email,PassKey);
   promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', e => {
    const Email = txtEmail.value;
    const PassKey = txtPassword.value;
    const auth = firebase.auth();

   const promise =  auth.createUserWithEmailAndPassword(Email,PassKey);
   promise
   .catch(e => console.log(e.message));
  });


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    }
    else{
      console.log("not logged in");
    }
  });
}());