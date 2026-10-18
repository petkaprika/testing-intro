function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity < 1) {
    throw new RangeError('Укажите количество товара, отличное от нуля.');
  }

  if (!cart.length) {
    if (quantity > product.stock) {
      throw new RangeError('Товар закончился!');
    }
    cart.push({ ...product, quantity });
    return cart;
  }

  const item = cart.find(({ id }) => id === product.id);

  if (item) {
    if (quantity + item.quantity > product.stock) {
      throw new RangeError('Товар закончился!');
    }
    item.quantity += quantity;
    return cart;
  } else {
    if (quantity > product.stock) {
      throw new RangeError('Товар закончился!');
    }
    cart.push({ ...product, quantity });
    return cart;
  }
}

function changeQuantity(cart, id, quantity) {
  if (quantity < 1) {
    throw new RangeError('Количество товара должно быть больше нуля!');
  }

  const item = cart.find(({ id: itemId }) => itemId === id);

  if (item) {
    if (quantity > item.stock) {
      throw new RangeError('Указанное количество больше остатка!');
    }
    item.quantity = quantity;
  }

  return cart;
}

function removeFromCart(cart, id) {
  const item = cart.find(({ id: itemId }) => itemId === id);

  if (item) {
    cart.splice(cart.indexOf(item), 1);
  }

  return cart;
}

function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
