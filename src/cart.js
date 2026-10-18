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

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
