import { getUsername } from "../utils/storage.js";

const bannerContainer = document.querySelector(".banner");

const username = getUsername();

export default function renderBanner() {
  if (username) {
    bannerContainer.classList.add("banner-admin");

    bannerContainer.innerHTML = `
    <span>Signed in as: <em>${username}</em></span>`;
  } else {
    bannerContainer.innerHTML = `
    <ul class="banner__list">
    <li class="banner__item">
      <i class="fas fa-check"></i>
      <span>Free returns</span>
    </li>
    <li class="banner__item">
      <i class="fas fa-check"></i>
      <span>Free shipping over $50</span>
    </li>
    <li class="banner__item banner__item--inactive">
      <i class="fas fa-check"></i>
      <span>Money back guarantee</span>
    </li>
  </ul>
    `;
  }
}
