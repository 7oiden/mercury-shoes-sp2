export default function apiAlert() {
  const alertContainer = document.querySelector(".api-alert-container");

  setTimeout(function () {
    alertContainer.innerHTML = `<span class="alert warning absolute-pos">Waking up Heroku hosted API. Please hold on..</span>`;
  }, 1000);
}
