import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <main className="h-svh ">
      <div className="items-center mx-auto p-8 rounded-xl w-1/2 bg-slate-100 bg-opacity-50">
        <p className="text-4xl">Welcome to my fake store</p>
        <p>
          This is where I showcase a mock store for the odin project curriculum
        </p>
        <Link to="/shop">
          <button className="w-full bg-transparent hover:bg-amber-200  font-semibold py-2 px-4 border border-slate-700 border-transparent rounded active:bg-amber-300">
            Shop Now
          </button>
        </Link>
      </div>
      <div></div>
    </main>
  );
};

export default Home;
