import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from '../components/Product';

const Home = () => {
  const { products, isLoading } = useContext(ShopContext);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Get 3 random products for the featured section
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setFeaturedProducts(shuffled.slice(0, 3));
    }
  }, [products]);

  return (
    <main>
      <section className="py-16">
        <div className="container-content">
          {/* Welcome Banner */}
          <div className="max-w-3xl mx-auto text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome to FakeShop
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              This is a demonstration store built for the Odin Project
              curriculum. Browse our collection of products and enjoy the
              shopping experience!
            </p>
            <Link to="/shop">
              <button className="btn-primary">Shop Now</button>
            </Link>
          </div>

          {/* Featured Products */}
          <div className="mt-16">
            <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Featured Products
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Discover our handpicked selection of top products
              </p>

              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>

              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
                </div>
              ) : (
                <>
                  {featuredProducts.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      No products available at the moment.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {featuredProducts.map((product) => (
                        <Product key={product.id} {...product} />
                      ))}
                    </div>
                  )}

                  <div className="text-center mt-8">
                    <Link to="/shop">
                      <button className="btn-secondary">
                        View All Products
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 mb-8">
            <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Why Choose Us
              </h3>
              <p className="text-center text-gray-600 mb-6">
                We take pride in offering the best shopping experience
              </p>

              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="card flex flex-col items-center text-center p-6 hover:bg-amber-50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Quality Products
                  </h3>
                  <p className="text-gray-600">
                    We source the finest products from trusted suppliers
                    worldwide. Every item is carefully inspected to ensure
                    exceptional quality.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="card flex flex-col items-center text-center p-6 hover:bg-amber-50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Fast Shipping
                  </h3>
                  <p className="text-gray-600">
                    Experience speedy delivery with our optimized logistics
                    network. We ensure your purchases reach you as quickly as
                    possible.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="card flex flex-col items-center text-center p-6 hover:bg-amber-50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600">
                    Your transactions are protected by industry-leading
                    encryption. Shop with complete peace of mind on our secure
                    platform.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center bg-green-100 rounded-full px-3 py-1">
                    <svg
                      className="w-4 h-4 text-green-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-medium text-green-800">
                      100% Satisfaction
                    </span>
                  </div>

                  <div className="flex items-center bg-blue-100 rounded-full px-3 py-1">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-medium text-blue-800">
                      Money-Back Guarantee
                    </span>
                  </div>

                  <div className="flex items-center bg-purple-100 rounded-full px-3 py-1">
                    <svg
                      className="w-4 h-4 text-purple-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-xs font-medium text-purple-800">
                      24/7 Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
