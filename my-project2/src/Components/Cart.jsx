import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [orderSummary, setOrderSummary] = useState(null);

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity || 1);
    return sum + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
  }, 0);

  const discount = total >= 2500 ? 200 : total >= 1000 ? 100 : 0;
  const finalAmount = Math.max(total - discount, 0);

  const handleClearCart = () => {
    clearCart();
  };

  const handlePlaceOrder = () => {
    const summary = {
      items: [...cartItems],
      name,
      address,
      total,
      discount,
      finalAmount,
    };

    setOrderSummary(summary);
    clearCart();
    setName('');
    setAddress('');
    alert('🎉 Your order is placed! Scroll down to view summary.');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <Link to="/Online">
        <button className="text-2xl bg-green-500 text-white mt-40 ml-10 px-6 py-3 rounded hover:bg-green-600">
          Back
        </button>
      </Link>

      <div className="max-w-4xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-lg text-center text-2xl">
        
        {!orderSummary && (
          <>
            <h2 className="text-5xl font-bold mb-8">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty!</p>
              
            ) : (
              <>
                <ul className="space-y-6 mb-8">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded shadow-sm"
                    >
                      <div>
                        <p className="font-medium">
                          {item.name} x{item.quantity}
                        </p>
                        <p className="text-3xl text-gray-700">₹{item.price}each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-3 text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <h3 className="text-4xl mb-2">Total Amount: ₹{total}</h3>
                  {discount > 0 ? (
                    <h3 className="text-5xl mb-2">Discount Applied: ₹{discount}</h3>
                  ) : (
                    <h3 className="text-2xl text-red-600 mb-2">
                      No Discount Applied — SAVE ₹100 on ₹1000, SAVE ₹200 on ₹2500
                    </h3>
                  )}
                  <h3 className="text-4xl font-semibold">
                    Final Payable: ₹{finalAmount}
                  </h3>
                </div>

                <button
                  className="bg-sky-600 text-white text-2xl px-6 py-2 rounded hover:bg-sky-700 mb-6"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>

                <div className="text-center">
                  <h3 className="text4xl font-semibold mb-4">
                    Enter Delivery Details
                  </h3>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 p-3 border border-gray-300 rounded text-3xl"
                  />
                  <textarea
                    placeholder="Your Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full mb-4 p-3 border border-gray-300 rounded text-3xl resize-y min-h-[80px]"
                  ></textarea>
                  <button
                    disabled={!name || !address}
                    onClick={handlePlaceOrder}
                    className={`text-white text-3xl px-6 py-2 rounded w-full transition ${
                      name && address
                        ? 'bg-purple-800 hover:bg-purple-900'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* ORDER SUMMARY */}
        
        {orderSummary && (
  <div className="mt-10 p-6 border-2 border-dashed border-gray-400 bg-gray-50 text-3xl rounded-lg">
    <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">🎉 Your order is placed, thank you!</h1>
    <hr className="mb-4" />
    <div className="flex flex-row items-start gap-8">
      
      

      
      <div className="ml-[50px]">
        <h2 className="text-4xl font-bold mb-4">Order Summary</h2>
        <p><strong>Name:</strong> {orderSummary.name}</p>
        <p><strong>Address:</strong> {orderSummary.address}</p>
        <ul className="list-disc list-inside my-4">
          {orderSummary.items.map(item => (
            <li key={item.id}>
              {item.name} ({item.quantity}) – ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> ₹{orderSummary.total}</p>
        <p><strong>Discount:</strong> ₹{orderSummary.discount}</p>
        <p><strong>Final Amount Paid:</strong> ₹{orderSummary.finalAmount}</p>
      </div>
      <img
        className="w-[300px] h-[200px] object-cover rounded-lg"
        src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg"
        alt="Order Illustration"
      />
    </div>
  </div>
)}

      </div>
      
    </div>
  );
};

export default Cart;
