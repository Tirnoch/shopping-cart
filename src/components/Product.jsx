import { useState, useContext } from 'react';
import { ShopContext } from '../pages/Layout';

const Product = ({ id, title, price, image, rating, description }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(ShopContext);

  // Ensure we don't go below 1 for quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    addToCart({ id, title, price, image }, quantity);

    // Show visual feedback (could use a toast notification in a real app)
    const button = document.getElementById(`add-to-cart-${id}`);
    if (button) {
      const originalText = button.innerText;
      button.innerText = 'Added!';
      button.classList.add('bg-green-500');

      setTimeout(() => {
        button.innerText = originalText;
        button.classList.remove('bg-green-500');
      }, 1000);
    }

    // Reset quantity to 1
    setQuantity(1);
  };

  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating?.rate || 0);
    const hasHalfStar = (rating?.rate || 0) - fullStars >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id={`half-star-${id}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#CBD5E0" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-star-${id})`}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return (
      <div className="flex items-center">
        <div className="flex">{stars}</div>
        <p className="ml-2 text-sm text-gray-600">
          ({rating?.count || 0} reviews)
        </p>
      </div>
    );
  };

  return (
    <div className="card group h-full flex flex-col transition-all duration-300 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative overflow-hidden h-48 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex-grow flex flex-col p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
          {title}
        </h2>
        {renderStars()}
        <div className="mt-2 text-xl font-bold text-amber-500">
          ${price?.toFixed(2)}
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        {/* Quantity and Add to Cart */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-3 py-1 text-gray-800">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            id={`add-to-cart-${id}`}
            onClick={handleAddToCart}
            className="w-full btn-primary transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
