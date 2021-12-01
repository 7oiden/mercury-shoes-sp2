import { adminUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { alertContainer } from "./settings/constants.js";

const adminForm = document.querySelector(".admin__form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const usernameError = document.querySelector("#admin-username-error");
const passwordError = document.querySelector("#admin-password-error");

adminForm.addEventListener("submit", submitAdminForm);

console.log(username.value);

function submitAdminForm(event) {
  event.preventDefault();

  alertContainer.innerHTML = "";

  // validation
  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

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

  const usernameInput = username.value.trim();
  const passwordInput = password.value.trim();

  // if (usernameInput.length === 0 || passwordInput.length === 0) {
  //   return displayAlert(
  //     "warning",
  //     "Username and/or password is missing",
  //     ".alert-container"
  //   );
  // }

  if (checkLength(username.value, 3) && checkLength(password.value, 5)) {
    performLogin(usernameInput, passwordInput);
  }
}

async function performLogin(username, password) {
  const loginData = JSON.stringify({
    identifier: username,
    password: password,
  });

  const options = {
    method: "POST",
    body: loginData,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(adminUrl, options);
    const json = await response.json();

    console.log(json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      window.location.reload();
    }

    if (json.error) {
      displayAlert(
        "warning",
        "Username and/or password is invalid",
        ".alert-container"
      );
    }
  } catch (error) {
    displayAlert("error", "Something went wrong!", ".alert-container");
  }
}
