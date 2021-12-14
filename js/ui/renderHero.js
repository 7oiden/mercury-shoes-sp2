const heroContainer = document.querySelector(".hero__container");

const loader = document.querySelector(".loader");


export function renderHero(hero) {
  console.log(hero);

  loader.style.display = "none";

  const heroImage = hero.hero_url;
  const heroImageSmall = hero.hero_small_url;

  console.log(heroImageSmall);

  heroContainer.style.background = `url(${heroImage})`;
  
  if (window.innerWidth <= 992) {
    heroContainer.style.background = `url(${heroImageSmall})`;
    heroContainer.style.backgroundSize = "cover";
    heroContainer.style.backgroundPosition = "right bottom";
  } else if (screen.width > 992) {
    heroContainer.style.background = `url(${heroImage})`;
    heroContainer.style.backgroundSize = "cover";
    heroContainer.style.backgroundPosition = "right bottom";
  }

  window.onresize = function () {
    if (window.innerWidth <= 992) {
      heroContainer.style.background = `url(${heroImageSmall})`;
      heroContainer.style.backgroundSize = "cover";
      heroContainer.style.backgroundPosition = "right bottom";
    } else {
      heroContainer.style.background = `url(${heroImage})`;
      heroContainer.style.backgroundSize = "cover";
      heroContainer.style.backgroundPosition = "right bottom";
    }
  };
}
