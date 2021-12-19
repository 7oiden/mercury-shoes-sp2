const confButton = document.querySelector("#confirmation-button");

confButton.addEventListener("click", clearBasket);

function clearBasket() {
    localStorage.removeItem("basket-items");
    document.location.href = "/";
}