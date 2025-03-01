import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // cart, shipping, payment, confirmation

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  // Empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="container-content py-12">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-gray-400 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/shop">
            <button className="btn-primary">Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-content py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Your Shopping Cart
      </h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div
            className={`flex flex-col items-center ${
              checkoutStep === 'cart' ? 'text-amber-500' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
                checkoutStep === 'cart'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              1
            </div>
            <span className="text-sm font-medium">Cart</span>
          </div>
          <div className="w-full border-t border-gray-300"></div>
          <div
            className={`flex flex-col items-center ${
              checkoutStep === 'shipping' ? 'text-amber-500' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
                checkoutStep === 'shipping'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              2
            </div>
            <span className="text-sm font-medium">Shipping</span>
          </div>
          <div className="w-full border-t border-gray-300"></div>
          <div
            className={`flex flex-col items-center ${
              checkoutStep === 'payment' ? 'text-amber-500' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
                checkoutStep === 'payment'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              3
            </div>
            <span className="text-sm font-medium">Payment</span>
          </div>
          <div className="w-full border-t border-gray-300"></div>
          <div
            className={`flex flex-col items-center ${
              checkoutStep === 'confirmation'
                ? 'text-amber-500'
                : 'text-gray-400'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
                checkoutStep === 'confirmation'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              4
            </div>
            <span className="text-sm font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Items in Your Cart ({cartItems.length})
              </h2>
            </div>

            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 flex flex-col sm:flex-row">
                  {/* Product Image */}
                  <div className="sm:w-24 h-24 mb-4 sm:mb-0 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow sm:ml-4">
                    <h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      Unit Price: ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity and Actions */}
                    <div className="flex flex-wrap justify-between items-center">
                      {/* Quantity */}
                      <div className="flex items-center mb-2 sm:mb-0">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-10 text-center border-t border-b border-gray-300 py-1 px-2 text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal and Remove */}
                      <div className="flex items-center">
                        <span className="text-base font-medium text-gray-800 mr-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-50 border-t">
              <Link
                to="/shop"
                className="text-amber-500 hover:text-amber-600 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-semibold text-gray-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCheckoutStep('shipping')}
              className="w-full btn-primary"
            >
              Proceed to Checkout
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                This is a demo store. No real payments will be processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
