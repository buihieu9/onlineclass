const view = {};

view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "signInScreen": {
      document.getElementById("app").innerHTML = components.signInScreen;
      const loginForm = document.getElementById("login-form");

      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          password: {
            value: loginForm.password.value,
            name: "password",
            id: "password-error",
          },
          email: {
            value: loginForm.email.value.trim(),
            name: "email",
            id: "email-error",
          },
        };
        loginForm.remember.checked
          ? (controller.checkRemember = true)
          : (controller.checkRemember = false);

        controller.validate(data);
      });

      document
        .querySelector(".redirect-to-resgister")
        .addEventListener("click", () => {
          view.setActiveScreen("signUpScreen");
        });

      document
        .getElementById("forgot-password")
        .addEventListener("click", () => {
          view.setActiveScreen("forgotScreen");
        });
      document.getElementById("facebook").addEventListener("click", (e) => {
        model.signinFacebook();
      });

      break;
    }
    case "signUpScreen": {
      document.getElementById("app").innerHTML = components.signUpScreen;

      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          firstName: {
            value: registerForm.firstName.value.trim(),
            name: "first name",
            id: "first-name-error",
          },
          lastName: {
            value: registerForm.lastName.value.trim(),
            name: "last name",
            id: "last-name-error",
          },
          password: {
            value: registerForm.password.value,
            name: "password",
            id: "password-error",
          },
          email: {
            value: registerForm.email.value.trim(),
            name: "email",
            id: "email-error",
          },
          confirmPassword: {
            value: registerForm.confirmPassword.value,
            name: "confirm Password",
            id: "confirm-password-error",
          },
          job: {
            value: registerForm.job.value,
            name: "check job",
            id: "check-job",
          },
        };
        console.log(typeof registerForm.job.value);
        controller.validate(data);
      });

      document
        .querySelector(".redirect-to-signin")
        .addEventListener("click", () => {
          view.setActiveScreen("signInScreen");
        });

      break;
    }

    case "classRoom": {
      document.getElementById("app").innerHTML = components.classRoom;
      break;
    }
    case "forgotScreen": {
      document.getElementById("app").innerHTML = components.forgotScreen;
      const forgotForm = document.getElementById("forgot-form");
      forgotForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          email: {
            value: forgotForm.email.value.trim(),
            name: "Your email address",
            id: "forgot-error",
          },
        };
        controller.validate(data);
      });
      document.querySelector(".cancel").addEventListener("click", (e) => {
        view.setActiveScreen("signInScreen");
      });
      break;
    }
  }
};

view.errorMessage = (id, message) => {
  document.getElementById(id).innerText = message;
};
