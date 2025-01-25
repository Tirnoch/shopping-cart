import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ShoppingCart from './pages/ShoppingCart';
import Layout from './pages/Layout';

function App() {
  const [count, setCount] = useState(0);

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
          <Route path="*" element={<ErrorPage />} />
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
