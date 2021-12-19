const heroContainer = document.querySelector(".hero__container");
const loader = document.querySelector(".loader");

export function renderHero(hero) {
  // console.log(hero);

  loader.style.display = "none";

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
