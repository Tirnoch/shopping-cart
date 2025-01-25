import { Outlet, Link } from 'react-router-dom';
import Logo from '../assets/logo';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <div
        id="wrapper"
        className='bg-cover bg-center bg-[url("assets/home-background.jpg")]'
      >
        <nav>
          <ul className="flex justify-between px-4 py-2 bg-amber-200">
            <li>
              <Link to="/">Home Logo etc. </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">
                <Logo />
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
