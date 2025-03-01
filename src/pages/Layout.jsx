import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

import Logo from '../assets/logo';
import Footer from '../components/Footer';

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Get total items in cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Function to add items to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Function to remove items from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Function to update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Create context value
  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    isLoading,
    error,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      <div
        id="wrapper"
        className="min-h-screen flex flex-col bg-fixed bg-cover bg-center bg-[url('assets/home-background.jpg')]"
      >
        <header className="sticky top-0 z-10">
          <nav className="bg-white bg-opacity-90 shadow-md">
            <div className="container-content">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold text-amber-500">
                      FakeShop
                    </span>
                  </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:block">
                  <div className="flex items-center space-x-8">
                    <Link
                      to="/"
                      className={`font-medium ${
                        location.pathname === '/'
                          ? 'text-amber-500'
                          : 'text-gray-700 hover:text-amber-500'
                      } transition-colors duration-200`}
                    >
                      Home
                    </Link>
                    <Link
                      to="/shop"
                      className={`font-medium ${
                        location.pathname === '/shop'
                          ? 'text-amber-500'
                          : 'text-gray-700 hover:text-amber-500'
                      } transition-colors duration-200`}
                    >
                      Shop
                    </Link>
                  </div>
                </div>

                {/* Cart */}
                <div className="flex items-center">
                  <Link
                    to="/cart"
                    className="relative p-2 text-gray-700 hover:text-amber-500 transition-colors duration-200"
                  >
                    <Logo />
                    {cartItemCount > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-amber-500 rounded-full">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    type="button"
                    className="text-gray-700 hover:text-amber-500 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
                <p className="mt-2 text-center text-gray-700">Loading...</p>
              </div>
            </div>
          )}
          <Outlet />
        </main>

        <Footer />
      </div>
    </ShopContext.Provider>
  );
};

export default Layout;
