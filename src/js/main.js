document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  openCloseNav();
  showCardProperties();
}

function openCloseNav() {
  const hamburguerBtn = document.querySelector(`.hamburguer`);
  const navHeader = document.querySelector(`.nav--header`);

  hamburguerBtn.addEventListener(`click`, () => {
    navHeader.classList.toggle(`nav--active`);
  });

  // Close navigation when user scrolls
  closeOnScroll(navHeader);
}

function closeOnScroll(nav) {
  window.addEventListener(`scroll`, () => {
    if (window.scrollY > 0) {
      nav.classList.remove(`nav--active`);
    }
  });
}

function showCardProperties() {
  const propertiesGrid = document.querySelector(`.properties__grid`);

  for (let i = 1; i <= 6; i++) {
    const randomPrice = Math.floor(Math.random() * 10000000);
    const formattedPrice = randomPrice.toLocaleString(`es-MX`, {
      style: `currency`,
      currency: `MXN`,
    });

    const cardHTML = `
        <div class="property__bg">
          <h3 class="property__name">Propiedad ${i}</h3>
        </div>
        <div class="property__content">
          <p class="property__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          alias maiores a nam sint ad ex nemo et. Recusandae ab iusto culpa
          veniam aliquam soluta ex, earum alias unde maxime!      
          </p>
          <p class="property__price">${formattedPrice}</p>
          <a href="#" class="property__btn">Ver propiedad</a>
        </div>`;

    const cardProperty = document.createElement(`div`);
    cardProperty.classList.add(`property`);
    cardProperty.innerHTML = cardHTML;

    propertiesGrid.appendChild(cardProperty);
  }

  scrollParallaxEffect();
}

function scrollParallaxEffect() {
  const propertyBgs = document.querySelectorAll(`.property__bg`);

  window.addEventListener(`scroll`, () => {
    const scrollPosY = this.scrollY / -20;

    propertyBgs.forEach((bg) => {
      bg.style.backgroundPositionY = `${scrollPosY}px`;
    });
  });
}
