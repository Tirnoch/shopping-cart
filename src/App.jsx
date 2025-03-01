import { useState, useEffect, createContext, useContext } from 'react';
import {
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cart';
import Layout from './pages/Layout';
import Shop from './pages/Shop';
import router from './router';

export const ShopContext = createContext();

function App() {
  // build a homepage and a shop page

  // shop page needs a navigaton element that displays current number of items in a cart
  // also have a button there for instant checkout

  // card for every item you can buy
  // needs input field for how many user wants to buy + a title + add to cart button

  return <RouterProvider router={router} />;
}

export default App;
