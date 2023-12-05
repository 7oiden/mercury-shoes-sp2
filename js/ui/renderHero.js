const heroContainer = document.querySelector(".hero__container");
const loader = document.querySelector(".loader");

export function renderHero(hero) {

  loader.style.display = "none";
 
  // heroContainer.innerHTML = `
  // <div class="hero__transparent-wrapper">
  //         <hgroup class="hero__heading-group">
  //           <h1 class="hero__heading">Step it up</h1>
  //           <h2 class="hero__heading-secondary">
  //             <span id="normal">with</span> Mercury
  //           </h2>
  //         </hgroup>
  //         <div class="hero__red-line"></div>
  //         <p class="hero__tagline">High quality running shoes since 1988</p>
  //         <a href="products-overview.html" class="button hero__button">Shop now</a>
  //   </div>
  // `;

  const heroImage = hero.hero_url;
  const heroImageSmall = hero.hero_small_url;

  heroContainer.style.background = `url(${heroImage})`;

  if (window.innerWidth <= 1200) {
    heroContainer.style.background = `url(${heroImageSmall})`;
    heroContainer.style.backgroundSize = "cover";
    heroContainer.style.backgroundPosition = "70% bottom";
  } else if (screen.width > 1200) {
    heroContainer.style.background = `url(${heroImage})`;
    heroContainer.style.backgroundSize = "cover";
    heroContainer.style.backgroundPosition = "70% bottom";
  }

  window.onresize = function () {
    if (window.innerWidth <= 1200) {
      heroContainer.style.background = `url(${heroImageSmall})`;
      heroContainer.style.backgroundSize = "cover";
      heroContainer.style.backgroundPosition = "70% bottom";
    } else {
      heroContainer.style.background = `url(${heroImage})`;
      heroContainer.style.backgroundSize = "cover";
      heroContainer.style.backgroundPosition = "70% bottom";
    }
  };
}
