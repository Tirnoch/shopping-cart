import { Link } from 'react-router';

const ShoppingCart = () => {
  return (
    <div className="bg-red-700">
      This will be my Cart
      <br />
      <Link to="/">Back to Shopping</Link>
    </div>
  );
};

export default ShoppingCart;
