const controller = {};
controller.checkRemember = null;
controller.validate = (data) => {
  for (let i in data) {
    data[i].value !== "" && data[i].value !== "undefined"
      ? view.errorMessage(data[i].id, "")
      : view.errorMessage(data[i].id, "Please input " + data[i].name);
  }
  if (data.email.value !== "" && data.email.name === "Your email address") {
    model.forgotPassword(data);
    return;
  }

  if (Object.keys(data)[4] === "confirmPassword") {
    if (data.password.value !== data.confirmPassword.value) {
      view.errorMessage(
        data.confirmPassword.id,
        "Password and Confirm Password doesn't macth"
      );
    } else {
      view.errorMessage(data.confirmPassword.id, "");

      if (
        data.firstName.value !== "" &&
        data.lastName.value !== "" &&
        data.email.value !== "" &&
        data.password.value !== "" &&
        data.job.value !== ""
      ) {
        model.register(data);
      }
    }
  } else {
    if (data.email.value !== "" && data.password.value !== "") {
      model.login(data.email.value, data.password.value);
    }
  }
};
