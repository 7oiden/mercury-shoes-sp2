import { checkLength } from "../../utils/validators.js";

const usernameError = document.querySelector("#admin-username-error");
const passwordError = document.querySelector("#admin-password-error");

export function ValidateAdminLogin() {
  function checkInput() {
    if (checkLength(username.value, 3)) {
      usernameError.style.display = "none";
    } else {
      usernameError.style.display = "block";
    }

    if (checkLength(password.value, 5)) {
      passwordError.style.display = "none";
    } else {
      passwordError.style.display = "block";
    }
  }

  username.addEventListener("keyup", checkInput);
  password.addEventListener("keyup", checkInput);

  username.onfocus = function () {
    username.style.border = "1px solid #bdbdbd";
  };

  password.onfocus = function () {
    password.style.border = "1px solid #bdbdbd";
  };

  if (checkLength(username.value, 3)) {
    usernameError.style.display = "none";
    username.style.border = "1px solid #bdbdbd";
  } else {
    usernameError.style.display = "block";
    username.style.border = "2px solid #ed553b";
  }

  if (checkLength(password.value, 5)) {
    passwordError.style.display = "none";
    password.style.border = "1px solid #bdbdbd";
  } else {
    passwordError.style.display = "block";
    password.style.border = "2px solid #ed553b";
  }
}
