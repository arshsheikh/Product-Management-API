import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.productId}>
            {/* Display selected product with quantity and unit price */}
          </li>
        ))}
      </ul>
      {/* Display total price */}
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
