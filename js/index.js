const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyD-rjFOT6ea0q2JJGLpEAbDl0iFX4F97BA",
    authDomain: "chat-ci45js.firebaseapp.com",
    databaseURL: "https://chat-ci45js.firebaseio.com",
    projectId: "chat-ci45js",
    storageBucket: "chat-ci45js.appspot.com",
    messagingSenderId: "362813637166",
    appId: "1:362813637166:web:5f51ca9dc6318d100bd5bf",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified) {
        view.setActiveScreen("classRoom");
      } else {
        view.setActiveScreen("signInScreen");
      }
    } else {
      view.setActiveScreen("signInScreen");
    }
  });
};
window.onload = init;
