import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ShopContext } from './Layout';
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
      <section className="py-16 bg-white bg-opacity-80">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
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
            <h3 className="text-2xl font-semibold text-center mb-8">
              Featured Products
            </h3>

            {isLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                  <Product key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
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
                Our products are carefully selected to ensure the highest
                quality.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
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
                Get your products delivered quickly with our expedited shipping
                options.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
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
                Shop with confidence knowing your payments are secure and
                protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
