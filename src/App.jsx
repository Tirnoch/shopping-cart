import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cart';
import Layout from './pages/Layout';
import Shop from './pages/Shop';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((res) => setProducts(res));
  }, []);
  console.log(products);

  // build a homepage and a shop page

  // shop page needs a navigaton element that displays current number of items in a cart
  // also have a button there for instant checkout

  // card for every item you can buy
  // needs input field for how many user wants to buy + a title + add to cart button

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
