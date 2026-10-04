// Henter HTML
const cartSection = document.querySelector("#cart-section");
const cartSummary = document.querySelector("#cart-summary");
const clearCartBtn = document.querySelector("#clear-cart-btn");

// Henter handlekurv fra localStorage
const getCart = () => {
  const lSKey = "cart";
  if (localStorage.getItem(lSKey) != null) {
    return JSON.parse(localStorage.getItem(lSKey));
  } else {
    return [];
  }
};

// Lager handlekurv
const renderCart = () => {
  const cart = getCart();

  if (cart.length === 0) {
    cartSection.innerHTML = "<p>Handlekurven er tom!</p>";
    cartSummary.innerHTML = "";
    return;
  }

  let htmlTxt = "";
  let totalPrice = 0;

  cart.forEach((product, index) => {
    totalPrice += product.price;

    htmlTxt += `
      <article class="product-box xs-12 sm-6 md-4 lg-3">
        <img class="img-responsive" src="images/${product.image}" alt="${product.name}" />
        <div class="text-content">
          <h3 class="product-box__title">${product.name}</h3>
          <p>${product.price} kr</p>
          <button class="button button--delete" data-index="${index}">
            Fjern
          </button>
        </div>
      </article>
    `;
  });

  cartSection.innerHTML = htmlTxt;
  cartSummary.innerHTML = `<h2>Totalpris: ${totalPrice} kr</h2>`;

  // Fjern-knapper
  const removeBtns = document.querySelectorAll(".button--delete");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const index = parseInt(event.target.dataset.index);
      removeFromCart(index);
    });
  });
};

// Fjern produkt fra handlekurv
const removeFromCart = (index) => {
  const cart = getCart();
  cart.splice(index, 1); // fjern ett element
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

// Tøm hele handlekurven
clearCartBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");
  renderCart();
});

// Start visning
renderCart();
