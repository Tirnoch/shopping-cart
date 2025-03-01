import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../pages/Layout';
import Product from '../components/Product';

const Shop = () => {
  const { products, isLoading, error } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = [
    'all',
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter((product) => product.category === activeCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // Default sorting (by id)
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredProducts(result);
  }, [products, activeCategory, sortOption, searchQuery]);

  return (
    <div className="container-content py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Shop Our Products
      </h1>

      {/* Search and filters */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search Products
            </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Category filter */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort options */}
          <div>
            <label
              htmlFor="sort"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sort By
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
          <p>Error: {error}</p>
          <p>Please try refreshing the page.</p>
        </div>
      )}

      {/* Products Grid */}
      {!isLoading && !error && (
        <>
          <p className="mb-4 bg-white px-4 py-2 rounded-md shadow-sm inline-block font-medium text-gray-800 border-l-4 border-amber-500">
            {filteredProducts.length} products found
          </p>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No products match your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSortOption('default');
                  setSearchQuery('');
                }}
                className="mt-4 btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Shop;
