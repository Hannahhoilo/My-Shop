// Importer modul
import ProductModule from "./modules/ProductModule.js";
import {
  getCart,
  saveCart,
  updateCartBadge,
} from "./utilities/cartUtilities.js";

// Henter HTML
const showByFrozenProductBtn = document.querySelector("#show-by-frozen-product-btn");
const showAllBtn = document.querySelector("#show-all-btn");
const productSection = document.querySelector("#product-section");
const idTxt = document.querySelector("#id-txt");

// Lager siden dynamisk
const renderProducts = (products) => {
  let htmlTxt = "";

  products.forEach((product) => {
    htmlTxt += `
      <article class="product-box xs-12 sm-6 md-4 lg-3">
        <img 
          class="img-responsive"
          src="images/${product.image}" 
          alt="${product.name}. Foto." />                
        <div class="text-content">
          <h3 class="product-box__title">${product.name}</h3>
          <p class="product-box__price">${product.price} kr</p>
          <button 
            class="button button--centered add-to-cart-btn" 
            data-id="${product.id}">                            
            Legg i handlekurv
            <i class="fa-solid fa-cart-shopping"></i>
          </button>    
        </div>
      </article>
    `;
  });

  productSection.innerHTML = htmlTxt;

  // Handlekurv 
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      const product = products.find((p) => p.id === id);
      addToCartFunction(product);
    });
  });
};

// Funskjon til knapper 
const showAllProducts = () => {
  renderProducts(ProductModule.getAll());
};

const showByFrozenProduct = () => {
  const frozenProducts = ProductModule.getAll().filter((p) => p.frozenProduct);
  renderProducts(frozenProducts);
};

const showById = () => {
  const id = parseInt(idTxt.value);
  const product = ProductModule.getAll().find((p) => p.id === id);
  if (product) {
    renderProducts([product]);
  } else {
    productSection.innerHTML = `<p>Vi har ingen produkger med ID ${idTxt.value}!</p>`;
  }
};

// Handlekurv
// Popup
const cartPopup = document.querySelector("#cart-popup");
const cartPopupContent = document.querySelector("#cart-popup-content");

const showCartPopup = (product) => {
  cartPopupContent.innerHTML = `
    <img class="cart-popup__image" src="images/${product.image}" alt="${product.name}. Foto.">
    <h3 class="cart-popup__name">${product.name}</h3>
    <p class="cart-popup__price">${product.price} kr</p>
  `;
  cartPopup.showModal();
};

const closeCartPopup = () => cartPopup.close();

document.querySelector("#cart-popup-close").addEventListener("click", closeCartPopup);
document.querySelector("#cart-popup-continue").addEventListener("click", closeCartPopup);

// Lukk når man klikker på den mørke bakgrunnen
cartPopup.addEventListener("click", (event) => {
  if (event.target === cartPopup) closeCartPopup();
});

// Handlekurv
const addToCartFunction = (newProduct) => {
  const cart = getCart();
  cart.push(newProduct);
  saveCart(cart);
  updateCartBadge();
  showCartPopup(newProduct);
};

// EventListener 
showAllBtn.addEventListener("click", showAllProducts);
showByFrozenProductBtn.addEventListener("click", showByFrozenProduct);

idTxt.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    showById();
  }
});

// Kjør en default visning (f.eks. alle produkter)
showAllProducts();
updateCartBadge();
