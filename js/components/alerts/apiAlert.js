export default function apiAlert() {
  const alertContainer = document.querySelector(".api-alert-container");

  // setTimeout(function () {
  //   alertContainer.innerHTML = `<div class="alert success">Waking up Heroku hosted API. Please hold on..</div>`;
  // }, 2000);


    alertContainer.innerHTML = `<div class="alert success">Waking up Heroku hosted API. Please hold on..</div>`;
}
