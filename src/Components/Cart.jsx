import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="mt-[100px] p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              <img className="w-16 h-16 object-cover mr-4" src={item.image} alt={item.title} />
              <span className="flex-1">{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold text-end">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
