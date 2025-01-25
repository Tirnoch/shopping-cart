import { Link } from 'react-router';

const Cart = () => {
  return (
    <div className="h-svh">
      <div className="flex flex-col items-center mx-auto p-8 rounded-xl w-1/2 bg-slate-100 bg-opacity-50">
        <p>This will be my Cart</p>
        <br />
        <Link to="/">
          <button className="w-full bg-transparent hover:bg-amber-200  font-semibold py-2 px-4 border border-slate-700 border-transparent rounded active:bg-amber-300">
            Back to Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
