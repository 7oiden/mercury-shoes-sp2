export default function displayAlert(alertType, alertMessage, targetElement) {
  const element = document.querySelector(targetElement);

  element.innerHTML = `<div class="alert ${alertType}"><span>${alertMessage}</span></div>`;
}
