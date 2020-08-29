const model = {};

model.register = (data) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email.value, data.password.value)
    .then((res) => {
      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: data.lastName.value + " " + data.firstName.value,
        })
        .then(() => {
          model.addFireStore("users", {
            name: res.user.displayName,
            email: res.user.email,
            isTeacher: data.job.value,
            password: data.password.value,
            photoURL:
              "https://firebasestorage.googleapis.com/v0/b/chat-app-bc2a8.appspot.com/o/user.png?alt=media&token=28e24cc2-86bd-43f8-aa54-2a62ef76650a",
          });
        });
      firebase.auth().currentUser.sendEmailVerification();
      alert("The email has been registered,please check your email");
      view.setActiveScreen("signInScreen");
    })
    .catch(function (error) {
      view.errorMessage("signup-all-error", error.message);
    });
};

model.login = async (email, password) => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (response.user.emailVerified) {
    } else {
      // alert("please verify your email");
      view.errorMessage("all-error", "please verify your email");
    }
  } catch (err) {
    view.errorMessage("all-error", err.message);
  }
};

model.addFireStore = (collection, data) => {
  var db = firebase.firestore();
  db.collection(collection)
    .add(data)
    .then(function (docRef) {
      model.key = docRef.id;
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

model.forgotPassword = (data) => {
  firebase
    .auth()
    .sendPasswordResetEmail(data.email.value)
    .then(() => {
      alert(
        "sent link reset password to your email address, please check your email"
      );
      view.setActiveScreen("signInScreen");
    })
    .catch((error) => {
      view.errorMessage(data.email.id, error.message);
    });
};

model.signinFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("user_birthday");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      console.log(token);
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // view.setActiveScreen("classRoom");

      // ..
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

getDataFormDoc = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  return data;
};

getDataFormDocs = (docs) => {
  return docs.map((element) => getDataFormDoc(element));
};
