import { getUsername } from "../utils/storage.js";

const bannerContainer = document.querySelector(".banner");

const username = getUsername();

export default function renderBanner() {
  let bannerContent = "";

  if (username) {
    bannerContent = `
    <ul class="banner__list">
    <li class="banner__item">
    <i class="far fa-user highlight"></i>
    <span class="highlight">Signed in as: <em>${username}</em></span>
    </li>
    </ul>`;
  }

  if (!username) {
    bannerContent = `
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
    </ul>`;
  }

  bannerContainer.innerHTML = `<div>${bannerContent}</div>`;

  // if (token) {
  //   bannerContainer.classList.add("banner-admin");

  //   bannerContainer.innerHTML = `
  //   <div style="background-color:#0e6673">
  //   <span>Signed in as: <em>${username}</em></span>
  //   </div>`;
  // } else if (!username) {
  //   bannerContainer.innerHTML = `
  //   <div style="background-color:#323232">
  //   <ul class="banner__list">
  //   <li class="banner__item">
  //     <i class="fas fa-check"></i>
  //     <span>Free returns</span>
  //   </li>
  //   <li class="banner__item">
  //     <i class="fas fa-check"></i>
  //     <span>Free shipping over $50</span>
  //   </li>
  //   <li class="banner__item banner__item--inactive">
  //     <i class="fas fa-check"></i>
  //     <span>Money back guarantee</span>
  //   </li>
  // </ul>
  // </div>
  //   `;
  // }
}
