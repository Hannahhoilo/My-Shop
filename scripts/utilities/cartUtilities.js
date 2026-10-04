const CART_KEY = "cart";

// Henter handlekurven, eller en tom liste hvis den ikke finnes
export const getCart = () => JSON.parse(localStorage.getItem(CART_KEY)) ?? [];

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Oppdaterer telleren i headeren
export const updateCartBadge = () => {
  const badge = document.querySelector("#cart-badge");
  if (!badge) return;

  const count = getCart().length;
  badge.textContent = count;
  badge.hidden = count === 0;
};
