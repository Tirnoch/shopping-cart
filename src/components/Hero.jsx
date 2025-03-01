import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container-content relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            <span className="text-amber-500">Shop</span> with Confidence
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Discover our curated collection of high-quality products at
            unbeatable prices. Fast shipping, easy returns, and exceptional
            customer service guaranteed.
          </p>
          <Link to="/shop">
            <button className="btn-primary text-lg px-8 py-3">
              Browse Products
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -left-36 transform -translate-y-1/2">
        <div className="w-72 h-72 bg-amber-300 opacity-20 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
