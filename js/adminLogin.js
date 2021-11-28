import { adminUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { saveToken, saveUser, getUsername } from "./utils/storage.js";

console.log("hi");

const alertContainer = document.querySelector(".alert-container");

const adminForm = document.querySelector(".admin__form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

// const username = getUsername();

adminForm.addEventListener("submit", submitAdminForm);

console.log(username.value);

function submitAdminForm(event) {
  event.preventDefault();

  alertContainer.innerHTML = "";

  const usernameInput = username.value.trim();
  const passwordInput = password.value.trim();

  if (usernameInput.length === 0 || passwordInput.length === 0) {
    return displayAlert(
      "warning",
      "Username and/or password is missing",
      ".alert-container"
    );
  }

  performLogin(usernameInput, passwordInput);
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

      location.href = "/";
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
