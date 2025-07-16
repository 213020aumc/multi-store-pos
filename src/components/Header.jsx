// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Swift Cart
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-teal-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              Vectors
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              Templates
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              Inspiration
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              Illustrations
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-teal-600 transition-colors">
              Sign in
            </button>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
