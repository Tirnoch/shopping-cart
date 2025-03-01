import { Link } from 'react-router-dom';
import Github from '../assets/github';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white bg-opacity-90 border-t border-gray-200 mt-auto">
      <div className="container-content py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              About FakeShop
            </h3>
            <p className="text-gray-600 mb-4">
              FakeShop is a demonstration e-commerce website built for The Odin
              Project curriculum. It showcases React, TailwindCSS, and modern
              UI/UX principles.
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/yourusername/shopping-cart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-500 transition-colors flex items-center"
                aria-label="View source code on GitHub"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.theodinproject.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  The Odin Project
                </a>
              </li>
              <li>
                <a
                  href="https://fakestoreapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  Fake Store API
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FakeShop. All rights reserved.
          </p>
          <div>
            <p className="text-gray-500 text-sm text-center md:text-right">
              This is a demo project. Not a real store.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
